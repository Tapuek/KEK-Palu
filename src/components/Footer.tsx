import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import Logo from './Logo';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-white text-zinc-600 pt-20 pb-10 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center gap-4">
              <Logo 
                className="w-32 md:w-40 h-auto" 
              />
              <img 
                src="/bpst-logo.png.png?v=2" 
                alt="BPST Logo" 
                className="h-12 md:h-16 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed mb-6">
              {t('foot_desc')}
            </p>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-zinc-900 font-bold mb-6">{t('foot_links')}</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#about" className="hover:text-orange-600 transition-colors">{t('nav_about')}</a></li>
              <li><a href="#industries" className="hover:text-orange-600 transition-colors">{t('nav_industries')}</a></li>
              <li><a href="#advantages" className="hover:text-orange-600 transition-colors">{t('nav_advantages')}</a></li>
              <li><a href="#infrastructure" className="hover:text-orange-600 transition-colors">{t('nav_infrastructure')}</a></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-zinc-900 font-bold mb-6">{t('foot_gov')}</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="https://kek.go.id" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 transition-colors">{t('foot_gov_1')}</a></li>
              <li><a href="https://www.bkpm.go.id" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 transition-colors">{t('foot_gov_2')}</a></li>
              <li><a href="https://palukota.go.id" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 transition-colors">{t('foot_gov_3')}</a></li>
              <li><a href="https://sultengprov.go.id" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 transition-colors">{t('foot_gov_4')}</a></li>
            </ul>
          </div>
        </div>

        <div className="bg-zinc-50 p-6 md:p-8 rounded-2xl border border-zinc-100 mb-16">
          <h4 className="text-zinc-900 font-bold mb-6">{t('foot_contact_title')}</h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <span>
                  <strong>PT. Bangun Palu Sulawesi Tengah</strong><br />
                  {t('foot_addr_1_title')}<br />
                  <span className="whitespace-pre-line">{t('foot_addr_1_desc')}</span>
                </span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <span>
                  <strong>PT. Bangun Palu Sulawesi Tengah</strong><br />
                  {t('foot_addr_2_title')}<br />
                  <span className="whitespace-pre-line">{t('foot_addr_2_desc')}</span>
                </span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-sm">
                <Phone className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span>085974134618 (Mr. Syamsul Bahri)</span>
                  <span>082264861673 (Ms. Siti Rahma Hidayati)</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-5 h-5 text-orange-500 shrink-0" />
                <span>info@kek-palu.com</span>
              </div>
            </div>
            <div className="flex sm:justify-end items-start lg:justify-end">
              <a href="mailto:info@kek-palu.com" className="inline-flex items-center gap-2 text-sm font-bold text-orange-600 hover:text-orange-500 mt-2">
                {t('foot_inquiry')} <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
          <p>&copy; {new Date().getFullYear()} {t('foot_rights')}</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-zinc-900">{t('foot_privacy')}</a>
            <a href="#" className="hover:text-zinc-900">{t('foot_terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
