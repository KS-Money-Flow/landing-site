import Link from 'next/link';
import { ShieldCheck, Lock, EyeOff, Check, ArrowRight, Download, Trash2, Cloud, Server, Smartphone, HardDrive } from 'lucide-react';
import FinalCtaBanner from '../../components/v2/FinalCtaBanner';
import ColdStartShieldDemo from '../../components/v2/ColdStartShieldDemo';

export const metadata = {
  title: 'Security',
  description: 'No bank credential collection, offline-first local storage, and zero third-party ad tracking. Learn how Money Flow protects your financial data privacy.',
  alternates: {
    canonical: '/security',
  },
  openGraph: {
    title: 'Security & Privacy Architecture — Money Flow',
    description: 'No bank credential collection, offline-first local storage, and zero third-party ad tracking. Learn how Money Flow protects your financial data privacy.',
    url: '/security',
    siteName: 'Money Flow',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/assets/download-hero.png',
        width: 1024,
        height: 500,
        alt: 'Money Flow Security & Privacy Architecture',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Security & Privacy Architecture — Money Flow',
    description: 'No bank credential collection, offline-first local storage, and zero third-party ad tracking.',
    images: ['/assets/download-hero.png'],
  },
};

export default function SecurityPage() {
  return (
    <div style={{ padding: '40px 0 60px 0' }}>
      {/* 1. Hero */}
      <section style={{ marginBottom: '88px' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: '40px',
              alignItems: 'center'
            }}
          >
            {/* Left */}
            <div style={{ maxWidth: '580px' }}>
              <span className="section-tag neutral" style={{ background: 'var(--surface-mint)', color: 'var(--primary)', marginBottom: '16px' }}>
                Privacy by design
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
                A clear picture of your money. <br />
                Not access to it.
              </h1>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '24px' }}>
                Money Flow is your personal ledger, not a bank connector. Your credentials stay with your bank. Your records stay under your control.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <span style={{ fontSize: '0.78rem', fontWeight: 700, padding: '6px 14px', borderRadius: '9999px', background: 'var(--surface-mint)', color: 'var(--primary)' }}>
                  No bank passwords
                </span>
                <span style={{ fontSize: '0.78rem', fontWeight: 700, padding: '6px 14px', borderRadius: '9999px', background: 'var(--surface-mint)', color: 'var(--primary)' }}>
                  No third-party trackers
                </span>
              </div>
            </div>

            {/* Right: Only Your Eyes Card (Mint) */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div
                className="interactive-card"
                style={{
                  background: 'var(--surface-mint)',
                  borderRadius: '24px',
                  padding: '36px 32px',
                  width: '100%',
                  maxWidth: '440px',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <ShieldCheck size={24} color="var(--primary)" />
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--primary)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    Local Ledger
                  </span>
                </div>

                <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
                  Only your eyes.
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
                  Protect app access with a PIN or device-supported biometrics.
                </p>

                {/* PIN Dots Screen */}
                <div
                  style={{
                    background: 'var(--surface)',
                    borderRadius: '16px',
                    padding: '24px',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '16px'
                  }}
                >
                  {[0, 1, 2, 3].map((dot) => (
                    <div
                      key={dot}
                      style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        background: 'var(--primary)'
                      }}
                    />
                  ))}
                </div>

                <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', marginTop: '16px', textAlign: 'center' }}>
                  Illustrative access screen · not a bank login
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Understand The Boundaries (Architecture) */}
      <section style={{ padding: '72px 0', borderTop: '1px solid var(--border-subtle)', background: 'var(--surface-subtle)' }}>
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Understand the boundaries
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: 'var(--text-primary)', marginTop: '6px', marginBottom: '8px' }}>
              Local by default. Authenticated when connected.
            </h2>
            <p style={{ fontSize: '1.02rem', color: 'var(--text-secondary)' }}>
              The local ledger and optional cloud services have different roles. Here’s the architecture in plain language.
            </p>
          </div>

          <div
            className="interactive-card"
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '20px',
              padding: '36px 32px',
              boxShadow: 'var(--shadow-card)',
              marginBottom: '16px'
            }}
          >
            {/* Top Row: Device Flow */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
                gap: '20px',
                alignItems: 'center',
                paddingBottom: '28px',
                borderBottom: '1px solid var(--border-light)'
              }}
            >
              <div style={{ background: 'var(--surface-mint)', border: '1px solid var(--border-subtle)', borderRadius: '14px', padding: '20px' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase' }}>On your device</span>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)', marginTop: '6px', marginBottom: '4px' }}>Money Flow app</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Manual entries, PIN / biometric access and your everyday ledger.</p>
              </div>

              <div style={{ background: 'var(--surface-mint)', border: '1px solid var(--border-subtle)', borderRadius: '14px', padding: '20px' }}>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '4px' }}>Local ledger storage</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Record and review your personal ledger without a network connection.</p>
              </div>

              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                Offline access does not require a bank connection or cloud login.
              </div>
            </div>

            {/* Bottom Row: Connected Flow */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
                gap: '20px',
                alignItems: 'center',
                paddingTop: '28px'
              }}
            >
              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                <span style={{ display: 'inline-block', fontSize: '0.7rem', fontWeight: 700, color: 'var(--investment)', textTransform: 'uppercase', marginBottom: '4px' }}>When used</span>
                <div>Optional cloud path requires connectivity.</div>
              </div>

              <div style={{ background: 'var(--surface-purple)', border: '1px solid var(--border-subtle)', borderRadius: '14px', padding: '20px' }}>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '4px' }}>Authenticated access</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Passwords are hashed, not stored as plaintext. JWTs verify signed-in requests.</p>
              </div>

              <div style={{ background: 'var(--surface-purple)', border: '1px solid var(--border-subtle)', borderRadius: '14px', padding: '20px' }}>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '4px' }}>Per-user data isolation</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Requests are scoped to the signed-in user’s records, not a shared public ledger.</p>
              </div>
            </div>
          </div>

          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
            JWT-based access is authentication, not encryption. Multi-device sync, automated cloud backups and household sharing are planned Pro features, not current Community promises.
          </div>
        </div>
      </section>

      {/* 3. Practical Safeguards */}
      <section style={{ padding: '72px 0', borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-main)' }}>
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Practical safeguards
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: 'var(--text-primary)', marginTop: '6px' }}>
              Less access. More accountability.
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '36px', marginBottom: '24px' }}>
            {/* Left Column: On your device */}
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '18px' }}>
                On your device
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  'Use a PIN or supported device biometrics to limit app access.',
                  'Keep device security and operating system updates current.',
                  'Money Flow does not collect your bank username, password or card PIN.'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <Check size={16} color="var(--primary)" strokeWidth={2.5} style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>{item}</span>
                  </div>
                ))}
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '16px' }}>
                A device lock adds protection; it does not replace careful handling of backups or exported files.
              </div>
            </div>

            {/* Right Column: Connected Services */}
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '18px' }}>
                When using connected services
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  'Password hashing avoids storing account passwords in plaintext.',
                  'JWT-based authentication checks access to protected requests.',
                  'Per-user scoping separates account records.'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <Check size={16} color="var(--primary)" strokeWidth={2.5} style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>{item}</span>
                  </div>
                ))}
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '16px' }}>
                No zero-knowledge or certification claim is made here. These boundaries are intended to be understandable, not hidden behind buzzwords.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. A Friendlier Start (Cloud Cold-Start Shield) */}
      <section style={{ padding: '72px 0', borderTop: '1px solid var(--border-subtle)', background: 'var(--surface-subtle)' }}>
        <div className="container">
          <div
            className="grid-12"
            style={{
              alignItems: 'center',
              marginBottom: '32px'
            }}
          >
            {/* Left */}
            <div style={{ gridColumn: 'span 6' }} className="sec-col-6">
              <span className="section-tag neutral" style={{ background: 'var(--surface-mint)', color: 'var(--primary)', marginBottom: '14px' }}>
                A friendlier start
              </span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '14px' }}>
                A waking server shouldn’t feel like lost data.
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                The Cloud Cold-Start Shield checks whether connected services are ready before opening a cloud-dependent view. If they’re waking, you get a clear status and a retry.
              </p>
            </div>

            {/* Right: Waking Card */}
            <div style={{ gridColumn: 'span 6' }} className="sec-col-6">
              <ColdStartShieldDemo />
            </div>
          </div>

          {/* Sequence Flow Diagram */}
          <div
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '16px',
              padding: '18px 20px',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '10px',
              fontSize: '0.82rem',
              color: 'var(--text-primary)',
              fontWeight: 600,
              overflowX: 'auto',
              maxWidth: '100%'
            }}
          >
            <span style={{ padding: '6px 14px', borderRadius: '8px', background: 'var(--surface-subtle)' }}>App opens</span>
            <span>→</span>
            <span style={{ padding: '6px 14px', borderRadius: '8px', background: 'var(--surface-subtle)' }}>Health check</span>
            <span>→</span>
            <span style={{ padding: '6px 14px', borderRadius: '8px', background: 'var(--surface-subtle)' }}>Ready</span>
            <span>→</span>
            <span style={{ padding: '6px 14px', borderRadius: '8px', background: 'var(--surface-mint)', color: 'var(--primary)' }}>Dashboard</span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', width: '100%', marginTop: '6px' }}>
              If health check says &quot;waking&quot;: Waking status → Retry health check → Ready → Dashboard
            </span>
          </div>
        </div>
      </section>

      {/* 5. Know What Works Where (2 Cards) */}
      <section style={{ padding: '72px 0', borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-main)' }}>
        <div className="container">
          <div style={{ marginBottom: '36px' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Know what works where
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: 'var(--text-primary)', marginTop: '6px' }}>
              Offline doesn’t mean every service is local.
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '24px' }}>
            {/* Card 1: Local Ledger (Mint) */}
            <div className="interactive-card" style={{ background: 'var(--surface-mint)', border: '1px solid var(--border-subtle)', borderRadius: '20px', padding: '32px 28px' }}>
              <div style={{ color: 'var(--primary)', marginBottom: '14px' }}>
                <HardDrive size={22} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
                Local ledger
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
                Record and review local entries, track your balances and maintain your personal ledger without a network connection.
              </p>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '4px 12px', borderRadius: '9999px', background: 'var(--surface)', color: 'var(--primary)' }}>
                Works without cloud access
              </span>
            </div>

            {/* Card 2: Cloud-dependent Services */}
            <div className="interactive-card" style={{ background: 'var(--surface)', border: '1px solid var(--border-subtle)', borderRadius: '20px', padding: '32px 28px', boxShadow: 'var(--shadow-card)' }}>
              <div style={{ color: 'var(--investment)', marginBottom: '14px' }}>
                <Cloud size={22} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
                Cloud-dependent services
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
                Authentication, cloud-dependent reporting and connected features need internet access and service availability. Planned sync and backups are not available as Community features today.
              </p>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '4px 12px', borderRadius: '9999px', background: 'var(--surface-purple)', color: 'var(--investment)' }}>
                Connection required when used
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Keep It. Export It. Delete It. */}
      <section style={{ padding: '72px 0 20px 0', borderTop: '1px solid var(--border-subtle)', background: 'var(--surface-subtle)' }}>
        <div className="container">
          <div
            className="grid-12"
            style={{
              alignItems: 'center'
            }}
          >
            {/* Left */}
            <div style={{ gridColumn: 'span 7' }} className="sec-col-7">
              <span className="section-tag neutral" style={{ background: 'var(--surface-mint)', color: 'var(--primary)', marginBottom: '14px' }}>
                You remain in control
              </span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '14px' }}>
                Keep it. Export it. Delete it.
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '16px' }}>
                Export your records as PDF, JSON or Excel. Manage local data on your device and request account or cloud-data deletion through support when applicable.
              </p>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                Exports can contain sensitive records. Store them carefully and remove copies you no longer need.
              </div>
            </div>

            {/* Right: Data Controls Card */}
            <div style={{ gridColumn: 'span 5' }} className="sec-col-5">
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
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '18px' }}>
                  Your data controls
                </h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '16px' }}>
                  <Link
                    href="/download"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      border: '1px solid var(--border-subtle)',
                      background: 'var(--surface-subtle)',
                      color: 'var(--text-primary)',
                      fontWeight: 600,
                      fontSize: '0.9rem'
                    }}
                  >
                    <span>Export my records</span>
                    <Download size={16} color="var(--primary)" />
                  </Link>

                  <Link
                    href="/contact"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      border: '1px solid rgba(201, 61, 98, 0.25)',
                      background: 'var(--surface-rose)',
                      color: 'var(--danger)',
                      fontWeight: 600,
                      fontSize: '0.9rem'
                    }}
                  >
                    <span>Delete data / request deletion</span>
                    <Trash2 size={16} color="var(--danger)" />
                  </Link>
                </div>

                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  Review what will be removed before confirming.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Banner */}
      <FinalCtaBanner
        title="Questions about your privacy? Ask us."
        subtitle="Understand how your records are handled before you start."
        buttonText="Contact support"
        href="/contact"
      />
    </div>
  );
}
