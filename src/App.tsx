import React, { useState } from 'react';
import { useGigSetState } from './hooks/useGigSetState';
import { Sidebar } from './components/Sidebar';
import { EventHeader } from './components/EventHeader';
import { SongCard } from './components/SongCard';
import { AddSongModal } from './components/AddSongModal';
import { NewSongModal } from './components/NewSongModal';
import { exportBackup } from './utils/exportUtils';
import { Music, Plus } from 'lucide-react';

export const App: React.FC = () => {
  const {
    state,
    setActiveEventId,
    setMasterViewMode,
    shiftSongKey,
    resetSongKey,
    moveSong,
    removeSongFromEvent,
    addSongToEvent,
    toggleSongViewMode,
    addSongToLibrary,
    resetAllToPresets
  } = useGigSetState();

  const [isAddSongModalOpen, setIsAddSongModalOpen] = useState(false);
  const [isNewSongModalOpen, setIsNewSongModalOpen] = useState(false);

  const activeEvent = state.events.find(e => e.id === state.activeEventId);

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-stage-bg text-stage-text">
      {/* Left Sidebar */}
      <Sidebar
        events={state.events}
        library={state.library}
        activeEventId={state.activeEventId}
        onSelectEvent={setActiveEventId}
        onMoveSong={moveSong}
        onOpenNewSongModal={() => setIsNewSongModalOpen(true)}
        onResetAllToPresets={resetAllToPresets}
        onExportBackup={() => exportBackup(state)}
      />

      {/* Main Setlist Canvas */}
      <main className="flex-1 flex flex-col h-full overflow-y-auto p-4 sm:p-8">
        <div className="max-w-4xl w-full mx-auto pb-16">
          {activeEvent ? (
            <>
              <EventHeader
                event={activeEvent}
                masterViewMode={state.masterViewMode}
                onSetMasterViewMode={setMasterViewMode}
                onAddSong={() => setIsAddSongModalOpen(true)}
              />

              {activeEvent.songs.length === 0 ? (
                <div className="text-center py-20 border-2 border-dashed border-stage-border rounded-2xl p-8">
                  <Music className="w-12 h-12 text-stage-muted mx-auto mb-3" />
                  <h3 className="text-lg font-medium text-stage-text">Setlist is currently empty</h3>
                  <p className="text-sm text-stage-muted max-w-sm mx-auto mt-1 mb-5">
                    Add songs from your catalog to build your setlist for this event.
                  </p>
                  <button
                    onClick={() => setIsAddSongModalOpen(true)}
                    className="inline-flex items-center gap-2 bg-stage-accent hover:opacity-90 text-white font-medium text-sm px-4 py-2.5 rounded-lg shadow transition-opacity"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add First Song</span>
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {activeEvent.songs.map((entry, idx) => {
                    const songData = state.library.find(s => s.id === entry.libraryId);
                    if (!songData) return null;

                    return (
                      <SongCard
                        key={`${entry.libraryId}-${idx}`}
                        song={songData}
                        entry={entry}
                        index={idx}
                        masterViewMode={state.masterViewMode}
                        onShiftKey={amt => shiftSongKey(activeEvent.id, idx, amt)}
                        onResetKey={() => resetSongKey(activeEvent.id, idx)}
                        onRemove={() => removeSongFromEvent(activeEvent.id, idx)}
                        onToggleViewMode={() => toggleSongViewMode(activeEvent.id, idx)}
                      />
                    );
                  })}
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-24">
              <Music className="w-16 h-16 text-stage-muted mx-auto mb-4" />
              <h2 className="text-xl font-bold text-stage-text">Select an Event</h2>
              <p className="text-sm text-stage-muted mt-2 mb-6">
                Choose an existing event from the sidebar to view and organize its setlist.
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Modals */}
      <AddSongModal
        isOpen={isAddSongModalOpen}
        library={state.library}
        onClose={() => setIsAddSongModalOpen(false)}
        onSelectSong={songId => {
          if (activeEvent) {
            addSongToEvent(activeEvent.id, songId);
          }
        }}
        onOpenNewSongModal={() => setIsNewSongModalOpen(true)}
      />

      <NewSongModal
        isOpen={isNewSongModalOpen}
        onClose={() => setIsNewSongModalOpen(false)}
        onSaveSong={songData => {
          const newId = addSongToLibrary(songData);
          if (activeEvent) {
            addSongToEvent(activeEvent.id, newId);
          }
        }}
      />
    </div>
  );
};
