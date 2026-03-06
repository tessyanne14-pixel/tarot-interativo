import fs from 'fs';

let content = fs.readFileSync('src/data/tarotData.ts', 'utf8');

// Update Arcanum interface to include spotifyPlaylistId
content = content.replace(
  'playlist: Song[];',
  'playlist: Song[];\n  spotifyPlaylistId?: string;'
);

// Add spotifyPlaylistId to O Louco
content = content.replace(
  /id: 0,[\s\S]*?playlist: \[/,
  (match) => {
    return match.replace('playlist: [', 'spotifyPlaylistId: "37i9dQZF1DXcBWIGoYBM5M",\n    playlist: [');
  }
);

// Add spotifyPlaylistId to O Mago
content = content.replace(
  /id: 1,[\s\S]*?playlist: \[/,
  (match) => {
    return match.replace('playlist: [', 'spotifyPlaylistId: "37i9dQZF1DX0XUsuxWHRQd",\n    playlist: [');
  }
);

// Add generic spotifyPlaylistId to all others
content = content.replace(/playlist: \[\n\s*\{ title: "Energia do dia!"/g, 'spotifyPlaylistId: "37i9dQZF1DXcBWIGoYBM5M",\n    playlist: [\n      { title: "Energia do dia!"');

fs.writeFileSync('src/data/tarotData.ts', content);
console.log('Updated data 3');
