import fs from 'fs';

let content = fs.readFileSync('src/data/tarotData.ts', 'utf8');

// Update interfaces
content = content.replace(
  'export interface Arcanum {',
  `export interface SocialPost {
  image: string;
  caption: string;
  likes: number;
}

export interface Tweet {
  content: string;
  retweets: number;
  likes: number;
}

export interface WhatsAppMessage {
  sender: 'me' | 'them';
  text: string;
  time: string;
}

export interface SocialMedia {
  instagram: {
    username: string;
    avatar: string;
    bio: string;
    posts: SocialPost[];
  };
  twitter: {
    username: string;
    handle: string;
    avatar: string;
    tweets: Tweet[];
  };
  whatsapp: {
    contactName: string;
    avatar: string;
    status: string;
    messages: WhatsAppMessage[];
  };
}

export interface Arcanum {`
);

content = content.replace(
  '  book: {',
  `  social?: SocialMedia;
  book: {`
);

// Add social data to each object
const socialDataMap = {
  0: {
    instagram: {
      username: 'olouco_oficial',
      avatar: 'https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg',
      bio: 'Viajante do mundo 🌍 | Sem destino | Acompanhado do meu doguinho 🐕',
      posts: [
        { image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=400', caption: 'Mais um dia, mais uma aventura! #wanderlust', likes: 1205 }
      ]
    },
    twitter: {
      username: 'O Louco',
      handle: '@louco_livre',
      avatar: 'https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg',
      tweets: [
        { content: 'Acordei e decidi ir pra Patagônia. Só com a roupa do corpo. Fui!', retweets: 450, likes: 3200 }
      ]
    },
    whatsapp: {
      contactName: 'O Louco 🎒',
      avatar: 'https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg',
      status: 'Online',
      messages: [
        { sender: 'them', text: 'E aí, bora viajar?', time: '10:00' },
        { sender: 'me', text: 'Pra onde?', time: '10:05' },
        { sender: 'them', text: 'Não sei, a gente descobre no caminho!', time: '10:06' }
      ]
    }
  },
  1: {
    instagram: {
      username: 'omago_manifesta',
      avatar: 'https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg',
      bio: 'Criador de realidades ✨ | Foco e Ação | Tudo é possível',
      posts: [
        { image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=400', caption: 'Manifestando a vida dos sonhos. Você tem as ferramentas, use-as!', likes: 3400 }
      ]
    },
    twitter: {
      username: 'O Mago',
      handle: '@mago_foco',
      avatar: 'https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg',
      tweets: [
        { content: 'A diferença entre um sonho e a realidade é a ação. Comece hoje.', retweets: 1200, likes: 5600 }
      ]
    },
    whatsapp: {
      contactName: 'O Mago 🪄',
      avatar: 'https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg',
      status: 'Digitando...',
      messages: [
        { sender: 'them', text: 'Já começou aquele projeto?', time: '09:00' },
        { sender: 'me', text: 'Tô planejando ainda...', time: '09:15' },
        { sender: 'them', text: 'Planejamento sem ação é ilusão. Faz acontecer!', time: '09:16' }
      ]
    }
  },
  // We will add a generic generator for the rest to save space, but let's just do a generic one for now.
};

// Replace each object to include social data
const regex = /(id:\s*(\d+),[\s\S]*?book:\s*\{[\s\S]*?\n\s*\})/g;
content = content.replace(regex, (match, p1, idStr) => {
  const id = parseInt(idStr, 10);
  const social = socialDataMap[id] || {
    instagram: {
      username: `arcano_${id}_oficial`,
      avatar: `https://upload.wikimedia.org/wikipedia/commons/${id % 2 === 0 ? '9/90/RWS_Tarot_00_Fool.jpg' : 'd/de/RWS_Tarot_01_Magician.jpg'}`,
      bio: `Vivendo a energia do arcano ${id} ✨`,
      posts: [
        { image: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&q=80&w=400', caption: 'Energia do dia!', likes: 1000 + id * 10 }
      ]
    },
    twitter: {
      username: `Arcano ${id}`,
      handle: `@arcano${id}`,
      avatar: `https://upload.wikimedia.org/wikipedia/commons/${id % 2 === 0 ? '9/90/RWS_Tarot_00_Fool.jpg' : 'd/de/RWS_Tarot_01_Magician.jpg'}`,
      tweets: [
        { content: `Reflexão do dia do arcano ${id}...`, retweets: 100 * id, likes: 500 * id }
      ]
    },
    whatsapp: {
      contactName: `Arcano ${id} 🔮`,
      avatar: `https://upload.wikimedia.org/wikipedia/commons/${id % 2 === 0 ? '9/90/RWS_Tarot_00_Fool.jpg' : 'd/de/RWS_Tarot_01_Magician.jpg'}`,
      status: 'Online',
      messages: [
        { sender: 'them', text: `Mensagem mística do arcano ${id}`, time: '12:00' },
        { sender: 'me', text: 'Profundo...', time: '12:05' }
      ]
    }
  };
  
  // Insert social before book
  return match.replace(/book:\s*\{/, `social: ${JSON.stringify(social, null, 6)},\n    book: {`);
});

fs.writeFileSync('src/data/tarotData.ts', content);
console.log('tarotData.ts updated successfully!');
