import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { Problem } from './components/Problem';
import { TariffCalculator } from './components/TariffCalculator';
import { FAQ } from './components/FAQ';
import { EarlyAccess } from './components/EarlyAccess';
import { Footer } from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import styles from './App.module.css';

function MainLayout() {
  React.useEffect(() => {
    // Reset scroll position to top on initial page load / refresh
    window.scrollTo(0, 0);

    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const scrollToInterested = () => {
    const el = document.getElementById('interested');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.appWrapper}>
      <Navbar onOpenInterested={scrollToInterested} />

      <main className={styles.mainContent}>
        <Hero onOpenInterested={scrollToInterested} />
        <HowItWorks />
        <Problem />
        <TariffCalculator />
        <FAQ />
        <EarlyAccess />
      </main>

      <Footer />
    </div>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <LanguageProvider defaultLang="te">
        <MainLayout />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
