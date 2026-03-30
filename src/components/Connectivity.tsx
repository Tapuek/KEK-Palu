import { motion } from 'motion/react';
import { Ship, Plane, Truck, MapPin, Anchor, Navigation } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Connectivity() {
  const { t } = useLanguage();

  const transitTimes = [
    { dest: 'SINGAPORE', dist: '1,800 NM', time: '4 DAYS' },
    { dest: 'SHANGHAI', dist: '2,900 NM', time: '6 DAYS' },
    { dest: 'PERTH', dist: '2,200 NM', time: '5 DAYS' },
    { dest: 'TOKYO', dist: '3,400 NM', time: '7 DAYS' },
    { dest: 'DUBAI', dist: '5,800 NM', time: '12 DAYS' },
    { dest: 'ROTTERDAM', dist: '9,200 NM', time: '21 DAYS' },
  ];

  return (
    <section id="connectivity" className="py-24 bg-zinc-900 text-zinc-50 overflow-hidden relative">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest uppercase text-orange-500 mb-3">
            {t('conn_tag')}
          </h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            {t('conn_title')}
          </h3>
          <p className="text-zinc-400 text-lg">
            {t('conn_desc')}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square lg:aspect-[4/5] bg-zinc-800"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/57/Pantoloan_Port%2C_Palu.png"
              alt="Aerial view of Port Pantoloan with cargo ships aligned against deep blue water"
              className="w-full h-full object-cover opacity-80"
              referrerPolicy="no-referrer"
              crossOrigin="anonymous"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent" />
            
            <div className="absolute bottom-0 left-0 p-8">
              <div className="flex items-center gap-2 text-orange-400 mb-2">
                <MapPin className="w-5 h-5" />
                <span className="font-mono text-sm tracking-wider">0.7167° S, 119.8667° E</span>
              </div>
              <h4 className="text-2xl font-bold text-white">{t('conn_port_title')}</h4>
            </div>
          </motion.div>

          {/* Connectivity Points */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center">
                <Ship className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">{t('conn_port_title')}</h4>
                <p className="text-zinc-400 leading-relaxed">
                  {t('conn_port_desc')}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center">
                <Plane className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">{t('conn_air_title')}</h4>
                <p className="text-zinc-400 leading-relaxed">
                  {t('conn_air_desc')}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">{t('conn_road_title')}</h4>
                <p className="text-zinc-400 leading-relaxed">
                  {t('conn_road_desc')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section: Transit Times & ALKI II */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Maritime Transit Times */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 bg-zinc-800/50 border border-zinc-700/50 rounded-3xl p-8 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-8">
              <Anchor className="w-6 h-6 text-orange-500" />
              <h4 className="text-xl font-bold text-white">{t('conn_time_title')}</h4>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {transitTimes.map((item, i) => (
                <div key={i} className="bg-zinc-900/50 rounded-2xl p-4 border border-zinc-800">
                  <div className="text-sm font-bold text-zinc-500 mb-1">{item.dest}</div>
                  <div className="font-mono text-lg text-white mb-1">{item.dist}</div>
                  <div className="text-orange-400 font-bold text-sm">{item.time} <span className="text-zinc-500 font-normal text-xs">{t('conn_time_est')}</span></div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ALKI II Sea Lane Proximity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-orange-600 rounded-3xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 opacity-20">
              <Navigation className="w-24 h-24 text-white" />
            </div>
            <div className="relative z-10">
              <h4 className="text-2xl font-bold text-white mb-4">{t('conn_alki_title')}</h4>
              <p className="text-orange-100 leading-relaxed">
                {t('conn_alki_desc')}
              </p>
              <div className="mt-6 inline-block bg-white/20 backdrop-blur-md rounded-lg px-4 py-2 border border-white/30">
                <span className="text-white font-bold">{t('conn_alki_highlight')}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
