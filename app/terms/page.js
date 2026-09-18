'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  FileText, CheckCircle2, ShieldAlert, Cpu, AlertTriangle, 
  Scale, Lock, Layers, Ban, Award, Mail, ArrowRight 
} from 'lucide-react';

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState('acceptance');

  const sections = [
    { id: 'acceptance', title: '1. Acceptance & Eligibility', icon: FileText },
    { id: 'scope', title: '2. Scope of Service', icon: Layers },
    { id: 'accounts', title: '3. Accounts & Security', icon: Lock },
    { id: 'conduct', title: '4. Acceptable Use Policy', icon: Ban },
    { id: 'ip', title: '5. Intellectual Property', icon: Award },
    { id: 'coldstart', title: '6. Cold-Start & Uptime', icon: Cpu },
    { id: 'warranties', title: '7. Disclaimer of Warranties', icon: AlertTriangle },
    { id: 'liability', title: '8. Limitation of Liability', icon: ShieldAlert },
    { id: 'indemnity', title: '9. Indemnification', icon: ShieldAlert },
    { id: 'termination', title: '10. Account Termination', icon: CheckCircle2 },
    { id: 'disputes', title: '11. Governing Law & Disputes', icon: Scale },
    { id: 'contact', title: '12. Revisions & Contact', icon: Mail }
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
            <span className="badge badge-emerald">Terms of Service</span>
            <span className="badge badge-purple">Version 2.4</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.4rem)', marginBottom: '16px', color: 'var(--text-primary)' }}>
            Terms of Service &amp; Master Agreement
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '16px' }}>
            Please read these Terms of Service carefully before utilizing the Money Flow web platform or mobile client applications. This agreement establishes your legal rights and operational guidelines.
          </p>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            Last Revised: September 18, 2026 • Legally Enforceable Across All Deployments
          </div>
        </div>

        {/* Two-Column Layout: Sticky Navigation & In-Depth Terms */}
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
              Terms Index
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
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '8px' }}>Need legal clarification?</div>
              <Link href="/contact" style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <span>Inquire With Legal Team</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          {/* Right: In-Depth Terms Articles */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', maxWidth: '800px' }}>
            
            {/* 1. Acceptance */}
            <section id="acceptance" className="glass-panel" style={{ padding: '36px 32px', background: 'var(--surface-glass)', border: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.15)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <FileText size={20} />
                </div>
                <h2 style={{ fontSize: '1.45rem', color: 'var(--text-primary)' }}>1. Acceptance of Terms &amp; Legal Eligibility</h2>
              </div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.96rem', marginBottom: '16px' }}>
                By creating an account, accessing our landing portal, or operating the Money Flow mobile application, you acknowledge that you have read, understood, and agreed to be legally bound by these Terms of Service.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.96rem' }}>
                You affirm that you are at least 18 years of age (or have reached the age of majority in your jurisdiction) and possess the full legal authority to enter into this agreement. If you do not consent to these terms in their entirety, you must discontinue use of the platform immediately.
              </p>
            </section>

            {/* 2. Scope of Service */}
            <section id="scope" className="glass-panel" style={{ padding: '36px 32px', background: 'var(--surface-glass)', border: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(139, 92, 246, 0.15)', color: 'var(--investment)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Layers size={20} />
                </div>
                <h2 style={{ fontSize: '1.45rem', color: 'var(--text-primary)' }}>2. Scope of Service &amp; Non-Advisory Nature</h2>
              </div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.96rem', marginBottom: '16px' }}>
                Money Flow provides informational organizational software tools designed to record cash flows, track career transition opening balances, categorize expenditures, and calculate personal financial sentiment indices.
              </p>
              <div style={{ background: 'var(--surface-elevated)', borderLeft: '4px solid var(--warning)', padding: '16px', borderRadius: '10px', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                <strong>Important Regulatory Disclaimer:</strong> Money Flow is NOT a licensed banking institution, deposit custodian, broker-dealer, certified financial planner, or registered investment advisor. None of the calculations, projections, or sentiment scores generated by the application constitute licensed financial advice, tax guidance, or investment solicitations.
              </div>
            </section>

            {/* 3. Account Credentials */}
            <section id="accounts" className="glass-panel" style={{ padding: '36px 32px', background: 'var(--surface-glass)', border: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.15)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Lock size={20} />
                </div>
                <h2 style={{ fontSize: '1.45rem', color: 'var(--text-primary)' }}>3. User Registration &amp; Credential Safeguards</h2>
              </div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.96rem', marginBottom: '16px' }}>
                When creating an account, you agree to supply authentic registration details. You bear sole responsibility for:
              </p>
              <ul style={{ listStyle: 'disc', paddingLeft: '24px', color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.94rem' }}>
                <li>Maintaining the confidentiality of your account credentials and password tokens.</li>
                <li>Securing your personal mobile devices against physical or biometric unauthorized intrusion.</li>
                <li>Promptly notifying our team if you suspect an unauthorized breach of your account credentials.</li>
              </ul>
            </section>

            {/* 4. Acceptable Use Policy */}
            <section id="conduct" className="glass-panel" style={{ padding: '36px 32px', background: 'var(--surface-glass)', border: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(244, 63, 94, 0.15)', color: 'var(--danger)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Ban size={20} />
                </div>
                <h2 style={{ fontSize: '1.45rem', color: 'var(--text-primary)' }}>4. Acceptable Use &amp; Prohibited Conduct</h2>
              </div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.96rem', marginBottom: '16px' }}>
                You agree to use Money Flow strictly for legitimate personal financial record-keeping. You agree NOT to:
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
                <div style={{ background: 'var(--surface-elevated)', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontWeight: 700, color: 'var(--danger)', marginBottom: '4px' }}>No Reverse Engineering</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    Decompile, disassemble, or reverse engineer the mobile binary or backend source algorithms.
                  </div>
                </div>
                <div style={{ background: 'var(--surface-elevated)', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontWeight: 700, color: 'var(--danger)', marginBottom: '4px' }}>No Malicious Abuse</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    Deploy automated scraping bots, perform denial-of-service floods, or probe server vulnerabilities.
                  </div>
                </div>
                <div style={{ background: 'var(--surface-elevated)', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontWeight: 700, color: 'var(--danger)', marginBottom: '4px' }}>No Resale or Whitelabeling</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    Package, redistribute, or commercially sublicense the user interface without express written authorization.
                  </div>
                </div>
              </div>
            </section>

            {/* 5. Intellectual Property */}
            <section id="ip" className="glass-panel" style={{ padding: '36px 32px', background: 'var(--surface-glass)', border: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(139, 92, 246, 0.15)', color: 'var(--investment)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Award size={20} />
                </div>
                <h2 style={{ fontSize: '1.45rem', color: 'var(--text-primary)' }}>5. Intellectual Property &amp; Algorithm Ownership</h2>
              </div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.96rem', marginBottom: '16px' }}>
                All trademarks, logos, graphical interface assets, website copy, color palette definitions, and proprietary carry-forward transition calculation engines are the sole intellectual property of the core development team.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.96rem' }}>
                Users retain 100% full ownership over the factual transaction data, figures, category titles, and notes they enter into their private partitions.
              </p>
            </section>

            {/* 6. Cloud Availability & Cold-Start Protocol */}
            <section id="coldstart" className="glass-panel" style={{ padding: '36px 32px', background: 'var(--surface-glass)', border: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.15)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Cpu size={20} />
                </div>
                <h2 style={{ fontSize: '1.45rem', color: 'var(--text-primary)' }}>6. Service Availability &amp; Cold-Start Behavior</h2>
              </div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.96rem', marginBottom: '16px' }}>
                We endeavor to deliver reliable infrastructure availability. Because modern cloud deployment clusters conserve resources by idling containers after inactive windows:
              </p>
              <ul style={{ listStyle: 'disc', paddingLeft: '24px', color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.94rem' }}>
                <li>Users acknowledge that initial connections after prolonged dormancy may experience a brief spin-up period (governed by our built-in Cold-Start Shield).</li>
                <li>We do not guarantee uninterrupted, latency-free, or error-free access at every millisecond, and we reserve the right to perform routine security maintenance updates.</li>
              </ul>
            </section>

            {/* 7. Disclaimer of Warranties */}
            <section id="warranties" className="glass-panel" style={{ padding: '36px 32px', background: 'var(--surface-glass)', border: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(244, 63, 94, 0.15)', color: 'var(--danger)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <AlertTriangle size={20} />
                </div>
                <h2 style={{ fontSize: '1.45rem', color: 'var(--text-primary)' }}>7. Disclaimer of Warranties (&quot;As-Is&quot; Provision)</h2>
              </div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.96rem', marginBottom: '16px' }}>
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, MONEY FLOW IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR ACCURACY OF FINANCIAL CALCULATIONS.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.96rem' }}>
                You acknowledge that all transaction entries and balances reflect user inputs. The platform cannot prevent, and bears no responsibility for, inaccurate manual record entries or user mathematical assumptions.
              </p>
            </section>

            {/* 8. Limitation of Liability */}
            <section id="liability" className="glass-panel" style={{ padding: '36px 32px', background: 'var(--surface-glass)', border: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(244, 63, 94, 0.15)', color: 'var(--danger)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ShieldAlert size={20} />
                </div>
                <h2 style={{ fontSize: '1.45rem', color: 'var(--text-primary)' }}>8. Limitation of Liability</h2>
              </div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.96rem' }}>
                UNDER NO CIRCUMSTANCES SHALL THE CREATORS, DEVELOPERS, OR MAINTAINERS OF MONEY FLOW BE LIABLE FOR DIRECT, INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, OR PUNITIVE DAMAGES RESULTING FROM YOUR USE OR INABILITY TO USE THE SERVICE, INCLUDING BUT NOT LIMITED TO LOST SAVINGS, TAX DISCREPANCIES, BUSINESS INTERRUPTION, OR DATA CORRUPTION.
              </p>
            </section>

            {/* 9. Indemnification */}
            <section id="indemnity" className="glass-panel" style={{ padding: '36px 32px', background: 'var(--surface-glass)', border: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.15)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ShieldAlert size={20} />
                </div>
                <h2 style={{ fontSize: '1.45rem', color: 'var(--text-primary)' }}>9. User Indemnification</h2>
              </div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.96rem' }}>
                You agree to defend, indemnify, and hold harmless Money Flow and its developers against any third-party claims, liabilities, damages, and reasonable legal expenses arising from your violation of these Terms of Service or your unauthorized exploitation of the platform.
              </p>
            </section>

            {/* 10. Account Termination */}
            <section id="termination" className="glass-panel" style={{ padding: '36px 32px', background: 'var(--surface-glass)', border: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.15)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <CheckCircle2 size={20} />
                </div>
                <h2 style={{ fontSize: '1.45rem', color: 'var(--text-primary)' }}>10. Account Suspension &amp; Voluntary Termination</h2>
              </div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.96rem', marginBottom: '16px' }}>
                You may terminate this agreement at any time by ceasing use of the software and requesting account deletion. We reserve the right to suspend or terminate accounts that breach acceptable use standards or conduct unauthorized system probes.
              </p>
            </section>

            {/* 11. Disputes & Law */}
            <section id="disputes" className="glass-panel" style={{ padding: '36px 32px', background: 'var(--surface-glass)', border: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(139, 92, 246, 0.15)', color: 'var(--investment)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Scale size={20} />
                </div>
                <h2 style={{ fontSize: '1.45rem', color: 'var(--text-primary)' }}>11. Governing Law &amp; Informal Dispute Resolution</h2>
              </div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.96rem', marginBottom: '16px' }}>
                These terms shall be interpreted in accordance with applicable laws. In the event of any controversy, both parties agree to first seek an informal, amicable resolution in good faith by contacting our core maintainer team.
              </p>
            </section>

            {/* 12. Contact */}
            <section id="contact" className="glass-panel" style={{ padding: '36px 32px', background: 'var(--surface-glass)', border: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.15)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Mail size={20} />
                </div>
                <h2 style={{ fontSize: '1.45rem', color: 'var(--text-primary)' }}>12. Revisions to Terms &amp; Legal Contact</h2>
              </div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.96rem', marginBottom: '20px' }}>
                We reserve the right to revise these terms from time to time. Any material changes will be reflected with a revised effective timestamp on this page. Continued utilization of Money Flow following revisions signifies acceptance of the updated terms.
              </p>
              <div style={{ background: 'var(--surface-elevated)', padding: '20px', borderRadius: '14px', border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: '6px' }}>Legal &amp; Developer Inquiries:</div>
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
