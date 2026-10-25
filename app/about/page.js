import Link from 'next/link';
import { ArrowRight, MessageSquare, Download, Check, ArrowDown } from 'lucide-react';
import FinalCtaBanner from '../../components/v2/FinalCtaBanner';

export const metadata = {
  title: 'About',
  description: 'The story behind Money Flow: born from messy career transitions and a belief that personal finance tools should provide clarity without judgment or data monetization.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Money Flow — Origin Story, Timeline & Principles',
    description: 'The story behind Money Flow: born from messy career transitions and a belief that personal finance tools should provide clarity without judgment or data monetization.',
    url: '/about',
    siteName: 'Money Flow',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/assets/download-hero.png',
        width: 1024,
        height: 500,
        alt: 'About Money Flow',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Money Flow — Origin Story, Timeline & Principles',
    description: 'The story behind Money Flow: born from messy career transitions and a belief that personal finance tools should provide clarity without judgment.',
    images: ['/assets/download-hero.png'],
  },
};

export default function AboutPage() {
  const principles = [
    {
      num: '01',
      title: 'Continuity',
      desc: 'Your next chapter should inherit the last. Keep historical ledgers and carry balances forward rather than rebuilding your story.',
      tag: 'Career history stays connected',
      tagColor: '#7954BD'
    },
    {
      num: '02',
      title: 'Awareness without guilt',
      desc: 'Good and Bad are tools for reflection. Understand which choices supported your priorities, without shame or rigid spending rules.',
      tag: 'Your priorities define quality',
      tagColor: '#C93D62'
    },
    {
      num: '03',
      title: 'Privacy',
      desc: 'A finance app should not need your bank password or turn your behavior into an advertising profile. Keep a local-first ledger and clear boundaries.',
      tag: 'Your money is not an ad audience',
      tagColor: '#087F5B'
    },
    {
      num: '04',
      title: 'Precision',
      desc: 'Make transfers distinct from spending. Reconcile real cash and bank balances. A useful number is one you can explain.',
      tag: 'Every balance should have a trail',
      tagColor: '#087F5B'
    }
  ];

  return (
    <div style={{ padding: '40px 0 60px 0' }}>
      {/* 1. Hero */}
      <section style={{ marginBottom: '88px' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: '40px',
              alignItems: 'center'
            }}
          >
            {/* Left */}
            <div style={{ maxWidth: '580px' }}>
              <span className="section-tag neutral" style={{ background: 'var(--surface-mint)', color: 'var(--primary)', marginBottom: '16px' }}>
                Why Money Flow exists
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
                A money story <br />
                with no missing <br />
                chapters.
              </h1>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                Work changes. Priorities evolve. Your financial history should help you move forward—not ask you to start over.
              </p>
            </div>

            {/* Right: Idea Card (Lavender) */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div
                style={{
                  background: 'var(--surface-purple)',
                  borderRadius: '24px',
                  padding: '36px 32px',
                  width: '100%',
                  maxWidth: '460px',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <div style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--investment)', marginBottom: '8px' }}>
                  The idea, in one ledger
                </div>
                <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '24px' }}>
                  New role. <br />
                  Same progress.
                </h3>

                <div
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '16px',
                    padding: '24px',
                    boxShadow: 'var(--shadow-card)'
                  }}
                >
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Vertex Digital · Closing</div>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)', margin: '4px 0 16px 0' }}>
                    ₹1,80,000
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.78rem', color: 'var(--investment)', fontWeight: 600, marginBottom: '16px' }}>
                    <ArrowDown size={14} />
                    <span>Carried forward, not forgotten</span>
                  </div>

                  <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '16px' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 600 }}>Horizon Global · Opening</div>
                    <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--primary)', fontFamily: 'var(--font-mono)', marginTop: '4px' }}>
                      ₹1,80,000
                    </div>
                  </div>
                </div>

                <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', marginTop: '16px', textAlign: 'center' }}>
                  Illustrative product example
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Origin Story Section */}
      <section style={{ padding: '72px 0', borderTop: '1px solid var(--border-subtle)', background: 'var(--surface-subtle)' }}>
        <div className="container">
          <div
            className="grid-12"
            style={{
              alignItems: 'start'
            }}
          >
            {/* Left */}
            <div style={{ gridColumn: 'span 4' }} className="about-col-4">
              <span className="section-tag neutral" style={{ background: 'var(--surface-mint)', color: 'var(--primary)', marginBottom: '14px' }}>
                Independently built
              </span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.2 }}>
                For people whose lives don’t fit one spreadsheet.
              </h2>
            </div>

            {/* Right: 4 Paragraphs */}
            <div style={{ gridColumn: 'span 8', display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '1.02rem', color: 'var(--text-secondary)', lineHeight: 1.7 }} className="about-col-8">
              <p>
                A new employer can mean a new salary, new priorities and a new spreadsheet. But the savings you built did not disappear on your last day. Money Flow connects those chapters through opening balances, closing balances and a visible carry-forward trail.
              </p>
              <p>
                There was another gap: a category says “food” or “shopping,” but it rarely says whether the purchase felt worthwhile. Good and Bad spending tags make room for that reflection. They are personal signals, not rules about how anyone should live.
              </p>
              <p>
                And then there is the simplest test of a ledger: does it match the cash in your wallet and the balance at your bank? Reconciliation keeps that reality in the picture.
              </p>
              <p style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                Independently built for modern professionals, Money Flow brings these ideas into one deliberate workflow: preserve the history, understand the choices and keep the numbers honest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Story Should Travel With You (Timeline) */}
      <section style={{ padding: '72px 0', borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-main)' }}>
        <div className="container">
          <div style={{ marginBottom: '36px' }}>
            <span className="section-tag neutral" style={{ background: 'var(--surface-mint)', color: 'var(--primary)', marginBottom: '14px' }}>
              Continuity is the foundation
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '12px' }}>
              The story should travel with you.
            </h2>
            <p style={{ maxWidth: '680px', fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
              Not just a bigger balance. A more complete understanding of how you got there, across employers and life stages.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
              gap: '24px',
              marginBottom: '20px'
            }}
          >
            <div style={{ background: 'var(--surface)', border: '1px solid var(--border-subtle)', borderRadius: '16px', padding: '24px' }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, padding: '3px 8px', borderRadius: '6px', background: 'var(--surface-purple)', color: 'var(--investment)', display: 'inline-block', marginBottom: '12px' }}>2024</div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '4px' }}>Nexus Tech</h4>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '20px' }}>Illustrative closing balance</div>
              <div style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>₹1,20,000</div>
            </div>

            <div style={{ background: 'var(--surface)', border: '1px solid var(--border-subtle)', borderRadius: '16px', padding: '24px' }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, padding: '3px 8px', borderRadius: '6px', background: 'var(--surface-purple)', color: 'var(--investment)', display: 'inline-block', marginBottom: '12px' }}>2025</div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '4px' }}>Vertex Digital</h4>
              <div style={{ fontSize: '0.78rem', color: 'var(--primary)', fontWeight: 600, marginBottom: '20px' }}>Opening: ₹1,20,000</div>
              <div style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>₹1,80,000</div>
            </div>

            <div style={{ background: 'var(--surface-mint)', border: '1px solid var(--border-subtle)', borderRadius: '16px', padding: '24px' }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, padding: '3px 8px', borderRadius: '6px', background: 'var(--surface)', color: 'var(--primary)', display: 'inline-block', marginBottom: '12px' }}>2026</div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '4px' }}>Horizon Global</h4>
              <div style={{ fontSize: '0.78rem', color: 'var(--primary)', fontWeight: 600, marginBottom: '20px' }}>Opening: ₹1,80,000</div>
              <div style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--primary)', fontFamily: 'var(--font-mono)' }}>₹2,35,000</div>
            </div>
          </div>

          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
            Illustrative career chapters, not company affiliations or Money Flow founding milestones.
          </div>
        </div>
      </section>

      {/* 4. Four Principles */}
      <section style={{ padding: '72px 0', borderTop: '1px solid var(--border-subtle)', background: 'var(--surface-subtle)' }}>
        <div className="container">
          <div style={{ marginBottom: '48px' }}>
            <span className="section-tag neutral" style={{ background: 'var(--surface-mint)', color: 'var(--primary)', marginBottom: '14px' }}>
              What we won’t compromise
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, color: 'var(--text-primary)' }}>
              Four principles. One clearer relationship with money.
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid var(--border-subtle)' }}>
            {principles.map((p) => (
              <div key={p.num} className="principles-grid">
                <div className="principles-col-num">
                  {p.num}
                </div>
                <div className="principles-col-title">
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                    {p.title}
                  </h3>
                </div>
                <div className="principles-col-desc">
                  <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '8px' }}>
                    {p.desc}
                  </p>
                  <span style={{ fontSize: '0.78rem', fontWeight: 700, color: p.tagColor }}>
                    {p.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Useful Beats Noisy & Shape the Next Chapter */}
      <section style={{ padding: '48px 0 16px 0', borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-main)' }}>
        <div className="container">
          <div
            className="grid-12"
            style={{
              alignItems: 'center'
            }}
          >
            {/* Left */}
            <div style={{ gridColumn: 'span 7' }} className="about-col-7">
              <span className="section-tag neutral" style={{ background: 'var(--surface-mint)', color: 'var(--primary)', marginBottom: '14px' }}>
                A considered, evolving product
              </span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '14px' }}>
                Useful beats noisy.
              </h2>
              <p style={{ fontSize: '1.02rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '16px' }}>
                Money Flow is for developers, founders, tech professionals and disciplined savers who want more context—not more dashboards to manage.
              </p>
              <p style={{ fontSize: '1.02rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                Have a workflow that could be clearer? Share a bug, ask a question or suggest a feature. Real problems are a better starting point than feature counts.
              </p>
            </div>

            {/* Right Card: Help Shape (Mint) */}
            <div style={{ gridColumn: 'span 5' }} className="about-col-5">
              <div
                className="interactive-card"
                style={{
                  background: 'var(--surface-mint)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '20px',
                  padding: '36px 32px'
                }}
              >
                <div style={{ color: 'var(--primary)', marginBottom: '16px' }}>
                  <MessageSquare size={24} />
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '10px' }}>
                  Help shape the next chapter.
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
                  Bring your questions and ideas. Please leave personal financial records out of public discussions.
                </p>
                <Link
                  href="/contact"
                  className="btn btn-secondary"
                  style={{ padding: '12px 20px', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  <span>Contact &amp; community</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Banner */}
      <FinalCtaBanner
        title="Start your own connected money story."
        subtitle="Start with the free Community app on Google Play. Your next chapter starts with one entry."
        buttonText="Get on Google Play"
        href="https://play.google.com/store/apps/details?id=com.krishna.moneyflow"
      />
    </div>
  );
}
