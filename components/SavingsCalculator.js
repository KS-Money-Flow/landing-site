'use client';

import { useState } from 'react';
import { Calculator, ArrowRight, Sparkles, TrendingUp, AlertTriangle, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function SavingsCalculator() {
  const [monthlyIncome, setMonthlyIncome] = useState(65000);
  const [badSpendRate, setBadSpendRate] = useState(18); // percent

  // Calculations
  const monthlyLeaked = Math.round(monthlyIncome * (badSpendRate / 100));
  const yearlyDirect = monthlyLeaked * 12;

  // 5-Year compound wealth formula: FV of monthly SIP at 12% annual return (r = 0.01/mo, n = 60)
  const monthlyRate = 0.12 / 12;
  const months = 60;
  const compoundFiveYears = Math.round(
    monthlyLeaked * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate)
  );

  return (
    <div
      className="glass-panel"
      id="calculator"
      style={{
        padding: '48px 36px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Ambient background glow */}
      <div
        style={{
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(244, 63, 94, 0.15) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-100px',
          left: '-100px',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
        {/* Left: Interactive Controls */}
        <div>
          <div className="badge badge-rose" style={{ marginBottom: '16px' }}>
            <AlertTriangle size={14} />
            <span>The Good vs Bad Expense Simulator</span>
          </div>

          <h3 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.2rem)', marginBottom: '16px', color: 'var(--text-primary)' }}>
            Stop The Hidden Bleed. <br />
            <span className="gradient-text-emerald">Compound Real Wealth.</span>
          </h3>

          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '32px' }}>
            Money Flow tags every single transaction with an emotional sentiment score. Tagging impulse food deliveries, duplicate subscriptions, and unplanned buys lets you reclaim your future.
          </p>

          {/* Slider 1: Monthly Income */}
          <div style={{ marginBottom: '28px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                Your Monthly Inflow / Salary
              </label>
              <span style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--primary)' }}>
                ₹{monthlyIncome.toLocaleString('en-IN')}
              </span>
            </div>
            <input
              type="range"
              min="20000"
              max="300000"
              step="5000"
              value={monthlyIncome}
              onChange={(e) => setMonthlyIncome(Number(e.target.value))}
              style={{
                width: '100%',
                height: '8px',
                borderRadius: '4px',
                background: 'linear-gradient(90deg, var(--primary), var(--border-subtle))',
                outline: 'none',
                cursor: 'pointer'
              }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '6px' }}>
              <span>₹20,000</span>
              <span>₹1,50,000</span>
              <span>₹3,00,000</span>
            </div>
          </div>

          {/* Slider 2: Bad Spend Rate */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                Estimated &quot;Bad&quot; / Impulse Expenses
              </label>
              <span style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--danger)' }}>
                {badSpendRate}% of Income
              </span>
            </div>
            <input
              type="range"
              min="5"
              max="45"
              step="1"
              value={badSpendRate}
              onChange={(e) => setBadSpendRate(Number(e.target.value))}
              style={{
                width: '100%',
                height: '8px',
                borderRadius: '4px',
                background: 'linear-gradient(90deg, var(--danger), var(--border-subtle))',
                outline: 'none',
                cursor: 'pointer'
              }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '6px' }}>
              <span>5% (Frugal)</span>
              <span>20% (Typical)</span>
              <span>45% (Heavy Leaks)</span>
            </div>
          </div>
        </div>

        {/* Right: Results Card */}
        <div
          style={{
            background: 'var(--surface-elevated)',
            borderRadius: '24px',
            border: '1px solid var(--border-subtle)',
            padding: '36px 30px',
            boxShadow: 'var(--shadow-card)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
            <Sparkles size={18} color="var(--warning)" />
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--warning)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Reclaimed Wealth Projection
            </span>
          </div>

          {/* Stat 1: Monthly Bleed */}
          <div style={{ marginBottom: '24px', paddingBottom: '20px', borderBottom: '1px solid var(--border-subtle)' }}>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Unnecessary Spending Every Month</div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--danger)', letterSpacing: '-0.02em' }}>
              ₹{monthlyLeaked.toLocaleString('en-IN')}
              <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 500 }}> / month</span>
            </div>
          </div>

          {/* Stat 2: 1-Year Direct Savings */}
          <div style={{ marginBottom: '24px', paddingBottom: '20px', borderBottom: '1px solid var(--border-subtle)' }}>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>1-Year Direct Retained Cash</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '-0.02em' }}>
              +₹{yearlyDirect.toLocaleString('en-IN')}
            </div>
          </div>

          {/* Stat 3: 5-Year SIP Growth */}
          <div style={{ marginBottom: '28px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: 'var(--investment)' }}>
              <TrendingUp size={16} />
              <span>5-Year Wealth if Redirected to SIP (12% Return)</span>
            </div>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em', marginTop: '4px' }}>
              ₹{compoundFiveYears.toLocaleString('en-IN')}
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '4px' }}>
              That&apos;s enough to fund a dream vehicle, higher education, or build 2+ years of emergency runway!
            </div>
          </div>

          {/* CTA */}
          <Link href="/download" className="btn btn-primary" style={{ width: '100%', padding: '14px', fontSize: '1rem' }}>
            <span>Reclaim Your Capital With Money Flow</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
