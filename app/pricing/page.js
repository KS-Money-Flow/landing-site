'use client';

import Link from 'next/link';
import { Check, Sparkles, Smartphone, ArrowRight, ShieldCheck, Heart, Zap } from 'lucide-react';

export default function PricingPage() {
  return (
    <div style={{ padding: '40px 0 80px 0' }}>
      <div className="container">
        
        {/* Page Header */}
        <div className="section-header" style={{ marginBottom: '64px' }}>
          <span className="section-tag">Zero Hidden Fees</span>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.5rem)', marginBottom: '16px' }}>
            Transparent &amp; Free Forever
          </h1>
          <p>
            Money Flow was created to empower individual financial autonomy. No ads, no data harvesting, and no subscription paywalls for your personal wealth data.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
            maxWidth: '960px',
            margin: '0 auto 64px auto'
          }}
        >
          
          {/* Card 1: Community Edition (Highlight) */}
          <div
            className="glass-panel"
            style={{
              padding: '40px 32px',
              border: '2px solid var(--primary)',
              boxShadow: 'var(--shadow-card), var(--shadow-glow)',
              position: 'relative',
              background: 'var(--surface-glass)'
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '-14px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'linear-gradient(135deg, #10B981, #059669)',
                color: '#FFFFFF',
                padding: '4px 16px',
                borderRadius: '9999px',
                fontSize: '0.78rem',
                fontWeight: 800,
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
              }}
            >
              Most Popular • 100% Free
            </div>

            <div style={{ marginBottom: '24px' }}>
              <h2 style={{ fontSize: '1.6rem', marginBottom: '8px', color: 'var(--text-primary)' }}>Community Edition</h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                The complete personal wealth manager with zero artificial limits.
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '32px' }}>
              <span style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--text-primary)' }}>₹0</span>
              <span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>/ lifetime</span>
            </div>

            {/* Checklist */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '36px' }}>
              {[
                'Unlimited transactions & categories',
                'Multi-company career transition ledgers',
                'Automatic carry-forward balance engine',
                '"Good vs Bad" emotional spending sentiment tags',
                'Percentage-based income targeting (Notes 1%)',
                'Dual Cash & Pending bank reconciliations',
                'Cloud backend & cold-start wake-up shield',
                'Zero advertisements or user tracking',
                'Full mobile access on Android devices'
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.2)', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Check size={14} />
                  </div>
                  <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>{item}</span>
                </div>
              ))}
            </div>

            <Link href="/download" className="btn btn-primary" style={{ width: '100%', padding: '14px' }}>
              <Smartphone size={18} />
              <span>Get Started Free (v2.4)</span>
            </Link>
          </div>

          {/* Card 2: Cloud Sync Pro (Roadmap / Enterprise) */}
          <div
            className="glass-panel"
            style={{
              padding: '40px 32px',
              background: 'var(--surface-glass)',
              border: '1px solid var(--border-subtle)',
              boxShadow: 'var(--shadow-card)'
            }}
          >
            <div style={{ marginBottom: '24px' }}>
              <div className="badge badge-purple" style={{ marginBottom: '12px' }}>
                Coming in v3.0
              </div>
              <h2 style={{ fontSize: '1.6rem', marginBottom: '8px', color: 'var(--text-primary)' }}>Cloud Sync Pro</h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                For power users who need automated multi-device cloud replication and team accountant exports.
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '32px' }}>
              <span style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--text-primary)' }}>₹199</span>
              <span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>/ month (optional)</span>
            </div>

            {/* Checklist */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '36px' }}>
              {[
                'Everything in Community Free Edition',
                'Instant multi-device real-time sync (iOS + Android)',
                'Automated encrypted daily cloud backups',
                'One-click PDF & Excel tax reports for CAs',
                'Priority dedicated cloud infrastructure (instant response)',
                'Family & shared household ledger sharing'
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(139, 92, 246, 0.2)', color: '#8B5CF6', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Check size={14} />
                  </div>
                  <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>{item}</span>
                </div>
              ))}
            </div>

            <Link href="/contact" className="btn btn-outline" style={{ width: '100%', padding: '14px' }}>
              <span>Join Cloud Pro Waitlist</span>
            </Link>
          </div>

        </div>

        {/* Ethical Pledge */}
        <div
          className="glass-card"
          style={{
            maxWidth: '820px',
            margin: '0 auto',
            padding: '36px 32px',
            textAlign: 'center',
            background: 'var(--surface-elevated)',
            border: '1px solid var(--border-subtle)',
            boxShadow: 'var(--shadow-card)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(244, 63, 94, 0.15)', color: 'var(--danger)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Heart size={22} />
            </div>
          </div>
          <h3 style={{ fontSize: '1.35rem', marginBottom: '10px', color: 'var(--text-primary)' }}>The Money Flow Anti-Monetization Pledge</h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '680px', margin: '0 auto' }}>
            Most modern finance apps make money by selling your financial profiles to loan companies or filling your screen with credit offers. Money Flow will never display advertisements, sell financial leads, or lock your historical financial records behind a paywall.
          </p>
        </div>

      </div>
    </div>
  );
}
