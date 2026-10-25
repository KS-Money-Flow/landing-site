import Link from 'next/link';
import { Check, ExternalLink, Heart } from 'lucide-react';
import FinalCtaBanner from '../../components/v2/FinalCtaBanner';
import PricingWaitlistForm from '../../components/v2/PricingWaitlistForm';

export const metadata = {
  title: 'Pricing',
  description: 'The core Money Flow Community ledger is ₹0, free forever: unlimited entries, career carry-forward, and zero ads. Join the waitlist for planned Pro Lifetime cloud extras.',
  alternates: {
    canonical: '/pricing',
  },
  openGraph: {
    title: 'Money Flow Pricing — 100% Free Community & Pro Lifetime Waitlist',
    description: 'The core Money Flow Community ledger is ₹0, free forever: unlimited entries, career carry-forward, and zero ads. Join the waitlist for planned Pro Lifetime cloud extras.',
    url: '/pricing',
    siteName: 'Money Flow',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/assets/download-hero.png',
        width: 1024,
        height: 500,
        alt: 'Money Flow Pricing Plans',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Money Flow Pricing — 100% Free Community & Pro Lifetime Waitlist',
    description: 'The core Money Flow Community ledger is ₹0, free forever: unlimited entries, career carry-forward, and zero ads.',
    images: ['/assets/download-hero.png'],
  },
};

export default function PricingPage() {
  const tableRows = [
    { feature: 'Core personal ledgers', community: 'Included', pro: 'Included' },
    { feature: 'Transactions & categories', community: 'Unlimited', pro: 'Unlimited' },
    { feature: 'Good / Bad sentiment tags', community: 'Included', pro: 'Included' },
    { feature: 'Career carry-forward', community: 'Included', pro: 'Included' },
    { feature: 'Cash & bank reconciliation', community: 'Included', pro: 'Included' },
    { feature: 'PDF, JSON & Excel export', community: 'Included', pro: 'Included' },
    { feature: 'Ads & third-party trackers', community: 'None', pro: 'None' },
    { feature: 'Multi-device cloud sync', community: 'Not included', pro: 'Planned', proHighlight: true },
    { feature: 'Automated cloud backups', community: 'Not included', pro: 'Planned', proHighlight: true },
    { feature: 'Household sharing', community: 'Not included', pro: 'Planned', proHighlight: true },
    { feature: 'Availability', community: 'Google Play Store', pro: 'Planned · not purchasable' },
  ];

  return (
    <div style={{ padding: '32px 0 24px 0' }}>
      {/* 1. Header */}
      <section style={{ marginBottom: '56px' }}>
        <div className="container">
          <div style={{ maxWidth: '680px' }}>
            <span className="section-tag neutral" style={{ background: 'var(--surface-mint)', color: 'var(--primary)', marginBottom: '16px' }}>
              Simple by intention
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
              Start free. Keep your money yours.
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
              A complete personal ledger shouldn’t come with ads or pressure. Community covers the essentials; a planned Pro lifetime option will add connected conveniences.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Tier Cards */}
      <section style={{ marginBottom: '88px' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: '32px',
              alignItems: 'stretch',
              marginBottom: '20px'
            }}
          >
            {/* Tier 1: Community */}
            <div
              className="interactive-card pricing-tier-card"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '20px',
                padding: '40px 36px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 'var(--shadow-card)'
              }}
            >
              <div>
                <span style={{ fontSize: '0.72rem', fontWeight: 700, padding: '4px 12px', borderRadius: '9999px', background: 'var(--surface-mint)', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Available now
                </span>

                <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--text-primary)', marginTop: '16px', marginBottom: '8px' }}>
                  Community
                </h2>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '12px' }}>
                  <span style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>₹0</span>
                  <span style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>free forever</span>
                </div>

                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '28px' }}>
                  Everything you need for your own financial story.
                </p>

                <a
                  href="https://play.google.com/store/apps/details?id=com.krishna.moneyflow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '14px', marginBottom: '32px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}
                >
                  <span>Get on Google Play</span>
                  <ExternalLink size={18} />
                </a>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                  {[
                    'Core personal and career ledgers',
                    'Unlimited transactions and categories',
                    'Good / Bad spending sentiment',
                    'Automatic career carry-forward',
                    'Cash & pending-bank reconciliation',
                    'PDF statements, JSON and Excel export',
                    'No ads. No third-party trackers.'
                  ].map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Check size={16} color="var(--primary)" strokeWidth={2.5} style={{ flexShrink: 0 }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tier 2: Pro Lifetime (Lavender) */}
            <div
              className="interactive-card pricing-tier-card"
              style={{
                background: 'var(--surface-purple)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '20px',
                padding: '40px 36px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <span style={{ fontSize: '0.72rem', fontWeight: 700, padding: '4px 12px', borderRadius: '9999px', background: 'var(--surface)', color: 'var(--investment)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Planned · Join the waitlist
                </span>

                <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--text-primary)', marginTop: '16px', marginBottom: '8px' }}>
                  Pro Lifetime
                </h2>

                <div style={{ marginBottom: '12px' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.2 }}>
                    Price to be announced
                  </div>
                </div>

                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '28px' }}>
                  A planned one-time license. No price or purchase date has been confirmed.
                </p>

                <PricingWaitlistForm />

                <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--investment)', marginBottom: '14px' }}>
                  Community, plus planned extras
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '28px' }}>
                  {[
                    'Multi-device cloud sync · planned',
                    'Automated backups · planned',
                    'Household sharing · planned'
                  ].map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Check size={16} color="var(--investment)" strokeWidth={2.5} style={{ flexShrink: 0 }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.5, borderTop: '1px solid var(--border-subtle)', paddingTop: '16px' }}>
                Joining the waitlist is not a purchase. Final features, pricing and service terms will be shared before launch.
              </div>
            </div>
          </div>

          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
            There is no subscription toggle. Pro is a planned lifetime model, not the older monthly cloud plan.
          </div>
        </div>
      </section>

      {/* 3. Comparison Table */}
      <section style={{ marginBottom: '88px' }}>
        <div className="container">
          <div style={{ marginBottom: '36px' }}>
            <span className="section-tag neutral" style={{ background: 'var(--surface-mint)', color: 'var(--primary)', marginBottom: '14px' }}>
              The complete picture
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '12px' }}>
              Essentials are not an upsell.
            </h2>
            <p style={{ maxWidth: '680px', fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
              Keep your daily ledger useful without paying. Planned cloud extras are clearly separated from what you can use today.
            </p>
          </div>

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
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--border-subtle)', background: 'var(--surface-elevated)' }}>
                    <th style={{ padding: '20px 24px', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-muted)', width: '40%' }}>
                      Feature / Capability
                    </th>
                    <th style={{ padding: '20px 24px', fontSize: '0.95rem', fontWeight: 800, color: 'var(--primary)', width: '30%' }}>
                      Community
                    </th>
                    <th style={{ padding: '20px 24px', fontSize: '0.95rem', fontWeight: 800, color: 'var(--investment)', width: '30%' }}>
                      Pro Lifetime
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((r, idx) => (
                    <tr key={idx} style={{ borderBottom: idx < tableRows.length - 1 ? '1px solid var(--border-light)' : 'none' }}>
                      <td style={{ padding: '16px 24px', fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.92rem' }}>
                        {r.feature}
                      </td>
                      <td style={{ padding: '16px 24px', color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem' }}>
                        {r.community}
                      </td>
                      <td style={{ padding: '16px 24px', color: r.proHighlight ? 'var(--investment)' : 'var(--text-secondary)', fontWeight: r.proHighlight ? 700 : 500, fontSize: '0.9rem' }}>
                        {r.pro}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 4. You Are Not The Business Model */}
      <section style={{ marginBottom: '88px' }}>
        <div className="container">
          <div
            style={{
              background: 'var(--surface-subtle)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '20px',
              padding: '36px 40px',
              display: 'flex',
              alignItems: 'center',
              gap: '28px'
            }}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'var(--surface-mint)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--primary)',
                flexShrink: 0,
                border: '1px solid var(--border-subtle)'
              }}
            >
              <Heart size={26} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '6px' }}>
                You are not the business model.
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Money Flow does not sell your financial data or build an ad audience from your habits. The free ledger stays ad-free. Planned paid conveniences should add value—not create pressure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Good Questions (FAQ Grid 2x2) */}
      <section style={{ marginBottom: '36px' }}>
        <div className="container">
          <div style={{ marginBottom: '28px' }}>
            <span className="section-tag neutral" style={{ background: 'var(--surface-mint)', color: 'var(--primary)', marginBottom: '12px' }}>
              Good questions
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, color: 'var(--text-primary)' }}>
              No fine-print surprises.
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '28px'
            }}
          >
            <div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '10px' }}>
                Will Community stay free?
              </h4>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                The core Community ledger is ₹0, free forever: personal ledgers, unlimited entries and categories, sentiment, carry-forward and reconciliation. No ads are included.
              </p>
            </div>

            <div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '10px' }}>
                Can I buy Pro Lifetime today?
              </h4>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                Not yet. The price is unannounced, and the extras are planned. Join the waitlist to hear about availability; no payment is taken.
              </p>
            </div>

            <div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '10px' }}>
                Do I need Pro to use the app offline?
              </h4>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                No. Your local ledger works offline in Community. Cloud-dependent services require a connection and should not be confused with local access.
              </p>
            </div>

            <div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '10px' }}>
                Does “lifetime” mean perpetual hosting?
              </h4>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                No. A lifetime license and ongoing cloud hosting are different commitments. Final license scope, service availability and limits will be stated before any purchase.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Final Banner */}
      <FinalCtaBanner
        title="Start with clarity. For ₹0."
        subtitle="Start with the free Community app on Google Play. Your next chapter starts with one entry."
        buttonText="Get on Google Play"
        href="https://play.google.com/store/apps/details?id=com.krishna.moneyflow"
      />
    </div>
  );
}
