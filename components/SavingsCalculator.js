'use client';

import { useState } from 'react';
import { Sliders } from 'lucide-react';

export default function SavingsCalculator() {
  const [income, setIncome] = useState(85000);
  const [badSpend, setBadSpend] = useState(6000);
  const [redirectPercent, setRedirectPercent] = useState(100);

  const redirectedMonthly = Math.round((badSpend * redirectPercent) / 100);
  const annualSaved = redirectedMonthly * 12;
  const fiveYearSaved = redirectedMonthly * 60;

  return (
    <section style={{ padding: '80px 0', background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '48px',
            alignItems: 'center'
          }}
        >
          {/* Left Column */}
          <div style={{ maxWidth: '520px' }}>
            <span className="section-tag rose" style={{ marginBottom: '14px' }}>
              Small changes, visible potential
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
              Find the wealth hiding in your habits.
            </h2>
            <p style={{ fontSize: '1.02rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '20px' }}>
              Not every expense needs cutting. Start with the spending you already wish you hadn’t made.
            </p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              This is an illustration, not investment advice or a return guarantee.
            </p>
          </div>

          {/* Right Column: Simulator Card */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              className="interactive-card"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '20px',
                padding: '36px 32px',
                width: '100%',
                maxWidth: '540px',
                boxShadow: 'var(--shadow-card)'
              }}
            >
              {/* Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
                <span style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  Bad Spend Wealth Simulator
                </span>
                <Sliders size={18} color="var(--text-muted)" />
              </div>

              {/* Sliders Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
                <div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Monthly income</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)', marginBottom: '8px' }}>
                    ₹{income.toLocaleString('en-IN')}
                  </div>
                  <input
                    type="range"
                    min="30000"
                    max="300000"
                    step="5000"
                    value={income}
                    onChange={(e) => setIncome(Number(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--primary)', cursor: 'pointer' }}
                  />
                </div>

                <div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Monthly Bad spend</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--danger)', fontFamily: 'var(--font-mono)', marginBottom: '8px' }}>
                    ₹{badSpend.toLocaleString('en-IN')}
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="30000"
                    step="1000"
                    value={badSpend}
                    onChange={(e) => setBadSpend(Number(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--danger)', cursor: 'pointer' }}
                  />
                </div>
              </div>

              {/* Redirect Slider */}
              <div style={{ marginBottom: '28px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
                  <span>Redirect rate</span>
                  <span style={{ fontWeight: 700, color: 'var(--primary)' }}>{redirectPercent}%</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="100"
                  step="10"
                  value={redirectPercent}
                  onChange={(e) => setRedirectPercent(Number(e.target.value))}
                  style={{ width: '100%', accentColor: 'var(--primary)', cursor: 'pointer' }}
                />
              </div>

              {/* Output Cards (Mint Tint) */}
              <div
                style={{
                  background: 'var(--surface-mint)',
                  borderRadius: '16px',
                  padding: '20px',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '16px',
                  marginBottom: '16px'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>Recoverable each year</div>
                  <div style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--primary)', fontFamily: 'var(--font-mono)' }}>
                    ₹{annualSaved.toLocaleString('en-IN')}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                    ₹{redirectedMonthly.toLocaleString('en-IN')} × 12 months
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>Five-year scenario</div>
                  <div style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--primary)', fontFamily: 'var(--font-mono)' }}>
                    ₹{fiveYearSaved.toLocaleString('en-IN')}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                    Saved, before any returns
                  </div>
                </div>
              </div>

              {/* Footnote */}
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                Assumes ₹{redirectedMonthly.toLocaleString('en-IN')} of monthly Bad spend is saved consistently for 60 months. No interest, investment growth, fees or inflation included.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
