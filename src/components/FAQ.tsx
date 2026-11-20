import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import styles from './FAQ.module.css';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { language } = useLanguage();
  const t = translations[language].faq;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.sectionBadge}>{t.tag}</span>
          <h2 className={styles.title}>{t.title}</h2>
          <p className={styles.subtitle}>{t.subtitle}</p>
        </div>

        <div className={styles.faqList}>
          {t.items.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className={`${styles.faqItem} ${isOpen ? styles.faqOpen : ''}`}>
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className={styles.questionButton}
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <div className={`${styles.iconWrapper} ${isOpen ? styles.iconOpen : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className={styles.answerBox}>
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
