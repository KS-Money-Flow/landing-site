import Link from 'next/link';
import { Mail, Github, Shield, Download, HelpCircle, ArrowRight } from 'lucide-react';
import ContactMessageForm from '../../components/v2/ContactMessageForm';

export const metadata = {
  title: 'Contact',
  description: 'Have a setup question, bug report, or feature request? Contact the Money Flow team. Response within 24-48 hours with privacy-first support.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact & Support — Money Flow',
    description: 'Have a setup question, bug report, or feature request? Contact the Money Flow team. Response within 24-48 hours with privacy-first support.',
    url: '/contact',
    siteName: 'Money Flow',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/assets/download-hero.png',
        width: 1024,
        height: 500,
        alt: 'Contact Money Flow Support',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact & Support — Money Flow',
    description: 'Have a setup question, bug report, or feature request? Contact the Money Flow team.',
    images: ['/assets/download-hero.png'],
  },
};

export default function ContactPage() {
  return (
    <div style={{ padding: '32px 0 20px 0' }}>
      {/* 1. Page Header */}
      <section style={{ marginBottom: '56px' }}>
        <div className="container">
          <div style={{ maxWidth: '680px' }}>
            <span className="section-tag neutral" style={{ background: 'var(--surface-mint)', color: 'var(--primary)', marginBottom: '16px' }}>
              Support &amp; Community
            </span>
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 5vw, 3.5rem)',
                fontWeight: 800,
                color: 'var(--text-primary)',
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                marginBottom: '18px'
              }}
            >
              Let’s make things clearer.
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
              A setup question, a bug or an idea for a better ledger? Tell us what’s happening. You don’t need to share your financial records to get help.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Direct Support & Form Grid */}
      <section style={{ marginBottom: '96px' }}>
        <div className="container">
          <div
            className="grid-12"
            style={{
              alignItems: 'start'
            }}
          >
            {/* Left Column: Direct Support Cards (5 Cols) */}
            <div style={{ gridColumn: 'span 5', display: 'flex', flexDirection: 'column', gap: '24px' }} className="contact-col-5">
              {/* Card 1: Direct Support */}
              <div
                className="interactive-card"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '20px',
                  padding: '32px 28px',
                  boxShadow: 'var(--shadow-card)'
                }}
              >
                <div style={{ color: 'var(--primary)', marginBottom: '16px' }}>
                  <Mail size={22} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
                  Direct support
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>
                  For questions, bugs and product feedback.
                </p>
                <a
                  href="mailto:krishnar.sutariyarskd154@gmail.com"
                  style={{
                    display: 'block',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    color: 'var(--primary)',
                    marginBottom: '16px',
                    wordBreak: 'break-all'
                  }}
                >
                  krishnar.sutariyarskd154@gmail.com
                </a>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, padding: '4px 12px', borderRadius: '9999px', background: 'var(--surface-mint)', color: 'var(--primary)' }}>
                  Typical response: within 24 hours
                </span>
              </div>

              {/* Card 2: Build the Conversation (Lavender) */}
              <div
                className="interactive-card"
                style={{
                  background: 'var(--surface-purple)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '20px',
                  padding: '32px 28px'
                }}
              >
                <div style={{ color: 'var(--investment)', marginBottom: '16px' }}>
                  <Github size={22} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
                  Build the conversation.
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>
                  Discuss improvements with the GitHub community. Ask support for the official project link before posting.
                </p>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.92rem',
                    fontWeight: 700,
                    color: 'var(--investment)',
                    marginBottom: '16px'
                  }}
                >
                  <span>GitHub community ↗</span>
                </a>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  Don’t include balances, exports, account passwords or other sensitive details in a public issue.
                </p>
              </div>

              {/* Security Note */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'var(--text-secondary)', paddingLeft: '4px' }}>
                <Shield size={16} color="var(--primary)" />
                <span>Money Flow support will never ask for your bank password or card PIN.</span>
              </div>
            </div>

            {/* Right Column: Send a Message Form (7 Cols) */}
            <ContactMessageForm />
          </div>
        </div>
      </section>

      {/* 3. A Useful Bug Report Section */}
      <section style={{ padding: '44px 0', borderTop: '1px solid var(--border-subtle)', background: 'var(--surface-subtle)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '36px',
              alignItems: 'start'
            }}
          >
            {/* Left */}
            <div style={{ maxWidth: '440px' }}>
              <span className="section-tag neutral" style={{ background: 'var(--surface-mint)', color: 'var(--primary)', marginBottom: '12px' }}>
                A useful bug report
              </span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '12px' }}>
                Help us see what you’re seeing.
              </h2>
              <p style={{ fontSize: '0.96rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                A few practical details make a problem easier to reproduce—without exposing your money history.
              </p>
            </div>

            {/* Right: 3 Numbered Steps */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '16px', display: 'flex', gap: '18px' }}>
                <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary)', fontFamily: 'var(--font-mono)' }}>01</span>
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
                    App version &amp; device
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                    For example: Money Flow v2.4, your Android device model and Android version.
                  </p>
                </div>
              </div>

              <div style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '16px', display: 'flex', gap: '18px' }}>
                <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary)', fontFamily: 'var(--font-mono)' }}>02</span>
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
                    What you did
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                    List the steps in order, then what you expected and what happened instead.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '18px' }}>
                <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary)', fontFamily: 'var(--font-mono)' }}>03</span>
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
                    A safe screenshot, if useful
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                    Hide names, balances, transactions and account details. Never attach a full ledger export.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Helpful Starting Points */}
      <section style={{ padding: '40px 0 16px 0', background: 'var(--bg-main)' }}>
        <div className="container">
          <div style={{ marginBottom: '28px' }}>
            <span className="section-tag neutral" style={{ background: 'var(--surface-mint)', color: 'var(--primary)', marginBottom: '10px' }}>
              You might find this faster
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', fontWeight: 800, color: 'var(--text-primary)' }}>
              A few helpful starting points.
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
              gap: '20px'
            }}
          >
            {/* Card 1 */}
            <div
              className="interactive-card"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '20px',
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 'var(--shadow-card)'
              }}
            >
              <div>
                <div style={{ color: 'var(--primary)', marginBottom: '14px' }}>
                  <Download size={22} />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '6px' }}>
                  Get on Google Play
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                  Official verified Android release and quick setup guide.
                </p>
              </div>
              <a
                href="https://play.google.com/store/apps/details?id=com.krishna.moneyflow"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                <span>Google Play Store ↗</span>
                <ArrowRight size={14} />
              </a>
            </div>

            {/* Card 2 */}
            <div
              className="interactive-card"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '20px',
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 'var(--shadow-card)'
              }}
            >
              <div>
                <div style={{ color: 'var(--primary)', marginBottom: '14px' }}>
                  <Shield size={22} />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '6px' }}>
                  Understand your data
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                  Local storage, connected services and deletion.
                </p>
              </div>
              <Link href="/security" style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <span>Security &amp; privacy</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Card 3 */}
            <div
              className="interactive-card"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '20px',
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 'var(--shadow-card)'
              }}
            >
              <div>
                <div style={{ color: 'var(--primary)', marginBottom: '14px' }}>
                  <HelpCircle size={22} />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '6px' }}>
                  Find a quick answer
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                  Community availability, exports and career continuity.
                </p>
              </div>
              <Link href="/#faq" style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <span>Home / FAQ</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
