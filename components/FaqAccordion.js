'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle, CheckCircle } from 'lucide-react';

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'How does the Multi-Company Career Transition Carry-Forward work?',
      a: 'Unlike generic apps that reset every month or year, Money Flow understands career mobility. When you transition from one employer or venture to another (e.g., from Nexus Technologies to Vertex Digital), Money Flow automatically calculates your accumulated closing balance, investments, and debt, and carries it forward as the exact opening balance of your new ledger.'
    },
    {
      q: 'What is the "Good vs Bad" spending sentiment engine?',
      a: 'Every expense you log is classified not just by category (e.g. Food, Travel, Fuel), but by emotional value ("Good" productive/health/growth spending vs "Bad" impulsive/avoidable spending). The dashboard computes your dynamic Spend Quality Ratio so you can easily spot and eliminate wealth leaks.'
    },
    {
      q: 'How does Percentage-Based Income Targeting work in Notes?',
      a: 'Instead of only setting static budgets, Money Flow allows percentage-based financial commitments. For example, if you pledge 1.00% of your total lifetime earnings to philanthropic causes or community giving, the app automatically computes the exact rupee commitment from your total inflow, tracking Resolved vs Unresolved amounts.'
    },
    {
      q: 'What is the "Cloud Cold-Start Shield"?',
      a: 'Modern cloud servers occasionally sleep after periods of inactivity to conserve resources. Instead of throwing cryptic connection errors or crashing the app, Money Flow includes a resilient health-check probe that displays an animated, friendly wake-up status screen with automatic retries until the cloud container is warm and ready.'
    },
    {
      q: 'Is my financial data secure and isolated?',
      a: 'Yes! Every user account has an isolated, scoped partition in our secure encrypted database. Passwords are encrypted with industry-standard cryptographic hashing, and all sessions use secure authenticated tokens. No third-party ad trackers or data harvesting scripts are included.'
    },
    {
      q: 'How do I get access to the Money Flow mobile app?',
      a: 'You can access the official mobile application directly through our dedicated Mobile Access Portal, scan the QR code for testing via the mobile client, or get in touch with our team for private rollout access.'
    }
  ];

  return (
    <div style={{ maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            style={{
              background: isOpen ? 'var(--surface-elevated)' : 'var(--surface-glass)',
              backdropFilter: 'blur(16px)',
              border: '1px solid',
              borderColor: isOpen ? 'var(--primary)' : 'var(--border-subtle)',
              borderRadius: '16px',
              overflow: 'hidden',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              boxShadow: isOpen ? 'var(--shadow-card), 0 0 20px rgba(16, 185, 129, 0.15)' : 'none'
            }}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              style={{
                width: '100%',
                padding: '22px 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: 'none',
                border: 'none',
                textAlign: 'left',
                cursor: 'pointer',
                color: 'var(--text-primary)',
                fontSize: '1.05rem',
                fontWeight: 700,
                gap: '16px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <span
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '8px',
                    background: isOpen ? 'rgba(16, 185, 129, 0.2)' : 'var(--chip-bg)',
                    color: isOpen ? 'var(--primary)' : 'var(--text-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.8rem',
                    flexShrink: 0
                  }}
                >
                  {index + 1}
                </span>
                <span>{faq.q}</span>
              </div>
              <ChevronDown
                size={20}
                color={isOpen ? 'var(--primary)' : 'var(--text-muted)'}
                style={{
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease',
                  flexShrink: 0
                }}
              />
            </button>

            {isOpen && (
              <div
                style={{
                  padding: '0 24px 22px 66px',
                  color: 'var(--text-secondary)',
                  fontSize: '0.96rem',
                  lineHeight: 1.7
                }}
              >
                {faq.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
