import React from 'react';
import { Zap, Heart, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import { WhatsAppIcon } from './WhatsAppIcon';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].footer;

  const WHATSAPP_NUMBER = '15551814359';
  const CONTACT_EMAIL = 'kavach1365@gmail.com';

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${t.whatsappPreFilledText}`;

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topRow}>
          {/* Brand info */}
          <div className={styles.brandCol}>
            <div className={styles.logoRow}>
              <div className={styles.logoIcon}>
                <Zap className="w-4 h-4 text-emerald-950 fill-emerald-950" />
              </div>
              <span className={styles.brandTitle}>
                Vidyuth
                <span className="text-emerald-400">AI</span>
              </span>
            </div>
            <p className={styles.tagline}>{t.tagline}</p>
            <span className={styles.teluguMotto}>{t.subMotto}</span>
          </div>

          {/* Quick Links */}
          <div className={styles.linksCol}>
            <span className={styles.colHeading}>{t.productHeading}</span>
            <a href="#how-it-works" className={styles.footerLink}>{t.howItWorks}</a>
            <a href="#problem" className={styles.footerLink}>{t.whyItMatters}</a>
            <a href="#calculator" className={styles.footerLink}>{t.calculator}</a>
            <a href="#faq" className={styles.footerLink}>{t.faq}</a>
          </div>

          {/* Direct Contact & Support */}
          <div className={styles.linksCol}>
            <span className={styles.colHeading}>{t.connectHeading}</span>
            <a href="#interested" className={styles.footerLink}>
              {t.showInterest}
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.footerLink} flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300`}
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>{t.chatWhatsapp}</span>
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=VidyuthAI%20Inquiry`}
              className={`${styles.footerLink} flex items-center gap-1.5`}
            >
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              <span>{t.emailSupport}</span>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottomRow}>
          <div>{t.copyright}</div>
          <div className={styles.madeWithHeart}>
            <span>{t.madeWithLove}</span>
            <Heart className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500 inline ml-1" />
          </div>
        </div>
      </div>
    </footer>
  );
};
