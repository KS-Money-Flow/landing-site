'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Download, Menu, X, Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);

    // Initial theme detection from localStorage or system preference
    const savedTheme = typeof window !== 'undefined' ? localStorage.getItem('mf_theme') : null;
    const prefersDark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('mf_theme', nextTheme);
      document.documentElement.setAttribute('data-theme', nextTheme);
      if (nextTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Security', href: '/security' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.25s ease',
        background: 'var(--surface-glass)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border-subtle)',
        boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.08)' : 'none'
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '84px'
        }}
      >
        {/* Brand Logo */}
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            textDecoration: 'none'
          }}
        >
          <div
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '13px',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 6px 18px rgba(8, 127, 91, 0.15)',
              border: '1.5px solid rgba(8, 127, 91, 0.22)',
              background: 'var(--surface)',
              flexShrink: 0,
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
          >
            <img
              src="/logo.png"
              alt="Money Flow Logo"
              width={46}
              height={46}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block'
              }}
            />
          </div>
          <span
            style={{
              fontSize: '1.38rem',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: 'var(--text-primary)'
            }}
          >
            Money Flow
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`nav-link-item ${isActive ? 'active' : ''}`}
              >
                <span>{link.name}</span>
                {isActive && <span className="nav-indicator" />}
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Theme Toggle */}
        <div className="desktop-actions" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Link
            href="/download"
            className="btn btn-primary"
            style={{
              padding: '11px 20px',
              fontSize: '0.9rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <span>Get the app</span>
            <Download size={16} />
          </Link>

          {/* Theme Toggle Button (Sun & Moon) */}
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <Moon size={18} color="var(--text-primary)" />
            ) : (
              <Sun size={18} color="#F59E0B" />
            )}
          </button>
        </div>

        {/* Mobile Actions (Theme Toggle + Hamburger) */}
        <div style={{ display: 'none', alignItems: 'center', gap: '8px' }} className="mobile-actions">
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            style={{ width: '38px', height: '38px' }}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <Moon size={17} color="var(--text-primary)" />
            ) : (
              <Sun size={17} color="#F59E0B" />
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'var(--surface-subtle)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-primary)',
              padding: '9px',
              borderRadius: '10px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'var(--surface)',
            borderBottom: '1px solid var(--border-subtle)',
            padding: '20px 16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            boxShadow: 'var(--shadow-elevated)'
          }}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                style={{
                  padding: '12px 14px',
                  borderRadius: '10px',
                  fontSize: '0.98rem',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? 'var(--primary)' : 'var(--text-primary)',
                  background: isActive ? 'var(--surface-mint)' : 'transparent',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <span>{link.name}</span>
                {isActive && (
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)' }} />
                )}
              </Link>
            );
          })}
          <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid var(--border-subtle)' }}>
            <Link
              href="/download"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-primary"
              style={{ width: '100%', padding: '14px' }}
            >
              <span>Get the app</span>
              <Download size={18} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
