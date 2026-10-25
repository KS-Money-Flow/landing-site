import Link from 'next/link';
import Image from 'next/image';
import { Download, ArrowDown, Shield, Smartphone, ExternalLink, Check, MessageSquare, Zap, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';
import DownloadFaqAccordion from '../../components/v2/DownloadFaqAccordion';

export const metadata = {
  title: 'Download Money Flow for Android',
  description: 'Download Money Flow on Google Play or direct Android APK v2.4. 100% free Community edition with offline ledger, carry-forward, and zero ads.',
  alternates: {
    canonical: '/download',
  },
  openGraph: {
    title: 'Download Money Flow — Android APK v2.4 & Google Play',
    description: 'Download Money Flow on Google Play or direct Android APK v2.4. 100% free Community edition with offline ledger, carry-forward, and zero ads.',
    url: '/download',
    siteName: 'Money Flow',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/assets/download-hero.png',
        width: 1024,
        height: 500,
        alt: 'Download Money Flow Android App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Download Money Flow — Android APK v2.4 & Google Play',
    description: 'Download Money Flow on Google Play or direct Android APK v2.4. 100% free Community edition.',
    images: ['/assets/download-hero.png'],
  },
};

export default function DownloadPage() {

  const steps = [
    { num: '01', title: 'Open Google Play', desc: 'Tap Get it on Google Play to view the official Money Flow listing on your Android device.' },
    { num: '02', title: 'Install securely', desc: 'Google Play downloads and installs the verified release with Google Play Protect scanning.' },
    { num: '03', title: 'Launch Money Flow', desc: 'Open the app from your home screen with zero manual permission overrides or warnings.' },
    { num: '04', title: 'Set up your ledger', desc: 'Choose a currency, enter your opening cash and bank amounts, and add your first career chapter.' },
  ];

  const faqs = [
    {
      q: 'Is Money Flow free to install from Google Play?',
      a: 'Yes. The core Community personal ledger is 100% free with unlimited entries, categories, carrier ledgers, sentiment tagging, and full offline privacy. There are zero ads and no trackers.'
    },
    {
      q: 'How do I get app updates?',
      a: 'Because Money Flow is installed directly from Google Play, updates, bug fixes, and new features are delivered automatically to your phone.'
    },
    {
      q: 'Where can I get help with setup?',
      a: 'If you have any questions during setup, reach out directly through our contact page or email support. We respond within 24 hours.'
    }
  ];

  return (
    <div style={{ padding: '40px 0 60px 0' }}>
      {/* 1. Hero Section */}
      <section style={{ marginBottom: '64px' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: '40px',
              alignItems: 'center'
            }}
          >
            {/* Left Column */}
            <div style={{ maxWidth: '560px' }}>
              <span className="section-tag neutral" style={{ background: 'var(--surface-mint)', color: 'var(--primary)', marginBottom: '16px' }}>
                Google Play Store · Android
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
                Your next chapter. <br />
                Ready on Google Play.
              </h1>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '28px' }}>
                Get the free Money Flow Community app directly from the Google Play Store. Simple setup, automatic updates, and zero ads or trackers.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '20px' }}>
                <a
                  href="https://play.google.com/store/apps/details?id=com.krishna.moneyflow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ padding: '14px 28px', fontSize: '0.98rem', display: 'inline-flex', alignItems: 'center', gap: '10px' }}
                >
                  <span>Get it on Google Play</span>
                  <ExternalLink size={18} />
                </a>
                <a
                  href="#guide"
                  className="btn btn-secondary"
                  style={{ padding: '14px 22px', fontSize: '0.96rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  <span>Quick setup guide</span>
                  <ArrowDown size={16} />
                </a>
              </div>

              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                Verified by Google Play Protect · Free Community · No ads
              </div>
            </div>

            {/* Right Column: Hero Artwork */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '520px',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-elevated)',
                  background: 'var(--surface)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <img
                  src="/assets/download-hero.png"
                  alt="Money Flow Track Plan Grow"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '10px' }}>
                Money Flow · Track, plan and grow. Available on Google Play Store.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Download Options (Google Play Store vs iOS) */}
      <section style={{ marginBottom: '88px' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '24px',
              marginBottom: '20px'
            }}
          >
            {/* Card 1: Google Play Store (Mint) */}
            <div
              className="interactive-card"
              style={{
                background: 'var(--surface-mint)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '20px',
                padding: '36px 32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <span style={{ fontSize: '0.72rem', fontWeight: 700, padding: '4px 10px', borderRadius: '6px', background: 'var(--surface)', color: 'var(--primary)', textTransform: 'uppercase' }}>
                  Available now
                </span>
                <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-primary)', marginTop: '16px', marginBottom: '8px' }}>
                  Google Play Store
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '28px' }}>
                  Official Android release with automatic background updates, verified Play Protect security, and full offline ledger capabilities.
                </p>
              </div>

              <div>
                <a
                  href="https://play.google.com/store/apps/details?id=com.krishna.moneyflow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ padding: '12px 24px', fontSize: '0.92rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  <span>Open in Google Play</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* Card 2: Store Launches (White) */}
            <div
              className="interactive-card"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '20px',
                padding: '36px 32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 'var(--shadow-card)'
              }}
            >
              <div>
                <div style={{ color: 'var(--text-muted)', marginBottom: '16px' }}>
                  <Smartphone size={22} />
                </div>
                <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
                  Apple App Store (iOS)
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '28px' }}>
                  The iOS version of Money Flow is planned and currently in development. Store availability will be announced.
                </p>
              </div>

              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, padding: '6px 14px', borderRadius: '8px', background: 'var(--surface-subtle)', color: 'var(--text-muted)', border: '1px solid var(--border-subtle)', display: 'inline-block' }}>
                  Planned · In development
                </span>
              </div>
            </div>
          </div>

          {/* Security Alert Note */}
          <div
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '14px',
              padding: '14px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              fontSize: '0.82rem',
              color: 'var(--text-secondary)'
            }}
          >
            <Shield size={18} color="var(--primary)" style={{ flexShrink: 0 }} />
            <span>Always install Money Flow from the official Google Play Store. Avoid forwarded files or third-party mirrors. A financial app should never ask for bank credentials.</span>
          </div>
        </div>
      </section>

      {/* 3. 4 Steps Installation Guide */}
      <section id="guide" style={{ padding: '64px 0', borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-main)' }}>
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
            <span className="section-tag neutral" style={{ background: 'var(--surface-mint)', color: 'var(--primary)', marginBottom: '14px' }}>
              A straightforward start
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '12px' }}>
              From Google Play to your first entry.
            </h2>
            <p style={{ maxWidth: '680px', fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
              Install securely directly from the official Google Play Store. No sideloading or manual APK permissions required.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '24px',
              marginBottom: '20px'
            }}
          >
            {steps.map((s, idx) => (
              <div
                key={idx}
                className="interactive-card"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '16px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}
              >
                <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary)', fontFamily: 'var(--font-mono)' }}>
                  {s.num}
                </span>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {s.title}
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
            Google Play automatically delivers verified updates and security patches seamlessly in the background.
          </div>
        </div>
      </section>

      {/* 4. What's Changed Changelog */}
      <section style={{ padding: '64px 0', borderTop: '1px solid var(--border-subtle)', background: 'var(--surface-subtle)' }}>
        <div className="container">
          <div
            className="grid-12"
            style={{
              alignItems: 'start'
            }}
          >
            {/* Left */}
            <div style={{ gridColumn: 'span 5' }} className="dl-col-5">
              <span className="section-tag neutral" style={{ background: 'var(--surface-mint)', color: 'var(--primary)', marginBottom: '14px' }}>
                What’s changed
              </span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '14px' }}>
                A more connected ledger.
              </h2>
              <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '20px' }}>
                Version 2.4 focuses on continuity, awareness and a smoother start.
              </p>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '4px 12px', borderRadius: '9999px', background: 'var(--surface-mint)', color: 'var(--primary)' }}>
                Current release · v2.4
              </span>
            </div>

            {/* Right: Release Cards */}
            <div style={{ gridColumn: 'span 7', display: 'flex', flexDirection: 'column', gap: '20px' }} className="dl-col-7">
              {/* v2.4 */}
              <div
                className="interactive-card"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '16px',
                  padding: '28px',
                  boxShadow: 'var(--shadow-card)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>v2.4</h3>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, padding: '3px 10px', borderRadius: '6px', background: 'var(--surface-mint)', color: 'var(--primary)' }}>
                    Current
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                  {[
                    'Career carry-forward connects closing and opening balances across employers.',
                    'Good / Bad sentiment tagging adds context to spending.',
                    'Cloud warm-up handling gives clearer loading and retry states.',
                    'Safe-area improvements make the app fit device edges more comfortably.'
                  ].map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <Check size={16} color="var(--primary)" strokeWidth={2.5} style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span style={{ color: 'var(--text-secondary)' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* v2.2 */}
              <div
                className="interactive-card"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '16px',
                  padding: '28px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>v2.2</h3>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, padding: '3px 10px', borderRadius: '6px', background: 'var(--surface-subtle)', color: 'var(--text-muted)' }}>
                    Earlier release
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                  {[
                    'Custom categories for a more personal ledger.',
                    'Dual reconciliation for physical cash and pending bank entries.',
                    'Isolated accounts to keep personal records separated.'
                  ].map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <Check size={16} color="var(--text-muted)" strokeWidth={2.5} style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span style={{ color: 'var(--text-secondary)' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Optional For Testers (Expo) */}
      <section style={{ padding: '64px 0', borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-main)' }}>
        <div className="container">
          <div
            className="interactive-card"
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '20px',
              padding: '36px 32px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
              gap: '32px',
              alignItems: 'center'
            }}
          >
            <div>
              <span style={{ fontSize: '0.72rem', fontWeight: 700, padding: '4px 10px', borderRadius: '6px', background: 'var(--surface-purple)', color: 'var(--investment)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Optional · For testers
              </span>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', marginTop: '12px', marginBottom: '8px' }}>
                Using an Expo test build?
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                This is a separate development path, not part of the standard Google Play release.
              </p>
            </div>

            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={16} color="var(--investment)" />
                  <span>Use the official project instructions or a test invitation shared by the creator.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={16} color="var(--investment)" />
                  <span>Install the Expo-compatible client required by that test build.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={16} color="var(--investment)" />
                  <span>Open only the project link supplied with the invitation; follow its environment setup.</span>
                </div>
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                No public test link is listed here. Ask support if you’re helping with a test release.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section style={{ padding: '44px 0 16px 0', borderTop: '1px solid var(--border-subtle)', background: 'var(--surface-subtle)' }}>
        <div className="container" style={{ maxWidth: '840px' }}>
          <div style={{ marginBottom: '36px' }}>
            <span className="section-tag neutral" style={{ background: 'var(--surface-mint)', color: 'var(--primary)', marginBottom: '14px' }}>
              Need a hand?
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, color: 'var(--text-primary)' }}>
              A smooth start is part of the experience.
            </h2>
          </div>

          <DownloadFaqAccordion faqs={faqs} />

          <div>
            <Link
              href="/contact"
              className="btn btn-secondary"
              style={{ padding: '12px 22px', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <MessageSquare size={16} />
              <span>Get setup help</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Final Confidence & Google Play Launch Section (White Background) */}
      <section
        style={{
          borderTop: '1px solid var(--border-subtle)',
          padding: '80px 0 0'
        }}
      >
        <div className="container">
          {/* Header */}
          <div style={{ maxWidth: '680px', marginBottom: '44px' }}>
            <span
              className="section-tag neutral"
              style={{
                background: 'var(--surface-mint)',
                color: 'var(--primary)',
                marginBottom: '14px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <Sparkles size={14} />
              <span>Day One Simplicity</span>
            </span>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 2.85rem)',
                fontWeight: 800,
                color: 'var(--text-primary)',
                lineHeight: 1.18,
                letterSpacing: '-0.025em',
                marginBottom: '16px'
              }}
            >
              One entry is all it takes to begin.
            </h2>
            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.65
              }}
            >
              No bank passwords, no mandatory account signups, and zero subscription paywalls. Install directly from Google Play and start experiencing calmer financial clarity.
            </p>
          </div>

          {/* 3 Pillar Cards Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
              gap: '24px',
              marginBottom: '44px'
            }}
          >
            {/* Card 1: 60-Second Setup */}
            <div
              className="interactive-card"
              style={{
                background: 'var(--surface-subtle)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '18px',
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px'
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'var(--surface-mint)',
                  color: 'var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(8, 127, 91, 0.2)'
                }}
              >
                <Zap size={20} />
              </div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                60-Second Setup
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Open the app, select your preferred currency (₹, $, €, £), input your starting cash and bank balances, and log your first transaction immediately.
              </p>
            </div>

            {/* Card 2: Verified & Private */}
            <div
              className="interactive-card"
              style={{
                background: 'var(--surface-subtle)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '18px',
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px'
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'var(--surface-mint)',
                  color: 'var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(8, 127, 91, 0.2)'
                }}
              >
                <ShieldCheck size={20} />
              </div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                Verified &amp; Private
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Scanned and verified through Google Play Protect. Your records reside securely on your local device without third-party tracking or behavioral profiling.
              </p>
            </div>

            {/* Card 3: Continuous Chapters */}
            <div
              className="interactive-card"
              style={{
                background: 'var(--surface-subtle)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '18px',
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px'
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'var(--surface-purple)',
                  color: 'var(--investment)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(121, 84, 189, 0.25)'
                }}
              >
                <Smartphone size={20} />
              </div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                Continuous Chapters
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Transition between employers, companies, or ventures without starting over. Previous closing balances seamlessly carry forward into every new chapter.
              </p>
            </div>
          </div>

          {/* Large Google Play CTA Banner Card */}
          <div
            className="interactive-card"
            style={{
              background: 'linear-gradient(135deg, var(--surface-mint) 0%, var(--surface) 100%)',
              border: '1.5px solid rgba(8, 127, 91, 0.25)',
              borderRadius: '24px',
              padding: '36px 32px',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '24px',
              boxShadow: 'var(--shadow-card)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '18px', maxWidth: '580px' }}>
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  flexShrink: 0,
                  boxShadow: '0 6px 20px rgba(8, 127, 91, 0.25)',
                  border: '1.5px solid rgba(8, 127, 91, 0.2)',
                  background: '#FFFFFF'
                }}
              >
                <img
                  src="/logo.png"
                  alt="Money Flow App Logo"
                  width={56}
                  height={56}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                    Money Flow
                  </h3>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '3px 8px',
                      borderRadius: '6px',
                      background: 'var(--surface)',
                      color: 'var(--primary)',
                      border: '1px solid var(--border-subtle)'
                    }}
                  >
                    Free Community
                  </span>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  Your money. Every chapter. Available directly on the Google Play Store for Android.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px' }}>
              <a
                href="https://play.google.com/store/apps/details?id=com.krishna.moneyflow"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{
                  padding: '13px 26px',
                  fontSize: '0.96rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px'
                }}
              >
                <span>Install from Google Play</span>
                <ExternalLink size={18} />
              </a>
              <Link
                href="/features"
                className="btn btn-secondary"
                style={{
                  padding: '13px 20px',
                  fontSize: '0.92rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <span>Explore Features</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
