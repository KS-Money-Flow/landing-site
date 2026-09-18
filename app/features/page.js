'use client';

import Link from 'next/link';
import { 
  BarChart3, Briefcase, Sparkles, TrendingUp, DollarSign, 
  Zap, ShieldCheck, ArrowRight, Smartphone, CheckCircle2, 
  Layers, RefreshCw, PieChart, Lock
} from 'lucide-react';

export default function FeaturesPage() {
  const featuresList = [
    {
      id: 'analytics',
      badge: 'Real-Time Insights',
      badgeColor: 'emerald',
      title: 'Lifetime & Monthly Financial Analytics',
      desc: 'Get an executive-level overview of your wealth. Track total income inflow, total expenditures, active investments, and net retained capital with instant monthly filters and category breakdowns.',
      bullets: [
        'Lifetime totals: Inflow, Outflow, Investments, Net in Hand',
        'Monthly trend SVG charts comparing Inflow vs Outflow vs Investment',
        'Dynamic category donut chart revealing top expenditure sinks',
        '31+ months of continuous historical tracking'
      ],
      stats: '₹55.6L+ Lifetime Volume Tracked'
    },
    {
      id: 'ledgers',
      badge: 'Career Mobility',
      badgeColor: 'purple',
      title: 'Dynamic Multi-Company Career Ledgers',
      desc: 'Changing jobs should not wipe out your financial history. Money Flow allows you to create separate ledgers for each employer or consulting client, automatically carrying over accumulated closing balances into your next venture.',
      bullets: [
        'Seamless carry-forward balances across career transitions (e.g. Nexus Tech → Vertex Digital → Horizon Global)',
        'Itemized capital asset & debt tracking (laptops, vehicles, smartphones)',
        'Cumulative balance audits showing net wealth at any point in your career',
        'Filter transactions by specific company or view across your entire career'
      ],
      stats: '100% Continuity Across Career Transitions'
    },
    {
      id: 'sentiment',
      badge: 'Emotional Spending Diagnosis',
      badgeColor: 'rose',
      title: '"Good vs Bad" Spend Sentiment Engine',
      desc: 'Categories only describe what you bought; sentiment reveals whether it improved your life. Tag transactions as "Good" (nutritious food, education, mutual funds, productive assets) or "Bad" (impulse buys, late-night splurges, forgotten subscriptions).',
      bullets: [
        'Dynamic Spend Quality Ratio on your main dashboard',
        'One-click filtering to audit and prune "Bad" spending patterns',
        'Emotional awareness without punitive budgeting guilt',
        'Direct correlation between bad expense reduction and compound wealth growth'
      ],
      stats: '78% Average Healthy Expense Ratio'
    },
    {
      id: 'targeting',
      badge: 'Formula-Based Goals',
      badgeColor: 'emerald',
      title: 'Percentage-Based Income Targeting (Notes)',
      desc: 'Standard apps only allow rigid rupee budgets. Money Flow introduces percentage-based commitments (e.g. 1.00% of lifetime income for philanthropic or community causes). As your income grows, your goal automatically recalibrates.',
      bullets: [
        'Percentage formulas linked dynamically to total lifetime inflow',
        'Real-time tracking of Resolved (paid) vs Unresolved (pending) balances',
        'Fixed future capital expenditure planners (e.g. Workstation Fund, Emergency Runway)',
        'Progress meters and completion celebration states'
      ],
      stats: 'Auto-Scaling Rupee Commitments'
    },
    {
      id: 'reconciliation',
      badge: 'Wallet Precision',
      badgeColor: 'purple',
      title: 'Physical Cash & Pending Bank Reconciliations',
      desc: 'The biggest headache in personal finance is the mismatch between what your bank statement says and the physical cash in your drawer. Money Flow provides dual reconciliation slates for complete peace of mind.',
      bullets: [
        'Dual cash slates (Cash 1 & Cash 2) for wallet and household cash registers',
        'Dual pending trackers (Pending 1 & Pending 2) for uncleared cheques or transfers',
        'Monthly reconciliation snapshots saved directly to your secure encrypted ledger',
        'Zero unexplained discrepancies at month-end audits'
      ],
      stats: 'Zero Balance Discrepancies'
    },
    {
      id: 'resilience',
      badge: 'Zero-Frustration UX',
      badgeColor: 'rose',
      title: 'Cloud Cold-Start Shield & Safe Area Ergonomics',
      desc: 'Engineered for real-world devices and modern cloud infrastructure. If your cloud backend is waking up from sleep, the app gracefully displays an animated wake-up screen with auto-retries. Plus, safe-area padding ensures your top battery line and bottom gesture bar are never obstructed.',
      bullets: [
        'Automated backend health-check ping loop',
        'Friendly "Waking up cloud server..." status instead of network errors',
        'Safe Area insets: top clock/battery and bottom gesture bars never overlap UI',
        'Floating bottom navigation with quick-add FAB accessible within 5 seconds'
      ],
      stats: 'Sub-5-Second Transaction Entry'
    }
  ];

  return (
    <div style={{ padding: '40px 0 80px 0' }}>
      <div className="container">
        
        {/* Page Header */}
        <div className="section-header" style={{ marginBottom: '64px' }}>
          <span className="section-tag">Feature Architecture</span>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.5rem)', marginBottom: '20px' }}>
            Engineered for Serious Wealth Tracking
          </h1>
          <p>
            Explore every architectural pillar that makes Money Flow the choice for professionals, software engineers, and disciplined savers.
          </p>
        </div>

        {/* Features Deep Dive List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
          {featuresList.map((item, idx) => (
            <div
              key={item.id}
              className="glass-panel"
              style={{
                padding: '48px 40px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '40px',
                alignItems: 'center'
              }}
            >
              {/* Left Column: Details */}
              <div>
                <div className={`badge badge-${item.badgeColor}`} style={{ marginBottom: '16px' }}>
                  {item.badge}
                </div>
                <h2 style={{ fontSize: '1.85rem', marginBottom: '16px' }}>{item.title}</h2>
                <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '24px' }}>
                  {item.desc}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {item.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <CheckCircle2 size={18} color="var(--primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span style={{ fontSize: '0.94rem', color: 'var(--text-secondary)' }}>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Visual Highlight Box */}
              <div
                style={{
                  background: 'var(--surface-elevated)',
                  borderRadius: '20px',
                  border: '1px solid var(--border-subtle)',
                  padding: '36px 30px',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '260px',
                  boxShadow: 'var(--shadow-card)'
                }}
              >
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '16px',
                    background: item.badgeColor === 'emerald' 
                      ? 'rgba(16, 185, 129, 0.2)' 
                      : item.badgeColor === 'purple' 
                      ? 'rgba(139, 92, 246, 0.2)' 
                      : 'rgba(244, 63, 94, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                    color: item.badgeColor === 'emerald' ? '#10B981' : item.badgeColor === 'purple' ? '#8B5CF6' : '#F43F5E'
                  }}
                >
                  {idx === 0 && <BarChart3 size={32} />}
                  {idx === 1 && <Briefcase size={32} />}
                  {idx === 2 && <Sparkles size={32} />}
                  {idx === 3 && <TrendingUp size={32} />}
                  {idx === 4 && <DollarSign size={32} />}
                  {idx === 5 && <Zap size={32} />}
                </div>

                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
                  {item.stats}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Seamlessly integrated in Money Flow Mobile App
                </div>

                <div style={{ marginTop: '24px' }}>
                  <Link href="/download" className="btn btn-secondary" style={{ fontSize: '0.85rem', padding: '8px 16px' }}>
                    <span>Experience Feature in App</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Page CTA */}
        <div style={{ textAlign: 'center', marginTop: '80px' }}>
          <h3 style={{ fontSize: '1.75rem', marginBottom: '16px' }}>Ready to Experience Next-Level Financial Discipline?</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '28px' }}>Get access to Money Flow or scan the QR code to run on your phone.</p>
          <Link href="/download" className="btn btn-primary" style={{ padding: '14px 32px' }}>
            <Smartphone size={18} />
            <span>Get Money Flow Mobile Access</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
