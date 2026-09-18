'use client';

import Link from 'next/link';
import { Shield, ArrowRight, Heart, Sparkles, CheckCircle2, TrendingUp, Layers, Lock, Smartphone } from 'lucide-react';

export default function AboutPage() {
  return (
    <div style={{ padding: '40px 0 80px 0' }}>
      <div className="container">
        
        {/* Page Header */}
        <div className="section-header" style={{ marginBottom: '64px' }}>
          <span className="section-tag">Origin &amp; Mission</span>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.5rem)', marginBottom: '16px' }}>
            Built for Modern Wealth Autonomy
          </h1>
          <p>
            The philosophy behind Money Flow: bridging the gap between career mobility, emotional spending awareness, and lifetime financial peace.
          </p>
        </div>

        {/* Story Section */}
        <div
          className="glass-panel"
          style={{
            padding: '56px 40px',
            maxWidth: '920px',
            margin: '0 auto 64px auto',
            position: 'relative'
          }}
        >
          <h2 style={{ fontSize: '1.85rem', marginBottom: '20px' }}>The Flaw in Traditional Budgeting</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', color: 'var(--text-secondary)', fontSize: '1.02rem', lineHeight: 1.8 }}>
            <p>
              Traditional personal finance software was designed for an era that no longer exists—an era where someone worked a single static job for decades, deposited a check once a month, and wiped their ledger clean every thirty days.
            </p>

            <p>
              Today&apos;s professionals navigate dynamic career arcs. They transition between fast-growing startups, technology consultancies, and independent ventures. Across these transitions, accumulated savings, capital investments, and pending obligations need to carry forward seamlessly without breaking historical continuity.
            </p>

            {/* Illustrative Transition Path */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', margin: '12px 0' }}>
              <div style={{ background: 'var(--surface-elevated)', padding: '20px', borderRadius: '14px', border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: '0.82rem', color: '#10B981', fontWeight: 700, textTransform: 'uppercase' }}>Phase 1</div>
                <div style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--text-primary)', margin: '4px 0' }}>Early Career Ledger</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Building initial capital &amp; essential tools</div>
              </div>
              <div style={{ background: 'var(--surface-elevated)', padding: '20px', borderRadius: '14px', border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: '0.82rem', color: '#8B5CF6', fontWeight: 700, textTransform: 'uppercase' }}>Phase 2</div>
                <div style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--text-primary)', margin: '4px 0' }}>Growth &amp; Expansion</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Automated carry-forward balances &amp; SIPs</div>
              </div>
              <div style={{ background: 'var(--surface-elevated)', padding: '20px', borderRadius: '14px', border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: '0.82rem', color: '#F43F5E', fontWeight: 700, textTransform: 'uppercase' }}>Phase 3</div>
                <div style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--text-primary)', margin: '4px 0' }}>Senior Leadership</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Multi-stream inflows &amp; wealth preservation</div>
              </div>
            </div>

            <p>
              When ambitious savers tried using generic spreadsheets on their phones, formulas broke easily and offered zero emotional spending insights. Meanwhile, commercial fintech apps bombarded users with predatory loan recommendations while selling their spending patterns to advertisers.
            </p>

            <p>
              Money Flow was created to establish a higher standard: a clean, responsive, multi-ledger platform that respects career progression, diagnoses impulse leaks with Good vs Bad tags, and reconciles digital balances with physical cash.
            </p>
          </div>
        </div>

        {/* 4 Core Pillars of Philosophy */}
        <div style={{ marginBottom: '64px' }}>
          <div className="section-header" style={{ marginBottom: '40px' }}>
            <span className="section-tag">Core Tenets</span>
            <h2>Our Design Principles</h2>
            <p>Every feature in Money Flow is built upon four uncompromised pillars.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            
            <div className="glass-card" style={{ padding: '32px' }}>
              <div style={{ color: '#10B981', marginBottom: '16px' }}><Layers size={32} /></div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Career-Long Continuity</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Financial milestones shouldn&apos;t vanish when you change employers. Our carry-forward calculation engine connects every stage of your journey.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '32px' }}>
              <div style={{ color: '#8B5CF6', marginBottom: '16px' }}><TrendingUp size={32} /></div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Emotional Spend Quality</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Understanding where money goes is only half the battle. Tagging purchases with emotional value helps eliminate impulse drain without restrictive budgeting guilt.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '32px' }}>
              <div style={{ color: '#F43F5E', marginBottom: '16px' }}><Lock size={32} /></div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Absolute Data Privacy</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                We believe your wealth numbers should remain strictly between you and your screen. No ad networks, no lead generation, and no telemetry selling.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '32px' }}>
              <div style={{ color: '#F59E0B', marginBottom: '16px' }}><Smartphone size={32} /></div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Tangible Precision</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Dual cash and pending balance reconciliations ensure that your digital records match the actual currency in your pocket down to the exact rupee.
              </p>
            </div>

          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <Link href="/download" className="btn btn-primary" style={{ padding: '14px 32px' }}>
            <span>Get Started with Money Flow</span>
            <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </div>
  );
}
