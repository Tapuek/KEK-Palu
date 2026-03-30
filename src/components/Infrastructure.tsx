import { motion } from 'motion/react';
import { Anchor, Truck, Droplets, Zap, Network } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Infrastructure() {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Anchor className="w-5 h-5" />,
      title: t('inf_1_title'),
      desc: t('inf_1_desc')
    },
    {
      icon: <Network className="w-5 h-5" />,
      title: t('inf_2_title'),
      desc: t('inf_2_desc')
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: t('inf_3_title'),
      desc: t('inf_3_desc')
    },
    {
      icon: <Droplets className="w-5 h-5" />,
      title: t('inf_4_title'),
      desc: t('inf_4_desc')
    }
  ];

  return (
    <section id="infrastructure" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest uppercase text-orange-600 mb-3">{t('inf_tag')}</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-zinc-900 mb-6">
            {t('inf_title')}
          </h3>
          <p className="text-zinc-600 text-lg">
            {t('inf_desc')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video lg:aspect-square bg-zinc-100"
          >
            {/* Map Placeholder - In a real app, use Google Maps or a custom illustration */}
            <img 
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop" 
              alt="Infrastructure Map" 
              className="w-full h-full object-cover opacity-90"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-orange-900/10 mix-blend-multiply" />
            
            {/* Overlay UI elements to make it look like a map/plan */}
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-white/20">
              <div className="text-sm font-bold text-zinc-900 mb-2">{t('inf_map_title')}</div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-medium text-zinc-600">
                  <div className="w-3 h-3 rounded-full bg-orange-500" /> {t('inf_map_1')}
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-zinc-600">
                  <div className="w-3 h-3 rounded-full bg-emerald-500" /> {t('inf_map_2')}
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-zinc-600">
                  <div className="w-3 h-3 rounded-full bg-amber-500" /> {t('inf_map_3')}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-orange-200 hover:bg-orange-50/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  {feat.icon}
                </div>
                <h4 className="font-bold text-zinc-900 mb-2">{feat.title}</h4>
                <p className="text-sm text-zinc-600">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
