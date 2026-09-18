'use client';

import { useState } from 'react';
import { 
  Smartphone, CheckCircle2, ShieldCheck, ArrowRight, Bell, Sparkles, 
  Clock, Apple, Play, Lock, Award, ShieldAlert, Cpu
} from 'lucide-react';
import Link from 'next/link';

export default function DownloadPage() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNotify = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <div style={{ padding: '40px 0 80px 0' }}>
      <div className="container">
        
        {/* Page Header */}
        <div className="section-header" style={{ marginBottom: '56px' }}>
          <span className="section-tag">Official Mobile App</span>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.5rem)', marginBottom: '16px' }}>
            Experience Money Flow on Mobile
          </h1>
          <p>
            The private, multi-career ledger wealth platform is coming to your pocket with zero ads, zero telemetry, and complete data autonomy.
          </p>
        </div>

        {/* Primary Access Card: Coming Soon Showcase */}
        <div
          className="glass-panel"
          style={{
            padding: '48px 36px',
            marginBottom: '64px',
            position: 'relative',
            background: 'var(--surface-glass)',
            border: '1px solid var(--border-subtle)'
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
            
            {/* Left: Mobile Release Status & Waitlist Signup */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
                <span className="badge badge-emerald">
                  <Sparkles size={13} />
                  <span>Public Store Launch</span>
                </span>
                <span className="badge badge-purple">
                  <Clock size={13} />
                  <span>Coming Soon</span>
                </span>
              </div>

              <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.3rem)', marginBottom: '14px', color: 'var(--text-primary)' }}>
                Money Flow Mobile Edition
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '24px' }}>
                Engineered from the ground up with automatic career transition carry-forward ledgers, emotional Good vs Bad spending diagnostics, and dual cash reconciliations.
              </p>

              {/* Priority Invite Waitlist Form */}
              {subscribed ? (
                <div style={{ background: 'rgba(16, 185, 129, 0.15)', border: '1px solid var(--primary)', padding: '20px 24px', borderRadius: '14px', marginBottom: '28px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--primary)', fontWeight: 800, fontSize: '1.05rem', marginBottom: '6px' }}>
                    <CheckCircle2 size={22} />
                    <span>Priority Invitation Reserved!</span>
                  </div>
                  <div style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    Thank you! We have reserved your early access spot for <strong>{email}</strong>. You will receive an exclusive release notification and instant access key the moment store deployment goes live.
                  </div>
                </div>
              ) : (
                <form onSubmit={handleNotify} style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '460px', marginBottom: '28px' }}>
                  <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    Reserve Your Wave 1 Priority Access:
                  </div>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{
                        flex: 1,
                        minWidth: '220px',
                        padding: '13px 18px',
                        background: 'var(--input-bg)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '12px',
                        color: 'var(--text-primary)',
                        fontSize: '0.92rem',
                        outline: 'none',
                        boxShadow: 'var(--shadow-card)'
                      }}
                    />
                    <button type="submit" className="btn btn-primary" style={{ padding: '13px 22px', fontSize: '0.92rem', whiteSpace: 'nowrap' }}>
                      <Bell size={16} />
                      <span>Notify Me</span>
                    </button>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    Early adopters receive lifetime Community Pro features with zero subscription costs.
                  </div>
                </form>
              )}

              {/* Security confirmation */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: 'var(--primary)', fontWeight: 600 }}>
                <ShieldCheck size={18} />
                <span>Zero telemetry, multi-tenant isolated, verified for personal privacy.</span>
              </div>
            </div>

            {/* Right: Modern Coming Soon Dashboard View */}
            <div
              style={{
                background: 'var(--surface-elevated)',
                borderRadius: '24px',
                border: '1px solid var(--border-subtle)',
                padding: '36px 28px',
                boxShadow: 'var(--shadow-card)',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.15)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Smartphone size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)' }}>Mobile Rollout Status</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Version 2.4.0 Production Prep</div>
                  </div>
                </div>
                <span className="badge badge-emerald" style={{ fontSize: '0.72rem' }}>85% Ready</span>
              </div>

              {/* Rollout Progress Meter */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px' }}>
                  <span>Store Approval &amp; Release Pipeline</span>
                  <span style={{ color: 'var(--primary)' }}>Stage 4 of 5</span>
                </div>
                <div style={{ height: '8px', background: 'var(--border-subtle)', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: '85%', height: '100%', background: 'linear-gradient(90deg, var(--primary), var(--investment))', borderRadius: '4px' }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '6px' }}>
                  <span>Closed Alpha (Done)</span>
                  <span>Public App Store Deployment (Next)</span>
                </div>
              </div>

              {/* Store Badges (Coming Soon) */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                
                {/* Google Play */}
                <div
                  style={{
                    background: 'var(--surface-glass)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '16px',
                    padding: '16px 14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.12)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Play size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Android</div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 800, color: 'var(--text-primary)' }}>Google Play</div>
                    <div style={{ fontSize: '0.68rem', color: 'var(--warning)', fontWeight: 700, marginTop: '2px' }}>Coming Soon</div>
                  </div>
                </div>

                {/* Apple App Store */}
                <div
                  style={{
                    background: 'var(--surface-glass)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '16px',
                    padding: '16px 14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(139, 92, 246, 0.12)', color: 'var(--investment)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Apple size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>iOS</div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 800, color: 'var(--text-primary)' }}>App Store</div>
                    <div style={{ fontSize: '0.68rem', color: 'var(--warning)', fontWeight: 700, marginTop: '2px' }}>Coming Soon</div>
                  </div>
                </div>

              </div>

              {/* What You Get in Mobile Edition */}
              <div style={{ background: 'var(--chip-bg)', borderRadius: '14px', padding: '14px 16px', fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                💡 <strong>Pre-Registration Advantage:</strong> All reserved members receive instant offline biometric lock, unlimited custom company ledgers, and priority cloud cold-start resilience.
              </div>

            </div>

          </div>
        </div>

        {/* 3 Step Onboarding Guide */}
        <div style={{ marginBottom: '64px' }}>
          <div className="section-header" style={{ marginBottom: '40px' }}>
            <span className="section-tag">Quick Start</span>
            <h2>How to Get Started</h2>
            <p>Begin tracking career ledgers and spend quality in three simple steps.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            
            <div className="glass-card" style={{ padding: '28px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.2)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, marginBottom: '16px' }}>
                1
              </div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '8px' }}>Reserve Your Access</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Enter your email address in the reservation portal above to receive your personal Wave 1 onboarding invitation code.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '28px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(139, 92, 246, 0.2)', color: 'var(--investment)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, marginBottom: '16px' }}>
                2
              </div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '8px' }}>Setup Your Workplaces</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Add your current or past employers. The automatic carry-forward engine bridges your balances between career steps.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '28px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(244, 63, 94, 0.2)', color: 'var(--danger)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, marginBottom: '16px' }}>
                3
              </div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '8px' }}>Tag Spend Sentiment</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Mark expenses with &quot;Good&quot; or &quot;Bad&quot; tags. Watch your emotional spending ratio optimize in real time.
              </p>
            </div>

          </div>
        </div>

        {/* Release Notes Changelog */}
        <div className="glass-panel" style={{ padding: '40px 32px' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Release Notes &amp; Changelog</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Version 2.4 */}
            <div style={{ borderLeft: '3px solid var(--primary)', paddingLeft: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                <span style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)' }}>v2.4.0</span>
                <span className="badge badge-emerald">Upcoming Store Launch</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>September 2026</span>
              </div>
              <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.7 }}>
                <li>Added automatic carry-forward calculation engine across company career transitions.</li>
                <li>Introduced emotional &quot;Good vs Bad&quot; spending sentiment tagging with real-time Spend Quality ratio.</li>
                <li>Implemented cloud cold-start resilience screen with automated retry loops.</li>
                <li>Optimized touchscreen Safe Area ergonomics for notch, clock, battery, and gesture bars.</li>
              </ul>
            </div>

            {/* Version 2.2 */}
            <div style={{ borderLeft: '3px solid var(--border-subtle)', paddingLeft: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                <span style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)' }}>v2.2.0</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>August 2026</span>
              </div>
              <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.7 }}>
                <li>Added dynamic category creator with custom icons and color swatches.</li>
                <li>Integrated dual Cash and Pending reconciliation slates.</li>
                <li>Multi-user registration with isolated tenant data and starter packs.</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
