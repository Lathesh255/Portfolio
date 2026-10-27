import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, RotateCcw, Trophy, Sparkles, CheckCircle2 } from 'lucide-react';

const CARD_PAIRS = [
  { id: 1, name: 'Python', icon: '🐍', color: 'from-amber-500/20 to-yellow-500/10 border-amber-500/30 text-amber-300' },
  { id: 2, name: 'Java', icon: '☕', color: 'from-orange-500/20 to-red-500/10 border-orange-500/30 text-orange-300' },
  { id: 3, name: 'Node.js', icon: '⚡', color: 'from-emerald-500/20 to-green-500/10 border-emerald-500/30 text-emerald-300' },
  { id: 4, name: 'React', icon: '⚛️', color: 'from-sky-500/20 to-blue-500/10 border-sky-500/30 text-sky-300' },
  { id: 5, name: 'Database', icon: '🗄️', color: 'from-purple-500/20 to-indigo-500/10 border-purple-500/30 text-purple-300' },
  { id: 6, name: 'Security', icon: '🛡️', color: 'from-blue-500/20 to-cyan-500/10 border-blue-500/30 text-cyan-300' },
];

function shuffleDeck() {
  const deck = [...CARD_PAIRS, ...CARD_PAIRS].map((card, index) => ({
    ...card,
    uniqueId: `${card.id}-${index}-${Math.random()}`,
  }));
  return deck.sort(() => Math.random() - 0.5);
}

export default function MemoryGameModal({ isOpen, onClose }) {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const [timer, setTimer] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  // Initialize or reset game
  const resetGame = () => {
    setCards(shuffleDeck());
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setGameWon(false);
    setTimer(0);
    setTimerActive(false);
  };

  useEffect(() => {
    if (isOpen) {
      resetGame();
    }
  }, [isOpen]);

  // Timer effect
  useEffect(() => {
    let interval = null;
    if (timerActive && !gameWon) {
      interval = setInterval(() => {
        setTimer((t) => t + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerActive, gameWon]);

  // Handle card click
  const handleCardClick = (index) => {
    if (!timerActive) setTimerActive(true);
    if (flipped.length === 2 || flipped.includes(index) || matched.includes(cards[index].id)) {
      return;
    }

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setMoves((m) => m + 1);
      const [firstIdx, secondIdx] = newFlipped;
      if (cards[firstIdx].id === cards[secondIdx].id) {
        const newMatched = [...matched, cards[firstIdx].id];
        setMatched(newMatched);
        setFlipped([]);
        if (newMatched.length === CARD_PAIRS.length) {
          setGameWon(true);
          setTimerActive(false);
        }
      } else {
        setTimeout(() => {
          setFlipped([]);
        }, 900);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#0b101b] border border-blue-500/30 rounded-2xl max-w-xl w-full p-6 sm:p-7 shadow-2xl relative flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center space-x-2.5">
            <span className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
              <Sparkles className="w-4 h-4" />
            </span>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Play Memory Matching Game
              </h3>
              <p className="text-xs text-slate-400">
                Interactive live preview of Lathesha's web project
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Score & Controls Bar */}
        <div className="flex items-center justify-between py-3 px-4 my-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono">
          <div className="flex items-center space-x-4">
            <span className="text-slate-300">
              Moves: <strong className="text-blue-400">{moves}</strong>
            </span>
            <span className="text-slate-300">
              Matches: <strong className="text-emerald-400">{matched.length}/{CARD_PAIRS.length}</strong>
            </span>
            <span className="text-slate-300">
              Time: <strong className="text-amber-400">{timer}s</strong>
            </span>
          </div>

          <button
            onClick={resetGame}
            className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-xs"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        </div>

        {/* Win Alert */}
        <AnimatePresence>
          {gameWon && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="p-3.5 mb-4 rounded-xl bg-gradient-to-r from-emerald-950/60 to-blue-950/60 border border-emerald-500/40 text-center"
            >
              <div className="flex items-center justify-center space-x-2 text-emerald-300 font-bold text-sm">
                <Trophy className="w-4 h-4 text-amber-400" />
                <span>Awesome! All pairs matched in {moves} moves & {timer} seconds!</span>
              </div>
              <p className="text-[11px] text-slate-300 mt-1">
                Demonstrating dynamic state handling, reactive animations, and algorithm efficiency.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Game Grid */}
        <div className="grid grid-cols-4 sm:grid-cols-4 gap-2.5 sm:gap-3 py-2">
          {cards.map((card, idx) => {
            const isFlipped = flipped.includes(idx) || matched.includes(card.id);
            const isMatched = matched.includes(card.id);

            return (
              <motion.button
                key={card.uniqueId}
                whileHover={{ scale: isMatched ? 1 : 1.03 }}
                whileTap={{ scale: isMatched ? 1 : 0.96 }}
                onClick={() => handleCardClick(idx)}
                disabled={isMatched}
                className={`h-20 sm:h-24 rounded-xl border flex flex-col items-center justify-center transition-all duration-300 cursor-pointer select-none relative overflow-hidden ${
                  isFlipped
                    ? `bg-gradient-to-b ${card.color} shadow-lg shadow-black/40`
                    : 'bg-slate-900/90 border-slate-800 hover:border-slate-700 hover:bg-slate-800/80'
                }`}
              >
                {isFlipped ? (
                  <motion.div
                    initial={{ rotateY: 90, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    className="flex flex-col items-center justify-center space-y-1"
                  >
                    <span className="text-2xl sm:text-3xl">{card.icon}</span>
                    <span className="text-[11px] font-mono font-medium">{card.name}</span>
                  </motion.div>
                ) : (
                  <div className="flex flex-col items-center justify-center text-slate-600">
                    <span className="text-xl font-mono opacity-40">?</span>
                  </div>
                )}

                {isMatched && (
                  <div className="absolute top-1 right-1 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Footer info */}
        <div className="pt-4 mt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
          <span>Project: Memory Matching Game</span>
          <a
            href="https://github.com/Lathesh255"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Inspect GitHub Repo →
          </a>
        </div>
      </div>
    </div>
  );
}
