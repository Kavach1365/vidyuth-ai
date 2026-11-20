import React from 'react';
import { Mail, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import { WhatsAppIcon } from './WhatsAppIcon';
import styles from './EarlyAccess.module.css';

export const EarlyAccess: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].earlyAccess;

  const WHATSAPP_NUMBER = '15551814359';
  const CONTACT_EMAIL = 'kavach1365@gmail.com';

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${t.whatsappPreFilledText}`;

  const emailSubject = encodeURIComponent(
    language === 'te'
      ? 'VidyuthAI - ప్రోటోటైప్ విచారణ'
      : 'VidyuthAI Prototype Inquiry'
  );
  const emailBody = encodeURIComponent(
    language === 'te'
      ? 'నమస్కారం VidyuthAI బృందం,\n\nవిద్యుత్ బిల్లు విశ్లేషణ కోసం VidyuthAI ప్రోటోటైప్‌ను ప్రయత్నించాలనుకుంటున్నాను.\n\nప్రాంతం/డిస్కం:\nఫోన్ నంబర్:'
      : 'Hi VidyuthAI team,\n\nI would like to try the VidyuthAI prototype for my household electricity bill.\n\nLocation/DISCOM:\nPhone:'
  );
  const emailUrl = `mailto:${CONTACT_EMAIL}?subject=${emailSubject}&body=${emailBody}`;

  return (
    <section id="interested" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.statusBadge}>
            <span className={styles.badgeDot} />
            <span>{t.badge}</span>
          </div>

          <h2 className={styles.title}>
            {t.title}
          </h2>

          <p className={styles.description}>
            {t.subtitle}
          </p>

          {/* 1-Tap Redirect Actions */}
          <div className={styles.actionGroup}>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappDirectBtn}
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>{t.whatsappBtn}</span>
            </a>

            <a href={emailUrl} className={styles.emailDirectBtn}>
              <Mail className="w-4 h-4 text-slate-300" />
              <span>{t.emailBtn}</span>
            </a>
          </div>

          <div className={styles.guaranteeRow}>
            <div className={styles.guaranteeItem}>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t.badge1}</span>
            </div>
            <div className={styles.guaranteeItem}>
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t.badge2}</span>
            </div>
            <div className={styles.guaranteeItem}>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t.badge3}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
