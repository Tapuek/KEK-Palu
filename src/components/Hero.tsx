import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, MapPin, Play, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.jpg.png"
          alt="Aerial view of KEK Palu and Pantoloan Port"
          className="w-full h-full object-cover opacity-70"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
        <div className="absolute inset-0 bg-zinc-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/20 border border-orange-400/30 text-orange-300 text-sm font-medium mb-6 backdrop-blur-sm"
          >
            <MapPin className="w-4 h-4" />
            <span>{t('hero_location')}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-6 tracking-tight"
          >
            {t('hero_title_1')} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
              {t('hero_title_2')}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-300 mb-10 max-w-2xl leading-relaxed"
          >
            {t('hero_desc')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#industries"
              className="px-8 py-4 rounded-full bg-orange-600 text-white font-semibold hover:bg-orange-500 transition-colors flex items-center gap-2"
            >
              {t('hero_btn_explore')} <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#about"
              className="px-8 py-4 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/10"
            >
              {t('hero_btn_learn')}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
      >
        <span className="text-xs uppercase tracking-widest font-medium">{t('hero_scroll')}</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>

      {/* Video Thumbnail Button (Bottom Right) */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        onClick={() => setIsVideoOpen(true)}
        className="absolute bottom-8 right-4 sm:right-8 group flex items-center gap-4 bg-zinc-900/60 hover:bg-zinc-800/80 backdrop-blur-md p-2 pr-4 rounded-full border border-white/10 transition-all duration-300 z-20"
      >
        <div className="relative w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-orange-600">
          <img src="/hero-bg.jpg.png" alt="Video thumbnail" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-500" />
          <Play className="w-5 h-5 text-white relative z-10 ml-1" fill="currentColor" />
        </div>
        <div className="text-left hidden sm:block">
          <p className="text-sm font-bold text-white leading-tight">{t('hero_watch_video')}</p>
          <p className="text-xs text-zinc-400">{t('hero_overview')}</p>
        </div>
      </motion.button>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          >
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors z-50"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative"
            >
              <iframe
                src="https://www.youtube.com/embed/H-xpC2_KjdQ?autoplay=1&rel=0&playsinline=1"
                title="Palu Special Economic Zone Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full object-cover"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
