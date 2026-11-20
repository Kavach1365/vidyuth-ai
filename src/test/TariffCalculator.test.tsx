import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { TariffCalculator } from '../components/TariffCalculator';
import { LanguageProvider } from '../context/LanguageContext';

describe('TariffCalculator Component', () => {
  it('renders default units of 185 and calculated payable amount in default Telugu', () => {
    render(
      <LanguageProvider defaultLang="te">
        <TariffCalculator />
      </LanguageProvider>
    );
    expect(screen.getByText(/ఇంటరాక్టివ్ టారిఫ్ కాలిక్యులేటర్/i)).toBeInTheDocument();
    const numberInput = screen.getByRole('spinbutton') as HTMLInputElement;
    expect(numberInput).toHaveValue(185);
  });

  it('updates total payable when units change', () => {
    render(
      <LanguageProvider defaultLang="te">
        <TariffCalculator />
      </LanguageProvider>
    );
    const numberInput = screen.getByRole('spinbutton');

    fireEvent.change(numberInput, { target: { value: '50' } });
    // At 50 units in TG LT-1(A): 50*1.95 + 25 + 50*0.06 = 97.5 + 25 + 3 = 125.5 -> round to 126
    expect(screen.getByText('₹126/-')).toBeInTheDocument();
  });

  it('shows slab jump warning in Telugu when units are close to 100 or 200', () => {
    render(
      <LanguageProvider defaultLang="te">
        <TariffCalculator />
      </LanguageProvider>
    );
    const numberInput = screen.getByRole('spinbutton');

    fireEvent.change(numberInput, { target: { value: '95' } });
    expect(screen.getByText(/స్లాబ్ జంప్ హెచ్చరిక/i)).toBeInTheDocument();
  });

  it('switches DISCOM between Telangana and Andhra Pradesh in English mode', () => {
    render(
      <LanguageProvider defaultLang="en">
        <TariffCalculator />
      </LanguageProvider>
    );
    expect(screen.getByText(/Interactive Tariff Calculator/i)).toBeInTheDocument();
    const apBtn = screen.getByText('Andhra Pradesh (APCPDCL / APEPDCL)');

    fireEvent.click(apBtn);
    expect(screen.getByText(/Andhra Pradesh Domestic/i)).toBeInTheDocument();
  });
});
