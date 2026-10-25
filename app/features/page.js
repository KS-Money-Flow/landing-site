import Link from 'next/link';
import { ArrowRight, Check, ArrowUpRight, Wallet, PieChart, Layers, Download } from 'lucide-react';
import PassbookShowcaseSection from '../../components/v2/PassbookShowcaseSection';
import FinalCtaBanner from '../../components/v2/FinalCtaBanner';
import FeatureFilterTabs from '../../components/v2/FeatureFilterTabs';

export const metadata = {
  title: 'Features',
  description: 'Explore Money Flow features: automatic career carry-forward, Good vs Bad spending sentiment, cash & pending-bank reconciliation, and multi-format exports (PDF, JSON, Excel).',
  alternates: {
    canonical: '/features',
  },
  openGraph: {
    title: 'Money Flow Features — Career Ledgers, Sentiment & Reconciliation',
    description: 'Automatic career carry-forward, Good vs Bad spending sentiment, cash & pending-bank reconciliation, and multi-format exports (PDF, JSON, Excel).',
    url: 'https://moneyflow.app/features',
    images: [
      {
        url: '/assets/download-hero.png',
        width: 1024,
        height: 500,
        alt: 'Money Flow Features Overview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Money Flow Features — Career Ledgers, Sentiment & Reconciliation',
    description: 'Automatic career carry-forward, Good vs Bad spending sentiment, cash & pending-bank reconciliation, and multi-format exports.',
    images: ['/assets/download-hero.png'],
  },
};

export default function FeaturesPage() {
  return (
    <div style={{ padding: '40px 0 60px 0' }}>
      {/* 1. Header */}
      <section style={{ marginBottom: '40px' }}>
        <div className="container">
          <div style={{ maxWidth: '720px' }}>
            <span className="section-tag neutral" style={{ background: 'var(--surface-mint)', color: 'var(--primary)', marginBottom: '16px' }}>
              The Money Flow toolkit
            </span>
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 5vw, 3.5rem)',
                fontWeight: 800,
                color: 'var(--text-primary)',
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                marginBottom: '18px'
              }}
            >
              All the detail. None of the noise.
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
              Track the full picture—from your first salary entry to the balance you carry into your next role. Here’s how the pieces work together.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <FeatureFilterTabs />

      {/* 01 / DAILY CLARITY (Overview Workspace) */}
      <section id="overview" style={{ marginBottom: '88px' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                01 / Daily clarity
              </span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', fontWeight: 800, color: 'var(--text-primary)', marginTop: '6px', marginBottom: '8px' }}>
                Know what came in. And what stayed.
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>
                Log income and outflow, then see your month without switching between accounts and spreadsheets.
              </p>
            </div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Illustrative product workspace
            </span>
          </div>

          {/* Interactive Workspace Card */}
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
            {/* Top Workspace Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px', flexWrap: 'wrap', gap: '14px' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>Overview</h3>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Horizon Global / Personal ledger</div>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <span style={{ fontSize: '0.8rem', padding: '6px 14px', borderRadius: '8px', background: 'var(--surface-subtle)', border: '1px solid var(--border-subtle)', color: 'var(--text-primary)', fontWeight: 600 }}>
                  October 2026 ▾
                </span>
                <span style={{ fontSize: '0.8rem', padding: '6px 12px', borderRadius: '8px', background: 'var(--surface-subtle)', border: '1px solid var(--border-subtle)', color: 'var(--text-primary)', fontWeight: 700 }}>
                  INR ₹ ▾
                </span>
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ padding: '8px 16px', fontSize: '0.85rem' }}
                >
                  + Add entry
                </button>
              </div>
            </div>

            {/* 4 Totals Row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px', marginBottom: '32px' }}>
              <div>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Opening balance</div>
                <div style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>₹1,80,000</div>
              </div>
              <div>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Income</div>
                <div style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--primary)', fontFamily: 'var(--font-mono)' }}>₹85,000</div>
              </div>
              <div>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Outflow</div>
                <div style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--danger)', fontFamily: 'var(--font-mono)' }}>₹30,000</div>
              </div>
              <div>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Current balance</div>
                <div style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>₹2,35,000</div>
              </div>
            </div>

            {/* Charts Row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', alignItems: 'center', borderTop: '1px solid var(--border-subtle)', paddingTop: '28px' }}>
              {/* Cashflow Graph */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '14px' }}>
                  <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>Income vs outflow</span>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <span style={{ color: 'var(--primary)' }}>● Income</span>
                    <span style={{ color: 'var(--danger)' }}>● Outflow</span>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', height: '100px', gap: '8px' }}>
                  {[
                    { m: 'May', inH: 55, outH: 35 },
                    { m: 'Jun', inH: 82, outH: 40 },
                    { m: 'Jul', inH: 70, outH: 42 },
                    { m: 'Aug', inH: 90, outH: 46 },
                    { m: 'Sep', inH: 76, outH: 42 },
                    { m: 'Oct', inH: 95, outH: 32 },
                  ].map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px', height: '80px' }}>
                        <div style={{ width: '10px', height: `${item.inH * 0.75}px`, background: 'var(--primary)', borderRadius: '3px' }} />
                        <div style={{ width: '10px', height: `${item.outH * 0.75}px`, background: 'var(--danger)', borderRadius: '3px' }} />
                      </div>
                      <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{item.m}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Donut */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '28px', flexWrap: 'wrap' }}>
                <div style={{ position: 'relative', width: '100px', height: '100px' }}>
                  <svg width="100" height="100" viewBox="0 0 36 36">
                    <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="var(--border-subtle)" strokeWidth="4"/>
                    <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="var(--primary)" strokeWidth="4" strokeDasharray="60 40" strokeDashoffset="25"/>
                    <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="var(--investment)" strokeWidth="4" strokeDasharray="20 80" strokeDashoffset="-35"/>
                    <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="var(--danger)" strokeWidth="4" strokeDasharray="20 80" strokeDashoffset="-55"/>
                  </svg>
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                    ₹30k
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.8rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '16px' }}>
                    <span style={{ color: 'var(--primary)', fontWeight: 600 }}>● Essentials</span>
                    <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>₹18,000</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '16px' }}>
                    <span style={{ color: 'var(--investment)', fontWeight: 600 }}>● Lifestyle</span>
                    <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>₹6,000</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '16px' }}>
                    <span style={{ color: 'var(--danger)', fontWeight: 600 }}>● Other</span>
                    <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>₹6,000</span>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '20px' }}>
              ₹55,000 net added this month. The opening balance remains part of your total.
            </div>
          </div>
        </div>
      </section>

      {/* 02 / A LEDGER THAT BALANCES (Transfer vs Expense) */}
      <section id="transfers" style={{ padding: '64px 0', borderTop: '1px solid var(--border-subtle)', background: 'var(--surface-subtle)' }}>
        <div className="container">
          <div style={{ marginBottom: '36px' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              02 / A ledger that balances
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', fontWeight: 800, color: 'var(--text-primary)', marginTop: '6px', marginBottom: '8px' }}>
              A transfer is not an expense.
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>
              Keep money movements separate from actual spending. A transfer reduces one account and increases the other without inflating your outflow.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {/* Left Card: Transfer Not Spending */}
            <div className="interactive-card" style={{ background: 'var(--surface)', border: '1px solid var(--border-subtle)', borderRadius: '20px', padding: '32px 28px', boxShadow: 'var(--shadow-card)' }}>
              <span style={{ fontSize: '0.72rem', fontWeight: 700, padding: '4px 10px', borderRadius: '6px', background: 'var(--surface-mint)', color: 'var(--primary)' }}>
                Transfer · Not spending
              </span>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', marginTop: '16px', marginBottom: '4px' }}>
                Bank → Cash
              </h3>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)', marginBottom: '16px' }}>
                ₹5,000
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>
                Withdraw money for the week. Both sides of the move stay visible.
              </p>
              <div style={{ background: 'var(--surface-subtle)', borderRadius: '12px', padding: '14px', fontSize: '0.82rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Bank account</span>
                  <span style={{ fontWeight: 700, color: 'var(--danger)' }}>- ₹5,000</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Cash wallet</span>
                  <span style={{ fontWeight: 700, color: 'var(--primary)' }}>+ ₹5,000</span>
                </div>
                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '6px', display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: 'var(--primary)' }}>
                  <span>Net change to wealth</span>
                  <span>₹0</span>
                </div>
              </div>
            </div>

            {/* Right Card: Entries In Order Table */}
            <div className="interactive-card" style={{ background: 'var(--surface)', border: '1px solid var(--border-subtle)', borderRadius: '20px', padding: '32px 28px', boxShadow: 'var(--shadow-card)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)' }}>Entries, in order</h4>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>All accounts ▾</span>
              </div>
              <div className="table-responsive">
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.82rem', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid var(--border-subtle)', color: 'var(--text-muted)', fontSize: '0.7rem' }}>
                      <th style={{ padding: '8px' }}>Date</th>
                      <th style={{ padding: '8px' }}>Description</th>
                      <th style={{ padding: '8px' }}>Type</th>
                      <th style={{ padding: '8px', textAlign: 'right' }}>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { d: '01 Oct', desc: 'Opening balance', type: 'Carry-forward', c: 'var(--investment)', a: '₹1,80,000' },
                      { d: '02 Oct', desc: 'Horizon Global', type: 'Income', c: 'var(--primary)', a: '+ ₹85,000' },
                      { d: '05 Oct', desc: 'Rent & essentials', type: 'Good spend', c: 'var(--primary)', a: '- ₹18,000' },
                      { d: '12 Oct', desc: 'Learning & lifestyle', type: 'Good spend', c: 'var(--primary)', a: '- ₹6,000' },
                      { d: '18 Oct', desc: 'Impulse purchases', type: 'Bad spend', c: 'var(--danger)', a: '- ₹6,000' },
                    ].map((row, idx) => (
                      <tr key={idx} style={{ borderBottom: '1px solid var(--border-light)' }}>
                        <td style={{ padding: '10px 8px', color: 'var(--text-muted)' }}>{row.d}</td>
                        <td style={{ padding: '10px 8px', fontWeight: 600, color: 'var(--text-primary)' }}>{row.desc}</td>
                        <td style={{ padding: '10px 8px', color: row.c, fontWeight: 600 }}>{row.type}</td>
                        <td style={{ padding: '10px 8px', textAlign: 'right', fontWeight: 700, fontFamily: 'var(--font-mono)', color: 'var(--text-primary)' }}>{row.a}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '12px' }}>
                Chronological records make a balance explainable, not just visible.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 / CAREER CONTINUITY */}
      <section id="continuity" style={{ padding: '64px 0', borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-main)' }}>
        <div className="container">
          <div style={{ marginBottom: '36px' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              03 / Career continuity
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', fontWeight: 800, color: 'var(--text-primary)', marginTop: '6px', marginBottom: '8px' }}>
              Your financial history has a through-line.
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>
              Use a ledger for each employer or career phase. Close the old chapter, carry the closing amount forward and start the new one with context intact.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '24px' }}>
            <div className="interactive-card" style={{ background: 'var(--surface)', border: '1px solid var(--border-subtle)', borderRadius: '16px', padding: '24px' }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, padding: '3px 8px', borderRadius: '6px', background: 'var(--surface-purple)', color: 'var(--investment)', display: 'inline-block', marginBottom: '12px' }}>2024</div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '4px' }}>Nexus Tech</h4>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '20px' }}>Illustrative closing balance</div>
              <div style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>₹1,20,000</div>
            </div>
            <div className="interactive-card" style={{ background: 'var(--surface)', border: '1px solid var(--border-subtle)', borderRadius: '16px', padding: '24px' }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, padding: '3px 8px', borderRadius: '6px', background: 'var(--surface-purple)', color: 'var(--investment)', display: 'inline-block', marginBottom: '12px' }}>2025</div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '4px' }}>Vertex Digital</h4>
              <div style={{ fontSize: '0.78rem', color: 'var(--primary)', fontWeight: 600, marginBottom: '20px' }}>Opening: ₹1,20,000</div>
              <div style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>₹1,80,000</div>
            </div>
            <div className="interactive-card" style={{ background: 'var(--surface-mint)', border: '1px solid var(--border-subtle)', borderRadius: '16px', padding: '24px' }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, padding: '3px 8px', borderRadius: '6px', background: 'var(--surface)', color: 'var(--primary)', display: 'inline-block', marginBottom: '12px' }}>2026</div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '4px' }}>Horizon Global</h4>
              <div style={{ fontSize: '0.78rem', color: 'var(--primary)', fontWeight: 600, marginBottom: '20px' }}>Opening: ₹1,80,000</div>
              <div style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--primary)', fontFamily: 'var(--font-mono)' }}>₹2,35,000</div>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Check size={16} color="var(--primary)" strokeWidth={2.5} />
              <span>Separate career chapters, one connected balance</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Check size={16} color="var(--primary)" strokeWidth={2.5} />
              <span>Clear opening and closing records</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Check size={16} color="var(--primary)" strokeWidth={2.5} />
              <span>Keep older ledgers available for review</span>
            </div>
          </div>
        </div>
      </section>

      {/* 04 & 05 (Emotional Spending & Cash Reconciliation Grid) */}
      <section id="spending" style={{ padding: '64px 0', borderTop: '1px solid var(--border-subtle)', background: 'var(--surface-subtle)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {/* 04 Emotional Spending */}
            <div className="interactive-card" style={{ background: 'var(--surface)', border: '1px solid var(--border-subtle)', borderRadius: '20px', padding: '32px 28px', boxShadow: 'var(--shadow-card)' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--danger)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                04 / Emotional spending
              </span>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', marginTop: '8px', marginBottom: '8px' }}>
                The category isn’t the whole story.
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>
                Good and Bad are your own reflections. Spot patterns without turning every purchase into a judgment.
              </p>
              <div style={{ background: 'var(--surface-rose)', borderRadius: '12px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                  <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Learning &amp; lifestyle</span>
                  <span style={{ fontWeight: 700, color: 'var(--primary)' }}>Good · ₹6,000</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                  <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Impulse purchases</span>
                  <span style={{ fontWeight: 700, color: 'var(--danger)' }}>Bad · ₹6,000</span>
                </div>
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '12px' }}>
                Monthly quality: ₹24,000 Good / ₹30,000 tagged = 80% intentional.
              </div>
            </div>

            {/* 05 Cash & Bank Reconciliation */}
            <div className="interactive-card" style={{ background: 'var(--surface)', border: '1px solid var(--border-subtle)', borderRadius: '20px', padding: '32px 28px', boxShadow: 'var(--shadow-card)' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                05 / Cash &amp; bank reconciliation
              </span>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', marginTop: '8px', marginBottom: '8px' }}>
                A balance that matches your wallet.
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>
                Compare recorded cash to what you count. Keep pending bank movements visible until they settle.
              </p>
              <div style={{ background: 'var(--surface-subtle)', borderRadius: '12px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Physical cash · counted</span>
                  <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>₹5,000</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Bank · reconciled</span>
                  <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>₹2,30,000</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Pending bank entries</span>
                  <span style={{ color: 'var(--text-secondary)' }}>0 to review</span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)', marginTop: '12px' }}>
                <Check size={16} strokeWidth={2.5} />
                <span>No unexplained difference</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06 & 07 (Goals & Currency) */}
      <section style={{ padding: '64px 0', borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-main)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {/* 06 Percentage Goals */}
            <div className="interactive-card" style={{ background: 'var(--surface)', border: '1px solid var(--border-subtle)', borderRadius: '20px', padding: '32px 28px', boxShadow: 'var(--shadow-card)' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                06 / Percentage-based goals
              </span>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', marginTop: '8px', marginBottom: '8px' }}>
                Let your plan grow with your income.
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>
                Set a percentage rather than a fixed amount. A 20% goal adjusts with each income entry.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '14px' }}>
                <div style={{ background: 'var(--surface-subtle)', borderRadius: '12px', padding: '14px' }}>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Monthly income</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>₹85,000</div>
                </div>
                <div style={{ background: 'var(--surface-mint)', borderRadius: '12px', padding: '14px' }}>
                  <div style={{ fontSize: '0.72rem', color: 'var(--primary)' }}>20% goal</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary)', fontFamily: 'var(--font-mono)' }}>₹17,000</div>
                </div>
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                ₹12,000 set aside · 71% of this month’s ₹17,000 goal
              </div>
            </div>

            {/* 07 Multi-Currency (Lavender) */}
            <div className="interactive-card" style={{ background: 'var(--surface-purple)', border: '1px solid var(--border-subtle)', borderRadius: '20px', padding: '32px 28px' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--investment)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                07 / Multi-currency
              </span>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', marginTop: '8px', marginBottom: '8px' }}>
                Use the currency that fits your ledger.
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>
                Keep amounts readable in INR, USD, EUR or GBP. Currency labels add context; these examples are not exchange-rate conversions.
              </p>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                <span style={{ padding: '6px 12px', borderRadius: '6px', background: 'var(--primary)', color: '#FFFFFF', fontWeight: 700, fontSize: '0.78rem' }}>INR ₹ ✓</span>
                <span style={{ padding: '6px 12px', borderRadius: '6px', background: 'var(--surface)', color: 'var(--text-secondary)', fontWeight: 600, fontSize: '0.78rem', border: '1px solid var(--border-subtle)' }}>$ USD</span>
                <span style={{ padding: '6px 12px', borderRadius: '6px', background: 'var(--surface)', color: 'var(--text-secondary)', fontWeight: 600, fontSize: '0.78rem', border: '1px solid var(--border-subtle)' }}>€ EUR</span>
                <span style={{ padding: '6px 12px', borderRadius: '6px', background: 'var(--surface)', color: 'var(--text-secondary)', fontWeight: 600, fontSize: '0.78rem', border: '1px solid var(--border-subtle)' }}>£ GBP</span>
              </div>
              <div style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
                ₹2,35,000
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 08 / TAKE YOUR RECORDS WITH YOU (Passbook Section) */}
      <section id="reports">
        <PassbookShowcaseSection />
      </section>

      {/* Final Banner */}
      <FinalCtaBanner
        title="A calmer system for a complicated life."
        subtitle="Start with the free Community app on Google Play. Your next chapter starts with one entry."
        buttonText="Get on Google Play"
        href="https://play.google.com/store/apps/details?id=com.krishna.moneyflow"
      />
    </div>
  );
}
