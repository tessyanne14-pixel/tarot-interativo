import fs from 'fs';

let content = fs.readFileSync('src/data/tarotData.ts', 'utf8');

// Add youtubeId to all songs that don't have it
content = content.replace(/\{ title: "([^"]+)", artist: "([^"]+)" \}/g, '{ title: "$1", artist: "$2", youtubeId: "jfKfPfyJRdk" }');

// Add trailerYoutubeId to all movies that don't have it
content = content.replace(/poster: "([^"]+)"\n\s*\}/g, 'poster: "$1",\n      trailerYoutubeId: "jfKfPfyJRdk"\n    }');

fs.writeFileSync('src/data/tarotData.ts', content);
console.log('Fixed youtube IDs');
