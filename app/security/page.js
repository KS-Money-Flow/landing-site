'use client';

import Link from 'next/link';
import { ShieldCheck, Lock, Server, Cpu, Database, CheckCircle2, Zap, AlertCircle } from 'lucide-react';

export default function SecurityPage() {
  return (
    <div style={{ padding: '40px 0 80px 0' }}>
      <div className="container">
        
        {/* Page Header */}
        <div className="section-header" style={{ marginBottom: '64px' }}>
          <span className="section-tag">Privacy by Design</span>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.5rem)', marginBottom: '16px' }}>
            Security &amp; Cloud Architecture
          </h1>
          <p>
            Your wealth records belong exclusively to you. Learn how Money Flow protects your financial information and handles cloud cold-starts gracefully.
          </p>
        </div>

        {/* Security Highlights Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
            marginBottom: '64px'
          }}
        >
          
          <div className="glass-panel" style={{ padding: '36px 32px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(16, 185, 129, 0.2)', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
              <Lock size={24} />
            </div>
            <h2 style={{ fontSize: '1.35rem', marginBottom: '12px' }}>Cryptographic Password Hashing</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.7, marginBottom: '16px' }}>
              We use standard salted key derivation with 10 cryptographic rounds. Plaintext passwords never touch our databases or application logs.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#34D399' }}>
              <CheckCircle2 size={16} />
              <span>Zero-knowledge password storage</span>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '36px 32px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(139, 92, 246, 0.2)', color: '#8B5CF6', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
              <Database size={24} />
            </div>
            <h2 style={{ fontSize: '1.35rem', marginBottom: '12px' }}>Multi-Tenant Database Scoping</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.7, marginBottom: '16px' }}>
              Every data query is strictly bound to the authenticated user ID extracted from your cryptographic token. Cross-tenant leakage is mathematically prevented.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#A78BFA' }}>
              <CheckCircle2 size={16} />
              <span>Strict user data partition isolation</span>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '36px 32px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(244, 63, 94, 0.2)', color: '#F43F5E', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
              <ShieldCheck size={24} />
            </div>
            <h2 style={{ fontSize: '1.35rem', marginBottom: '12px' }}>Zero Third-Party Trackers</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.7, marginBottom: '16px' }}>
              Commercial budgeting apps embed external ad trackers and broker scripts to sell lead generation data. Money Flow contains zero tracking beacons or telemetry selling.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#FB7185' }}>
              <CheckCircle2 size={16} />
              <span>No ads, no data broker sharing</span>
            </div>
          </div>

        </div>

        {/* Cold-Start Architecture Deep Dive */}
        <div
          id="render-cold-start"
          className="glass-panel"
          style={{
            padding: '48px 40px',
            marginBottom: '64px',
            background: 'var(--surface-glass)',
            border: '1px solid rgba(16, 185, 129, 0.3)'
          }}
        >
          <div className="badge badge-emerald" style={{ marginBottom: '16px' }}>
            <Zap size={14} />
            <span>Infrastructure Resilience</span>
          </div>

          <h2 style={{ fontSize: '1.85rem', marginBottom: '16px' }}>
            The Cloud Cold-Start Shield
          </h2>

          <p style={{ fontSize: '1.02rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '28px' }}>
            Modern cloud architectures automatically sleep idle containers to conserve server power. Upon opening the app after inactivity, the cloud container requires a brief moment to warm up.
          </p>

          {/* Architecture Box */}
          <div
            style={{
              background: 'var(--code-bg)',
              borderRadius: '16px',
              border: '1px solid var(--border-subtle)',
              padding: '24px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.88rem',
              color: '#34D399',
              overflowX: 'auto',
              marginBottom: '28px'
            }}
          >
            <div>[App Startup] ──&gt; Health Check: GET /api/health</div>
            <div style={{ color: '#64748B', margin: '6px 0' }}>  │</div>
            <div style={{ color: 'var(--text-secondary)' }}>  ├── If Ready: Container is warm ──&gt; Instant Dashboard Transition</div>
            <div style={{ color: '#64748B', margin: '6px 0' }}>  │</div>
            <div style={{ color: '#FBBF24' }}>  └── If Sleeping: Container is spinning up</div>
            <div style={{ color: '#FBBF24', paddingLeft: '32px' }}>
              ├── Render animated &quot;Waking up cloud server...&quot; status screen
            </div>
            <div style={{ color: '#FBBF24', paddingLeft: '32px' }}>
              ├── Retry loop every 3 seconds (No crash, no user error dialog)
            </div>
            <div style={{ color: '#34D399', paddingLeft: '32px' }}>
              └── On Success: Smoothly transition directly into your dashboard!
            </div>
          </div>

          <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            This resilient architecture prevents confusing &quot;Network Request Failed&quot; alerts and guarantees a polished, reliable user experience.
          </p>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <Link href="/download" className="btn btn-primary" style={{ padding: '14px 32px' }}>
            <span>Get Money Flow Mobile Access</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
