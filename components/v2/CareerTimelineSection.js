'use client';

import { Briefcase, Check, ArrowRight } from 'lucide-react';

export default function CareerTimelineSection() {
  return (
    <section style={{ padding: '80px 0', background: 'var(--bg-main)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '48px' }}>
          <span className="section-tag neutral" style={{ background: 'var(--surface-mint)', color: 'var(--primary)', marginBottom: '14px' }}>
            One life. Many chapters.
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.85rem)', fontWeight: 800, color: 'var(--text-primary)' }}>
            Change your job. Keep your history.
          </h2>
          <p style={{ maxWidth: '680px', margin: '0 auto', fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
            Money doesn’t restart on your first day. A closing balance becomes the next chapter’s opening balance—without losing the trail.
          </p>
        </div>

        {/* 3 Step Timeline Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '24px',
            alignItems: 'stretch',
            marginBottom: '24px'
          }}
        >
          {/* Chapter 1: 2024 Nexus Tech */}
          <div
            className="interactive-card"
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '20px',
              padding: '28px 24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: 'var(--shadow-card)'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 700, padding: '4px 10px', borderRadius: '6px', background: 'var(--surface-purple)', color: 'var(--investment)' }}>
                  2024
                </span>
                <Briefcase size={16} color="var(--text-muted)" />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '4px' }}>
                Nexus Tech
              </h3>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
                Illustrative closing balance
              </div>
            </div>

            <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '16px' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Closing = next chapter</div>
              <div style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
                ₹1,20,000
              </div>
            </div>
          </div>

          {/* Chapter 2: 2025 Vertex Digital */}
          <div
            className="interactive-card"
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '20px',
              padding: '28px 24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: 'var(--shadow-card)'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 700, padding: '4px 10px', borderRadius: '6px', background: 'var(--surface-purple)', color: 'var(--investment)' }}>
                  2025
                </span>
                <Briefcase size={16} color="var(--text-muted)" />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '4px' }}>
                Vertex Digital
              </h3>
              <div style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 600, marginBottom: '24px' }}>
                Opening: ₹1,20,000
              </div>
            </div>

            <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '16px' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Closing = next chapter</div>
              <div style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
                ₹1,80,000
              </div>
            </div>
          </div>

          {/* Chapter 3: 2026 Horizon Global (Current) */}
          <div
            className="interactive-card"
            style={{
              background: 'var(--surface-mint)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '20px',
              padding: '28px 24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: 'var(--shadow-card)'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 700, padding: '4px 10px', borderRadius: '6px', background: 'var(--surface)', color: 'var(--primary)' }}>
                  2026
                </span>
                <Check size={18} color="var(--primary)" strokeWidth={2.5} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '4px' }}>
                Horizon Global
              </h3>
              <div style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 600, marginBottom: '24px' }}>
                Opening: ₹1,80,000
              </div>
            </div>

            <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '16px' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>Current balance</div>
              <div style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--primary)', fontFamily: 'var(--font-mono)' }}>
                ₹2,35,000
              </div>
            </div>
          </div>
        </div>

        {/* Footnote / Explanation */}
        <div style={{ textAlign: 'center', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
          Illustrative career timeline: Nexus Tech closing ₹1,20,000 → Vertex opening ₹1,20,000; Vertex closing ₹1,80,000 → Horizon opening ₹1,80,000.
        </div>
      </div>
    </section>
  );
}
