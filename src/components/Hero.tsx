import React from 'react';
import { Zap, Play, CheckCircle, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import { WhatsAppIcon } from './WhatsAppIcon';
import styles from './Hero.module.css';

interface HeroProps {
  onOpenInterested: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInterested }) => {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Column: Headlines & Human CTAs */}
          <div>
            <div className={styles.badge}>
              <span className={styles.badgeDot} />
              <span>{t.badge}</span>
            </div>

            <h1 className={styles.heading}>
              {t.headingPrefix}
              <span className={styles.highlightText}>{t.headingHighlight}</span>
              {t.headingSuffix}
            </h1>

            <div className={styles.teluguHook}>
              <Zap className="w-5 h-5 text-amber-400 fill-amber-400 inline" />
              <span>{t.teluguHook}</span>
            </div>

            <p className={styles.description}>
              {t.description}
            </p>

            <div className={styles.ctaGroup}>
              <button onClick={onOpenInterested} className={styles.primaryCta}>
                <WhatsAppIcon className="w-4 h-4" />
                <span>{t.ctaPrimary}</span>
              </button>

              <a href="#calculator" className={styles.secondaryCta}>
                <span>{t.ctaSecondary}</span>
              </a>
            </div>

            <div className={styles.metricsGrid}>
              <div className={styles.metricItem}>
                <span className={styles.metricVal}>{t.stat1Value}</span>
                <span className={styles.metricLabel}>{t.stat1Label}</span>
              </div>
              <div className={styles.metricItem}>
                <span className={styles.metricVal}>{t.stat2Value}</span>
                <span className={styles.metricLabel}>{t.stat2Label}</span>
              </div>
              <div className={styles.metricItem}>
                <span className={styles.metricVal}>{t.stat3Value}</span>
                <span className={styles.metricLabel}>{t.stat3Label}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Realistic WhatsApp interface */}
          <div>
            <div className={styles.phoneFrame}>
              {/* WhatsApp App Bar */}
              <div className={styles.phoneHeader}>
                <div className={styles.profileInfo}>
                  <div className={styles.avatar}>
                    <Zap className="w-4 h-4 text-emerald-950 fill-emerald-950" />
                  </div>
                  <div className={styles.profileText}>
                    <span className={styles.profileName}>{t.chatContactName}</span>
                    <span className={styles.profileStatus}>{t.chatOnlineStatus}</span>
                  </div>
                </div>
                <span className="text-[11px] bg-slate-800 px-2 py-0.5 rounded text-slate-300 font-mono">
                  TGSPDCL / APCPDCL
                </span>
              </div>

              {/* Chat Canvas with authentic WhatsApp theme */}
              <div className={styles.chatBody}>
                {/* User sent bill photo */}
                <div className={styles.userBubble}>
                  <div className="bg-emerald-900/40 rounded p-1.5 mb-1 text-xs font-mono text-emerald-300 flex items-center gap-1.5 border border-emerald-500/20">
                    <span>{t.userBillAttached}</span>
                  </div>
                  <span className="text-xs text-slate-200">
                    {t.userMessage}
                  </span>
                  <span className="text-[10px] text-slate-400 block text-right mt-1">10:42 AM ✓✓</span>
                </div>

                {/* Assistant Answer */}
                <div className={styles.botBubble}>
                  <div className="text-xs font-bold text-emerald-400 mb-1 flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{language === 'te' ? 'బిల్లు ధృవీకరించబడింది' : 'Bill Verified'}</span>
                  </div>
                  <p className={`${styles.teluguText} text-xs mb-1.5 leading-relaxed`}>
                    {language === 'te' ? (
                      <>
                        నమస్కారం! మీ బిల్లు <strong>220 యూనిట్లు</strong> వచ్చింది. మొత్తం చెల్లించవలసిన బిల్లు: <strong>₹980/-</strong>.
                      </>
                    ) : (
                      <>
                        Hello! Your bill is for <strong>220 units</strong>. Total payable amount: <strong>₹980/-</strong>.
                      </>
                    )}
                  </p>

                  <div className={styles.receiptCard}>
                    <div className={styles.receiptRow}>
                      <span>{language === 'te' ? '0-100 యూనిట్లు (@ ₹3.30):' : '0-100 Units (@ ₹3.30):'}</span>
                      <span className={styles.receiptAmount}>₹330.00</span>
                    </div>
                    <div className={styles.receiptRow}>
                      <span>{language === 'te' ? '101-200 యూనిట్లు (@ ₹4.30):' : '101-200 Units (@ ₹4.30):'}</span>
                      <span className={styles.receiptAmount}>₹430.00</span>
                    </div>
                    <div className={styles.receiptRow}>
                      <span>{language === 'te' ? '201-220 యూనిట్లు (@ ₹5.00):' : '201-220 Units (@ ₹5.00):'}</span>
                      <span className={styles.receiptAmount}>₹100.00</span>
                    </div>
                    <div className={styles.receiptRow}>
                      <span>{language === 'te' ? 'ఫిక్స్‌డ్ & డ్యూటీ ఛార్జీలు:' : 'Fixed & Duty Charges:'}</span>
                      <span className={styles.receiptAmount}>₹120.00</span>
                    </div>
                    <div className={`${styles.receiptRow} ${styles.receiptTotal}`}>
                      <span>{language === 'te' ? 'మొత్తం బిల్లు:' : 'Total Payable Bill:'}</span>
                      <span>₹980.00</span>
                    </div>
                  </div>

                  {/* WhatsApp Voice Note preview */}
                  <div className={styles.voiceNoteWidget}>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-emerald-950">
                        <Play className="w-3 h-3 fill-emerald-950 ml-0.5" />
                      </div>
                      <span className="text-xs text-emerald-300 font-medium">
                        {language === 'te' ? 'తెలుగు వాయిస్ నోట్ (0:24)' : 'Voice Note Summary (0:24)'}
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-400 font-mono">
                      {language === 'te' ? 'ఆడియో నోట్' : 'Audio Note'}
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400 block text-right mt-1">10:42 AM</span>
                </div>
              </div>

              {/* Status bar */}
              <div className={styles.phoneFooter}>
                <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  {language === 'te' ? 'అధికారిక టారిఫ్ లెక్కలు' : 'Official Slab Calculations'}
                </span>
                <span>{language === 'te' ? 'వాట్సాప్‌లోనే ప్రత్యక్షం' : 'Direct on WhatsApp'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
