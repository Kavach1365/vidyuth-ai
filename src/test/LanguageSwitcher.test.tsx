import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { App } from '../App';

describe('Language Switcher Full Page Integration', () => {
  it('loads in Telugu by default and switches completely to English on button click', () => {
    render(<App />);

    // By default, Telugu title and elements should be present
    expect(screen.getByRole('heading', { level: 1, name: /మీ కరెంట్ బిల్లును/i })).toBeInTheDocument();
    expect(screen.getAllByText(/వాట్సాప్‌లోనే/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/VidyuthAI ఎలా పనిచేస్తుంది\?/i)).toBeInTheDocument();
    expect(screen.getByText(/ఇంటరాక్టివ్ టారిఫ్ కాలిక్యులేటర్/i)).toBeInTheDocument();
    expect(screen.getByText(/తరచుగా అడిగే ప్రశ్నలు/i)).toBeInTheDocument();

    // Click English in the switcher
    const englishBtns = screen.getAllByRole('button', { name: 'English' });
    fireEvent.click(englishBtns[0]);

    // Now all sections should be completely in English
    expect(screen.getByRole('heading', { level: 1, name: /Understand your electricity bill on/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /How VidyuthAI Works/i })).toBeInTheDocument();
    expect(screen.getByText(/Interactive Tariff Calculator/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Frequently Asked Questions/i })).toBeInTheDocument();

    // Switch back to Telugu
    const teluguBtns = screen.getAllByRole('button', { name: 'తెలుగు' });
    fireEvent.click(teluguBtns[0]);

    expect(screen.getByRole('heading', { level: 1, name: /మీ కరెంట్ బిల్లును/i })).toBeInTheDocument();
    expect(screen.getByText(/VidyuthAI ఎలా పనిచేస్తుంది\?/i)).toBeInTheDocument();
  });
});
