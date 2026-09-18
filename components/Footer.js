'use client';

import Link from 'next/link';
import { ShieldCheck, Heart, Terminal, Sparkles, Smartphone, ArrowUpRight, Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      style={{
        background: 'linear-gradient(180deg, var(--bg-main) 0%, var(--bg-secondary) 100%)',
        borderTop: '1px solid var(--border-subtle)',
        paddingTop: '80px',
        paddingBottom: '40px',
        marginTop: '100px',
        position: 'relative'
      }}
    >
      {/* Decorative Glow */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #10B981, #8B5CF6, transparent)'
        }}
      />

      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '48px',
            marginBottom: '64px'
          }}
        >
          {/* Col 1: Brand */}
          <div style={{ maxWidth: '340px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #10B981, #8B5CF6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '18px',
                  color: '#FFFFFF'
                }}
              >
                ₹
              </div>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
                Money Flow
              </span>
            </div>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
              The high-performance wealth tracking platform designed to automate career transition ledgers, sentiment-based spend quality analysis, and physical cash reconciliations.
            </p>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '9999px',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                fontSize: '0.78rem',
                color: 'var(--primary)'
              }}
            >
              <span className="pulse-dot" />
              <span>Cloud Services: All Systems Operational</span>
            </div>
          </div>

          {/* Col 2: Product & App */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '18px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Product
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li>
                <Link href="/features" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  Interactive Features
                </Link>
              </li>
              <li>
                <Link href="/download" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <span>Mobile App Access</span>
                  <span className="badge badge-emerald" style={{ fontSize: '0.65rem' }}>v2.4</span>
                </Link>
              </li>
              <li>
                <Link href="/pricing" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  Transparent Pricing
                </Link>
              </li>
              <li>
                <Link href="/#calculator" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  Bad Spend Wealth Simulator
                </Link>
              </li>
              <li>
                <Link href="/#interactive-demo" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  Live Interactive Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Architecture & Security */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '18px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Trust &amp; Architecture
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li>
                <Link href="/security" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  Security &amp; Data Isolation
                </Link>
              </li>
              <li>
                <Link href="/about" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  Our Mission &amp; Philosophy
                </Link>
              </li>
              <li>
                <Link href="/security#render-cold-start" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  Cloud Cold-Start Shield
                </Link>
              </li>
              <li>
                <Link href="/contact" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  Developer &amp; Support Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Legal & Community */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '18px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Compliance &amp; Legal
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li>
                <Link href="/privacy" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  Help &amp; Inquiries
                </Link>
              </li>
            </ul>
            <div style={{ marginTop: '20px' }}>
              <Link href="/download" className="btn btn-secondary" style={{ width: '100%', fontSize: '0.85rem', padding: '10px' }}>
                <Smartphone size={15} />
                <span>Get Mobile Access</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div
          style={{
            paddingTop: '32px',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            fontSize: '0.85rem',
            color: 'var(--text-muted)'
          }}
        >
          <div>
            © {new Date().getFullYear()} Money Flow. Engineered for Financial Autonomy &amp; Complete Data Privacy.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <span>Zero Tracking • Multi-Tenant Isolated</span>
            <Link href="/privacy" style={{ color: 'var(--text-secondary)' }}>Privacy</Link>
            <Link href="/terms" style={{ color: 'var(--text-secondary)' }}>Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
