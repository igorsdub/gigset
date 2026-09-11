import { AppState, Song } from '../types';

function triggerDownload(content: string, filename: string, mimeType = 'text/plain') {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function exportBackup(state: AppState) {
  const data = JSON.stringify(state, null, 2);
  const dateStr = new Date().toISOString().split('T')[0];
  triggerDownload(data, `gigset-backup-${dateStr}.json`, 'application/json');
}

export function exportSongChordPro(song: Song) {
  const slug = song.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  triggerDownload(song.content, `${slug || 'song'}.cho`, 'text/plain');
}
