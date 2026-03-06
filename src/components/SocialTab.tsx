import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, Twitter, MessageCircle, Heart, MessageCircle as CommentIcon, Send, Repeat2, MoreHorizontal } from 'lucide-react';
import { SocialMedia } from '../data/tarotData';

interface SocialTabProps {
  social?: SocialMedia;
}

export default function SocialTab({ social }: SocialTabProps) {
  const [activeNetwork, setActiveNetwork] = useState<'instagram' | 'twitter' | 'whatsapp'>('instagram');

  if (!social) {
    return (
      <div className="flex items-center justify-center h-full text-zinc-500">
        <p>Redes sociais não disponíveis para este arcano.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      {/* Network Selector */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setActiveNetwork('instagram')}
          className={`p-3 rounded-full transition-all ${
            activeNetwork === 'instagram'
              ? 'bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 text-white shadow-lg shadow-pink-500/30'
              : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
          }`}
        >
          <Instagram size={24} />
        </button>
        <button
          onClick={() => setActiveNetwork('twitter')}
          className={`p-3 rounded-full transition-all ${
            activeNetwork === 'twitter'
              ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
              : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
          }`}
        >
          <Twitter size={24} />
        </button>
        <button
          onClick={() => setActiveNetwork('whatsapp')}
          className={`p-3 rounded-full transition-all ${
            activeNetwork === 'whatsapp'
              ? 'bg-green-500 text-white shadow-lg shadow-green-500/30'
              : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
          }`}
        >
          <MessageCircle size={24} />
        </button>
      </div>

      {/* Network Content */}
      <div className="flex-1 overflow-y-auto no-scrollbar pb-4 flex justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeNetwork}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-sm"
          >
            {activeNetwork === 'instagram' && (
              <div className="bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-xl">
                {/* Header */}
                <div className="p-4 border-b border-zinc-800 flex items-center gap-4">
                  <img src={social.instagram.avatar} alt="Avatar" className="w-16 h-16 rounded-full object-cover border-2 border-pink-500 p-0.5" referrerPolicy="no-referrer" />
                  <div>
                    <h4 className="font-bold text-white">{social.instagram.username}</h4>
                    <p className="text-sm text-zinc-400 whitespace-pre-line">{social.instagram.bio}</p>
                  </div>
                </div>
                {/* Posts */}
                <div className="divide-y divide-zinc-800">
                  {social.instagram.posts.map((post, idx) => (
                    <div key={idx} className="pb-4">
                      <div className="p-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <img src={social.instagram.avatar} alt="Avatar" className="w-8 h-8 rounded-full object-cover" referrerPolicy="no-referrer" />
                          <span className="font-semibold text-sm text-white">{social.instagram.username}</span>
                        </div>
                        <MoreHorizontal size={16} className="text-zinc-500" />
                      </div>
                      <img src={post.image} alt="Post" className="w-full aspect-square object-cover" referrerPolicy="no-referrer" />
                      <div className="p-3">
                        <div className="flex gap-4 mb-2">
                          <Heart size={24} className="text-white hover:text-pink-500 cursor-pointer transition-colors" />
                          <CommentIcon size={24} className="text-white hover:text-zinc-300 cursor-pointer transition-colors" />
                          <Send size={24} className="text-white hover:text-zinc-300 cursor-pointer transition-colors" />
                        </div>
                        <p className="font-semibold text-sm text-white mb-1">{post.likes.toLocaleString()} curtidas</p>
                        <p className="text-sm text-zinc-300">
                          <span className="font-semibold text-white mr-2">{social.instagram.username}</span>
                          {post.caption}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeNetwork === 'twitter' && (
              <div className="bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-xl">
                {/* Header */}
                <div className="p-4 border-b border-zinc-800">
                  <h4 className="font-bold text-xl text-white">Página Inicial</h4>
                </div>
                {/* Tweets */}
                <div className="divide-y divide-zinc-800">
                  {social.twitter.tweets.map((tweet, idx) => (
                    <div key={idx} className="p-4 flex gap-3 hover:bg-zinc-900/50 transition-colors cursor-pointer">
                      <img src={social.twitter.avatar} alt="Avatar" className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
                      <div className="flex-1">
                        <div className="flex items-center gap-1 mb-1">
                          <span className="font-bold text-white">{social.twitter.username}</span>
                          <span className="text-zinc-500 text-sm">{social.twitter.handle} · 2h</span>
                        </div>
                        <p className="text-zinc-200 mb-3">{tweet.content}</p>
                        <div className="flex justify-between text-zinc-500 pr-8">
                          <div className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                            <CommentIcon size={16} />
                            <span className="text-xs">12</span>
                          </div>
                          <div className="flex items-center gap-2 hover:text-green-400 transition-colors">
                            <Repeat2 size={16} />
                            <span className="text-xs">{tweet.retweets}</span>
                          </div>
                          <div className="flex items-center gap-2 hover:text-pink-500 transition-colors">
                            <Heart size={16} />
                            <span className="text-xs">{tweet.likes}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeNetwork === 'whatsapp' && (
              <div className="bg-[#0b141a] border border-zinc-800 rounded-2xl overflow-hidden shadow-xl flex flex-col h-[500px]">
                {/* Header */}
                <div className="bg-[#202c33] p-3 flex items-center gap-3">
                  <img src={social.whatsapp.avatar} alt="Avatar" className="w-10 h-10 rounded-full object-cover" referrerPolicy="no-referrer" />
                  <div>
                    <h4 className="font-medium text-white">{social.whatsapp.contactName}</h4>
                    <p className="text-xs text-zinc-400">{social.whatsapp.status}</p>
                  </div>
                </div>
                {/* Messages */}
                <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-2 bg-[#0b141a] bg-opacity-90" style={{ backgroundImage: 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")', backgroundSize: 'contain' }}>
                  {social.whatsapp.messages.map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[80%] rounded-lg p-2 px-3 relative ${
                        msg.sender === 'me' ? 'bg-[#005c4b] text-white rounded-tr-none' : 'bg-[#202c33] text-white rounded-tl-none'
                      }`}>
                        <p className="text-sm mb-3">{msg.text}</p>
                        <span className="text-[10px] text-zinc-400 absolute bottom-1 right-2">{msg.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Input */}
                <div className="bg-[#202c33] p-3 flex items-center gap-2">
                  <div className="flex-1 bg-[#2a3942] rounded-full px-4 py-2 text-sm text-zinc-400">
                    Mensagem
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#00a884] flex items-center justify-center text-white">
                    <Send size={18} className="ml-1" />
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
