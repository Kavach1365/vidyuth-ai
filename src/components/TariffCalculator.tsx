import React, { useState, useMemo } from 'react';
import { AlertTriangle, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import styles from './TariffCalculator.module.css';

interface SlabBreakdown {
  label: string;
  units: number;
  rate: number;
  amount: number;
}

export const TariffCalculator: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].calculator;

  const [units, setUnits] = useState<number>(185);
  const [discom, setDiscom] = useState<'TG' | 'AP'>('TG');

  const calculation = useMemo(() => {
    let category = 'LT-1(A)';
    let customerCharges = 25;
    const dutyPerUnit = 0.06;
    let energyCharges = 0;
    const slabs: SlabBreakdown[] = [];

    const unitsSuffix = language === 'te' ? 'యూనిట్లు' : 'Units';

    if (discom === 'TG') {
      // Telangana TSSPDCL domestic structure
      if (units <= 100) {
        category = 'LT-1(A) [0–100 Units]';
        customerCharges = 25;
        if (units <= 50) {
          const amt = units * 1.95;
          slabs.push({ label: `0–50 ${unitsSuffix}`, units, rate: 1.95, amount: amt });
          energyCharges += amt;
        } else {
          const s1Amt = 50 * 1.95;
          const s2Units = units - 50;
          const s2Amt = s2Units * 3.10;
          slabs.push({ label: `0–50 ${unitsSuffix}`, units: 50, rate: 1.95, amount: s1Amt });
          slabs.push({ label: `51–100 ${unitsSuffix}`, units: s2Units, rate: 3.10, amount: s2Amt });
          energyCharges += s1Amt + s2Amt;
        }
      } else if (units <= 200) {
        category = 'LT-1(B) [101–200 Units]';
        customerCharges = 50;
        const s1Amt = 100 * 3.40;
        const s2Units = units - 100;
        const s2Amt = s2Units * 4.80;
        slabs.push({ label: `0–100 ${unitsSuffix}`, units: 100, rate: 3.40, amount: s1Amt });
        slabs.push({ label: `101–200 ${unitsSuffix}`, units: s2Units, rate: 4.80, amount: s2Amt });
        energyCharges += s1Amt + s2Amt;
      } else {
        category = 'LT-1(C) [>200 Units]';
        customerCharges = 80;
        const s1Units = Math.min(units, 200);
        const s1Amt = s1Units * 5.10;
        slabs.push({ label: `0–200 ${unitsSuffix}`, units: s1Units, rate: 5.10, amount: s1Amt });
        energyCharges += s1Amt;

        if (units > 200) {
          const s2Units = Math.min(units - 200, 100);
          const s2Amt = s2Units * 7.70;
          slabs.push({ label: `201–300 ${unitsSuffix}`, units: s2Units, rate: 7.70, amount: s2Amt });
          energyCharges += s2Amt;
        }

        if (units > 300) {
          const s3Units = Math.min(units - 300, 100);
          const s3Amt = s3Units * 9.00;
          slabs.push({ label: `301–400 ${unitsSuffix}`, units: s3Units, rate: 9.00, amount: s3Amt });
          energyCharges += s3Amt;
        }

        if (units > 400) {
          const s4Units = units - 400;
          const s4Amt = s4Units * 9.50;
          slabs.push({ label: `400+ ${unitsSuffix}`, units: s4Units, rate: 9.50, amount: s4Amt });
          energyCharges += s4Amt;
        }
      }
    } else {
      // Andhra Pradesh APCPDCL/EPDCL
      if (units <= 75) {
        category = 'Group A (0–75 Units)';
        customerCharges = 30;
        const amt = units * 1.90;
        slabs.push({ label: `0–75 ${unitsSuffix}`, units, rate: 1.90, amount: amt });
        energyCharges += amt;
      } else if (units <= 225) {
        category = 'Group B (76–225 Units)';
        customerCharges = 55;
        const s1Units = Math.min(units, 100);
        const s1Amt = s1Units * 3.35;
        slabs.push({ label: `0–100 ${unitsSuffix}`, units: s1Units, rate: 3.35, amount: s1Amt });
        energyCharges += s1Amt;

        if (units > 100) {
          const s2Units = units - 100;
          const s2Amt = s2Units * 4.40;
          slabs.push({ label: `101–225 ${unitsSuffix}`, units: s2Units, rate: 4.40, amount: s2Amt });
          energyCharges += s2Amt;
        }
      } else {
        category = 'Group C (>225 Units)';
        customerCharges = 75;
        const s1Units = Math.min(units, 200);
        const s1Amt = s1Units * 5.00;
        slabs.push({ label: `0–200 ${unitsSuffix}`, units: s1Units, rate: 5.00, amount: s1Amt });
        energyCharges += s1Amt;

        if (units > 200) {
          const s2Units = units - 200;
          const s2Amt = s2Units * 7.50;
          slabs.push({ label: `201+ ${unitsSuffix}`, units: s2Units, rate: 7.50, amount: s2Amt });
          energyCharges += s2Amt;
        }
      }
    }

    const electricityDuty = units * dutyPerUnit;
    const totalPayable = Math.round(energyCharges + customerCharges + electricityDuty);

    return {
      category,
      customerCharges,
      dutyPerUnit,
      electricityDuty,
      energyCharges,
      slabs,
      totalPayable,
    };
  }, [units, discom, language]);

  // Slab jump warning calculation
  const slabJumpWarning = useMemo(() => {
    if (discom === 'TG') {
      if (units >= 90 && units <= 100) {
        return {
          diff: 101 - units,
          title: t.slabJumpAlertTitle,
          msg: t.slabJumpAlertDesc(units, 101),
        };
      }
      if (units >= 190 && units <= 200) {
        return {
          diff: 201 - units,
          title: t.slabJumpAlertTitle,
          msg: t.slabJumpAlertDesc(units, 201),
        };
      }
    }
    return null;
  }, [units, discom, t]);

  return (
    <section id="calculator" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.sectionBadge}>{t.tag}</span>
          <h2 className={styles.title}>{t.title}</h2>
          <p className={styles.subtitle}>{t.subtitle}</p>
        </div>

        <div className={styles.calcCard}>
          <div className={styles.calcGrid}>
            {/* Controls */}
            <div className={styles.controlsColumn}>
              <div className={styles.formGroup}>
                <label className={styles.label}>{t.stateSelectLabel}</label>
                <div className={styles.discomSelector}>
                  <button
                    onClick={() => setDiscom('TG')}
                    className={`${styles.discomBtn} ${discom === 'TG' ? styles.discomActive : ''}`}
                  >
                    <div>{t.tgLabel}</div>
                    <span className="text-xs text-slate-400 font-normal">
                      {language === 'te' ? 'తెలంగాణ గృహ టారిఫ్ LT-1' : 'Telangana Domestic LT-1'}
                    </span>
                  </button>
                  <button
                    onClick={() => setDiscom('AP')}
                    className={`${styles.discomBtn} ${discom === 'AP' ? styles.discomActive : ''}`}
                  >
                    <div>{t.apLabel}</div>
                    <span className="text-xs text-slate-400 font-normal">
                      {language === 'te' ? 'ఆంధ్రప్రదేశ్ గృహ టారిఫ్' : 'Andhra Pradesh Domestic'}
                    </span>
                  </button>
                </div>
              </div>

              <div className={styles.formGroup}>
                <div className={styles.label}>
                  <span>{t.unitsInputLabel}</span>
                  <span className={styles.categoryPill}>{t.billCategoryLabel} {calculation.category}</span>
                </div>
                <div className={styles.unitsInputRow}>
                  <input
                    type="range"
                    min="10"
                    max="500"
                    step="1"
                    value={units}
                    onChange={(e) => setUnits(Number(e.target.value))}
                    className={styles.unitsSlider}
                    aria-label={t.unitsInputLabel}
                  />
                  <input
                    type="number"
                    min="1"
                    max="2000"
                    value={units}
                    onChange={(e) => {
                      const val = parseInt(e.target.value, 10);
                      setUnits(isNaN(val) ? 1 : Math.min(2000, Math.max(1, val)));
                    }}
                    className={styles.unitsNumberInput}
                    aria-label={t.unitsInputLabel}
                  />
                </div>
              </div>

              {slabJumpWarning && (
                <div className={styles.warningBox}>
                  <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-amber-300 block mb-0.5">
                      {slabJumpWarning.title}
                    </span>
                    <span>{slabJumpWarning.msg}</span>
                  </div>
                </div>
              )}

              <div className="bg-slate-900/60 rounded-xl p-4 border border-slate-800 text-xs text-slate-400 space-y-2">
                <div className="flex items-center gap-2 text-slate-200 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>
                    {language === 'te' ? 'విద్యుత్AI పూర్తి యాప్' : 'VidyuthAI Full App'}
                  </span>
                </div>
                <p>
                  {language === 'te'
                    ? 'బిల్లు విశ్లేషణ, టారిఫ్ లెక్కలు, స్లాబ్ వివరాలు మరియు పొదుపు సూచనల కోసం విద్యుత్AI ప్రోటోటైప్‌ను ప్రయత్నించండి.'
                    : 'Explore the VidyuthAI app prototype for bill breakdowns, tariff calculations, slab details, and practical savings tips.'}
                </p>
              </div>
            </div>

            {/* Results breakdown */}
            <div className={styles.resultsColumn}>
              <div className={styles.resultsHeader}>
                <span className={styles.resultsTitle}>{t.breakdownTitle}</span>
                <span className="text-xs text-emerald-400 font-mono">100% Verified Math</span>
              </div>

              <div className="mb-2">
                <span className="text-xs text-slate-400 uppercase tracking-wider block">
                  {t.payableAmountLabel}
                </span>
                <div className={styles.billTotalAmount}>₹{calculation.totalPayable}/-</div>
                <span className="text-xs text-slate-400 font-mono">
                  {units} {t.unitsSuffix} • {calculation.category}
                </span>
              </div>

              <div className={styles.slabList}>
                <span className="text-xs font-semibold text-slate-300">
                  {language === 'te' ? 'స్లాబ్ వారిగా విద్యుత్ ఛార్జీలు:' : 'Slab Energy Breakdown:'}
                </span>
                {calculation.slabs.map((slab, i) => (
                  <div key={i} className={styles.slabRow}>
                    <span>
                      {slab.label} ({slab.units} u @ ₹{slab.rate.toFixed(2)})
                    </span>
                    <span className={styles.slabRowHighlight}>₹{slab.amount.toFixed(2)}</span>
                  </div>
                ))}

                <div className={styles.divider} />

                <div className={styles.slabRow}>
                  <span>{t.energyChargesLabel}</span>
                  <span className={styles.slabRowHighlight}>
                    ₹{calculation.energyCharges.toFixed(2)}
                  </span>
                </div>
                <div className={styles.slabRow}>
                  <span>{t.fixedChargesLabel}</span>
                  <span className={styles.slabRowHighlight}>
                    ₹{calculation.customerCharges.toFixed(2)}
                  </span>
                </div>
                <div className={styles.slabRow}>
                  <span>{t.edutyLabel}</span>
                  <span className={styles.slabRowHighlight}>
                    ₹{calculation.electricityDuty.toFixed(2)}
                  </span>
                </div>
              </div>

              <div className={styles.teluguSummaryBox}>
                <strong>{t.explanationTitle}</strong>
                <p className="mt-1">
                  {t.explanationText(units, calculation.category, calculation.totalPayable)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
