'use client';

import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export default function FinalCtaBanner({
  title = 'Make room for a clearer money story.',
  subtitle = 'Start with the free Community app on Google Play. Your next chapter starts with one entry.',
  buttonText = 'Get on Google Play',
  href = 'https://play.google.com/store/apps/details?id=com.krishna.moneyflow'
}) {
  const isExternal = href.startsWith('http');

  return (
    <section style={{ padding: '16px 0 8px 0' }}>
      <div className="container">
        <div className="cta-banner interactive-card" style={{ boxShadow: 'var(--shadow-card)' }}>
          <div>
            <h2 style={{ fontSize: 'clamp(1.65rem, 3.5vw, 2.3rem)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
              {title}
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>
              {subtitle}
            </p>
          </div>

          {isExternal ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{
                padding: '13px 26px',
                fontSize: '0.95rem',
                whiteSpace: 'nowrap',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <span>{buttonText}</span>
              <ExternalLink size={18} />
            </a>
          ) : (
            <Link
              href={href}
              className="btn btn-primary"
              style={{
                padding: '13px 26px',
                fontSize: '0.95rem',
                whiteSpace: 'nowrap',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <span>{buttonText}</span>
              <ExternalLink size={18} />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
