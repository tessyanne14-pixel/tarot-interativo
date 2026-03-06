import { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Moon, Sun } from 'lucide-react';
import { tarotData, Arcanum } from './data/tarotData';
import CardModal from './components/CardModal';

export default function App() {
  const [selectedCard, setSelectedCard] = useState<Arcanum | null>(null);

  const handleNext = () => {
    if (!selectedCard) return;
    const currentIndex = tarotData.findIndex(c => c.id === selectedCard.id);
    const nextIndex = (currentIndex + 1) % tarotData.length;
    setSelectedCard(tarotData[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedCard) return;
    const currentIndex = tarotData.findIndex(c => c.id === selectedCard.id);
    const prevIndex = (currentIndex - 1 + tarotData.length) % tarotData.length;
    setSelectedCard(tarotData[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-purple-500/30 font-sans">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] mix-blend-screen" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] mix-blend-screen" />
      </div>

      {/* Header */}
      <header className="relative z-10 pt-20 pb-16 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center justify-center space-y-4"
        >
          <div className="flex items-center gap-4 text-purple-400 mb-2">
            <Moon size={24} />
            <Sparkles size={32} className="animate-pulse" />
            <Sun size={24} />
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-blue-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
            Jornada Interativa dos Arcanos
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 font-medium mt-6">
            Uma imersão interativa pelos 22 Arcanos Maiores. Descubra a trilha sonora, o filme, o personagem, o livro e o meme de cada carta.
          </p>
        </motion.div>
      </header>

      {/* Main Grid */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 pb-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05
              }
            }
          }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
        >
          {tarotData.map((card) => (
            <motion.div
              key={card.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCard(card)}
              className="group cursor-pointer flex flex-col items-center"
            >
              <div className="relative w-full aspect-[2/3] rounded-xl overflow-hidden shadow-lg border border-purple-500/20 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] group-hover:border-purple-400/80">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20 text-center">
                  <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-purple-500/80 text-white text-xs font-bold backdrop-blur-md shadow-[0_0_10px_rgba(168,85,247,0.8)]">
                    Explorar
                  </span>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm font-bold text-purple-400 tracking-widest drop-shadow-[0_0_5px_rgba(168,85,247,0.5)]">{card.number}</p>
                <h3 className="text-lg font-serif font-semibold text-zinc-200 group-hover:text-white transition-colors">
                  {card.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>

      {/* Modal */}
      <CardModal
        card={selectedCard}
        onClose={() => setSelectedCard(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
}
