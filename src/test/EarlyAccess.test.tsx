import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { EarlyAccess } from '../components/EarlyAccess';
import { LanguageProvider } from '../context/LanguageContext';

describe('EarlyAccess / Interested Component', () => {
  it('renders direct WhatsApp connect link in default Telugu', () => {
    render(
      <LanguageProvider defaultLang="te">
        <EarlyAccess />
      </LanguageProvider>
    );
    expect(screen.getByText(/వాట్సాప్‌లో VidyuthAIని ప్రయత్నించండి/i)).toBeInTheDocument();

    const whatsappBtn = screen.getByRole('link', { name: /వాట్సాప్‌లో ప్రోటోటైప్‌ను ప్రయత్నించండి/i });
    expect(whatsappBtn).toBeInTheDocument();
    expect(whatsappBtn).toHaveAttribute('href', expect.stringContaining('https://wa.me/15551814359?text='));
    expect(screen.queryByText('+91 94923 69173')).not.toBeInTheDocument();
  });

  it('renders in English when language is en', () => {
    render(
      <LanguageProvider defaultLang="en">
        <EarlyAccess />
      </LanguageProvider>
    );
    expect(screen.getByText(/Try VidyuthAI on WhatsApp/i)).toBeInTheDocument();

    const whatsappBtn = screen.getByRole('link', { name: /Try the Prototype on WhatsApp/i });
    expect(whatsappBtn).toBeInTheDocument();
    expect(whatsappBtn).toHaveAttribute('href', expect.stringContaining('https://wa.me/15551814359?text='));

    const emailBtn = screen.getByRole('link', { name: /Send us an Email/i });
    expect(emailBtn).toBeInTheDocument();
    expect(emailBtn).toHaveAttribute('href', expect.stringContaining('mailto:kavach1365@gmail.com'));
  });
});
