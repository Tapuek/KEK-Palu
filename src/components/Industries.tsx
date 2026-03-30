import { motion } from 'motion/react';
import { Factory, Wheat, Cpu, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Industries() {
  const { t } = useLanguage();

  const industries = [
    {
      id: 'minerals',
      title: t('ind_1_title'),
      subtitle: t('ind_1_sub'),
      description: t('ind_1_desc'),
      icon: <Factory className="w-8 h-8" />,
      image: '/mineral-processing.jpg.png',
      color: 'from-orange-500 to-red-600',
      bgLight: 'bg-orange-50',
      iconColor: 'text-orange-600'
    },
    {
      id: 'agriculture',
      title: t('ind_2_title'),
      subtitle: t('ind_2_sub'),
      description: t('ind_2_desc'),
      icon: <Wheat className="w-8 h-8" />,
      image: '/agriculture-pic.jpg.jpg',
      color: 'from-emerald-500 to-green-600',
      bgLight: 'bg-emerald-50',
      iconColor: 'text-emerald-600'
    },
    {
      id: 'other',
      title: t('ind_3_title'),
      subtitle: t('ind_3_sub'),
      description: t('ind_3_desc'),
      icon: <Cpu className="w-8 h-8" />,
      image: '/manufacturing-pic.png.jfif',
      color: 'from-amber-500 to-yellow-600',
      bgLight: 'bg-amber-50',
      iconColor: 'text-amber-600'
    }
  ];

  return (
    <section id="industries" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest uppercase text-orange-600 mb-3">{t('ind_tag')}</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-zinc-900 mb-6">
            {t('ind_title')}
          </h3>
          <p className="text-zinc-600 text-lg">
            {t('ind_desc')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {industries.map((ind, index) => (
            <motion.div
              key={ind.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-zinc-100 flex flex-col"
            >
              <div className="h-48 overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-t ${ind.color} mix-blend-multiply opacity-40 group-hover:opacity-20 transition-opacity z-10`} />
                <img 
                  src={ind.image} 
                  alt={ind.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className={`w-16 h-16 rounded-xl ${ind.bgLight} ${ind.iconColor} flex items-center justify-center mb-6 -mt-16 relative z-20 shadow-lg border border-white`}>
                  {ind.icon}
                </div>
                
                <h4 className="text-xl font-display font-bold text-zinc-900 mb-1">{ind.title}</h4>
                <p className="text-sm font-medium text-zinc-500 mb-4">{ind.subtitle}</p>
                <p className="text-zinc-600 mb-8 flex-1">
                  {ind.description}
                </p>
                
                <a href="#contact" className={`inline-flex items-center gap-2 text-sm font-bold ${ind.iconColor} hover:gap-3 transition-all mt-auto`}>
                  {t('ind_learn_more')} <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
