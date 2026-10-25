'use client';

export default function ComparisonMatrix() {
  const rows = [
    { feature: 'Automatic career carry-forward', moneyFlow: 'Built in', generic: 'Usually manual', sheets: 'Manual formulas' },
    { feature: 'Good / Bad spending sentiment', moneyFlow: 'Built in', generic: 'Category-led', sheets: 'Build it yourself' },
    { feature: 'Cash & pending-bank reconciliation', moneyFlow: 'Built in', generic: 'Varies by app', sheets: 'Manual matching' },
    { feature: 'Offline capability', moneyFlow: 'Local ledger', generic: 'Varies by app', sheets: 'Desktop files' },
    { feature: 'Reports & data portability', moneyFlow: 'PDF · JSON · Excel', generic: 'Varies by plan', sheets: 'Manual setup' },
    { feature: 'Pricing', moneyFlow: 'Community · ₹0', generic: 'Free / paid varies', sheets: 'Tool-dependent' }
  ];

  return (
    <section style={{ padding: '80px 0', background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header" style={{ marginBottom: '48px' }}>
          <span className="section-tag neutral" style={{ background: 'var(--surface-mint)', color: 'var(--primary)', marginBottom: '14px' }}>
            Clarity, not complexity
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.85rem)', fontWeight: 800, color: 'var(--text-primary)' }}>
            More context than a spreadsheet. <br />
            More intention than a category list.
          </h2>
          <p style={{ maxWidth: '680px', margin: '0 auto', fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
            Choose the way of working that fits your life. Here’s what Money Flow brings together in one personal ledger.
          </p>
        </div>

        {/* Matrix Table Card */}
        <div
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-card)'
          }}
        >
          <div className="table-responsive">
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '640px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border-subtle)', background: 'var(--surface)' }}>
                  <th style={{ padding: '20px 24px', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-muted)', width: '35%' }}>
                    What matters
                  </th>
                  <th style={{ padding: '20px 24px', fontSize: '0.95rem', fontWeight: 800, color: 'var(--primary)', width: '25%' }}>
                    Money Flow
                  </th>
                  <th style={{ padding: '20px 24px', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', width: '20%' }}>
                    Generic expense apps
                  </th>
                  <th style={{ padding: '20px 24px', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', width: '20%' }}>
                    Spreadsheets
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, idx) => (
                  <tr key={idx} style={{ borderBottom: idx < rows.length - 1 ? '1px solid var(--border-light)' : 'none' }}>
                    <td style={{ padding: '18px 24px', fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.92rem' }}>
                      {r.feature}
                    </td>
                    <td style={{ padding: '18px 24px' }}>
                      <span style={{ fontWeight: 700, color: 'var(--primary)', fontSize: '0.92rem' }}>
                        {r.moneyFlow}
                      </span>
                    </td>
                    <td style={{ padding: '18px 24px', color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
                      {r.generic}
                    </td>
                    <td style={{ padding: '18px 24px', color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
                      {r.sheets}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footnote */}
        <div style={{ textAlign: 'center', marginTop: '16px', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
          General workflow comparison, not a claim about every competing product. Features and prices vary by provider.
        </div>
      </div>
    </section>
  );
}
