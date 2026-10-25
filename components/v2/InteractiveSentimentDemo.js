'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, X, ArrowRight } from 'lucide-react';

export default function InteractiveSentimentDemo() {
  const [selectedSentiment, setSelectedSentiment] = useState('good');

  const isGood = selectedSentiment === 'good';
  const goodAmount = isGood ? 24000 : 18000;
  const badAmount = isGood ? 6000 : 12000;
  const totalTagged = 30000;
  const intentionalPercent = Math.round((goodAmount / totalTagged) * 100);

  return (
    <section style={{ padding: '80px 0', background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Context */}
          <div style={{ maxWidth: '520px' }}>
            <span className="section-tag neutral" style={{ background: 'var(--surface-mint)', color: 'var(--primary)', marginBottom: '14px' }}>
              Awareness, without judgment
            </span>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 2.85rem)',
                fontWeight: 800,
                color: 'var(--text-primary)',
                lineHeight: 1.18,
                marginBottom: '16px'
              }}
            >
              How did that purchase feel?
            </h2>
            <p style={{ fontSize: '1.02rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '16px' }}>
              Categories tell you where money went. Good and Bad tags tell you whether it was worth it—to you.
            </p>
            <p style={{ fontSize: '1.02rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '24px' }}>
              A coffee with a friend can be Good. An unused subscription can be Bad. You choose the meaning, not the app.
            </p>
            <Link
              href="/features"
              style={{
                fontSize: '0.92rem',
                fontWeight: 700,
                color: 'var(--primary)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span>See the pattern. Make your next choice clearer.</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Right Column: Interactive Check-in Card */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              className="interactive-card"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '20px',
                padding: '36px 32px',
                width: '100%',
                maxWidth: '520px',
                boxShadow: 'var(--shadow-card)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <span style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  Try a spending check-in
                </span>
                <span style={{ fontSize: '0.72rem', fontWeight: 700, padding: '4px 10px', borderRadius: '6px', background: 'var(--surface-subtle)', color: 'var(--text-muted)' }}>
                  Demo
                </span>
              </div>

              {/* Transaction Box */}
              <div
                style={{
                  background: 'var(--surface-subtle)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '14px',
                  padding: '18px 20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '20px'
                }}
              >
                <div>
                  <div style={{ fontWeight: 800, fontSize: '0.96rem', color: 'var(--text-primary)' }}>
                    Learning &amp; lifestyle
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                    12 October · Personal growth
                  </div>
                </div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
                  ₹6,000
                </div>
              </div>

              {/* Buttons */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '28px' }}>
                <button
                  type="button"
                  onClick={() => setSelectedSentiment('good')}
                  className="interactive-btn"
                  style={{
                    padding: '12px 16px',
                    borderRadius: '10px',
                    border: '1px solid',
                    borderColor: isGood ? 'var(--primary)' : 'var(--border-subtle)',
                    background: isGood ? 'var(--surface-mint)' : 'var(--surface)',
                    color: isGood ? 'var(--primary)' : 'var(--text-secondary)',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    transition: 'all 0.2s ease',
                    boxShadow: isGood ? '0 2px 8px rgba(8, 127, 91, 0.15)' : 'none'
                  }}
                >
                  <Check size={16} strokeWidth={2.5} />
                  <span>Good spend</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedSentiment('bad')}
                  className="interactive-btn"
                  style={{
                    padding: '12px 16px',
                    borderRadius: '10px',
                    border: '1px solid',
                    borderColor: !isGood ? 'var(--danger)' : 'var(--border-subtle)',
                    background: !isGood ? 'var(--surface-rose)' : 'var(--surface)',
                    color: !isGood ? 'var(--danger)' : 'var(--text-secondary)',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    transition: 'all 0.2s ease',
                    boxShadow: !isGood ? '0 2px 8px rgba(201, 61, 98, 0.15)' : 'none'
                  }}
                >
                  <X size={16} strokeWidth={2.5} />
                  <span>Bad spend</span>
                </button>
              </div>

              {/* Score and Bar */}
              <div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '4px' }}>
                  <span style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--primary)', fontFamily: 'var(--font-mono)' }}>
                    {intentionalPercent}%
                  </span>
                  <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    Intentional spending this month
                  </span>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
                  ₹{goodAmount.toLocaleString('en-IN')} Good / ₹{totalTagged.toLocaleString('en-IN')} tagged outflow
                </div>

                {/* Split Progress Bar */}
                <div style={{ width: '100%', height: '8px', borderRadius: '4px', background: 'var(--border-subtle)', overflow: 'hidden', display: 'flex' }}>
                  <div style={{ width: `${intentionalPercent}%`, background: 'var(--primary)', transition: 'width 0.3s ease' }} />
                  <div style={{ width: `${100 - intentionalPercent}%`, background: 'var(--danger)', transition: 'width 0.3s ease' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
