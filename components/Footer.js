'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--surface, #FFFFFF)',
        borderTop: '1px solid var(--border-subtle, #DFE8E2)',
        paddingTop: '48px',
        paddingBottom: '32px',
      }}
    >
      <div className="container">
        {/* 4 Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
            gap: '36px',
            marginBottom: '40px'
          }}
        >
          {/* Brand Column */}
          <div style={{ maxWidth: '320px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1.5px solid rgba(8, 127, 91, 0.15)',
                  boxShadow: '0 4px 14px rgba(8, 127, 91, 0.2)',
                  background: 'var(--surface)',
                  flexShrink: 0
                }}
              >
                <img
                  src="/logo.png"
                  alt="Money Flow Logo"
                  width={44}
                  height={44}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
              </div>
              <span style={{ fontSize: '1.34rem', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text-primary, #142C25)' }}>
                Money Flow
              </span>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary, #60736B)', lineHeight: 1.6, marginBottom: '6px' }}>
              Your money. Every chapter.
            </p>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary, #60736B)', lineHeight: 1.6, marginBottom: '18px' }}>
              A personal ledger for a life that moves.
            </p>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '9999px',
                background: 'var(--surface-mint, #EAF8F1)',
                fontSize: '0.78rem',
                fontWeight: 600,
                color: 'var(--primary, #087F5B)'
              }}
            >
              <span>V3 experience · Android v2.4</span>
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h4 style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted, #84948D)', marginBottom: '16px' }}>
              Product
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <Link href="/" className="footer-nav-link" style={{ color: 'var(--text-primary, #142C25)', fontSize: '0.9rem', fontWeight: 500 }}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/features" className="footer-nav-link" style={{ color: 'var(--text-primary, #142C25)', fontSize: '0.9rem', fontWeight: 500 }}>
                  Features
                </Link>
              </li>
              <li>
                <Link href="/download" className="footer-nav-link" style={{ color: 'var(--text-primary, #142C25)', fontSize: '0.9rem', fontWeight: 500 }}>
                  Download
                </Link>
              </li>
            </ul>
          </div>

          {/* Explore Column */}
          <div>
            <h4 style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted, #84948D)', marginBottom: '16px' }}>
              Explore
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <Link href="/pricing" className="footer-nav-link" style={{ color: 'var(--text-primary, #142C25)', fontSize: '0.9rem', fontWeight: 500 }}>
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/security" className="footer-nav-link" style={{ color: 'var(--text-primary, #142C25)', fontSize: '0.9rem', fontWeight: 500 }}>
                  Security
                </Link>
              </li>
              <li>
                <Link href="/about" className="footer-nav-link" style={{ color: 'var(--text-primary, #142C25)', fontSize: '0.9rem', fontWeight: 500 }}>
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Legal Column */}
          <div>
            <h4 style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted, #84948D)', marginBottom: '16px' }}>
              Support &amp; Legal
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <Link href="/contact" className="footer-nav-link" style={{ color: 'var(--text-primary, #142C25)', fontSize: '0.9rem', fontWeight: 500 }}>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="footer-nav-link" style={{ color: 'var(--text-primary, #142C25)', fontSize: '0.9rem', fontWeight: 500 }}>
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="footer-nav-link" style={{ color: 'var(--text-primary, #142C25)', fontSize: '0.9rem', fontWeight: 500 }}>
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: '24px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            fontSize: '0.82rem',
            color: 'var(--text-muted)'
          }}
        >
          <div>
            © 2026 Money Flow. Built with intention.
          </div>
          <div>
            No ads. No data selling. Just clarity.
          </div>
        </div>
      </div>

      <style jsx>{`
        :global(.footer-nav-link) {
          transition: all 0.2s ease;
          display: inline-block;
        }
        :global(.footer-nav-link:hover) {
          color: var(--primary, #087F5B) !important;
          transform: translateX(4px);
        }
      `}</style>
    </footer>
  );
}
