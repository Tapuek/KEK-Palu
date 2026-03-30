import { motion } from 'motion/react';
import { Percent, ShieldCheck, Building2, Ship, Zap, FileText } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Advantages() {
  const { t } = useLanguage();

  const advantages = [
    {
      icon: <Percent className="w-6 h-6" />,
      title: t('adv_1_title'),
      description: t('adv_1_desc')
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: t('adv_2_title'),
      description: t('adv_2_desc')
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: t('adv_3_title'),
      description: t('adv_3_desc')
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: t('adv_4_title'),
      description: t('adv_4_desc')
    },
    {
      icon: <Ship className="w-6 h-6" />,
      title: t('adv_5_title'),
      description: t('adv_5_desc')
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: t('adv_6_title'),
      description: t('adv_6_desc')
    }
  ];

  return (
    <section id="advantages" className="py-24 bg-zinc-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="sticky top-32"
            >
              <h2 className="text-sm font-bold tracking-widest uppercase text-orange-400 mb-3">{t('adv_tag')}</h2>
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">
                {t('adv_title')}
              </h3>
              <p className="text-zinc-400 text-lg mb-8">
                {t('adv_desc')}
              </p>
              <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-orange-600 text-white font-semibold hover:bg-orange-500 transition-colors">
                {t('adv_btn')}
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-2">
            <div className="grid sm:grid-cols-2 gap-8">
              {advantages.map((adv, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-zinc-800/50 border border-zinc-700 p-8 rounded-2xl hover:bg-zinc-800 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center mb-6">
                    {adv.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-3">{adv.title}</h4>
                  <p className="text-zinc-400 leading-relaxed">
                    {adv.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
