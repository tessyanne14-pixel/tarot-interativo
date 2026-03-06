import { motion, AnimatePresence } from 'motion/react';
import { X, Info, Music, Film, User, Book, Smile, PlayCircle, Video, Smartphone, ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Arcanum } from '../data/tarotData';
import YouTubePlayer from './YouTubePlayer';
import SocialTab from './SocialTab';

interface CardModalProps {
  card: Arcanum | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

type Tab = 'overview' | 'music' | 'movie' | 'character' | 'book' | 'meme' | 'social';

export default function CardModal({ card, onClose, onNext, onPrev }: CardModalProps) {
  const [activeTab, setActiveTab] = useState<Tab>('overview');
  const [playingMedia, setPlayingMedia] = useState<{ id: string; title: string } | null>(null);

  useEffect(() => {
    setPlayingMedia(null);
    window.speechSynthesis.cancel();
  }, [activeTab, card]);

  // Also cancel when modal closes
  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  if (!card) return null;

  const tabs = [
    { id: 'overview', label: 'Visão Geral', icon: Info },
    { id: 'social', label: 'Redes Sociais', icon: Smartphone },
    { id: 'music', label: 'Músicas', icon: Music },
    { id: 'movie', label: 'Filme', icon: Film },
    { id: 'character', label: 'Personagem', icon: User },
    { id: 'book', label: 'Livro', icon: Book },
    { id: 'meme', label: 'Meme', icon: Smile },
  ] as const;

  const handlePlaySong = (title: string, artist: string, youtubeId?: string) => {
    if (youtubeId) {
      setPlayingMedia({ id: youtubeId, title: `${title} - ${artist}` });
    } else {
      const query = encodeURIComponent(`${title} ${artist}`);
      window.open(`https://www.youtube.com/results?search_query=${query}`, '_blank');
    }
  };

  const handlePlayTrailer = (title: string, youtubeId?: string) => {
    if (youtubeId) {
      setPlayingMedia({ id: youtubeId, title: `Trailer: ${title}` });
    } else {
      const query = encodeURIComponent(`Trailer ${title}`);
      window.open(`https://www.youtube.com/results?search_query=${query}`, '_blank');
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-zinc-900 border border-purple-500/30 w-full max-w-6xl rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row h-[90vh]"
        >
          {/* Left Column: Image */}
          <div className="w-full md:w-1/3 bg-zinc-950 p-6 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-purple-500/20 relative overflow-hidden shrink-0">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent pointer-events-none" />
            
            {/* Navigation Arrows */}
            {onPrev && (
              <button 
                onClick={(e) => { e.stopPropagation(); onPrev(); }}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-purple-600/50 text-white rounded-full backdrop-blur-sm transition-all z-20"
              >
                <ChevronLeft size={24} />
              </button>
            )}
            {onNext && (
              <button 
                onClick={(e) => { e.stopPropagation(); onNext(); }}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-purple-600/50 text-white rounded-full backdrop-blur-sm transition-all z-20"
              >
                <ChevronRight size={24} />
              </button>
            )}

            <div className="relative w-32 md:w-full max-w-[280px] aspect-[2/3] rounded-xl overflow-hidden shadow-[0_0_40px_rgba(168,85,247,0.3)]">
              <img
                src={card.image}
                alt={card.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <h2 className="mt-4 md:mt-8 text-2xl md:text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 text-center relative z-10">
              {card.number}. {card.name}
            </h2>
          </div>

          {/* Right Column: Content */}
          <div className="md:w-2/3 flex flex-col h-full">
            {/* Header / Close */}
            <div className="flex justify-end p-4">
              <button
                onClick={onClose}
                className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex overflow-x-auto px-6 border-b border-zinc-800 no-scrollbar">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-3 border-b-2 whitespace-nowrap transition-colors ${
                      isActive
                        ? 'border-purple-500 text-purple-400'
                        : 'border-transparent text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    <Icon size={18} />
                    <span className="font-medium">{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab Content */}
            <div className="p-6 overflow-y-auto flex-1 text-zinc-300">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {activeTab === 'overview' && (
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-xl font-semibold text-white">Significado</h3>
                        <button
                          onClick={() => {
                            const utterance = new SpeechSynthesisUtterance(card.description);
                            utterance.lang = 'pt-BR';
                            window.speechSynthesis.speak(utterance);
                          }}
                          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-600/20 text-purple-400 hover:bg-purple-600 hover:text-white transition-colors text-sm font-medium"
                        >
                          <PlayCircle size={16} />
                          Ouvir
                        </button>
                      </div>
                      <p className="text-lg leading-relaxed">{card.description}</p>
                    </div>
                  )}

                  {activeTab === 'social' && (
                    <SocialTab social={card.social} />
                  )}

                  {activeTab === 'music' && (
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-white mb-4">Playlist do Arcano</h3>
                      
                      {card.spotifyPlaylistId ? (
                        <div className="w-full h-[352px] rounded-xl overflow-hidden shadow-lg border border-zinc-800">
                          <iframe
                            src={`https://open.spotify.com/embed/playlist/${card.spotifyPlaylistId}?utm_source=generator&theme=0`}
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                          ></iframe>
                        </div>
                      ) : (
                        <div className="space-y-3">
                          {card.playlist.map((song, idx) => (
                            <div
                              key={idx}
                              className={`flex items-center justify-between p-4 rounded-xl transition-colors group border ${
                                playingMedia?.id === song.youtubeId 
                                  ? 'bg-purple-900/30 border-purple-500/50' 
                                  : 'bg-zinc-800/50 hover:bg-zinc-800 border-zinc-700/50'
                              }`}
                            >
                              <div>
                                <p className={`font-semibold ${playingMedia?.id === song.youtubeId ? 'text-purple-300' : 'text-white'}`}>
                                  {song.title}
                                </p>
                                <p className="text-sm text-zinc-400">{song.artist}</p>
                              </div>
                              <button
                                onClick={() => handlePlaySong(song.title, song.artist, song.youtubeId)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all opacity-100 md:opacity-0 md:group-hover:opacity-100 ${
                                  playingMedia?.id === song.youtubeId
                                    ? 'bg-purple-600 text-white'
                                    : 'bg-purple-600/20 text-purple-400 hover:bg-purple-600 hover:text-white'
                                }`}
                              >
                                <PlayCircle size={20} />
                                <span className="text-sm font-medium">
                                  {playingMedia?.id === song.youtubeId ? 'Tocando' : 'Ouvir'}
                                </span>
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {activeTab === 'movie' && (
                    <div className="flex flex-col gap-6">
                      <div className="flex flex-col md:flex-row gap-6 items-start">
                        <img
                          src={card.movie.poster}
                          alt={card.movie.title}
                          className="w-full md:w-48 rounded-lg shadow-lg object-cover aspect-[2/3]"
                          referrerPolicy="no-referrer"
                        />
                        <div className="flex-1 w-full">
                          <h3 className="text-2xl font-bold text-white mb-2">{card.movie.title}</h3>
                          <p className="text-lg leading-relaxed mb-6">{card.movie.synopsis}</p>
                          
                          {card.movie.trailerYoutubeId && (
                            <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-zinc-800">
                              <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${card.movie.trailerYoutubeId}`}
                                title={`Trailer: ${card.movie.title}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              ></iframe>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'character' && (
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <img
                        src={card.character.image}
                        alt={card.character.name}
                        className="w-full md:w-48 rounded-lg shadow-lg object-cover aspect-square"
                        referrerPolicy="no-referrer"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-2xl font-bold text-white">{card.character.name}</h3>
                          <button
                            onClick={() => {
                              const utterance = new SpeechSynthesisUtterance(card.character.description);
                              utterance.lang = 'pt-BR';
                              window.speechSynthesis.speak(utterance);
                            }}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-600/20 text-purple-400 hover:bg-purple-600 hover:text-white transition-colors text-sm font-medium"
                          >
                            <PlayCircle size={16} />
                            Ouvir
                          </button>
                        </div>
                        <p className="text-lg leading-relaxed">{card.character.description}</p>
                      </div>
                    </div>
                  )}

                  {activeTab === 'book' && (
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <img
                        src={card.book.cover}
                        alt={card.book.title}
                        className="w-full md:w-48 rounded-lg shadow-lg object-cover aspect-[2/3]"
                        referrerPolicy="no-referrer"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="text-2xl font-bold text-white">{card.book.title}</h3>
                          <button
                            onClick={() => {
                              const utterance = new SpeechSynthesisUtterance(card.book.synopsis);
                              utterance.lang = 'pt-BR';
                              window.speechSynthesis.speak(utterance);
                            }}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-600/20 text-purple-400 hover:bg-purple-600 hover:text-white transition-colors text-sm font-medium"
                          >
                            <PlayCircle size={16} />
                            Ouvir
                          </button>
                        </div>
                        <p className="text-purple-400 font-medium mb-4">por {card.book.author}</p>
                        <p className="text-lg leading-relaxed mb-6">{card.book.synopsis}</p>
                        
                        {(card.book as any).buyLink && (
                          <a
                            href={(card.book as any).buyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-600 text-white hover:bg-purple-500 transition-colors font-medium shadow-lg shadow-purple-500/20"
                          >
                            <ShoppingCart size={20} />
                            Comprar Livro
                          </a>
                        )}
                      </div>
                    </div>
                  )}

                  {activeTab === 'meme' && (
                    <div className="flex flex-col items-center text-center space-y-6">
                      <h3 className="text-2xl font-bold text-white">{card.meme.title}</h3>
                      <div className="relative w-full max-w-md rounded-xl overflow-hidden shadow-2xl bg-zinc-800">
                        <img
                          src={card.meme.url}
                          alt={card.meme.title}
                          className="w-full h-auto object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
