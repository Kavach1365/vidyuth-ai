import React from 'react';
import { Camera, Calculator, Volume2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import { WhatsAppIcon } from './WhatsAppIcon';
import styles from './HowItWorks.module.css';

export const HowItWorks: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].howItWorks;

  const stepIcons = [WhatsAppIcon, Camera, Calculator, Volume2];

  return (
    <section id="how-it-works" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.sectionBadge}>{t.tag}</span>
          <h2 className={styles.title}>{t.title}</h2>
          <p className={styles.subtitle}>{t.subtitle}</p>
        </div>

        {/* 4 Steps */}
        <div className={styles.stepsGrid}>
          {t.steps.map((st, i) => {
            const Icon = stepIcons[i % stepIcons.length];
            return (
              <div key={i} className={styles.stepCard}>
                <div className={styles.stepTop}>
                  <div className={styles.stepIcon}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className={styles.stepNumber}>{st.stepNumber}</span>
                </div>
                <h3 className={styles.stepTitle}>{st.title}</h3>
                <p className={styles.stepDesc}>{st.description}</p>
                <div className={styles.stepDetail}>{st.detail}</div>
              </div>
            );
          })}
        </div>

        {/* Real User Scenarios / Who is it for */}
        <div className={styles.personasWrapper}>
          <div className={styles.personasHeader}>
            <span className="text-xs uppercase font-mono tracking-wider text-emerald-400 block mb-1">
              {language === 'te' ? 'వినియోగదారుల అనుభవాలు' : 'Everyday Utility'}
            </span>
            <h3 className={styles.personasTitle}>{t.personaHeading}</h3>
            <p className="text-sm text-slate-400">{t.personaSubheading}</p>
          </div>

          <div className={styles.personasList}>
            {t.personas.map((p, idx) => (
              <div key={idx} className={styles.personaCard}>
                <h4 className={styles.personaHeading}>{p.title}</h4>
                <div className={styles.personaQuote}>{p.quote}</div>
                <p className={styles.personaBenefit}>{p.benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
