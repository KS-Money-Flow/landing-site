'use client';

import { useState, useEffect } from 'react';
import { Sun, Moon, Sparkles } from 'lucide-react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('dark');
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('theme');
    if (stored) {
      setTheme(stored);
      document.documentElement.setAttribute('data-theme', stored);
    } else {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initial = systemPrefersDark ? 'dark' : 'light';
      setTheme(initial);
      document.documentElement.setAttribute('data-theme', initial);
    }

    // Auto-update if system theme changes and user hasn't overridden
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      if (!localStorage.getItem('theme')) {
        const newSys = e.matches ? 'dark' : 'light';
        setTheme(newSys);
        document.documentElement.setAttribute('data-theme', newSys);
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    setIsAnimating(true);
    const nextTheme = theme === 'dark' ? 'light' : 'dark';

    // Enable smooth global CSS transition
    document.documentElement.classList.add('theme-transition');
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
    setTheme(nextTheme);

    setTimeout(() => {
      document.documentElement.classList.remove('theme-transition');
      setIsAnimating(false);
    }, 450);
  };

  if (!mounted) {
    return null; // avoid hydration mismatch
  }

  const isDark = theme === 'dark';

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 999,
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}
    >
      <button
        onClick={toggleTheme}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        title={`Current: ${isDark ? 'Dark' : 'Light'} Mode (Click to toggle)`}
        style={{
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          background: 'var(--surface-glass)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1.5px solid var(--border-subtle)',
          boxShadow: isDark
            ? '0 10px 30px rgba(0, 0, 0, 0.5), 0 0 25px rgba(245, 158, 11, 0.25)'
            : '0 10px 30px rgba(15, 23, 42, 0.12), 0 0 25px rgba(124, 58, 237, 0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          outline: 'none',
          transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease',
          transform: isAnimating ? 'scale(0.85) rotate(180deg)' : 'scale(1) rotate(0deg)'
        }}
        onMouseEnter={(e) => {
          if (!isAnimating) e.currentTarget.style.transform = 'scale(1.08) translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          if (!isAnimating) e.currentTarget.style.transform = 'scale(1) translateY(0)';
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.4s ease, opacity 0.3s ease',
            transform: isAnimating ? 'rotate(360deg)' : 'rotate(0deg)'
          }}
        >
          {isDark ? (
            <Sun size={24} color="#FBBF24" style={{ filter: 'drop-shadow(0 0 8px rgba(251, 191, 36, 0.6))' }} />
          ) : (
            <Moon size={22} color="#7C3AED" style={{ filter: 'drop-shadow(0 0 8px rgba(124, 58, 237, 0.4))' }} />
          )}
        </div>
      </button>
    </div>
  );
}
