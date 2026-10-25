'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function PassbookShowcaseSection() {
  const transactions = [
    { date: '01 Oct', desc: 'Opening balance', type: 'Carry-forward', typeColor: 'var(--investment)', amount: '₹1,80,000', amountColor: 'var(--text-primary)' },
    { date: '02 Oct', desc: 'Horizon Global', type: 'Income', typeColor: '#087F5B', amount: '+ ₹85,000', amountColor: '#087F5B' },
    { date: '05 Oct', desc: 'Rent & essentials', type: 'Good spend', typeColor: '#087F5B', amount: '- ₹18,000', amountColor: '#C93D62' },
    { date: '12 Oct', desc: 'Learning & lifestyle', type: 'Good spend', typeColor: '#087F5B', amount: '- ₹6,000', amountColor: '#C93D62' },
    { date: '18 Oct', desc: 'Impulse purchases', type: 'Bad spend', typeColor: '#C93D62', amount: '- ₹6,000', amountColor: '#C93D62' }
  ];

  return (
    <section style={{ padding: '80px 0', background: 'var(--bg-main)' }}>
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '24px',
            marginBottom: '40px'
          }}
        >
          <div style={{ maxWidth: '640px' }}>
            <span className="section-tag neutral" style={{ background: 'var(--surface-mint)', color: 'var(--primary)', marginBottom: '14px' }}>
              Your money, made legible
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.85rem)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '14px' }}>
              A clearer record. Ready to take with you.
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
              See cashflow, categories and every entry in one passbook. Export a PDF for review, or take your data into JSON and Excel.
            </p>
          </div>

          <Link
            href="/features"
            className="btn btn-secondary"
            style={{ padding: '12px 20px', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            <span>Explore reporting</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Passbook Showcase Card */}
        <div
          className="interactive-card"
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '20px',
            padding: '36px 32px',
            boxShadow: 'var(--shadow-card)'
          }}
        >
          {/* Card Top Title Row */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid var(--border-subtle)',
              paddingBottom: '20px',
              marginBottom: '28px',
              flexWrap: 'wrap',
              gap: '12px'
            }}
          >
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>Personal passbook</h3>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                01-31 October 2026 · INR · Demo data
              </div>
            </div>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '4px 12px', borderRadius: '6px', background: 'var(--surface-subtle)', color: 'var(--text-secondary)', border: '1px solid var(--border-subtle)' }}>
              PDF preview
            </span>
          </div>

          {/* 4 Summary KPIs */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '20px',
              marginBottom: '36px'
            }}
          >
            <div>
              <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Opening</div>
              <div style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
                ₹1,80,000
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Income</div>
              <div style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--primary)', fontFamily: 'var(--font-mono)' }}>
                ₹85,000
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Outflow</div>
              <div style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--danger)', fontFamily: 'var(--font-mono)' }}>
                ₹30,000
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Closing</div>
              <div style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
                ₹2,35,000
              </div>
            </div>
          </div>

          {/* Charts Row */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '32px',
              alignItems: 'center',
              borderTop: '1px solid var(--border-subtle)',
              borderBottom: '1px solid var(--border-subtle)',
              padding: '28px 0',
              marginBottom: '32px'
            }}
          >
            {/* Cashflow Bar Graph */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
                <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>Cashflow pillars</span>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <span style={{ color: 'var(--primary)' }}>● Income</span>
                  <span style={{ color: 'var(--danger)' }}>● Outflow</span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', height: '110px', gap: '8px' }}>
                {[
                  { m: 'May', inH: 60, outH: 40 },
                  { m: 'Jun', inH: 88, outH: 42 },
                  { m: 'Jul', inH: 74, outH: 45 },
                  { m: 'Aug', inH: 95, outH: 48 },
                  { m: 'Sep', inH: 80, outH: 44 },
                  { m: 'Oct', inH: 100, outH: 35 },
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px', height: '90px' }}>
                      <div style={{ width: '10px', height: `${item.inH * 0.85}px`, background: 'var(--primary)', borderRadius: '3px' }} />
                      <div style={{ width: '10px', height: `${item.outH * 0.85}px`, background: 'var(--danger)', borderRadius: '3px' }} />
                    </div>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{item.m}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Donut Distribution */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '28px', flexWrap: 'wrap' }}>
              <div style={{ position: 'relative', width: '110px', height: '110px' }}>
                <svg width="110" height="110" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="var(--border-subtle)" strokeWidth="4"/>
                  {/* Essentials 60% */}
                  <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="var(--primary)" strokeWidth="4" strokeDasharray="60 40" strokeDashoffset="25"/>
                  {/* Lifestyle 20% */}
                  <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="var(--investment)" strokeWidth="4" strokeDasharray="20 80" strokeDashoffset="-35"/>
                  {/* Other 20% */}
                  <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="var(--danger)" strokeWidth="4" strokeDasharray="20 80" strokeDashoffset="-55"/>
                </svg>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                  ₹30k
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.8rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
                  <span style={{ color: 'var(--primary)', fontWeight: 600 }}>● Essentials</span>
                  <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>₹18,000</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
                  <span style={{ color: 'var(--investment)', fontWeight: 600 }}>● Lifestyle</span>
                  <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>₹6,000</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
                  <span style={{ color: 'var(--danger)', fontWeight: 600 }}>● Other</span>
                  <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>₹6,000</span>
                </div>
              </div>
            </div>
          </div>

          {/* Itemized Table */}
          <div className="table-responsive">
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.86rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border-subtle)', color: 'var(--text-muted)', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  <th style={{ padding: '10px 12px' }}>Date</th>
                  <th style={{ padding: '10px 12px' }}>Description</th>
                  <th style={{ padding: '10px 12px' }}>Type</th>
                  <th style={{ padding: '10px 12px', textAlign: 'right' }}>Amount</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((t, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid var(--border-light)' }}>
                    <td style={{ padding: '14px 12px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{t.date}</td>
                    <td style={{ padding: '14px 12px', fontWeight: 600, color: 'var(--text-primary)' }}>{t.desc}</td>
                    <td style={{ padding: '14px 12px' }}>
                      <span style={{ color: t.typeColor, fontWeight: 600 }}>{t.type}</span>
                    </td>
                    <td style={{ padding: '14px 12px', textAlign: 'right', fontWeight: 700, color: t.amountColor === '#142C25' ? 'var(--text-primary)' : t.amountColor, fontFamily: 'var(--font-mono)' }}>
                      {t.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer note */}
        <div style={{ textAlign: 'center', marginTop: '16px', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
          Local ledger access works offline. Cloud-dependent reports and services need a connection when used.
        </div>
      </div>
    </section>
  );
}
