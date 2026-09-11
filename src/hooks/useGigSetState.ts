import { useState, useEffect, useCallback } from 'react';
import { AppState, Song, Event, ViewMode } from '../types';
import { INITIAL_APP_STATE, PRESET_EVENTS } from '../data/presets';

const STORAGE_KEY = 'gigset_data';

export function useGigSetState() {
  const [state, setState] = useState<AppState>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && Array.isArray(parsed.library) && Array.isArray(parsed.events)) {
          return {
            ...INITIAL_APP_STATE,
            ...parsed,
            activeEventId: parsed.activeEventId || parsed.events[0]?.id || null
          };
        }
      }
    } catch (e) {
      console.error('Failed to load GigSet state from localStorage:', e);
    }
    return INITIAL_APP_STATE;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.error('Failed to save GigSet state to localStorage:', e);
    }
  }, [state]);

  const setActiveEventId = useCallback((id: string) => {
    setState(prev => ({ ...prev, activeEventId: id }));
  }, []);

  const setMasterViewMode = useCallback((mode: ViewMode) => {
    setState(prev => ({ ...prev, masterViewMode: mode }));
  }, []);

  const shiftSongKey = useCallback((eventId: string, songIndex: number, amount: number) => {
    setState(prev => ({
      ...prev,
      events: prev.events.map(evt => {
        if (evt.id !== eventId) return evt;
        const updatedSongs = [...evt.songs];
        if (updatedSongs[songIndex]) {
          updatedSongs[songIndex] = {
            ...updatedSongs[songIndex],
            transpose: updatedSongs[songIndex].transpose + amount
          };
        }
        return { ...evt, songs: updatedSongs };
      })
    }));
  }, []);

  const resetSongKey = useCallback((eventId: string, songIndex: number) => {
    setState(prev => ({
      ...prev,
      events: prev.events.map(evt => {
        if (evt.id !== eventId) return evt;
        const updatedSongs = [...evt.songs];
        if (updatedSongs[songIndex]) {
          updatedSongs[songIndex] = {
            ...updatedSongs[songIndex],
            transpose: 0
          };
        }
        return { ...evt, songs: updatedSongs };
      })
    }));
  }, []);

  const moveSong = useCallback((eventId: string, fromIndex: number, toIndex: number) => {
    setState(prev => ({
      ...prev,
      events: prev.events.map(evt => {
        if (evt.id !== eventId) return evt;
        if (toIndex < 0 || toIndex >= evt.songs.length) return evt;
        const updatedSongs = [...evt.songs];
        const [moved] = updatedSongs.splice(fromIndex, 1);
        updatedSongs.splice(toIndex, 0, moved);
        return { ...evt, songs: updatedSongs };
      })
    }));
  }, []);

  const removeSongFromEvent = useCallback((eventId: string, songIndex: number) => {
    setState(prev => ({
      ...prev,
      events: prev.events.map(evt => {
        if (evt.id !== eventId) return evt;
        const updatedSongs = [...evt.songs];
        updatedSongs.splice(songIndex, 1);
        return { ...evt, songs: updatedSongs };
      })
    }));
  }, []);

  const addSongToEvent = useCallback((eventId: string, songId: string) => {
    setState(prev => ({
      ...prev,
      events: prev.events.map(evt => {
        if (evt.id !== eventId) return evt;
        return {
          ...evt,
          songs: [...evt.songs, { libraryId: songId, transpose: 0 }]
        };
      })
    }));
  }, []);

  const toggleSongViewMode = useCallback((eventId: string, songIndex: number) => {
    setState(prev => ({
      ...prev,
      events: prev.events.map(evt => {
        if (evt.id !== eventId) return evt;
        const updatedSongs = [...evt.songs];
        const current = updatedSongs[songIndex];
        if (current) {
          const currentEffective = current.viewModeOverride || prev.masterViewMode;
          const nextMode: ViewMode = currentEffective === 'grid' ? 'lyrics' : 'grid';
          updatedSongs[songIndex] = {
            ...current,
            viewModeOverride: nextMode
          };
        }
        return { ...evt, songs: updatedSongs };
      })
    }));
  }, []);

  const createNewEvent = useCallback((name: string, date?: string, venue?: string) => {
    const newEvent: Event = {
      id: `e_${Date.now()}`,
      name: name.trim() || 'Untitled Event',
      date,
      venue,
      songs: []
    };
    setState(prev => ({
      ...prev,
      events: [...prev.events, newEvent],
      activeEventId: newEvent.id
    }));
    return newEvent.id;
  }, []);

  const deleteEvent = useCallback((eventId: string) => {
    setState(prev => {
      const remaining = prev.events.filter(e => e.id !== eventId);
      const nextActive = prev.activeEventId === eventId ? (remaining[0]?.id || null) : prev.activeEventId;
      return {
        ...prev,
        events: remaining,
        activeEventId: nextActive
      };
    });
  }, []);

  const addSongToLibrary = useCallback((songData: Omit<Song, 'id'>) => {
    const newSong: Song = {
      ...songData,
      id: `s_${Date.now()}`
    };
    setState(prev => ({
      ...prev,
      library: [...prev.library, newSong]
    }));
    return newSong.id;
  }, []);

  const resetEventToPreset = useCallback((eventId: string) => {
    const preset = PRESET_EVENTS.find(e => e.id === eventId);
    if (!preset) {
      alert('This is a custom event without a repository preset.');
      return;
    }
    setState(prev => ({
      ...prev,
      events: prev.events.map(evt => evt.id === eventId ? JSON.parse(JSON.stringify(preset)) : evt)
    }));
  }, []);

  const resetAllToPresets = useCallback(() => {
    if (window.confirm('Reset all songs and events back to the repository presets? Any local drafts will be overwritten.')) {
      setState(INITIAL_APP_STATE);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_APP_STATE));
    }
  }, []);

  return {
    state,
    setActiveEventId,
    setMasterViewMode,
    shiftSongKey,
    resetSongKey,
    moveSong,
    removeSongFromEvent,
    addSongToEvent,
    toggleSongViewMode,
    createNewEvent,
    deleteEvent,
    addSongToLibrary,
    resetEventToPreset,
    resetAllToPresets
  };
}
