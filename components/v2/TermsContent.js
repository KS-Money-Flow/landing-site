'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Check, ArrowRight, FileText } from 'lucide-react';

const sections = [
  {
    num: '01',
    id: 'section-01',
    title: 'Scope and acceptance',
    content: [
      'These proposed terms describe the intended conditions for using Money Flow, a personal finance ledger and spending sentiment app. They cover the Community app and distinguish it from planned Pro Lifetime features. This is draft design copy and must be reviewed before it is published as a binding agreement.',
      'The final terms should be available before use and explain how acceptance is obtained. If you do not agree to the applicable published terms, do not use the service. Nothing in this draft removes rights that cannot be excluded under applicable law.'
    ]
  },
  {
    num: '02',
    id: 'section-02',
    title: 'Accounts and your responsibilities',
    content: [
      'When an account is needed for a connected service, provide accurate information and keep your credentials secure. You are responsible for activity under your account to the extent permitted by applicable law. Do not share credentials or use another person’s account without authorization.',
      'Protect the device that holds your local ledger and use the available PIN or supported biometric access where appropriate. Tell support if you believe account access has been compromised. Money Flow does not ask for your bank password, card PIN or access to a bank account to maintain your manual ledger.'
    ]
  },
  {
    num: '03',
    id: 'section-03',
    title: 'Acceptable and fair use',
    content: [
      'Use Money Flow lawfully and for the personal finance purposes for which it is offered. Do not attempt to access another user’s data, bypass authentication, interfere with service operation, distribute malicious code or use the service to facilitate unlawful activity.',
      'Use connected services fairly. Do not deliberately overload infrastructure, exploit a defect or automate abusive requests. If you discover a security issue, contact support privately with enough detail to explain it and without exposing anyone’s financial records.'
    ]
  },
  {
    num: '04',
    id: 'section-04',
    title: 'Personal-use license',
    content: [
      'Subject to the applicable published terms, Money Flow is intended to grant a limited, non-exclusive license to install and use the app for your own personal finance records. Ownership of the app, its brand and its software is not transferred to you.',
      'Do not resell the app, misrepresent it as your own product or redistribute modified official releases as authentic Money Flow builds. Restrictions must be interpreted consistently with rights and exceptions provided by applicable law.'
    ]
  },
  {
    num: '05',
    id: 'section-05',
    title: 'Community and planned Pro Lifetime',
    content: [
      'Community is offered at ₹0, free forever for the core personal ledger experience, including unlimited transactions and categories, spending sentiment, career carry-forward and reconciliation, without ads. Product availability and the distinction between local and cloud-dependent services remain relevant.',
      'Pro Lifetime is planned, not currently purchasable. No one-time price has been announced. Multi-device sync, automated backups and household sharing are planned extras, not delivered purchase promises. Waitlist registration is not a purchase and does not require payment.',
      'Before any Pro purchase, the final price, feature scope and license conditions must be stated. A lifetime license is not a guarantee of perpetual hosting, unlimited infrastructure or uninterrupted availability. Any ongoing service conditions must be described clearly before sale.'
    ]
  },
  {
    num: '06',
    id: 'section-06',
    title: 'Your data and portability',
    content: [
      'You retain ownership of the financial records and other content you enter. You are responsible for the accuracy of those records and for having the right to enter any information that relates to someone else. Money Flow’s handling of personal information is described in the Privacy policy.',
      'The app provides export options including PDF, JSON and Excel. When you save or share an export, you control the destination and any copies you create. Take care with sensitive files and avoid posting personal ledger data in public community discussions or bug reports.'
    ]
  },
  {
    num: '07',
    id: 'section-07',
    title: 'Backups, availability and cloud warm-up',
    content: [
      'Keep backups or exports appropriate to your needs. Local records may be affected by device loss, app-data removal, uninstalling the app or other device changes. Do not assume that planned cloud backups or sync are protecting records before those features are available and configured.',
      'The local ledger can be used offline. Cloud-dependent reports, authentication and connected features require connectivity and service availability. A cloud service may need time to wake after inactivity; the Cloud Cold-Start Shield checks readiness and may show a waiting or retry state before opening a connected view.',
      'Services may be interrupted, changed or unavailable. A local offline capability is not a promise that every report or connected feature works offline. Keep access to exported copies when your own continuity needs require it.'
    ]
  },
  {
    num: '08',
    id: 'section-08',
    title: 'No financial advice',
    content: [
      'Money Flow is a record-keeping and reflection tool, not a financial adviser, bank, investment platform or tax professional. Categories, sentiment tags, goals, charts and simulations are informational aids and are not personalized financial, investment, accounting or tax advice.',
      'Illustrative projections depend on their stated assumptions. For example, redirecting a fixed monthly amount does not guarantee investment growth or any particular future outcome. Review your own circumstances and seek qualified professional advice when needed. You remain responsible for financial decisions.'
    ]
  },
  {
    num: '09',
    id: 'section-09',
    title: 'Suspension, termination and deletion',
    content: [
      'Access to a connected service may be limited or suspended for serious misuse, security risks or breaches of the applicable terms, subject to applicable law. Where appropriate and practicable, the final service process should provide clear notice and a way to raise questions.',
      'You can stop using the app and remove user-controlled local records. Contact support for account or cloud-data deletion requests when applicable. Export records you want to keep before deleting them; removal can make them unavailable. Copies you saved elsewhere are not automatically deleted with the app or account.'
    ]
  },
  {
    num: '10',
    id: 'section-010',
    title: 'Limitations and applicable rights',
    content: [
      'Money Flow is intended to help organize user-entered records, but errors, interruptions and data loss can occur. To the extent permitted by applicable law, the final agreement may limit responsibility for losses arising from use, unavailability or reliance on information in the app.',
      'No exclusion or limitation applies where it is prohibited by law, including any mandatory consumer protections. This draft does not invent a governing jurisdiction, a monetary liability cap or a legal approval. Those matters require qualified review before publication.'
    ]
  },
  {
    num: '11',
    id: 'section-011',
    title: 'Updates and contact',
    content: [
      'Features and terms may evolve. Material changes to the published agreement should be communicated in an accessible way before they apply where required. Planned feature descriptions are not a substitute for final purchase and service conditions.',
      'For questions about the app, account responsibilities or these proposed terms, email krishnar.sutariyarskd154@gmail.com. Use only the information needed to describe your question; do not include bank credentials or full financial records. Read the Privacy policy alongside these terms.'
    ]
  }
];

export default function TermsContent() {
  const [activeSection, setActiveSection] = useState('section-01');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      let current = sections[0].id;
      for (let i = 0; i < sections.length; i++) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const top = el.offsetTop;
          if (top <= scrollPosition) {
            current = sections[i].id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ padding: '40px 0 80px 0' }}>
      <div className="container">
        {/* Breadcrumb & Tag */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
          <Link href="/" style={{ color: 'var(--text-secondary)' }}>Home</Link>
          <span>/</span>
          <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Terms of service</span>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <span style={{ fontSize: '0.72rem', fontWeight: 700, padding: '4px 10px', borderRadius: '6px', background: 'var(--surface-subtle)', color: 'var(--text-secondary)', border: '1px solid var(--border-subtle)' }}>
            Draft · review before publishing
          </span>
        </div>

        {/* Title */}
        <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
          <h1
            style={{
              fontSize: 'clamp(2.4rem, 5vw, 3.5rem)',
              fontWeight: 800,
              color: 'var(--text-primary)',
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              marginBottom: '16px'
            }}
          >
            A fair foundation for your ledger.
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '12px' }}>
            What using Money Flow means, what you remain responsible for and how the free app differs from planned paid features.
          </p>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
            Proposed design copy, not legally approved terms of service. No effective date has been assigned.
          </div>
        </div>

        {/* 2 Columns Layout: Sticky Sidebar + Content */}
        <div className="grid-12">
          {/* Left Column: Outer Column (Stretches full height) */}
          <div className="policy-sidebar-col">
            {/* Sticky Sidebar Container (Pins under header during scroll) */}
            <div className="policy-sidebar-sticky">
              <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: '16px' }}>
                On this page
              </div>

              <nav style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '28px' }}>
                {sections.map((s) => {
                  const isActive = activeSection === s.id;
                  return (
                    <a
                      key={s.num}
                      href={`#${s.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        const el = document.getElementById(s.id);
                        if (el) {
                          el.scrollIntoView({ behavior: 'smooth' });
                          setActiveSection(s.id);
                        }
                      }}
                      className={`toc-link ${isActive ? 'active' : ''}`}
                    >
                      <span className="toc-num" style={{ fontSize: '0.78rem', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
                        {s.num}
                      </span>
                      <span style={{ fontWeight: isActive ? 700 : 500 }}>
                        {s.title}
                      </span>
                    </a>
                  );
                })}
              </nav>

              <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '16px' }}>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
                  Questions about this document?
                </div>
                <Link
                  href="/contact"
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: 'var(--primary)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <span>Contact Money Flow</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Short Version & Detailed Sections (8 Cols) */}
          <div style={{ gridColumn: 'span 8', display: 'flex', flexDirection: 'column', gap: '36px' }} className="policy-content">
            {/* Short Version Card (Mint) */}
            <div
              className="interactive-card"
              style={{
                background: 'var(--surface-mint)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '20px',
                padding: '30px'
              }}
            >
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '16px' }}>
                The short version
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.92rem', color: 'var(--text-primary)' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <Check size={18} color="var(--primary)" strokeWidth={2.5} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>Use Money Flow as a personal ledger, keep access secure and use connected services fairly.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <Check size={18} color="var(--primary)" strokeWidth={2.5} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>Your data remains yours. Export it and maintain backups that meet your needs.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <Check size={18} color="var(--primary)" strokeWidth={2.5} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>Community is free. Pro Lifetime is planned, with no confirmed price or perpetual hosting promise.</span>
                </div>
              </div>
            </div>

            {/* 11 Sections */}
            {sections.map((s) => {
              const isActive = activeSection === s.id;
              return (
                <div
                  key={s.num}
                  id={s.id}
                  style={{
                    scrollMarginTop: '110px',
                    borderRadius: '16px',
                    padding: '18px 24px',
                    marginLeft: '-20px',
                    background: isActive ? 'var(--surface-mint)' : 'transparent',
                    borderLeft: isActive ? '4px solid var(--primary)' : '4px solid transparent',
                    boxShadow: isActive ? '0 4px 16px rgba(8, 127, 91, 0.08)' : 'none',
                    transform: isActive ? 'translateX(4px)' : 'none',
                    transition: 'all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '12px' }}>
                    <span style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--primary)', fontFamily: 'var(--font-mono)' }}>
                      {s.num}
                    </span>
                    <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                      {s.title}
                    </h2>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: 1.7, paddingLeft: '32px' }}>
                    {s.content.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Draft Footer Notice */}
            <div
              style={{
                background: 'var(--surface-subtle)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '12px',
                padding: '16px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                fontSize: '0.82rem',
                color: 'var(--text-secondary)'
              }}
            >
              <FileText size={18} color="var(--primary)" style={{ flexShrink: 0 }} />
              <span>Draft for review. Read this document alongside the <Link href="/privacy" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Privacy policy</Link> before publishing or using it as a legal notice.</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          .policy-sidebar {
            display: none !important;
          }
          .policy-content {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </div>
  );
}
