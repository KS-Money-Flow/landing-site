'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Check, ArrowRight, FileText } from 'lucide-react';

const sections = [
  {
    num: '01',
    id: 'section-01',
    title: 'What this policy covers',
    content: [
      'This draft explains how Money Flow handles information used for a personal finance ledger, spending sentiment and related account services. It is written to distinguish records stored on your device from information processed when you choose a connected service.',
      'The practices described here should be checked against the released app and its service configuration before this policy is published. Planned Pro features are not current Community features, and their final data handling will need to be described before launch.'
    ]
  },
  {
    num: '02',
    id: 'section-02',
    title: 'Information you choose to enter',
    content: [
      'Your ledger can include income, outflows, transfers, categories, career or employer labels, opening balances, reconciliation amounts, goals, notes and Good or Bad spending tags. These records are entered by you; Money Flow does not need your bank login credentials to maintain a manual ledger.',
      'If you create an account for connected services, account information may include the email address and authentication details needed to identify you and provide access. If you contact support, the message and contact details you send are used to respond. Avoid including bank passwords, financial exports or unnecessary sensitive information in support requests.'
    ]
  },
  {
    num: '03',
    id: 'section-03',
    title: 'Local storage and optional cloud use',
    content: [
      'The offline-first ledger stores local records on your device so you can record and review your personal data without a network connection. You control that device and its local copies. Removing app data, uninstalling the app or losing the device may remove access to records that have not been exported or backed up.',
      'When you use a cloud-dependent service, the information needed for that service may be processed by the service infrastructure. Authentication and cloud-dependent reporting require connectivity and availability. Multi-device sync, automated backups and household sharing are planned Pro extras; they should not be assumed to be active protections for current local records.'
    ]
  },
  {
    num: '04',
    id: 'section-04',
    title: 'No tracking and no data sale',
    content: [
      'Money Flow does not use third-party trackers to build advertising profiles and does not sell your personal financial data. The Community app is ad-free. Spending sentiment is intended for your own reflection, not for ad targeting.',
      'Information is used for the ledger, account access and the services you request, including responding to support inquiries. This draft does not claim that every infrastructure provider is absent; any service-provider disclosures needed for the final product should be reviewed before publication.'
    ]
  },
  {
    num: '05',
    id: 'section-05',
    title: 'Permissions and device access',
    content: [
      'A feature may ask for device access when it needs it, such as saving or sharing an exported report, or using device-supported biometrics for app access. Review the permission request in context and grant only the access you are comfortable providing.',
      'You can manage permissions through device settings. Denying a permission may limit the related feature, but it does not authorize Money Flow to collect bank credentials. System biometric checks are separate from the financial records you enter into the ledger.'
    ]
  },
  {
    num: '06',
    id: 'section-06',
    title: 'Your controls, exports and deletion',
    content: [
      'You can review and manage your own ledger entries and export records as PDF, JSON or Excel. Exports leave the app’s immediate control: a shared file or saved copy can remain wherever you place it. Protect those files and delete unnecessary copies yourself.',
      'You can remove user-controlled local records through the app or device controls as available. For account or cloud-data deletion requests, contact Money Flow using the address below. Explain the request without attaching financial records; the information needed to verify and fulfill the request can then be discussed safely.'
    ]
  },
  {
    num: '07',
    id: 'section-07',
    title: 'Retention',
    content: [
      'Information needed to provide requested services is retained for as long as it is needed for those services and related legitimate requirements. No fixed deletion period is promised by this draft. Local data remains user-controlled on your device until you remove it or it is otherwise lost through device or app changes.',
      'Support messages may be kept while they are needed to handle the inquiry and related follow-up. A deletion request does not automatically delete exports or copies you have saved elsewhere. Any additional retention obligations should be made clear in the final reviewed policy.'
    ]
  },
  {
    num: '08',
    id: 'section-08',
    title: 'How access is protected',
    content: [
      'Money Flow uses industry-standard security measures appropriate to the nature of the application. Local app security can be enhanced using your device lock screen and biometric authentication.',
      'Network communication for connected services uses secure transport (HTTPS / TLS). Administrative access to cloud infrastructure is restricted to authorized personnel who require it for operations and maintenance.'
    ]
  },
  {
    num: '09',
    id: 'section-09',
    title: 'Changes to this policy',
    content: [
      'This privacy policy may be updated periodically to reflect changes in our service practices, feature additions or applicable legal obligations. Any material modifications will be communicated clearly within the app and via updated documentation.',
      'Continued use of Money Flow following the posting of an updated privacy policy constitutes your acknowledgment and understanding of the modified terms.'
    ]
  },
  {
    num: '10',
    id: 'section-010',
    title: 'Contact and privacy requests',
    content: [
      'For questions about privacy, account information, exports or deletion, email krishnar.sutariyarskd154@gmail.com. Use a clear subject such as “Privacy question” or “Data deletion request” so the request can be understood.',
      'Include only the account or app context needed to begin the conversation. Do not send bank passwords, card PINs, complete transaction histories or unredacted financial statements. Money Flow support does not need bank credentials to help with a ledger question.'
    ]
  }
];

export default function PrivacyContent() {
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
          <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Privacy policy</span>
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
            Your records. Clear boundaries.
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '12px' }}>
            A plain-language view of what you enter, where it lives and the choices you have. Read the summary, then explore the details.
          </p>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
            Proposed design copy, not legally approved privacy policy. No effective date has been assigned.
          </div>
        </div>

        {/* 2 Columns Layout: Sticky Sidebar + Content */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '40px',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Table of Contents (4 Cols) */}
          <div
            style={{
              gridColumn: 'span 4',
              position: 'sticky',
              top: '110px'
            }}
            className="policy-sidebar"
          >
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
                  <span>Your manual ledger is local-first; cloud-dependent services have separate connectivity needs.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <Check size={18} color="var(--primary)" strokeWidth={2.5} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>No bank credential collection, no third-party tracking and no sale of your financial data.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <Check size={18} color="var(--primary)" strokeWidth={2.5} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>You control local records and exports, and can contact support about account or cloud-data deletion.</span>
                </div>
              </div>
            </div>

            {/* 10 Sections */}
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
              <span>Draft for review. Read this document alongside the <Link href="/terms" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Terms of service</Link> before publishing or using it as a legal notice.</span>
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
