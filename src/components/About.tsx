import { motion } from 'motion/react';
import { Target, TrendingUp, Globe2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  const stats = [
    { value: t('about_stat_1_val'), label: t('about_stat_1_lbl') },
    { value: t('about_stat_2_val'), label: t('about_stat_2_lbl') },
    { value: t('about_stat_3_val'), label: t('about_stat_3_lbl') },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-widest uppercase text-orange-600 mb-3">{t('about_tag')}</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-zinc-900 mb-6 leading-tight">
              {t('about_title')}
            </h3>
            <p className="text-zinc-600 text-lg mb-6 leading-relaxed">
              {t('about_desc_1')}
            </p>
            <p className="text-zinc-600 text-lg mb-10 leading-relaxed">
              {t('about_desc_2')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-zinc-100">
              {stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-2xl font-display font-bold text-zinc-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-zinc-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual/Features */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop"
                alt="Industrial Facility"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-xl shadow-xl border border-zinc-100 max-w-sm hidden md:block">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
                  <Globe2 className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 mb-1">{t('about_float_title')}</h4>
                  <p className="text-sm text-zinc-500 leading-relaxed">{t('about_float_desc')}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
