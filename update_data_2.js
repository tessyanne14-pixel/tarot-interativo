import fs from 'fs';

let content = fs.readFileSync('src/data/tarotData.ts', 'utf8');

// Update Arcanum interface to include buyLink
content = content.replace(
  'book: {\n    title: string;\n    author: string;\n    synopsis: string;\n    cover: string;\n  };',
  'book: {\n    title: string;\n    author: string;\n    synopsis: string;\n    cover: string;\n    buyLink?: string;\n  };'
);

// Add generic buy links to all books
content = content.replace(/cover: "([^"]+)"\n\s*\}/g, 'cover: "$1",\n      buyLink: "https://www.amazon.com.br/"\n    }');

// Fix O Louco Instagram image to be a selfie with a dog
content = content.replace(
  "avatar: 'https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg'",
  "avatar: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&q=80&w=400'"
);
content = content.replace(
  "image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=400'",
  "image: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&q=80&w=400'"
);

fs.writeFileSync('src/data/tarotData.ts', content);
console.log('Updated data');
