'use client';

import Link from 'next/link';
import { ShieldCheck, Database, EyeOff, ArrowRight } from 'lucide-react';

export default function TrustSecuritySection() {
  return (
    <section style={{ padding: '64px 0', background: 'var(--bg-main)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '36px'
          }}
        >
          {/* Left Title */}
          <div style={{ maxWidth: '320px' }}>
            <h3 style={{ fontSize: '1.65rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.25, marginBottom: '10px' }}>
              Your ledger. <br />
              Your boundaries.
            </h3>
            <Link
              href="/security"
              style={{
                fontSize: '0.88rem',
                fontWeight: 700,
                color: 'var(--primary)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <span>Meet the privacy-first architecture</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Right 3 Items */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '28px',
              flex: 1
            }}
          >
            {/* Item 1 */}
            <div>
              <div style={{ color: 'var(--primary)', marginBottom: '8px' }}>
                <ShieldCheck size={22} />
              </div>
              <h4 style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
                No bank credentials
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                Manual entries, not access to your bank.
              </p>
            </div>

            {/* Item 2 */}
            <div>
              <div style={{ color: 'var(--primary)', marginBottom: '8px' }}>
                <Database size={22} />
              </div>
              <h4 style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
                Offline-first ledger
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                Keep your personal records on your device.
              </p>
            </div>

            {/* Item 3 */}
            <div>
              <div style={{ color: 'var(--primary)', marginBottom: '8px' }}>
                <EyeOff size={22} />
              </div>
              <h4 style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
                No third-party trackers
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                Your habits are not an ad audience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
