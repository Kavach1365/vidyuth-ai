import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { Navbar } from '../components/Navbar';
import { LanguageProvider } from '../context/LanguageContext';
import { ThemeProvider } from '../context/ThemeContext';

const renderNavbar = () => render(
  <ThemeProvider>
    <LanguageProvider defaultLang="en">
      <Navbar onOpenInterested={() => {}} />
    </LanguageProvider>
  </ThemeProvider>
);

describe('Navbar theme switcher', () => {
  afterEach(() => {
    localStorage.clear();
    delete document.documentElement.dataset.theme;
  });

  it('switches themes and remembers the selection', async () => {
    renderNavbar();

    const switchToLight = screen.getByRole('button', { name: 'Switch to light theme' });
    fireEvent.click(switchToLight);

    await waitFor(() => {
      expect(document.documentElement).toHaveAttribute('data-theme', 'light');
      expect(localStorage.getItem('vidyutmitra_preferred_theme')).toBe('light');
    });

    fireEvent.click(screen.getByRole('button', { name: 'Switch to dark theme' }));

    await waitFor(() => {
      expect(document.documentElement).toHaveAttribute('data-theme', 'dark');
    });
  });
});
