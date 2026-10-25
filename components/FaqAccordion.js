'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Can I use Money Flow without connecting a bank?',
      a: 'Yes. Money Flow is a manual personal ledger and does not collect bank credentials. Record income, spending and transfers yourself, then reconcile the totals against your real cash and bank balance.'
    },
    {
      q: 'What happens to my balance when I change jobs?',
      a: 'When you transition to a new employer or venture, you create a new chapter ledger. Your previous closing balance automatically carries forward as your opening balance so your multi-year historical wealth remains continuous and connected.'
    },
    {
      q: 'Is the Community app really free?',
      a: 'Yes. The core Community personal ledger is 100% free with unlimited entries, categories, carrier ledgers, sentiment tagging and offline capability. There are no ads and no tracking.'
    },
    {
      q: 'Can I take my data with me?',
      a: 'Yes. You retain complete ownership of your records. You can generate vector PDF passbooks or export your full history to JSON and Excel spreadsheets at any time.'
    }
  ];

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section style={{ padding: '80px 0', background: 'var(--bg-main)' }}>
      <div className="container" style={{ maxWidth: '840px' }}>
        {/* Header */}
        <div className="section-header text-left" style={{ marginBottom: '40px' }}>
          <span className="section-tag neutral" style={{ background: 'var(--surface-mint)', color: 'var(--primary)', marginBottom: '14px' }}>
            A little more clarity
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.85rem)', fontWeight: 800, color: 'var(--text-primary)' }}>
            Before your first entry.
          </h2>
        </div>

        {/* Accordions */}
        <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid var(--border-subtle)' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                style={{
                  borderBottom: '1px solid var(--border-subtle)',
                  transition: 'background 0.2s ease'
                }}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  style={{
                    width: '100%',
                    padding: '24px 0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer'
                  }}
                >
                  <span style={{ fontSize: '1.08rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {faq.q}
                  </span>
                  <div style={{ color: 'var(--primary)', flexShrink: 0 }}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>

                {isOpen && (
                  <div style={{ paddingBottom: '24px', fontSize: '0.96rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
