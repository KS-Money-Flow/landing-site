'use client';

import { useState } from 'react';

export default function FeatureFilterTabs() {
  const [activeTab, setActiveTab] = useState('Overview');

  const filterTabs = [
    { name: 'Overview', href: '#overview' },
    { name: 'Ledgers & transfers', href: '#transfers' },
    { name: 'Career continuity', href: '#continuity' },
    { name: 'Spending quality', href: '#spending' },
    { name: 'Reports', href: '#reports' },
  ];

  return (
    <section style={{ marginBottom: '64px' }}>
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {filterTabs.map((t) => {
            const isSelected = activeTab === t.name;
            return (
              <a
                key={t.name}
                href={t.href}
                onClick={() => setActiveTab(t.name)}
                style={{
                  padding: '8px 18px',
                  borderRadius: '9999px',
                  border: '1px solid',
                  borderColor: isSelected ? 'var(--primary)' : 'var(--border-subtle)',
                  background: isSelected ? 'var(--surface-mint)' : 'var(--surface)',
                  color: isSelected ? 'var(--primary)' : 'var(--text-secondary)',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
              >
                {t.name}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
