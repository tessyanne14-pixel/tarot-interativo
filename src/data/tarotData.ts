export interface Song {
  title: string;
  artist: string;
  youtubeId?: string;
}

export interface SocialPost {
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

export interface Arcanum {
  id: number;
  name: string;
  number: string;
  image: string;
  description: string;
  playlist: Song[];
  spotifyPlaylistId?: string;
  movie: {
    title: string;
    synopsis: string;
    poster: string;
    trailerYoutubeId?: string;
  };
  character: {
    name: string;
    description: string;
    image: string;
  };
  meme: {
    title: string;
    url: string;
  };
  social?: SocialMedia;
  book: {
    title: string;
    author: string;
    synopsis: string;
    cover: string;
    buyLink?: string;
  };
}

export const tarotData: Arcanum[] = [
  {
    id: 0,
    name: "O Louco",
    number: "0",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg",
    description: "O Louco representa novos começos, espontaneidade, fé no universo e a coragem de dar um salto no desconhecido. É a energia da criança interior, livre de amarras e pronta para a aventura.",
    spotifyPlaylistId: "37i9dQZF1DXcBWIGoYBM5M",
    playlist: [
      { title: "Here Comes The Sun", artist: "The Beatles", youtubeId: "KQetemT1sWc" },
      { title: "Born to be Wild", artist: "Steppenwolf", youtubeId: "jfKfPfyJRdk" },
      { title: "Dog Days Are Over", artist: "Florence + The Machine", youtubeId: "jfKfPfyJRdk" },
      { title: "The Zephyr Song", artist: "Red Hot Chili Peppers", youtubeId: "jfKfPfyJRdk" },
      { title: "Viva La Vida", artist: "Coldplay", youtubeId: "jfKfPfyJRdk" }
    ],
    movie: {
      title: "Na Natureza Selvagem (Into the Wild)",
      synopsis: "A história real de Christopher McCandless, um jovem que abandona sua vida confortável para buscar a verdadeira liberdade no Alasca, vivendo o arquétipo do Louco em sua essência mais pura.",
      poster: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=400",
      trailerYoutubeId: "2LAuzT_x8Ek"
    },
    character: {
      name: "Aang (Avatar: A Lenda de Aang)",
      description: "Aang é a personificação do Louco: jovem, brincalhão, espontâneo e com um destino grandioso pela frente. Ele viaja pelo mundo com o coração aberto, aprendendo com cada experiência.",
      image: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&q=80&w=400"
    },
    meme: {
      title: "This is fine (Tudo bem)",
      url: "https://cataas.com/cat/gif/says/Eu%20indo%20fazer%20merda?fontSize=30&fontColor=white"
    },
    social: {
      "instagram": {
            "username": "olouco_oficial",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg",
            "bio": "Viajante do mundo 🌍 | Sem destino | Acompanhado do meu doguinho 🐕",
            "posts": [
                  {
                        "image": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=400",
                        "caption": "Mais um dia, mais uma aventura! #wanderlust",
                        "likes": 1205
                  }
            ]
      },
      "twitter": {
            "username": "O Louco",
            "handle": "@louco_livre",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg",
            "tweets": [
                  {
                        "content": "Acordei e decidi ir pra Patagônia. Só com a roupa do corpo. Fui!",
                        "retweets": 450,
                        "likes": 3200
                  }
            ]
      },
      "whatsapp": {
            "contactName": "O Louco 🎒",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg",
            "status": "Online",
            "messages": [
                  {
                        "sender": "them",
                        "text": "E aí, bora viajar?",
                        "time": "10:00"
                  },
                  {
                        "sender": "me",
                        "text": "Pra onde?",
                        "time": "10:05"
                  },
                  {
                        "sender": "them",
                        "text": "Não sei, a gente descobre no caminho!",
                        "time": "10:06"
                  }
            ]
      }
},
    book: {
      title: "O Apanhador no Campo de Centeio",
      author: "J.D. Salinger",
      synopsis: "Holden Caulfield vaga por Nova York em busca de sentido, rejeitando as convenções sociais e tentando preservar a inocência, uma jornada clássica do Louco.",
      cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400",
      buyLink: "https://www.amazon.com.br/"
    }
  },
  {
    id: 1,
    name: "O Mago",
    number: "I",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
    description: "O Mago é o mestre da manifestação. Ele tem todos os elementos à sua disposição e a vontade para transformar ideias em realidade. Representa foco, habilidade e poder pessoal.",
    spotifyPlaylistId: "37i9dQZF1DX0XUsuxWHRQd",
    playlist: [
      { title: "Magic", artist: "Coldplay", youtubeId: "1PvBc2TOpE4" },
      { title: "Don't Stop Me Now", artist: "Queen", youtubeId: "jfKfPfyJRdk" },
      { title: "Can't Stop", artist: "Red Hot Chili Peppers", youtubeId: "jfKfPfyJRdk" },
      { title: "Uptown Funk", artist: "Bruno Mars", youtubeId: "jfKfPfyJRdk" },
      { title: "Believer", artist: "Imagine Dragons", youtubeId: "jfKfPfyJRdk" }
    ],
    movie: {
      title: "Truque de Mestre (Now You See Me)",
      synopsis: "Ilusionistas usam suas habilidades, inteligência e recursos (os quatro elementos do Mago) para realizar feitos impossíveis e manifestar sua vontade no mundo.",
      poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=400",
      trailerYoutubeId: "KzJPTMgcWQA"
    },
    character: {
      name: "Doutor Estranho (Marvel)",
      description: "Stephen Strange aprende a manipular a energia do universo para moldar a realidade, passando de um homem arrogante a um verdadeiro Mago que entende a conexão entre pensamento e matéria.",
      image: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?auto=format&fit=crop&q=80&w=400"
    },
    meme: {
      title: "Nazaré Calculando",
      url: "https://cataas.com/cat/gif/says/Calculando%20meu%20poder?fontSize=30&fontColor=white"
    },
    social: {
      "instagram": {
            "username": "omago_manifesta",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
            "bio": "Criador de realidades ✨ | Foco e Ação | Tudo é possível",
            "posts": [
                  {
                        "image": "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=400",
                        "caption": "Manifestando a vida dos sonhos. Você tem as ferramentas, use-as!",
                        "likes": 3400
                  }
            ]
      },
      "twitter": {
            "username": "O Mago",
            "handle": "@mago_foco",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
            "tweets": [
                  {
                        "content": "A diferença entre um sonho e a realidade é a ação. Comece hoje.",
                        "retweets": 1200,
                        "likes": 5600
                  }
            ]
      },
      "whatsapp": {
            "contactName": "O Mago 🪄",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
            "status": "Digitando...",
            "messages": [
                  {
                        "sender": "them",
                        "text": "Já começou aquele projeto?",
                        "time": "09:00"
                  },
                  {
                        "sender": "me",
                        "text": "Tô planejando ainda...",
                        "time": "09:15"
                  },
                  {
                        "sender": "them",
                        "text": "Planejamento sem ação é ilusão. Faz acontecer!",
                        "time": "09:16"
                  }
            ]
      }
},
    book: {
      title: "O Nome do Vento",
      author: "Patrick Rothfuss",
      synopsis: "A história de Kvothe, um jovem brilhante que aprende a dominar a magia da Simpatia e a usar sua inteligência e vontade para moldar seu destino.",
      cover: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=400",
      buyLink: "https://www.amazon.com.br/"
    }
  },
  {
    id: 2,
    name: "A Sacerdotisa",
    number: "II",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/88/RWS_Tarot_02_High_Priestess.jpg",
    description: "A Sacerdotisa é a guardiã dos mistérios ocultos. Ela representa a intuição, o subconsciente, a sabedoria interior e o conhecimento que não pode ser ensinado, apenas sentido.",
    playlist: [
      { title: "Rhiannon", artist: "Fleetwood Mac", youtubeId: "U_aYibUx1B8" },
      { title: "Cosmic Love", artist: "Florence + The Machine", youtubeId: "jfKfPfyJRdk" },
      { title: "Crystal", artist: "Stevie Nicks", youtubeId: "jfKfPfyJRdk" },
      { title: "Dark Horse", artist: "Katy Perry", youtubeId: "jfKfPfyJRdk" },
      { title: "Royals", artist: "Lorde", youtubeId: "jfKfPfyJRdk" }
    ],
    movie: {
      title: "O Labirinto do Fauno",
      synopsis: "Ofelia descobre um mundo mágico e sombrio que apenas ela pode ver, guiada por sua intuição e por forças misteriosas que desafiam a lógica do mundo real.",
      poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=400",
      trailerYoutubeId: "EqYiSlkvRuw"
    },
    character: {
      name: "Galadriel (O Senhor dos Anéis)",
      description: "Sábia, misteriosa e profundamente conectada com o invisível. Galadriel vê o que os outros não veem e guarda conhecimentos antigos com serenidade e poder.",
      image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=400"
    },
    meme: {
      title: "Gato místico",
      url: "https://cataas.com/cat/gif/says/Eu%20j%C3%A1%20sabia?fontSize=30&fontColor=white"
    },
    social: {
      "instagram": {
            "username": "arcano_2_oficial",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg",
            "bio": "Vivendo a energia do arcano 2 ✨",
            "posts": [
                  {
                        "image": "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&q=80&w=400",
                        "caption": "Energia do dia!",
                        "likes": 1020
                  }
            ]
      },
      "twitter": {
            "username": "Arcano 2",
            "handle": "@arcano2",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg",
            "tweets": [
                  {
                        "content": "Reflexão do dia do arcano 2...",
                        "retweets": 200,
                        "likes": 1000
                  }
            ]
      },
      "whatsapp": {
            "contactName": "Arcano 2 🔮",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg",
            "status": "Online",
            "messages": [
                  {
                        "sender": "them",
                        "text": "Mensagem mística do arcano 2",
                        "time": "12:00"
                  },
                  {
                        "sender": "me",
                        "text": "Profundo...",
                        "time": "12:05"
                  }
            ]
      }
},
    book: {
      title: "As Brumas de Avalon",
      author: "Marion Zimmer Bradley",
      synopsis: "A lenda do Rei Arthur contada pela perspectiva das mulheres, focando na magia, intuição e nos mistérios da religião da Deusa em Avalon.",
      cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=400",
      buyLink: "https://www.amazon.com.br/"
    }
  },
  {
    id: 3,
    name: "A Imperatriz",
    number: "III",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d2/RWS_Tarot_03_Empress.jpg",
    description: "A Imperatriz é a mãe natureza, a abundância, a fertilidade e a criatividade. Ela nos convida a nos conectarmos com nossos sentidos, com a beleza e com o amor incondicional.",
    playlist: [
      { title: "God is a woman", artist: "Ariana Grande", youtubeId: "kHLHSlExFis" },
      { title: "Flawless", artist: "Beyoncé", youtubeId: "jfKfPfyJRdk" },
      { title: "Just a Girl", artist: "No Doubt", youtubeId: "jfKfPfyJRdk" },
      { title: "Born This Way", artist: "Lady Gaga", youtubeId: "jfKfPfyJRdk" },
      { title: "Material Girl", artist: "Madonna", youtubeId: "jfKfPfyJRdk" }
    ],
    movie: {
      title: "Maria Antonieta",
      synopsis: "Um mergulho visualmente deslumbrante no mundo de luxo, beleza, excessos e estética da jovem rainha da França, capturando a energia venusiana da Imperatriz.",
      poster: "https://images.unsplash.com/photo-1523688882641-9c803ac833f4?auto=format&fit=crop&q=80&w=400",
      trailerYoutubeId: "1WjsqZqmSGM"
    },
    character: {
      name: "Mulher Maravilha",
      description: "Diana de Themyscira combina força, beleza, compaixão e amor. Ela luta pela paz e protege a vida, sendo a personificação do feminino divino e poderoso.",
      image: "https://images.unsplash.com/photo-1501432288420-5bf12f8ae204?auto=format&fit=crop&q=80&w=400"
    },
    meme: {
      title: "Fabulosa",
      url: "https://cataas.com/cat/gif/says/Sou%20linda?fontSize=30&fontColor=white"
    },
    social: {
      "instagram": {
            "username": "arcano_3_oficial",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
            "bio": "Vivendo a energia do arcano 3 ✨",
            "posts": [
                  {
                        "image": "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&q=80&w=400",
                        "caption": "Energia do dia!",
                        "likes": 1030
                  }
            ]
      },
      "twitter": {
            "username": "Arcano 3",
            "handle": "@arcano3",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
            "tweets": [
                  {
                        "content": "Reflexão do dia do arcano 3...",
                        "retweets": 300,
                        "likes": 1500
                  }
            ]
      },
      "whatsapp": {
            "contactName": "Arcano 3 🔮",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
            "status": "Online",
            "messages": [
                  {
                        "sender": "them",
                        "text": "Mensagem mística do arcano 3",
                        "time": "12:00"
                  },
                  {
                        "sender": "me",
                        "text": "Profundo...",
                        "time": "12:05"
                  }
            ]
      }
},
    book: {
      title: "Orgulho e Preconceito",
      author: "Jane Austen",
      synopsis: "Um clássico sobre relacionamentos, amor, beleza e a complexidade das emoções humanas, temas profundamente ligados à energia da Imperatriz.",
      cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=400",
      buyLink: "https://www.amazon.com.br/"
    }
  },
  {
    id: 4,
    name: "O Imperador",
    number: "IV",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/RWS_Tarot_04_Emperor.jpg",
    description: "O Imperador é a figura paterna, a estrutura, a ordem e a autoridade. Ele traz estabilidade, regras e a capacidade de liderar e construir fundações sólidas.",
    playlist: [
      { title: "Everybody Wants To Rule The World", artist: "Tears for Fears", youtubeId: "aGCdlIGTpiM" },
      { title: "Viva La Vida", artist: "Coldplay", youtubeId: "jfKfPfyJRdk" },
      { title: "Royals", artist: "Lorde", youtubeId: "jfKfPfyJRdk" },
      { title: "Emperor's New Clothes", artist: "Panic! At The Disco", youtubeId: "jfKfPfyJRdk" },
      { title: "Natural", artist: "Imagine Dragons", youtubeId: "jfKfPfyJRdk" }
    ],
    movie: {
      title: "O Poderoso Chefão",
      synopsis: "A saga da família Corleone explora temas de poder, controle, regras familiares e a responsabilidade (e o peso) da liderança absoluta.",
      poster: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?auto=format&fit=crop&q=80&w=400",
      trailerYoutubeId: "sY1S34973zA"
    },
    character: {
      name: "Aragorn (O Senhor dos Anéis)",
      description: "O rei que retorna para assumir seu trono. Aragorn lidera com sabedoria, coragem e um forte senso de dever para proteger seu povo e restaurar a ordem.",
      image: "https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&q=80&w=400"
    },
    meme: {
      title: "Stonks / Chefe",
      url: "https://cataas.com/cat/gif/says/Eu%20mando%20aqui?fontSize=30&fontColor=white"
    },
    social: {
      "instagram": {
            "username": "arcano_4_oficial",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg",
            "bio": "Vivendo a energia do arcano 4 ✨",
            "posts": [
                  {
                        "image": "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&q=80&w=400",
                        "caption": "Energia do dia!",
                        "likes": 1040
                  }
            ]
      },
      "twitter": {
            "username": "Arcano 4",
            "handle": "@arcano4",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg",
            "tweets": [
                  {
                        "content": "Reflexão do dia do arcano 4...",
                        "retweets": 400,
                        "likes": 2000
                  }
            ]
      },
      "whatsapp": {
            "contactName": "Arcano 4 🔮",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg",
            "status": "Online",
            "messages": [
                  {
                        "sender": "them",
                        "text": "Mensagem mística do arcano 4",
                        "time": "12:00"
                  },
                  {
                        "sender": "me",
                        "text": "Profundo...",
                        "time": "12:05"
                  }
            ]
      }
},
    book: {
      title: "O Príncipe",
      author: "Maquiavel",
      synopsis: "Um tratado clássico sobre o poder, a liderança, a política e como um governante deve agir para manter a ordem e a estabilidade de seu reino.",
      cover: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=400",
      buyLink: "https://www.amazon.com.br/"
    }
  },
  {
    id: 5,
    name: "O Hierofante",
    number: "V",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/RWS_Tarot_05_Hierophant.jpg",
    description: "O Hierofante representa a tradição, a educação, as crenças compartilhadas e as instituições. Ele é a ponte entre o divino e o terreno, ensinando as regras da sociedade.",
    playlist: [
      { title: "Take Me To Church", artist: "Hozier", youtubeId: "PVjiKRfKpPI" },
      { title: "Losing My Religion", artist: "R.E.M.", youtubeId: "jfKfPfyJRdk" },
      { title: "Personal Jesus", artist: "Depeche Mode", youtubeId: "jfKfPfyJRdk" },
      { title: "Like a Prayer", artist: "Madonna", youtubeId: "jfKfPfyJRdk" },
      { title: "Hallelujah", artist: "Leonard Cohen", youtubeId: "jfKfPfyJRdk" }
    ],
    movie: {
      title: "Dois Papas",
      synopsis: "Um diálogo profundo sobre tradição versus mudança, fé, dogma e o papel das instituições religiosas no mundo moderno.",
      poster: "https://images.unsplash.com/photo-1548625361-ecbf86866173?auto=format&fit=crop&q=80&w=400",
      trailerYoutubeId: "T5OhkZAIVtG"
    },
    character: {
      name: "Mestre Yoda (Star Wars)",
      description: "O grande professor que transmite os antigos ensinamentos da Força, guiando seus alunos através das tradições e da sabedoria acumulada por séculos.",
      image: "https://images.unsplash.com/photo-1472457897821-70d3819a0e24?auto=format&fit=crop&q=80&w=400"
    },
    meme: {
      title: "Amém irmão",
      url: "https://cataas.com/cat/gif/says/Am%C3%A9m?fontSize=30&fontColor=white"
    },
    social: {
      "instagram": {
            "username": "arcano_5_oficial",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
            "bio": "Vivendo a energia do arcano 5 ✨",
            "posts": [
                  {
                        "image": "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&q=80&w=400",
                        "caption": "Energia do dia!",
                        "likes": 1050
                  }
            ]
      },
      "twitter": {
            "username": "Arcano 5",
            "handle": "@arcano5",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
            "tweets": [
                  {
                        "content": "Reflexão do dia do arcano 5...",
                        "retweets": 500,
                        "likes": 2500
                  }
            ]
      },
      "whatsapp": {
            "contactName": "Arcano 5 🔮",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
            "status": "Online",
            "messages": [
                  {
                        "sender": "them",
                        "text": "Mensagem mística do arcano 5",
                        "time": "12:00"
                  },
                  {
                        "sender": "me",
                        "text": "Profundo...",
                        "time": "12:05"
                  }
            ]
      }
},
    book: {
      title: "O Código Da Vinci",
      author: "Dan Brown",
      synopsis: "Um thriller que questiona dogmas, explora sociedades secretas, símbolos religiosos e o poder das instituições tradicionais.",
      cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400",
      buyLink: "https://www.amazon.com.br/"
    }
  },
  {
    id: 6,
    name: "Os Enamorados",
    number: "VI",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/RWS_Tarot_06_Lovers.jpg",
    description: "Os Enamorados falam de amor, harmonia, relacionamentos e, crucialmente, de escolhas. Representa o alinhamento de valores e a decisão de seguir o coração.",
    playlist: [
      { title: "Perfect", artist: "Ed Sheeran", youtubeId: "2Vv-BfVoq4g" },
      { title: "Can't Help Falling in Love", artist: "Elvis Presley", youtubeId: "jfKfPfyJRdk" },
      { title: "Lover", artist: "Taylor Swift", youtubeId: "jfKfPfyJRdk" },
      { title: "Just the Way You Are", artist: "Bruno Mars", youtubeId: "jfKfPfyJRdk" },
      { title: "All of Me", artist: "John Legend", youtubeId: "jfKfPfyJRdk" }
    ],
    movie: {
      title: "Diário de uma Paixão",
      synopsis: "A história de um amor épico que sobrevive ao tempo, às diferenças sociais e às escolhas difíceis da vida.",
      poster: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=400",
      trailerYoutubeId: "FC6biTjEyZw"
    },
    character: {
      name: "Romeu e Julieta",
      description: "O arquétipo definitivo dos amantes que fazem a escolha final pelo amor, desafiando todas as regras e tradições de suas famílias.",
      image: "https://images.unsplash.com/photo-1518599904199-0ca897819ddb?auto=format&fit=crop&q=80&w=400"
    },
    meme: {
      title: "Namorado distraído",
      url: "https://cataas.com/cat/gif/says/Qual%20eu%20escolho?fontSize=30&fontColor=white"
    },
    social: {
      "instagram": {
            "username": "arcano_6_oficial",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg",
            "bio": "Vivendo a energia do arcano 6 ✨",
            "posts": [
                  {
                        "image": "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&q=80&w=400",
                        "caption": "Energia do dia!",
                        "likes": 1060
                  }
            ]
      },
      "twitter": {
            "username": "Arcano 6",
            "handle": "@arcano6",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg",
            "tweets": [
                  {
                        "content": "Reflexão do dia do arcano 6...",
                        "retweets": 600,
                        "likes": 3000
                  }
            ]
      },
      "whatsapp": {
            "contactName": "Arcano 6 🔮",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg",
            "status": "Online",
            "messages": [
                  {
                        "sender": "them",
                        "text": "Mensagem mística do arcano 6",
                        "time": "12:00"
                  },
                  {
                        "sender": "me",
                        "text": "Profundo...",
                        "time": "12:05"
                  }
            ]
      }
},
    book: {
      title: "A Culpa é das Estrelas",
      author: "John Green",
      synopsis: "Dois jovens encontram o amor verdadeiro e a conexão profunda em meio a circunstâncias trágicas, escolhendo viver intensamente o presente.",
      cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400",
      buyLink: "https://www.amazon.com.br/"
    }
  },
  {
    id: 7,
    name: "O Carro",
    number: "VII",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9b/RWS_Tarot_07_Chariot.jpg",
    description: "O Carro é a carta do triunfo, do controle, da força de vontade e da determinação. Representa a superação de obstáculos através do foco e da disciplina.",
    playlist: [
      { title: "Life is a Highway", artist: "Tom Cochrane", youtubeId: "U3sMjm9Eloo" },
      { title: "Highway to Hell", artist: "AC/DC", youtubeId: "jfKfPfyJRdk" },
      { title: "Drive", artist: "Incubus", youtubeId: "jfKfPfyJRdk" },
      { title: "Fast Car", artist: "Tracy Chapman", youtubeId: "jfKfPfyJRdk" },
      { title: "Shut Up and Drive", artist: "Rihanna", youtubeId: "jfKfPfyJRdk" }
    ],
    movie: {
      title: "Mad Max: Estrada da Fúria",
      synopsis: "Uma perseguição implacável onde o controle, a direção e a força de vontade são essenciais para a sobrevivência e a vitória.",
      poster: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=400",
      trailerYoutubeId: "hEJnMQG9ev8"
    },
    character: {
      name: "Furiosa (Mad Max)",
      description: "Determinada, focada e no controle de seu destino e de seu veículo. Ela supera todos os obstáculos com pura força de vontade para alcançar seu objetivo.",
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=400"
    },
    meme: {
      title: "Gato dirigindo",
      url: "https://cataas.com/cat/gif/says/Sai%20da%20frente?fontSize=30&fontColor=white"
    },
    social: {
      "instagram": {
            "username": "arcano_7_oficial",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
            "bio": "Vivendo a energia do arcano 7 ✨",
            "posts": [
                  {
                        "image": "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&q=80&w=400",
                        "caption": "Energia do dia!",
                        "likes": 1070
                  }
            ]
      },
      "twitter": {
            "username": "Arcano 7",
            "handle": "@arcano7",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
            "tweets": [
                  {
                        "content": "Reflexão do dia do arcano 7...",
                        "retweets": 700,
                        "likes": 3500
                  }
            ]
      },
      "whatsapp": {
            "contactName": "Arcano 7 🔮",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
            "status": "Online",
            "messages": [
                  {
                        "sender": "them",
                        "text": "Mensagem mística do arcano 7",
                        "time": "12:00"
                  },
                  {
                        "sender": "me",
                        "text": "Profundo...",
                        "time": "12:05"
                  }
            ]
      }
},
    book: {
      title: "On the Road",
      author: "Jack Kerouac",
      synopsis: "A jornada frenética e em constante movimento de jovens pela América, buscando propósito, velocidade e controle sobre suas próprias vidas.",
      cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400",
      buyLink: "https://www.amazon.com.br/"
    }
  },
  {
    id: 8,
    name: "A Força",
    number: "VIII",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f5/RWS_Tarot_08_Strength.jpg",
    description: "A Força não é sobre poder físico, mas sobre coragem interior, compaixão, paciência e a capacidade de domar nossos instintos mais selvagens com amor e gentileza.",
    playlist: [
      { title: "Roar", artist: "Katy Perry", youtubeId: "CevxZvSJLk8" },
      { title: "Stronger", artist: "Kelly Clarkson", youtubeId: "jfKfPfyJRdk" },
      { title: "Eye of the Tiger", artist: "Survivor", youtubeId: "jfKfPfyJRdk" },
      { title: "Titanium", artist: "David Guetta", youtubeId: "jfKfPfyJRdk" },
      { title: "Fighter", artist: "Christina Aguilera", youtubeId: "jfKfPfyJRdk" }
    ],
    movie: {
      title: "Mulan",
      synopsis: "Uma jovem encontra sua verdadeira força interior, coragem e resiliência para salvar seu pai e seu país, provando que a força vem do coração.",
      poster: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?auto=format&fit=crop&q=80&w=400",
      trailerYoutubeId: "KK8IG15Obcg"
    },
    character: {
      name: "Hermione Granger (Harry Potter)",
      description: "Sua verdadeira força reside em sua inteligência, lealdade e coragem moral. Ela enfrenta seus medos e domina situações difíceis com calma e sabedoria.",
      image: "https://images.unsplash.com/photo-1509305717900-84f40e786d82?auto=format&fit=crop&q=80&w=400"
    },
    meme: {
      title: "Swole Doge",
      url: "https://cataas.com/cat/gif/says/Sou%20forte?fontSize=30&fontColor=white"
    },
    social: {
      "instagram": {
            "username": "arcano_8_oficial",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg",
            "bio": "Vivendo a energia do arcano 8 ✨",
            "posts": [
                  {
                        "image": "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&q=80&w=400",
                        "caption": "Energia do dia!",
                        "likes": 1080
                  }
            ]
      },
      "twitter": {
            "username": "Arcano 8",
            "handle": "@arcano8",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg",
            "tweets": [
                  {
                        "content": "Reflexão do dia do arcano 8...",
                        "retweets": 800,
                        "likes": 4000
                  }
            ]
      },
      "whatsapp": {
            "contactName": "Arcano 8 🔮",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg",
            "status": "Online",
            "messages": [
                  {
                        "sender": "them",
                        "text": "Mensagem mística do arcano 8",
                        "time": "12:00"
                  },
                  {
                        "sender": "me",
                        "text": "Profundo...",
                        "time": "12:05"
                  }
            ]
      }
},
    book: {
      title: "A Menina que Roubava Livros",
      author: "Markus Zusak",
      synopsis: "A força do espírito humano e o poder das palavras para trazer conforto e coragem em tempos de guerra e desespero.",
      cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400",
      buyLink: "https://www.amazon.com.br/"
    }
  },
  {
    id: 9,
    name: "O Eremita",
    number: "IX",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/RWS_Tarot_09_Hermit.jpg",
    description: "O Eremita é a busca pela verdade interior. Representa introspecção, isolamento voluntário, sabedoria e a luz que encontramos quando olhamos para dentro de nós mesmos.",
    playlist: [
      { title: "The Sound of Silence", artist: "Simon & Garfunkel", youtubeId: "4fWyzwo1xg0" },
      { title: "All By Myself", artist: "Eric Carmen", youtubeId: "jfKfPfyJRdk" },
      { title: "Creep", artist: "Radiohead", youtubeId: "jfKfPfyJRdk" },
      { title: "Boulevard of Broken Dreams", artist: "Green Day", youtubeId: "jfKfPfyJRdk" },
      { title: "Solitude", artist: "Billie Holiday", youtubeId: "jfKfPfyJRdk" }
    ],
    movie: {
      title: "O Náufrago",
      synopsis: "Um homem isolado do mundo é forçado a olhar para dentro, enfrentar seus demônios e encontrar um novo sentido para a vida na solidão absoluta.",
      poster: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=400",
      trailerYoutubeId: "qjhwFNqg0E0"
    },
    character: {
      name: "Gandalf, o Cinzento (O Senhor dos Anéis)",
      description: "O sábio andarilho que viaja sozinho, buscando conhecimento antigo e iluminando o caminho dos outros com sua sabedoria e luz interior.",
      image: "https://images.unsplash.com/photo-1447069387366-2a34706395ce?auto=format&fit=crop&q=80&w=400"
    },
    meme: {
      title: "Hide the pain Harold",
      url: "https://cataas.com/cat/gif/says/Me%20deixa%20sozinho?fontSize=30&fontColor=white"
    },
    social: {
      "instagram": {
            "username": "arcano_9_oficial",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
            "bio": "Vivendo a energia do arcano 9 ✨",
            "posts": [
                  {
                        "image": "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&q=80&w=400",
                        "caption": "Energia do dia!",
                        "likes": 1090
                  }
            ]
      },
      "twitter": {
            "username": "Arcano 9",
            "handle": "@arcano9",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
            "tweets": [
                  {
                        "content": "Reflexão do dia do arcano 9...",
                        "retweets": 900,
                        "likes": 4500
                  }
            ]
      },
      "whatsapp": {
            "contactName": "Arcano 9 🔮",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
            "status": "Online",
            "messages": [
                  {
                        "sender": "them",
                        "text": "Mensagem mística do arcano 9",
                        "time": "12:00"
                  },
                  {
                        "sender": "me",
                        "text": "Profundo...",
                        "time": "12:05"
                  }
            ]
      }
},
    book: {
      title: "Walden",
      author: "Henry David Thoreau",
      synopsis: "O relato de um homem que se isola na floresta para viver de forma simples, refletir sobre a sociedade e buscar a verdade essencial da vida.",
      cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400",
      buyLink: "https://www.amazon.com.br/"
    }
  },
  {
    id: 10,
    name: "A Roda da Fortuna",
    number: "X",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg",
    description: "A Roda da Fortuna nos lembra que tudo está em constante mudança. Representa ciclos, destino, sorte, carma e os altos e baixos inevitáveis da vida.",
    playlist: [
      { title: "Wheel in the Sky", artist: "Journey", youtubeId: "MxGEVIvSFeY" },
      { title: "Karma Chameleon", artist: "Culture Club", youtubeId: "jfKfPfyJRdk" },
      { title: "What Goes Around... Comes Around", artist: "Justin Timberlake", youtubeId: "jfKfPfyJRdk" },
      { title: "Spinning Wheel", artist: "Blood, Sweat & Tears", youtubeId: "jfKfPfyJRdk" },
      { title: "Changes", artist: "David Bowie", youtubeId: "jfKfPfyJRdk" }
    ],
    movie: {
      title: "Efeito Borboleta",
      synopsis: "Mostra como pequenas mudanças no passado podem alterar drasticamente o destino, ilustrando a natureza imprevisível da Roda da Fortuna.",
      poster: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=400",
      trailerYoutubeId: "B8_dgqfPXFg"
    },
    character: {
      name: "Forrest Gump",
      description: "A vida de Forrest é uma série de eventos inesperados e acasos do destino. Ele flui com as mudanças da Roda, aceitando o que a vida lhe traz.",
      image: "https://images.unsplash.com/photo-1506744626753-1fa44df14d28?auto=format&fit=crop&q=80&w=400"
    },
    meme: {
      title: "Parkour!",
      url: "https://cataas.com/cat/gif/says/A%20vida%20d%C3%A1%20voltas?fontSize=30&fontColor=white"
    },
    social: {
      "instagram": {
            "username": "arcano_10_oficial",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg",
            "bio": "Vivendo a energia do arcano 10 ✨",
            "posts": [
                  {
                        "image": "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&q=80&w=400",
                        "caption": "Energia do dia!",
                        "likes": 1100
                  }
            ]
      },
      "twitter": {
            "username": "Arcano 10",
            "handle": "@arcano10",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg",
            "tweets": [
                  {
                        "content": "Reflexão do dia do arcano 10...",
                        "retweets": 1000,
                        "likes": 5000
                  }
            ]
      },
      "whatsapp": {
            "contactName": "Arcano 10 🔮",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg",
            "status": "Online",
            "messages": [
                  {
                        "sender": "them",
                        "text": "Mensagem mística do arcano 10",
                        "time": "12:00"
                  },
                  {
                        "sender": "me",
                        "text": "Profundo...",
                        "time": "12:05"
                  }
            ]
      }
},
    book: {
      title: "Cem Anos de Solidão",
      author: "Gabriel García Márquez",
      synopsis: "A história da família Buendía, marcada por ciclos repetitivos, destinos inevitáveis e a roda do tempo que gira implacavelmente em Macondo.",
      cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400",
      buyLink: "https://www.amazon.com.br/"
    }
  },
  {
    id: 11,
    name: "A Justiça",
    number: "XI",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/RWS_Tarot_11_Justice.jpg",
    description: "A Justiça fala de verdade, equidade, lei e causa e efeito. Ela nos pede para assumirmos a responsabilidade por nossas ações e buscarmos o equilíbrio.",
    playlist: [
      { title: "Karma", artist: "Taylor Swift", youtubeId: "bK6hGkZrtNU" },
      { title: "I Fought the Law", artist: "The Clash", youtubeId: "jfKfPfyJRdk" },
      { title: "Respect", artist: "Aretha Franklin", youtubeId: "jfKfPfyJRdk" },
      { title: "Cry Me a River", artist: "Justin Timberlake", youtubeId: "jfKfPfyJRdk" },
      { title: "Before He Cheats", artist: "Carrie Underwood", youtubeId: "jfKfPfyJRdk" }
    ],
    movie: {
      title: "12 Homens e uma Sentença",
      synopsis: "Um júri debate o destino de um jovem, explorando a busca pela verdade, o peso do julgamento e a importância da justiça imparcial.",
      poster: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=400",
      trailerYoutubeId: "_13J_9B5jEk"
    },
    character: {
      name: "Batman",
      description: "O Cavaleiro das Trevas busca incansavelmente a justiça em uma cidade corrupta, pesando as consequências de suas ações na balança da moralidade.",
      image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&q=80&w=400"
    },
    meme: {
      title: "Reverse Uno Card",
      url: "https://cataas.com/cat/gif/says/Justi%C3%A7a%20foi%20feita?fontSize=30&fontColor=white"
    },
    social: {
      "instagram": {
            "username": "arcano_11_oficial",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
            "bio": "Vivendo a energia do arcano 11 ✨",
            "posts": [
                  {
                        "image": "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&q=80&w=400",
                        "caption": "Energia do dia!",
                        "likes": 1110
                  }
            ]
      },
      "twitter": {
            "username": "Arcano 11",
            "handle": "@arcano11",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
            "tweets": [
                  {
                        "content": "Reflexão do dia do arcano 11...",
                        "retweets": 1100,
                        "likes": 5500
                  }
            ]
      },
      "whatsapp": {
            "contactName": "Arcano 11 🔮",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
            "status": "Online",
            "messages": [
                  {
                        "sender": "them",
                        "text": "Mensagem mística do arcano 11",
                        "time": "12:00"
                  },
                  {
                        "sender": "me",
                        "text": "Profundo...",
                        "time": "12:05"
                  }
            ]
      }
},
    book: {
      title: "O Sol é para Todos",
      author: "Harper Lee",
      synopsis: "A luta do advogado Atticus Finch para defender um homem negro inocente em uma cidade racista, um poderoso conto sobre integridade e justiça.",
      cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400",
      buyLink: "https://www.amazon.com.br/"
    }
  },
  {
    id: 12,
    name: "O Enforcado",
    number: "XII",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/RWS_Tarot_12_Hanged_Man.jpg",
    description: "O Enforcado é a carta da pausa, da rendição e de ver o mundo por uma nova perspectiva. Às vezes, é preciso sacrificar algo para ganhar sabedoria.",
    playlist: [
      { title: "Waiting on the World to Change", artist: "John Mayer", youtubeId: "oBIxScJ5qAw" },
      { title: "Patience", artist: "Guns N' Roses", youtubeId: "jfKfPfyJRdk" },
      { title: "The Scientist", artist: "Coldplay", youtubeId: "jfKfPfyJRdk" },
      { title: "Let It Be", artist: "The Beatles", youtubeId: "jfKfPfyJRdk" },
      { title: "Gravity", artist: "John Mayer", youtubeId: "jfKfPfyJRdk" }
    ],
    movie: {
      title: "O Show de Truman",
      synopsis: "Truman precisa suspender suas crenças, aceitar que sua realidade é uma ilusão e fazer um sacrifício para finalmente ver a verdade e se libertar.",
      poster: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?auto=format&fit=crop&q=80&w=400",
      trailerYoutubeId: "dlnmQbPGuls"
    },
    character: {
      name: "Neo (Matrix)",
      description: "Antes de despertar, Neo está preso. Ele precisa sacrificar sua vida normal, tomar a pílula vermelha e ver a realidade de uma perspectiva completamente nova.",
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=400"
    },
    meme: {
      title: "Hang in there",
      url: "https://cataas.com/cat/gif/says/T%C3%B4%20de%20boa?fontSize=30&fontColor=white"
    },
    social: {
      "instagram": {
            "username": "arcano_12_oficial",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg",
            "bio": "Vivendo a energia do arcano 12 ✨",
            "posts": [
                  {
                        "image": "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&q=80&w=400",
                        "caption": "Energia do dia!",
                        "likes": 1120
                  }
            ]
      },
      "twitter": {
            "username": "Arcano 12",
            "handle": "@arcano12",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg",
            "tweets": [
                  {
                        "content": "Reflexão do dia do arcano 12...",
                        "retweets": 1200,
                        "likes": 6000
                  }
            ]
      },
      "whatsapp": {
            "contactName": "Arcano 12 🔮",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg",
            "status": "Online",
            "messages": [
                  {
                        "sender": "them",
                        "text": "Mensagem mística do arcano 12",
                        "time": "12:00"
                  },
                  {
                        "sender": "me",
                        "text": "Profundo...",
                        "time": "12:05"
                  }
            ]
      }
},
    book: {
      title: "A Metamorfose",
      author: "Franz Kafka",
      synopsis: "Gregor Samsa acorda transformado em um inseto, forçado a uma pausa absoluta e a ver sua vida e sua família de uma perspectiva dolorosa e diferente.",
      cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400",
      buyLink: "https://www.amazon.com.br/"
    }
  },
  {
    id: 13,
    name: "A Morte",
    number: "XIII",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/RWS_Tarot_13_Death.jpg",
    description: "A Morte raramente significa morte física. É a carta da transformação profunda, do fim de um ciclo para que algo novo possa nascer. É a mudança inevitável.",
    playlist: [
      { title: "The End", artist: "The Doors", youtubeId: "VScSEXRwUqQ" },
      { title: "Let It Go", artist: "Idina Menzel", youtubeId: "jfKfPfyJRdk" },
      { title: "New Rules", artist: "Dua Lipa", youtubeId: "jfKfPfyJRdk" },
      { title: "I Will Survive", artist: "Gloria Gaynor", youtubeId: "jfKfPfyJRdk" },
      { title: "Viva La Vida", artist: "Coldplay", youtubeId: "jfKfPfyJRdk" }
    ],
    movie: {
      title: "Clube da Luta",
      synopsis: "A destruição completa da identidade anterior do protagonista para que uma nova (e caótica) versão de si mesmo possa emergir das cinzas.",
      poster: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&q=80&w=400",
      trailerYoutubeId: "qtRKdVHc-cE"
    },
    character: {
      name: "V (V de Vingança)",
      description: "V é o agente da destruição e da renovação. Ele destrói o velho sistema corrupto para que a sociedade possa renascer livre.",
      image: "https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&q=80&w=400"
    },
    meme: {
      title: "Caixão dançante",
      url: "https://cataas.com/cat/gif/says/Acabou?fontSize=30&fontColor=white"
    },
    social: {
      "instagram": {
            "username": "arcano_13_oficial",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
            "bio": "Vivendo a energia do arcano 13 ✨",
            "posts": [
                  {
                        "image": "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&q=80&w=400",
                        "caption": "Energia do dia!",
                        "likes": 1130
                  }
            ]
      },
      "twitter": {
            "username": "Arcano 13",
            "handle": "@arcano13",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
            "tweets": [
                  {
                        "content": "Reflexão do dia do arcano 13...",
                        "retweets": 1300,
                        "likes": 6500
                  }
            ]
      },
      "whatsapp": {
            "contactName": "Arcano 13 🔮",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
            "status": "Online",
            "messages": [
                  {
                        "sender": "them",
                        "text": "Mensagem mística do arcano 13",
                        "time": "12:00"
                  },
                  {
                        "sender": "me",
                        "text": "Profundo...",
                        "time": "12:05"
                  }
            ]
      }
},
    book: {
      title: "A Menina que Roubava Livros",
      author: "Markus Zusak",
      synopsis: "Narrado pela própria Morte, o livro mostra como fins e começos se entrelaçam na vida humana, trazendo uma perspectiva compassiva sobre a transição.",
      cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400",
      buyLink: "https://www.amazon.com.br/"
    }
  },
  {
    id: 14,
    name: "A Temperança",
    number: "XIV",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f8/RWS_Tarot_14_Temperance.jpg",
    description: "A Temperança é sobre equilíbrio, moderação, paciência e a alquimia de misturar opostos para criar algo novo e harmonioso. É a cura e a paz interior.",
    playlist: [
      { title: "Balance", artist: "Earl Sweatshirt", youtubeId: "Xb0P5t5NQWM" },
      { title: "Water", artist: "Tyla", youtubeId: "jfKfPfyJRdk" },
      { title: "Go Your Own Way", artist: "Fleetwood Mac", youtubeId: "jfKfPfyJRdk" },
      { title: "Breathe", artist: "Pink Floyd", youtubeId: "jfKfPfyJRdk" },
      { title: "Here", artist: "Alessia Cara", youtubeId: "jfKfPfyJRdk" }
    ],
    movie: {
      title: "Comer, Rezar, Amar",
      synopsis: "A jornada de uma mulher em busca do equilíbrio perfeito entre o prazer mundano e a devoção espiritual, encontrando a paz no caminho do meio.",
      poster: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=400",
      trailerYoutubeId: "vhAQKlZitM0"
    },
    character: {
      name: "Avatar Korra",
      description: "Korra precisa aprender a paciência e a moderação, misturando os elementos e as energias espirituais e físicas para trazer equilíbrio ao mundo.",
      image: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&q=80&w=400"
    },
    meme: {
      title: "Perfectly balanced",
      url: "https://cataas.com/cat/gif/says/Tudo%20equilibrado?fontSize=30&fontColor=white"
    },
    social: {
      "instagram": {
            "username": "arcano_14_oficial",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg",
            "bio": "Vivendo a energia do arcano 14 ✨",
            "posts": [
                  {
                        "image": "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&q=80&w=400",
                        "caption": "Energia do dia!",
                        "likes": 1140
                  }
            ]
      },
      "twitter": {
            "username": "Arcano 14",
            "handle": "@arcano14",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg",
            "tweets": [
                  {
                        "content": "Reflexão do dia do arcano 14...",
                        "retweets": 1400,
                        "likes": 7000
                  }
            ]
      },
      "whatsapp": {
            "contactName": "Arcano 14 🔮",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg",
            "status": "Online",
            "messages": [
                  {
                        "sender": "them",
                        "text": "Mensagem mística do arcano 14",
                        "time": "12:00"
                  },
                  {
                        "sender": "me",
                        "text": "Profundo...",
                        "time": "12:05"
                  }
            ]
      }
},
    book: {
      title: "Siddhartha",
      author: "Hermann Hesse",
      synopsis: "A busca espiritual de um homem que experimenta os extremos da vida antes de encontrar a verdadeira iluminação e a paz no caminho do meio.",
      cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400",
      buyLink: "https://www.amazon.com.br/"
    }
  },
  {
    id: 15,
    name: "O Diabo",
    number: "XV",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/55/RWS_Tarot_15_Devil.jpg",
    description: "O Diabo representa nossas sombras, vícios, apegos materiais e as correntes ilusórias que nos prendem. Ele nos desafia a enfrentar nossos medos e desejos ocultos.",
    playlist: [
      { title: "Sympathy For The Devil", artist: "The Rolling Stones", youtubeId: "GgnClrx8N2k" },
      { title: "Bad Guy", artist: "Billie Eilish", youtubeId: "jfKfPfyJRdk" },
      { title: "Toxic", artist: "Britney Spears", youtubeId: "jfKfPfyJRdk" },
      { title: "Hells Bells", artist: "AC/DC", youtubeId: "jfKfPfyJRdk" },
      { title: "Montero", artist: "Lil Nas X", youtubeId: "jfKfPfyJRdk" }
    ],
    movie: {
      title: "O Advogado do Diabo",
      synopsis: "Um jovem advogado é seduzido pelo poder, dinheiro e vaidade, caindo nas armadilhas de seus próprios desejos e apegos materiais.",
      poster: "https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&q=80&w=400",
      trailerYoutubeId: "IBVWN1w8xEA"
    },
    character: {
      name: "Lúcifer (Série)",
      description: "A personificação dos desejos ocultos e da rebelião. Ele nos lembra que muitas vezes somos nós mesmos que nos prendemos em nossas próprias culpas e vícios.",
      image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&q=80&w=400"
    },
    meme: {
      title: "Elmo em chamas",
      url: "https://cataas.com/cat/gif/says/Caos?fontSize=30&fontColor=white"
    },
    social: {
      "instagram": {
            "username": "arcano_15_oficial",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
            "bio": "Vivendo a energia do arcano 15 ✨",
            "posts": [
                  {
                        "image": "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&q=80&w=400",
                        "caption": "Energia do dia!",
                        "likes": 1150
                  }
            ]
      },
      "twitter": {
            "username": "Arcano 15",
            "handle": "@arcano15",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
            "tweets": [
                  {
                        "content": "Reflexão do dia do arcano 15...",
                        "retweets": 1500,
                        "likes": 7500
                  }
            ]
      },
      "whatsapp": {
            "contactName": "Arcano 15 🔮",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
            "status": "Online",
            "messages": [
                  {
                        "sender": "them",
                        "text": "Mensagem mística do arcano 15",
                        "time": "12:00"
                  },
                  {
                        "sender": "me",
                        "text": "Profundo...",
                        "time": "12:05"
                  }
            ]
      }
},
    book: {
      title: "O Retrato de Dorian Gray",
      author: "Oscar Wilde",
      synopsis: "A história de um homem que vende sua alma pela juventude eterna e se entrega a todos os vícios, ilustrando o peso destrutivo do apego material.",
      cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400",
      buyLink: "https://www.amazon.com.br/"
    }
  },
  {
    id: 16,
    name: "A Torre",
    number: "XVI",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg",
    description: "A Torre é a destruição repentina de velhas estruturas, crenças falsas e ilusões. É um momento de caos e revelação que, embora doloroso, limpa o caminho para a verdade.",
    playlist: [
      { title: "Wrecking Ball", artist: "Miley Cyrus", youtubeId: "My2FRPA3Gf8" },
      { title: "It's the End of the World as We Know It", artist: "R.E.M.", youtubeId: "jfKfPfyJRdk" },
      { title: "Pompeii", artist: "Bastille", youtubeId: "jfKfPfyJRdk" },
      { title: "Radioactive", artist: "Imagine Dragons", youtubeId: "jfKfPfyJRdk" },
      { title: "Skyfall", artist: "Adele", youtubeId: "jfKfPfyJRdk" }
    ],
    movie: {
      title: "Tudo em Todo o Lugar ao Mesmo Tempo",
      synopsis: "A realidade da protagonista desmorona completamente, forçando-a a enfrentar o caos absoluto para encontrar o que realmente importa.",
      poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=400",
      trailerYoutubeId: "wxN1T1uxQ2g"
    },
    character: {
      name: "Loki (Marvel)",
      description: "O deus da trapaça que constantemente destrói a ordem estabelecida. Suas ações causam caos, mas muitas vezes revelam verdades ocultas e forçam a evolução.",
      image: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?auto=format&fit=crop&q=80&w=400"
    },
    meme: {
      title: "This is fine (Apocalipse)",
      url: "https://cataas.com/cat/gif/says/Deu%20ruim?fontSize=30&fontColor=white"
    },
    social: {
      "instagram": {
            "username": "arcano_16_oficial",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg",
            "bio": "Vivendo a energia do arcano 16 ✨",
            "posts": [
                  {
                        "image": "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&q=80&w=400",
                        "caption": "Energia do dia!",
                        "likes": 1160
                  }
            ]
      },
      "twitter": {
            "username": "Arcano 16",
            "handle": "@arcano16",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg",
            "tweets": [
                  {
                        "content": "Reflexão do dia do arcano 16...",
                        "retweets": 1600,
                        "likes": 8000
                  }
            ]
      },
      "whatsapp": {
            "contactName": "Arcano 16 🔮",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg",
            "status": "Online",
            "messages": [
                  {
                        "sender": "them",
                        "text": "Mensagem mística do arcano 16",
                        "time": "12:00"
                  },
                  {
                        "sender": "me",
                        "text": "Profundo...",
                        "time": "12:05"
                  }
            ]
      }
},
    book: {
      title: "Clube da Luta",
      author: "Chuck Palahniuk",
      synopsis: "A destruição literal e figurativa de tudo o que o protagonista construiu, explodindo as fundações de sua vida para encontrar a liberdade no caos.",
      cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400",
      buyLink: "https://www.amazon.com.br/"
    }
  },
  {
    id: 17,
    name: "A Estrela",
    number: "XVII",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_17_Star.jpg",
    description: "Após a tempestade da Torre, vem a Estrela. Ela traz esperança, inspiração, cura, serenidade e a fé renovada no futuro. É a luz que guia na escuridão.",
    playlist: [
      { title: "A Sky Full of Stars", artist: "Coldplay", youtubeId: "VPRjCeoBqrI" },
      { title: "Counting Stars", artist: "OneRepublic", youtubeId: "jfKfPfyJRdk" },
      { title: "City of Stars", artist: "Ryan Gosling & Emma Stone", youtubeId: "jfKfPfyJRdk" },
      { title: "Starman", artist: "David Bowie", youtubeId: "jfKfPfyJRdk" },
      { title: "Shining Star", artist: "Earth, Wind & Fire", youtubeId: "jfKfPfyJRdk" }
    ],
    movie: {
      title: "La La Land: Cantando Estações",
      synopsis: "Um filme sobre sonhadores, esperança e a busca pela inspiração, refletindo a energia brilhante e otimista da Estrela.",
      poster: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=400",
      trailerYoutubeId: "0pdqf4P9MB8"
    },
    character: {
      name: "Moana",
      description: "Guiada pelas estrelas e por sua esperança inabalável, ela traz cura para sua ilha e restaura o coração de Te Fiti, personificando a energia da carta.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=400"
    },
    meme: {
      title: "Bob Esponja Imaginação",
      url: "https://cataas.com/cat/gif/says/Esperan%C3%A7a?fontSize=30&fontColor=white"
    },
    social: {
      "instagram": {
            "username": "arcano_17_oficial",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
            "bio": "Vivendo a energia do arcano 17 ✨",
            "posts": [
                  {
                        "image": "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&q=80&w=400",
                        "caption": "Energia do dia!",
                        "likes": 1170
                  }
            ]
      },
      "twitter": {
            "username": "Arcano 17",
            "handle": "@arcano17",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
            "tweets": [
                  {
                        "content": "Reflexão do dia do arcano 17...",
                        "retweets": 1700,
                        "likes": 8500
                  }
            ]
      },
      "whatsapp": {
            "contactName": "Arcano 17 🔮",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
            "status": "Online",
            "messages": [
                  {
                        "sender": "them",
                        "text": "Mensagem mística do arcano 17",
                        "time": "12:00"
                  },
                  {
                        "sender": "me",
                        "text": "Profundo...",
                        "time": "12:05"
                  }
            ]
      }
},
    book: {
      title: "O Pequeno Príncipe",
      author: "Antoine de Saint-Exupéry",
      synopsis: "Uma história sobre pureza, esperança e ver com o coração, lembrando-nos da luz e da inspiração que existem nas coisas simples.",
      cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400",
      buyLink: "https://www.amazon.com.br/"
    }
  },
  {
    id: 18,
    name: "A Lua",
    number: "XVIII",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7f/RWS_Tarot_18_Moon.jpg",
    description: "A Lua é o reino das ilusões, dos medos, dos sonhos e do subconsciente. As coisas não são o que parecem. Ela pede que confiemos na intuição para navegar na escuridão.",
    playlist: [
      { title: "Talking to the Moon", artist: "Bruno Mars", youtubeId: "fXw0jcYbqdo" },
      { title: "Bad Moon Rising", artist: "Creedence Clearwater Revival", youtubeId: "jfKfPfyJRdk" },
      { title: "Dancing in the Moonlight", artist: "Toploader", youtubeId: "jfKfPfyJRdk" },
      { title: "Moondance", artist: "Van Morrison", youtubeId: "jfKfPfyJRdk" },
      { title: "Fly Me To The Moon", artist: "Frank Sinatra", youtubeId: "jfKfPfyJRdk" }
    ],
    movie: {
      title: "Cisne Negro",
      synopsis: "Um mergulho profundo e aterrorizante no subconsciente, onde ilusões, medos e a perda da sanidade se misturam na busca pela perfeição.",
      poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=400",
      trailerYoutubeId: "5jaI1XOB-bs"
    },
    character: {
      name: "Coringa (Joker)",
      description: "A personificação da confusão mental, das ilusões e dos medos mais profundos da sociedade, vivendo em um mundo onde a realidade é distorcida.",
      image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&q=80&w=400"
    },
    meme: {
      title: "Gato confuso",
      url: "https://cataas.com/cat/gif/says/O%20que%20t%C3%A1%20acontecendo?fontSize=30&fontColor=white"
    },
    social: {
      "instagram": {
            "username": "arcano_18_oficial",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg",
            "bio": "Vivendo a energia do arcano 18 ✨",
            "posts": [
                  {
                        "image": "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&q=80&w=400",
                        "caption": "Energia do dia!",
                        "likes": 1180
                  }
            ]
      },
      "twitter": {
            "username": "Arcano 18",
            "handle": "@arcano18",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg",
            "tweets": [
                  {
                        "content": "Reflexão do dia do arcano 18...",
                        "retweets": 1800,
                        "likes": 9000
                  }
            ]
      },
      "whatsapp": {
            "contactName": "Arcano 18 🔮",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg",
            "status": "Online",
            "messages": [
                  {
                        "sender": "them",
                        "text": "Mensagem mística do arcano 18",
                        "time": "12:00"
                  },
                  {
                        "sender": "me",
                        "text": "Profundo...",
                        "time": "12:05"
                  }
            ]
      }
},
    book: {
      title: "Alice no País das Maravilhas",
      author: "Lewis Carroll",
      synopsis: "Uma jornada por um mundo de sonhos onde a lógica não se aplica, as coisas mudam de forma e as ilusões governam, a essência do caminho da Lua.",
      cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400",
      buyLink: "https://www.amazon.com.br/"
    }
  },
  {
    id: 19,
    name: "O Sol",
    number: "XIX",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/17/RWS_Tarot_19_Sun.jpg",
    description: "O Sol é a carta da alegria, do sucesso, da vitalidade e da clareza. Tudo é iluminado, a verdade é revelada e a criança interior brilha com felicidade e otimismo.",
    playlist: [
      { title: "Walking On Sunshine", artist: "Katrina & The Waves", youtubeId: "iPUmE-tne5U" },
      { title: "Here Comes The Sun", artist: "The Beatles", youtubeId: "jfKfPfyJRdk" },
      { title: "Pocketful of Sunshine", artist: "Natasha Bedingfield", youtubeId: "jfKfPfyJRdk" },
      { title: "Happy", artist: "Pharrell Williams", youtubeId: "jfKfPfyJRdk" },
      { title: "Good Vibrations", artist: "The Beach Boys", youtubeId: "jfKfPfyJRdk" }
    ],
    movie: {
      title: "Pequena Miss Sunshine",
      synopsis: "Apesar de todos os problemas, a família encontra alegria, união e clareza através da inocência e do brilho da pequena Olive.",
      poster: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=400",
      trailerYoutubeId: "wvwVkllXT80"
    },
    character: {
      name: "Naruto Uzumaki",
      description: "Com seu otimismo inabalável, energia contagiante e capacidade de trazer luz e esperança para os outros, ele é a verdadeira energia do Sol.",
      image: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&q=80&w=400"
    },
    meme: {
      title: "Praise the Sun",
      url: "https://cataas.com/cat/gif/says/Alegria?fontSize=30&fontColor=white"
    },
    social: {
      "instagram": {
            "username": "arcano_19_oficial",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
            "bio": "Vivendo a energia do arcano 19 ✨",
            "posts": [
                  {
                        "image": "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&q=80&w=400",
                        "caption": "Energia do dia!",
                        "likes": 1190
                  }
            ]
      },
      "twitter": {
            "username": "Arcano 19",
            "handle": "@arcano19",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
            "tweets": [
                  {
                        "content": "Reflexão do dia do arcano 19...",
                        "retweets": 1900,
                        "likes": 9500
                  }
            ]
      },
      "whatsapp": {
            "contactName": "Arcano 19 🔮",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
            "status": "Online",
            "messages": [
                  {
                        "sender": "them",
                        "text": "Mensagem mística do arcano 19",
                        "time": "12:00"
                  },
                  {
                        "sender": "me",
                        "text": "Profundo...",
                        "time": "12:05"
                  }
            ]
      }
},
    book: {
      title: "Pollyanna",
      author: "Eleanor H. Porter",
      synopsis: "A história da menina que joga o 'jogo do contentamento', encontrando o lado positivo e a luz do Sol em absolutamente todas as situações.",
      cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400",
      buyLink: "https://www.amazon.com.br/"
    }
  },
  {
    id: 20,
    name: "O Julgamento",
    number: "XX",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/dd/RWS_Tarot_20_Judgment.jpg",
    description: "O Julgamento é o chamado para o despertar. Representa renascimento, absolvição, avaliação do passado e o momento de se levantar para um propósito maior.",
    playlist: [
      { title: "Wake Me Up", artist: "Avicii", youtubeId: "IcrbM1l_BoI" },
      { title: "I Lived", artist: "OneRepublic", youtubeId: "jfKfPfyJRdk" },
      { title: "It's My Life", artist: "Bon Jovi", youtubeId: "jfKfPfyJRdk" },
      { title: "Dog Days Are Over", artist: "Florence + The Machine", youtubeId: "jfKfPfyJRdk" },
      { title: "Survivor", artist: "Destiny's Child", youtubeId: "jfKfPfyJRdk" }
    ],
    movie: {
      title: "O Sexto Sentido",
      synopsis: "Um despertar profundo para a verdade, onde o passado precisa ser avaliado e resolvido para que a alma possa finalmente encontrar a paz e seguir em frente.",
      poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=400",
      trailerYoutubeId: "3-ZP95NF_Wk"
    },
    character: {
      name: "Jon Snow (Game of Thrones)",
      description: "Ele literalmente renasce, sendo chamado de volta à vida para cumprir um propósito maior, deixando o passado para trás e abraçando seu destino.",
      image: "https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&q=80&w=400"
    },
    meme: {
      title: "Awaken, my masters!",
      url: "https://cataas.com/cat/gif/says/Acordei?fontSize=30&fontColor=white"
    },
    social: {
      "instagram": {
            "username": "arcano_20_oficial",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg",
            "bio": "Vivendo a energia do arcano 20 ✨",
            "posts": [
                  {
                        "image": "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&q=80&w=400",
                        "caption": "Energia do dia!",
                        "likes": 1200
                  }
            ]
      },
      "twitter": {
            "username": "Arcano 20",
            "handle": "@arcano20",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg",
            "tweets": [
                  {
                        "content": "Reflexão do dia do arcano 20...",
                        "retweets": 2000,
                        "likes": 10000
                  }
            ]
      },
      "whatsapp": {
            "contactName": "Arcano 20 🔮",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg",
            "status": "Online",
            "messages": [
                  {
                        "sender": "them",
                        "text": "Mensagem mística do arcano 20",
                        "time": "12:00"
                  },
                  {
                        "sender": "me",
                        "text": "Profundo...",
                        "time": "12:05"
                  }
            ]
      }
},
    book: {
      title: "A Divina Comédia",
      author: "Dante Alighieri",
      synopsis: "A jornada da alma através do inferno, purgatório e paraíso, sendo julgada, purificada e finalmente despertando para a luz divina.",
      cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400",
      buyLink: "https://www.amazon.com.br/"
    }
  },
  {
    id: 21,
    name: "O Mundo",
    number: "XXI",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/ff/RWS_Tarot_21_World.jpg",
    description: "O Mundo é a conclusão bem-sucedida de um ciclo. Representa totalidade, realização, integração e a sensação de que tudo finalmente se encaixa perfeitamente.",
    playlist: [
      { title: "We Are The Champions", artist: "Queen", youtubeId: "04854XqcfCY" },
      { title: "All Around The World", artist: "Oasis", youtubeId: "jfKfPfyJRdk" },
      { title: "On Top Of The World", artist: "Imagine Dragons", youtubeId: "jfKfPfyJRdk" },
      { title: "Don't Stop Believin'", artist: "Journey", youtubeId: "jfKfPfyJRdk" },
      { title: "Bittersweet Symphony", artist: "The Verve", youtubeId: "jfKfPfyJRdk" }
    ],
    movie: {
      title: "O Senhor dos Anéis: O Retorno do Rei",
      synopsis: "A conclusão épica da jornada. O mal é derrotado, o ciclo se encerra e o mundo é restaurado, trazendo uma profunda sensação de realização e finalização.",
      poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=400",
      trailerYoutubeId: "r5X-hFf6Bwo"
    },
    character: {
      name: "Neo (Matrix - Final)",
      description: "No fim de sua jornada, Neo compreende totalmente a Matrix e seu papel nela. Ele atinge a integração completa, encerrando o ciclo da guerra.",
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=400"
    },
    meme: {
      title: "Vitória / Transcendendo",
      url: "https://cataas.com/cat/gif/says/Zerei%20a%20vida?fontSize=30&fontColor=white"
    },
    social: {
      "instagram": {
            "username": "arcano_21_oficial",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
            "bio": "Vivendo a energia do arcano 21 ✨",
            "posts": [
                  {
                        "image": "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&q=80&w=400",
                        "caption": "Energia do dia!",
                        "likes": 1210
                  }
            ]
      },
      "twitter": {
            "username": "Arcano 21",
            "handle": "@arcano21",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
            "tweets": [
                  {
                        "content": "Reflexão do dia do arcano 21...",
                        "retweets": 2100,
                        "likes": 10500
                  }
            ]
      },
      "whatsapp": {
            "contactName": "Arcano 21 🔮",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
            "status": "Online",
            "messages": [
                  {
                        "sender": "them",
                        "text": "Mensagem mística do arcano 21",
                        "time": "12:00"
                  },
                  {
                        "sender": "me",
                        "text": "Profundo...",
                        "time": "12:05"
                  }
            ]
      }
},
    book: {
      title: "O Alquimista",
      author: "Paulo Coelho",
      synopsis: "A jornada completa de Santiago em busca de sua Lenda Pessoal. Ele viaja pelo mundo apenas para descobrir que o tesouro e a totalidade sempre estiveram com ele.",
      cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400",
      buyLink: "https://www.amazon.com.br/"
    }
  }
];
