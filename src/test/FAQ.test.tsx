import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { FAQ } from '../components/FAQ';
import { LanguageProvider } from '../context/LanguageContext';

describe('FAQ Component', () => {
  it('renders FAQs in default Telugu and toggles open/close on click', () => {
    render(
      <LanguageProvider defaultLang="te">
        <FAQ />
      </LanguageProvider>
    );
    expect(screen.getByText(/తరచుగా అడిగే ప్రశ్నలు/i)).toBeInTheDocument();

    const firstQuestion = screen.getByText(/నేను ఏదైనా కొత్త మొబైల్ యాప్ డౌన్‌లోడ్ చేసుకోవాలా/i);
    expect(firstQuestion).toBeInTheDocument();

    // The first item is open by default
    expect(screen.getByText(/అవసరం లేదు! VidyuthAI పూర్తిగా మీ వాట్సాప్‌లోనే పనిచేస్తుంది/i)).toBeInTheDocument();

    // Click again to close
    fireEvent.click(firstQuestion);
    expect(screen.queryByText(/అవసరం లేదు! VidyuthAI పూర్తిగా మీ వాట్సాప్‌లోనే పనిచేస్తుంది/i)).not.toBeInTheDocument();
  });

  it('renders FAQs in English when language is en', () => {
    render(
      <LanguageProvider defaultLang="en">
        <FAQ />
      </LanguageProvider>
    );
    expect(screen.getByText(/Frequently Asked Questions/i)).toBeInTheDocument();

    const firstQuestion = screen.getByText(/Do I need to download or install any new mobile app/i);
    expect(firstQuestion).toBeInTheDocument();
    expect(screen.getByText(/No! VidyuthAI operates completely inside WhatsApp/i)).toBeInTheDocument();
  });
});
