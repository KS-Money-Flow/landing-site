'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function DownloadFaqAccordion({ faqs = [] }) {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid var(--border-subtle)', marginBottom: '32px' }}>
      {faqs.map((faq, idx) => {
        const isOpen = openFaq === idx;
        return (
          <div key={idx} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
            <button
              type="button"
              onClick={() => setOpenFaq(isOpen ? null : idx)}
              style={{
                width: '100%',
                padding: '20px 0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: 'none',
                border: 'none',
                textAlign: 'left',
                cursor: 'pointer',
              }}
            >
              <span style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                {faq.q}
              </span>
              <div style={{ color: 'var(--primary)', flexShrink: 0 }}>
                {isOpen ? <Minus size={20} /> : <Plus size={20} />}
              </div>
            </button>
            {isOpen && (
              <div style={{ paddingBottom: '20px', fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                {faq.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
