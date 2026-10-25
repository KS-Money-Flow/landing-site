'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Cloud, RefreshCw } from 'lucide-react';

export default function ColdStartShieldDemo() {
  const [retrying, setRetrying] = useState(false);

  const handleRetry = () => {
    setRetrying(true);
    setTimeout(() => setRetrying(false), 1200);
  };

  return (
    <div
      className="interactive-card"
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--border-subtle)',
        borderRadius: '20px',
        padding: '32px 28px',
        boxShadow: 'var(--shadow-card)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
        <Cloud size={18} color="var(--primary)" />
        <span style={{ fontSize: '0.72rem', fontWeight: 700, padding: '3px 8px', borderRadius: '6px', background: 'var(--surface-purple)', color: 'var(--investment)' }}>
          Waking up
        </span>
      </div>
      <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
        Getting your workspace ready…
      </h4>
      <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>
        The cloud service is taking a moment to wake up. Your local ledger is still available.
      </p>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <button
          type="button"
          onClick={handleRetry}
          className="btn btn-primary"
          style={{ padding: '10px 18px', fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '8px' }}
        >
          <span>{retrying ? 'Retrying…' : 'Retry connection'}</span>
          <RefreshCw size={14} className={retrying ? 'spin-icon' : ''} />
        </button>
        <Link
          href="/"
          className="btn btn-secondary"
          style={{ padding: '10px 18px', fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '6px' }}
        >
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
}
