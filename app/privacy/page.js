'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, Lock, Database, EyeOff, UserCheck, Trash2, 
  Scale, FileText, CheckCircle2, AlertTriangle, Mail, ArrowRight 
} from 'lucide-react';

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState('philosophy');

  const sections = [
    { id: 'philosophy', title: '1. Privacy Philosophy', icon: ShieldCheck },
    { id: 'collection', title: '2. Information We Collect', icon: Database },
    { id: 'usage', title: '3. How Data Is Used', icon: FileText },
    { id: 'security', title: '4. Encryption & Architecture', icon: Lock },
    { id: 'anti-monetization', title: '5. Zero Data Monetization', icon: EyeOff },
    { id: 'cookies', title: '6. Cookies & Local Storage', icon: CheckCircle2 },
    { id: 'user-rights', title: '7. Your Rights & Deletion', icon: UserCheck },
    { id: 'retention', title: '8. Data Retention Policy', icon: Trash2 },
    { id: 'compliance', title: '9. DPDP & GDPR Alignment', icon: Scale },
    { id: 'contact', title: '10. Contact & Inquiries', icon: Mail }
  ];

  // Auto-update active section as user scrolls down the page
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        const el = document.getElementById(sec.id);
        if (el && scrollPosition >= el.offsetTop) {
          setActiveSection(sec.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ padding: '40px 0 100px 0' }}>
      <div className="container">
        
        {/* Document Header */}
        <div style={{ marginBottom: '48px', maxWidth: '840px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <span className="badge badge-emerald">Legal Architecture</span>
            <span className="badge badge-purple">Version 2.4</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.4rem)', marginBottom: '16px', color: 'var(--text-primary)' }}>
            Privacy Policy &amp; Data Protection Charter
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '16px' }}>
            At Money Flow, we believe your personal finances are inherently private. This charter outlines our uncompromising standards for non-custodial tracking, partition encryption, and zero third-party data monetization.
          </p>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            Last Revised: September 18, 2026 • Effective Immediately Across All Clients
          </div>
        </div>

        {/* Two-Column Layout: Sticky Navigation & Deep Content */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '48px', alignItems: 'start' }}>
          
          {/* Left: Sticky Table of Contents Sidebar */}
          <div
            className="glass-panel"
            style={{
              padding: '28px 20px',
              position: 'sticky',
              top: '100px',
              borderRadius: '20px',
              border: '1px solid var(--border-subtle)',
              background: 'var(--surface-glass)'
            }}
          >
            <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px', paddingLeft: '8px' }}>
              Table of Contents
            </div>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {sections.map(sec => {
                const Icon = sec.icon;
                const isActive = activeSection === sec.id;
                return (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    onClick={() => setActiveSection(sec.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '10px 12px',
                      borderRadius: '10px',
                      fontSize: '0.88rem',
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? 'var(--primary)' : 'var(--text-secondary)',
                      background: isActive ? 'rgba(16, 185, 129, 0.12)' : 'transparent',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <Icon size={16} color={isActive ? 'var(--primary)' : 'var(--text-muted)'} />
                    <span>{sec.title}</span>
                  </a>
                );
              })}
            </nav>

            <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid var(--border-subtle)', paddingLeft: '8px' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '8px' }}>Questions regarding data rights?</div>
              <Link href="/contact" style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <span>Contact Privacy Officer</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          {/* Right: In-Depth Legal Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', maxWidth: '800px' }}>
            
            {/* 1. Philosophy */}
            <section id="philosophy" className="glass-panel" style={{ padding: '36px 32px', background: 'var(--surface-glass)', border: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.15)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ShieldCheck size={20} />
                </div>
                <h2 style={{ fontSize: '1.45rem', color: 'var(--text-primary)' }}>1. Privacy Philosophy &amp; Core Architecture</h2>
              </div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.96rem', marginBottom: '16px' }}>
                Money Flow (&quot;we&quot;, &quot;our&quot;, or &quot;the platform&quot;) is structured on the foundational premise that personal financial logs are not a commodity. Unlike conventional commercial fintech applications that aggregate user purchase records to sell targeted credit card leads or personal loan offerings, Money Flow operates on a strict non-custodial organizational model.
              </p>
              <div style={{ background: 'var(--surface-elevated)', borderLeft: '4px solid var(--primary)', padding: '16px', borderRadius: '10px', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                <strong>Our Privacy Charter:</strong> Your salary records, company transitions, transaction classifications, and spend sentiment flags belong solely to you. We mathematically isolate every user partition to prevent cross-account exposure.
              </div>
            </section>

            {/* 2. Information We Collect */}
            <section id="collection" className="glass-panel" style={{ padding: '36px 32px', background: 'var(--surface-glass)', border: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(139, 92, 246, 0.15)', color: 'var(--investment)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Database size={20} />
                </div>
                <h2 style={{ fontSize: '1.45rem', color: 'var(--text-primary)' }}>2. Categories of Information We Collect</h2>
              </div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.96rem', marginBottom: '20px' }}>
                We practice aggressive data minimization. We only collect and store data points that are strictly necessary to deliver wealth tracking calculations:
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ background: 'var(--surface-elevated)', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>A. Authentication Credentials</div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    User email address and a cryptographically salted &amp; hashed password (computed via bcrypt with 10 rounds). Plaintext passwords never enter memory or persistent disk storage.
                  </p>
                </div>

                <div style={{ background: 'var(--surface-elevated)', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>B. Ledger Entries &amp; Transaction Details</div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    Transaction amounts, dates, custom category labels, company ledger affiliations, and optional note descriptions manually entered by the user.
                  </p>
                </div>

                <div style={{ background: 'var(--surface-elevated)', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>C. Emotional Sentiment Metadata</div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    &quot;Good&quot; vs &quot;Bad&quot; sentiment tags chosen by the user to calculate the personal Spend Quality Ratio.
                  </p>
                </div>

                <div style={{ background: 'var(--surface-elevated)', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>D. Reconciliation Data</div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    User-declared physical cash in hand and pending banking reconciliations for balancing ledger discrepancies.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. Purpose of Processing */}
            <section id="usage" className="glass-panel" style={{ padding: '36px 32px', background: 'var(--surface-glass)', border: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.15)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <FileText size={20} />
                </div>
                <h2 style={{ fontSize: '1.45rem', color: 'var(--text-primary)' }}>3. Purpose of Processing &amp; Use Cases</h2>
              </div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.96rem', marginBottom: '16px' }}>
                Your financial records are processed solely for the following explicit functions:
              </p>
              <ul style={{ listStyle: 'disc', paddingLeft: '24px', color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.94rem' }}>
                <li>Computing cumulative lifetime net worth across all registered workplace ledgers.</li>
                <li>Executing multi-company carry-forward balance bridges when switching employer profiles.</li>
                <li>Aggregating monthly inflow, outflow, and investment asset category distributions.</li>
                <li>Calculating percentage-based commitment goals (such as 1.00% community notes).</li>
                <li>Monitoring server container health and cold-start wake-up routines.</li>
              </ul>
              <div style={{ marginTop: '16px', padding: '14px', background: 'rgba(244, 63, 94, 0.1)', border: '1px solid var(--danger)', borderRadius: '10px', fontSize: '0.88rem', color: 'var(--danger)', fontWeight: 600 }}>
                🚫 Absolute Prohibition: We do not use your financial logs to train large language models, construct behavioral ad dossiers, or share aggregated insights with marketing firms.
              </div>
            </section>

            {/* 4. Encryption & Architecture */}
            <section id="security" className="glass-panel" style={{ padding: '36px 32px', background: 'var(--surface-glass)', border: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.15)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Lock size={20} />
                </div>
                <h2 style={{ fontSize: '1.45rem', color: 'var(--text-primary)' }}>4. Storage, Encryption &amp; Security Architecture</h2>
              </div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.96rem', marginBottom: '16px' }}>
                Money Flow incorporates defense-in-depth security principles across transport and storage:
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                <div style={{ background: 'var(--surface-elevated)', padding: '18px', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: '6px' }}>TLS 1.3 in Transit</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    All communications between your mobile device, browser, and server occur through encrypted HTTPS channels with modern cipher suites.
                  </div>
                </div>
                <div style={{ background: 'var(--surface-elevated)', padding: '18px', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: '6px' }}>Tenant Partition Isolation</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    Every database query enforces strict user ID boundaries extracted from validated JWT authentication tokens.
                  </div>
                </div>
                <div style={{ background: 'var(--surface-elevated)', padding: '18px', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: '6px' }}>Cold-Start Shield</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    Server health probes monitor container wake-up cycles without caching personal payload data in temporary buffers.
                  </div>
                </div>
              </div>
            </section>

            {/* 5. Zero Monetization Guarantee */}
            <section id="anti-monetization" className="glass-panel" style={{ padding: '36px 32px', background: 'var(--surface-glass)', border: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(244, 63, 94, 0.15)', color: 'var(--danger)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <EyeOff size={20} />
                </div>
                <h2 style={{ fontSize: '1.45rem', color: 'var(--text-primary)' }}>5. Zero Third-Party Sharing &amp; Anti-Monetization</h2>
              </div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.96rem', marginBottom: '16px' }}>
                We make an explicit contractual guarantee to all users:
              </p>
              <div style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border-subtle)', borderRadius: '14px', padding: '20px' }}>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', padding: 0, margin: 0 }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-primary)', fontSize: '0.92rem', fontWeight: 600 }}>
                    <CheckCircle2 size={18} color="var(--primary)" />
                    <span>We do NOT sell personal information to credit bureaus, loan brokers, or insurers.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-primary)', fontSize: '0.92rem', fontWeight: 600 }}>
                    <CheckCircle2 size={18} color="var(--primary)" />
                    <span>We do NOT integrate third-party advertising SDKs (such as AdMob, Meta Audience Network).</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-primary)', fontSize: '0.92rem', fontWeight: 600 }}>
                    <CheckCircle2 size={18} color="var(--primary)" />
                    <span>We do NOT share user financial telemetry with third-party analytics data farms.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* 6. Cookies & Client Storage */}
            <section id="cookies" className="glass-panel" style={{ padding: '36px 32px', background: 'var(--surface-glass)', border: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.15)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <CheckCircle2 size={20} />
                </div>
                <h2 style={{ fontSize: '1.45rem', color: 'var(--text-primary)' }}>6. Cookies &amp; Local Client Storage</h2>
              </div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.96rem', marginBottom: '16px' }}>
                Our landing site and web applications use local storage strictly for operational continuity:
              </p>
              <ul style={{ listStyle: 'disc', paddingLeft: '24px', color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.94rem' }}>
                <li><strong>Theme Preference:</strong> Storing your chosen preference (<code>dark</code> vs <code>light</code>) to eliminate theme flash during page loads.</li>
                <li><strong>Session Token:</strong> Secure authentication tokens required to communicate with authorized backend endpoints.</li>
                <li><strong>Zero Behavioral Tracking:</strong> We do not deploy third-party retargeting cookies or tracking pixels.</li>
              </ul>
            </section>

            {/* 7. User Rights & Data Deletion */}
            <section id="user-rights" className="glass-panel" style={{ padding: '36px 32px', background: 'var(--surface-glass)', border: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(139, 92, 246, 0.15)', color: 'var(--investment)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <UserCheck size={20} />
                </div>
                <h2 style={{ fontSize: '1.45rem', color: 'var(--text-primary)' }}>7. Your Legal Rights &amp; Erasure Requests</h2>
              </div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.96rem', marginBottom: '16px' }}>
                You maintain sovereign ownership over your records at all times. Your fundamental rights include:
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '20px' }}>
                <div style={{ background: 'var(--surface-elevated)', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>Right to Export</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    Request an export of all your logged transactions, workplace ledgers, and categories in standard JSON format.
                  </div>
                </div>
                <div style={{ background: 'var(--surface-elevated)', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>Right to Erasure</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    Request immediate, irreversible deletion of your account credentials, transactions, and career ledgers.
                  </div>
                </div>
                <div style={{ background: 'var(--surface-elevated)', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>Right to Rectify</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    Update or correct any transaction, salary figure, or category label directly in the app at any time.
                  </div>
                </div>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                To trigger a complete data deletion, submit a request via our <Link href="/contact" style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'underline' }}>Contact Form</Link> or email our core maintainers directly.
              </p>
            </section>

            {/* 8. Data Retention */}
            <section id="retention" className="glass-panel" style={{ padding: '36px 32px', background: 'var(--surface-glass)', border: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(244, 63, 94, 0.15)', color: 'var(--danger)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Trash2 size={20} />
                </div>
                <h2 style={{ fontSize: '1.45rem', color: 'var(--text-primary)' }}>8. Data Retention &amp; Disposal Lifecycle</h2>
              </div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.96rem', marginBottom: '16px' }}>
                We retain user account records only as long as an active account is maintained. If you delete your account or request data disposal:
              </p>
              <ul style={{ listStyle: 'disc', paddingLeft: '24px', color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.94rem' }}>
                <li>All active transactions and ledger allocations are immediately expunged from the primary database cluster.</li>
                <li>Encrypted rolling backups rotate out and purge historical traces within a maximum of 30 days.</li>
                <li>We do not maintain &quot;shadow profiles&quot; or retain anonymized derivative spending profiles after account termination.</li>
              </ul>
            </section>

            {/* 9. DPDP & GDPR Alignment */}
            <section id="compliance" className="glass-panel" style={{ padding: '36px 32px', background: 'var(--surface-glass)', border: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.15)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Scale size={20} />
                </div>
                <h2 style={{ fontSize: '1.45rem', color: 'var(--text-primary)' }}>9. DPDP Act (India) &amp; GDPR Alignment</h2>
              </div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.96rem', marginBottom: '16px' }}>
                Money Flow is designed in strict compliance with contemporary privacy legislation:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ background: 'var(--surface-elevated)', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>Digital Personal Data Protection (DPDP) Act 2023 (India)</div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    User consent is explicitly collected at signup. Data is used exclusively for the intended lawful purpose of personal wealth tracking. Grievance redressal is provided directly via our designated developer contact.
                  </div>
                </div>
                <div style={{ background: 'var(--surface-elevated)', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>General Data Protection Regulation (GDPR - EU)</div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    We honor the foundational tenets of lawful processing, transparency, purpose limitation, storage limitation, and data minimization for all global users.
                  </div>
                </div>
              </div>
            </section>

            {/* 10. Contact & Inquiries */}
            <section id="contact" className="glass-panel" style={{ padding: '36px 32px', background: 'var(--surface-glass)', border: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.15)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Mail size={20} />
                </div>
                <h2 style={{ fontSize: '1.45rem', color: 'var(--text-primary)' }}>10. Policy Updates &amp; Contact Information</h2>
              </div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.96rem', marginBottom: '20px' }}>
                If we introduce material modifications to how financial data is stored or processed, we will provide conspicuous notice via our landing site and in-app notifications prior to the effective date.
              </p>
              <div style={{ background: 'var(--surface-elevated)', padding: '20px', borderRadius: '14px', border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: '6px' }}>Direct Privacy &amp; Data Protection Officer Contact:</div>
                <div style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '12px' }}>
                  For data requests, audit logs, or account deletion inquiries:
                </div>
                <a
                  href="mailto:krishnar.sutariyarskd154@gmail.com"
                  style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '1rem', textDecoration: 'underline' }}
                >
                  krishnar.sutariyarskd154@gmail.com
                </a>
              </div>
            </section>

          </div>

        </div>

      </div>
    </div>
  );
}
