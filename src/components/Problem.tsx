import React from 'react';
import { TrendingUp, HelpCircle, Globe2, FileSpreadsheet } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import styles from './Problem.module.css';

export const Problem: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].problem;

  const icons = [TrendingUp, HelpCircle, Globe2, FileSpreadsheet];

  return (
    <section id="problem" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.sectionBadge}>{t.tag}</span>
          <h2 className={styles.title}>{t.title}</h2>
          <p className={styles.subtitle}>{t.subtitle}</p>
        </div>

        <div className={styles.grid}>
          {t.cards.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div key={index} className={styles.card}>
                <div className={styles.iconWrapper}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.problem}</p>
                <div style={{ marginTop: '0.75rem', fontSize: '0.8rem', color: '#34d399', fontWeight: 500 }}>
                  ✓ {item.solution}
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.calloutBox}>
          <div className={styles.calloutText}>
            <h4 className={styles.calloutHeading}>
              {language === 'te'
                ? 'వాస్తవం: 82% మంది వినియోగదారులు బిల్లు అర్థం చేసుకోకుండానే చెల్లిస్తున్నారు'
                : 'The Reality: 82% of consumers pay without understanding their bill'}
            </h4>
            <p className={styles.calloutDesc}>
              {language === 'te'
                ? 'బిల్లు ఎందుకు పెరిగింది అని అడిగితే చాలామంది రేట్లు పెరిగాయని లేదా మీటర్ ఫాల్ట్ అనుకుంటారు. కానీ అసలు కారణం స్లాబ్ దాటడమే. VidyuthAIతో ప్రతి పైసా లెక్క స్పష్టంగా తెలుసుకోండి.'
                : 'When asked why their bill increased, most consumers assume meter faults or mystery hikes. In reality, crossed slab thresholds are usually responsible. VidyuthAI replaces ambiguity with total clarity.'}
            </p>
          </div>
          <div className={styles.calloutStat}>
            <span className={styles.statNumber}>4.2 Cr+</span>
            <span className={styles.statLabel}>
              {language === 'te' ? 'తెలుగు రాష్ట్రాల గృహ వినియోగదారులు' : 'Households in TG & AP'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
