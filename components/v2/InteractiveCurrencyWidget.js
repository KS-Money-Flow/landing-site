'use client';

import { useState } from 'react';

export default function InteractiveCurrencyWidget() {
  const [activeCode, setActiveCode] = useState('INR');

  const currencies = [
    { code: 'INR', symbol: '₹', label: 'INR · selected', value: '₹2,35,000', subtitle: 'Base illustrative ledger' },
    { code: 'USD', symbol: '$', label: 'USD · example', value: '$2,800', subtitle: 'Equivalent profile view' },
    { code: 'EUR', symbol: '€', label: 'EUR · example', value: '€2,600', subtitle: 'Cross-border benchmark' },
    { code: 'GBP', symbol: '£', label: 'GBP · example', value: '£2,280', subtitle: 'Independent currency trail' }
  ];

  return (
    <section style={{ padding: '36px 0', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)', background: 'var(--surface)' }}>
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px'
          }}
        >
          {/* Left Text */}
          <div style={{ maxWidth: '420px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '6px' }}>
              Your world. Your currency.
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
              Choose the lens for your ledger. Separate illustrative balances, not live FX rates.
            </p>
          </div>

          {/* Right Selector & Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', flex: 1, minWidth: '280px' }}>
            {/* Pill Switcher */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {currencies.map((c) => {
                const isSelected = activeCode === c.code;
                return (
                  <button
                    key={c.code}
                    onClick={() => setActiveCode(c.code)}
                    style={{
                      padding: '8px 16px',
                      borderRadius: '8px',
                      border: '1px solid',
                      borderColor: isSelected ? 'var(--primary)' : 'var(--border-subtle)',
                      background: isSelected ? 'var(--primary)' : 'var(--surface-subtle)',
                      color: isSelected ? '#FFFFFF' : 'var(--text-primary)',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <span>{c.code}</span>
                    <span>{c.symbol}</span>
                  </button>
                );
              })}
            </div>

            {/* 4 Cards Row */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '12px'
              }}
            >
              {currencies.map((c) => {
                const isSelected = activeCode === c.code;
                return (
                  <div
                    key={c.code}
                    onClick={() => setActiveCode(c.code)}
                    className="interactive-card"
                    style={{
                      background: isSelected ? 'var(--surface-mint)' : 'var(--surface-subtle)',
                      border: '1px solid',
                      borderColor: isSelected ? 'var(--primary)' : 'var(--border-subtle)',
                      borderRadius: '12px',
                      padding: '12px 14px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <div style={{ fontSize: '0.72rem', color: isSelected ? 'var(--primary)' : 'var(--text-muted)', fontWeight: 600, marginBottom: '4px' }}>
                      {c.label}
                    </div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
                      {c.value}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
