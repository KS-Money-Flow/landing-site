'use client';

import Link from 'next/link';
import { Briefcase, Wallet, ShieldCheck, FileText, ArrowRight, Check } from 'lucide-react';

export default function BentoGrid() {
  return (
    <section style={{ padding: '80px 0' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '48px' }}>
          <span className="section-tag neutral">Beyond an expense tracker</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.85rem)', fontWeight: 800 }}>
            Built around real life. Not just receipts.
          </h2>
          <p style={{ maxWidth: '680px', margin: '0 auto', fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
            A salary change, a cash withdrawal, a purchase you regret. Keep the details that ordinary category charts miss.
          </p>
        </div>

        {/* Bento Grid */}
        <div
          className="grid-12"
          style={{
            gap: '24px'
          }}
        >
          {/* Card 1: Career Continuity (Top Left - 7 Cols) */}
          <div
            style={{
              gridColumn: 'span 7',
              background: 'var(--surface-purple)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '20px',
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
            className="bento-col-7 interactive-card"
          >
            <div>
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--investment)',
                  marginBottom: '12px'
                }}
              >
                Career Continuity
              </span>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '10px' }}>
                Your next role shouldn’t reset your progress.
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '520px', marginBottom: '28px' }}>
                Close one employer ledger and carry the balance into the next. Your history stays connected.
              </p>
            </div>

            {/* Carry-Forward Card */}
            <div
              style={{
                background: 'var(--surface)',
                borderRadius: '14px',
                border: '1px solid var(--border-subtle)',
                padding: '18px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '16px'
              }}
            >
              <div>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>Vertex Digital · closing</div>
                <div style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>₹1,80,000</div>
              </div>
              <div style={{ color: 'var(--investment)', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', fontWeight: 700 }}>
                <span>Carry forward</span>
                <ArrowRight size={16} />
              </div>
              <div>
                <div style={{ fontSize: '0.74rem', color: 'var(--primary)' }}>Horizon Global · opening</div>
                <div style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--primary)', fontFamily: 'var(--font-mono)' }}>₹1,80,000</div>
              </div>
            </div>
          </div>

          {/* Card 2: Cash & Bank Reality (Top Right - 5 Cols) */}
          <div
            style={{
              gridColumn: 'span 5',
              background: 'var(--surface-mint)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '20px',
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
            className="bento-col-5 interactive-card"
          >
            <div>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'var(--surface)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary)',
                  marginBottom: '16px',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <Wallet size={20} />
              </div>
              <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '20px' }}>
                Make the numbers match reality.
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
                <div style={{ background: 'var(--surface)', borderRadius: '12px', padding: '14px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Physical cash</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>₹5,000</div>
                </div>
                <div style={{ background: 'var(--surface)', borderRadius: '12px', padding: '14px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Bank balance</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>₹2,30,000</div>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary)' }}>
              <Check size={18} strokeWidth={2.5} />
              <span>Reconciled · total ₹2,35,000</span>
            </div>
          </div>

          {/* Card 3: Spending with Feeling (Bottom Left - 4 Cols) */}
          <div
            style={{
              gridColumn: 'span 4',
              background: 'var(--surface-rose)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '20px',
              padding: '32px 28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
            className="bento-col-4 interactive-card"
          >
            <div>
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--danger)',
                  marginBottom: '10px'
                }}
              >
                Spending With Feeling
              </span>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
                Less guilt. More awareness.
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '20px' }}>
                Tag what felt worthwhile and what you’d do differently.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <span
                style={{
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  background: 'var(--surface-mint)',
                  color: 'var(--primary)',
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                Good spend
              </span>
              <span
                style={{
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  background: 'var(--surface-rose)',
                  color: 'var(--danger)',
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                Bad spend
              </span>
            </div>
          </div>

          {/* Card 4: Private by Design (Bottom Center - 4 Cols) */}
          <div
            style={{
              gridColumn: 'span 4',
              background: 'var(--surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '20px',
              padding: '32px 28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: 'var(--shadow-card)'
            }}
            className="bento-col-4 interactive-card"
          >
            <div>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'var(--surface-mint)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary)',
                  marginBottom: '14px',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <ShieldCheck size={20} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
                Private by design.
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '20px' }}>
                Keep a local ledger. No bank credentials. No third-party trackers.
              </p>
            </div>

            <Link
              href="/security"
              style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                color: 'var(--primary)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <span>Explore security</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Card 5: A Passbook Worth Keeping (Bottom Right - 4 Cols) */}
          <div
            style={{
              gridColumn: 'span 4',
              background: 'var(--surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '20px',
              padding: '32px 28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: 'var(--shadow-card)'
            }}
            className="bento-col-4 interactive-card"
          >
            <div>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'var(--surface-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary)',
                  marginBottom: '14px',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <FileText size={20} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
                A passbook worth keeping.
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '20px' }}>
                Turn your ledger into a PDF statement or export JSON and Excel.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '8px' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '4px 10px', borderRadius: '6px', background: 'var(--surface-subtle)', color: 'var(--text-secondary)', border: '1px solid var(--border-subtle)' }}>
                PDF
              </span>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '4px 10px', borderRadius: '6px', background: 'var(--surface-subtle)', color: 'var(--text-secondary)', border: '1px solid var(--border-subtle)' }}>
                JSON
              </span>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '4px 10px', borderRadius: '6px', background: 'var(--surface-subtle)', color: 'var(--text-secondary)', border: '1px solid var(--border-subtle)' }}>
                Excel
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          .bento-col-7,
          .bento-col-5,
          .bento-col-4 {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
}
