import React, { useState } from 'react';
import { Zap, Menu, X, Globe, Moon, Sun } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { translations } from '../translations/translations';
import { WhatsAppIcon } from './WhatsAppIcon';
import styles from './Navbar.module.css';

interface NavbarProps {
  onOpenInterested: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInterested }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const t = translations[language].navbar;
  const themeToggleLabel = theme === 'dark'
    ? language === 'te' ? 'లైట్ థీమ్‌కు మార్చండి' : 'Switch to light theme'
    : language === 'te' ? 'డార్క్ థీమ్‌కు మార్చండి' : 'Switch to dark theme';

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Brand Logo */}
        <a href="#" className={styles.brand} onClick={() => setMobileMenuOpen(false)}>
          <div className={styles.logoIconWrapper}>
            <Zap className="w-5 h-5 text-emerald-950 fill-emerald-950" />
          </div>
          <div className={styles.brandTitleGroup}>
            <div className={styles.brandTitleRow}>
              <span className={styles.brandName}>
                {t.brandName}
                {language === 'te' ? ' ' : ''}
                <span className={styles.brandAccent}>{t.brandAccent}</span>
              </span>
              <span className={styles.badge}>{t.badge}</span>
            </div>
            <span className={styles.teluguSubtitle}>
              {t.brandSubtitle}
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className={styles.navLinks}>
          <a href="#how-it-works" className={styles.navLink}>{t.howItWorks}</a>
          <a href="#problem" className={styles.navLink}>{t.whyItMatters}</a>
          <a href="#calculator" className={`${styles.navLink} ${styles.navLinkHighlight}`}>
            {t.calculator}
          </a>
          <a href="#faq" className={styles.navLink}>{t.faq}</a>
        </div>

        {/* Action Button & Language Switcher */}
        <div className={styles.actions}>
          <button
            type="button"
            onClick={toggleTheme}
            className={styles.themeToggle}
            aria-label={themeToggleLabel}
            title={themeToggleLabel}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <div className={styles.langSwitchWrapper} role="group" aria-label={t.langSwitchLabel}>
            <button
              type="button"
              onClick={() => setLanguage('te')}
              className={`${styles.langBtn} ${language === 'te' ? styles.langBtnActive : ''}`}
            >
              తెలుగు
            </button>
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`${styles.langBtn} ${language === 'en' ? styles.langBtnActive : ''}`}
            >
              English
            </button>
          </div>

          <button onClick={onOpenInterested} className={styles.primaryButton}>
            <WhatsAppIcon className="w-4 h-4" />
            <span>{t.showInterest}</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={styles.mobileMenuBtn}
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className={styles.mobileDropdown}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.4rem 0.5rem', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '0.85rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Globe className="w-4 h-4 text-emerald-400" />
              {t.langSwitchLabel}:
            </span>
            <div className={styles.langSwitchWrapper}>
              <button
                type="button"
                onClick={() => setLanguage('te')}
                className={`${styles.langBtn} ${language === 'te' ? styles.langBtnActive : ''}`}
              >
                తెలుగు
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`${styles.langBtn} ${language === 'en' ? styles.langBtnActive : ''}`}
              >
                English
              </button>
            </div>
          </div>

          <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className={styles.mobileLink}>
            {t.howItWorks}
          </a>
          <a href="#problem" onClick={() => setMobileMenuOpen(false)} className={styles.mobileLink}>
            {t.whyItMatters}
          </a>
          <a href="#calculator" onClick={() => setMobileMenuOpen(false)} className={`${styles.mobileLink} ${styles.navLinkHighlight}`}>
            {t.calculator}
          </a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)} className={styles.mobileLink}>
            {t.faq}
          </a>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenInterested();
            }}
            className={styles.primaryButton}
            style={{ width: '100%', justifyContent: 'center', marginTop: '0.75rem' }}
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>{t.showInterest}</span>
          </button>
        </div>
      )}
    </nav>
  );
};
