import { motion } from 'motion/react';
import { User } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Leadership() {
  const { t } = useLanguage();

  const board = [
    {
      name: 'Sony Panukma Widianto ST., MSc.',
      role: t('lead_role_1'),
      image: '/president-director.jpg',
    },
    {
      name: 'Bashar Jazmati BBA., MBA.',
      role: t('lead_role_2'),
      image: '/director-investment.jpg',
    },
    {
      name: 'Salim Binggoli SM., MM.',
      role: t('lead_role_3'),
      image: '/commisioner.jpg',
    }
  ];

  return (
    <section id="leadership" className="py-24 bg-white border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest uppercase text-orange-600 mb-3">{t('lead_tag')}</h2>
          <div className="flex justify-center mb-8">
            <img 
              src="/bpst-logo.png.png?v=2" 
              alt="BPST Logo" 
              className="h-24 md:h-32 w-auto object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-zinc-900 mb-6">
            {t('lead_title')}
          </h3>
          <p className="text-zinc-600 text-lg">
            {t('lead_desc')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {board.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100 text-center hover:shadow-lg hover:border-orange-100 transition-all duration-300 group"
            >
              <div className="w-32 h-32 mx-auto bg-white rounded-full flex items-center justify-center mb-6 text-zinc-300 shadow-sm border border-zinc-100 group-hover:border-orange-500 transition-all duration-300 overflow-hidden relative">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover z-10 group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <User className="w-12 h-12 absolute hidden group-hover:text-orange-500 transition-colors duration-300" />
              </div>
              <h4 className="text-xl font-bold text-zinc-900 mb-2">{member.name}</h4>
              <p className="text-orange-600 font-medium">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
