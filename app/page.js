'use client';

import Link from 'next/link';
import { 
  Smartphone, Sparkles, ArrowRight, ShieldCheck, CheckCircle2, 
  Briefcase, TrendingUp, DollarSign, Zap, 
  Layers, Lock, Database, ChevronRight, BarChart3, Star
} from 'lucide-react';
import InteractivePhoneMockup from '../components/InteractivePhoneMockup';
import SavingsCalculator from '../components/SavingsCalculator';
import FaqAccordion from '../components/FaqAccordion';

export default function HomePage() {
  return (
    <div style={{ paddingBottom: '40px' }}>
      
      {/* HERO SECTION */}
      <section style={{ padding: '60px 0 80px 0', position: 'relative', overflow: 'hidden' }}>
        {/* Ambient Top Glow */}
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '800px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, rgba(139, 92, 246, 0.08) 50%, transparent 80%)',
            filter: 'blur(60px)',
            zIndex: -1,
            pointerEvents: 'none'
          }}
        />

        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '880px', margin: '0 auto 50px auto' }}>
            
            {/* Version Announcement Badge */}
            <div style={{ display: 'inline-flex', marginBottom: '24px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 16px',
                  borderRadius: '9999px',
                  background: 'var(--chip-bg)',
                  border: '1px solid var(--border-subtle)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
                }}
              >
                <span className="pulse-dot" />
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--primary)' }}>
                  Money Flow v2.4 Live
                </span>
                <span style={{ color: 'var(--border-light)' }}>|</span>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                  Workplace Ledgers &amp; Spend Sentiment
                </span>
                <ChevronRight size={14} color="var(--text-muted)" />
              </div>
            </div>

            {/* Main Headline */}
            <h1 style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '24px' }}>
              Master Your Wealth. <br />
              <span className="gradient-text-emerald">Track Every Rupee.</span> <br />
              Build Real Financial Freedom.
            </h1>

            {/* Subtitle */}
            <p style={{ fontSize: 'clamp(1.05rem, 2vw, 1.25rem)', color: 'var(--text-secondary)', maxWidth: '720px', margin: '0 auto 36px auto', lineHeight: 1.7 }}>
              The modern personal finance &amp; ledger platform built for professionals. Seamlessly carry forward opening balances across career transitions, diagnose emotional spending leaks with Good vs Bad tags, and reconcile physical cash to the exact rupee.
            </p>

            {/* Primary Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '40px' }}>
              <Link href="/download" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '1.05rem' }}>
                <Smartphone size={20} />
                <span>Get Money Flow App</span>
              </Link>
              <a href="#interactive-demo" className="btn btn-secondary" style={{ padding: '16px 28px', fontSize: '1.05rem' }}>
                <span>Try Live App Demo</span>
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Trust Badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={16} color="var(--primary)" />
                <span>100% Free Forever</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ShieldCheck size={16} color="var(--primary)" />
                <span>Multi-Tenant Data Isolation</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Smartphone size={16} color="var(--primary)" />
                <span>Optimized for Android</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Zap size={16} color="var(--primary)" />
                <span>Cloud Resilience Shield</span>
              </div>
            </div>
          </div>

          {/* Key Stats Strip */}
          <div
            className="glass-panel"
            style={{
              padding: '28px 32px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '24px',
              textAlign: 'center',
              marginBottom: '60px'
            }}
          >
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--primary)' }}>₹55.6L+</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Verified Lifetime Volume</div>
            </div>
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--investment)' }}>31+</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Monthly Transition Ledgers</div>
            </div>
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--danger)' }}>78%</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Avg Healthy Spend Score</div>
            </div>
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-primary)' }}>100%</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Cash &amp; Bank Reconciled</div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE DEMO SHOWCASE SECTION */}
      <section id="interactive-demo" style={{ padding: '80px 0', position: 'relative' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Hands-On Experience</span>
            <h2>Test Drive The Real App Interface</h2>
            <p>
              Experience the fluidity of Money Flow right inside your browser. Switch tabs inside the phone to explore the Analytics Dashboard, Career Ledgers with Carry-Forward, and 1% Income Targeting.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '48px', alignItems: 'center' }}>
            
            {/* Left: Interactive Phone Mockup */}
            <div>
              <InteractivePhoneMockup />
            </div>

            {/* Right: Feature Highlights with Explanations */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              {/* Card 1 */}
              <div
                className="glass-card"
                style={{
                  padding: '24px',
                  borderLeft: '4px solid var(--primary)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <div style={{ background: 'rgba(16, 185, 129, 0.15)', padding: '8px', borderRadius: '10px', color: 'var(--primary)' }}>
                    <BarChart3 size={20} />
                  </div>
                  <h3 style={{ fontSize: '1.15rem' }}>Lifetime vs Monthly Aggregations</h3>
                </div>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Instantly see your Total Inflow (₹5.56L), Total Outflow (₹3.15L), and Total Investments (₹2.38L) with responsive charts and category donut distributions.
                </p>
              </div>

              {/* Card 2 */}
              <div
                className="glass-card"
                style={{
                  padding: '24px',
                  borderLeft: '4px solid var(--investment)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <div style={{ background: 'rgba(139, 92, 246, 0.15)', padding: '8px', borderRadius: '10px', color: 'var(--investment)' }}>
                    <Briefcase size={20} />
                  </div>
                  <h3 style={{ fontSize: '1.15rem' }}>Dynamic Career Transition Ledgers</h3>
                </div>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Switch companies seamlessly (e.g. Nexus Tech → Vertex Digital → Horizon Global). The engine carries over previous closing balances automatically so your historical wealth is never split.
                </p>
              </div>

              {/* Card 3 */}
              <div
                className="glass-card"
                style={{
                  padding: '24px',
                  borderLeft: '4px solid var(--danger)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <div style={{ background: 'rgba(244, 63, 94, 0.15)', padding: '8px', borderRadius: '10px', color: 'var(--danger)' }}>
                    <Sparkles size={20} />
                  </div>
                  <h3 style={{ fontSize: '1.15rem' }}>&quot;Good vs Bad&quot; Sentiment Tagging</h3>
                </div>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Not all spending is equal. Distinguish productive capital investments from late-night impulse buys. The app computes an emotional Spending Quality Ratio in real time.
                </p>
              </div>

              {/* Action */}
              <div style={{ marginTop: '10px' }}>
                <Link href="/features" className="btn btn-outline" style={{ display: 'inline-flex', gap: '8px' }}>
                  <span>View Full Architectural Breakdown</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 6 ARCHITECTURAL PILLARS */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Engineered for Perfection</span>
            <h2>Built Beyond Generic Budget Apps</h2>
            <p>
              Every architectural feature in Money Flow was built to solve the real frustrations of spreadsheet tracking and brittle budgeting tools.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '28px'
            }}
          >
            {/* Pillar 1 */}
            <div className="glass-card" style={{ padding: '32px' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  background: 'rgba(16, 185, 129, 0.15)',
                  color: 'var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}
              >
                <Briefcase size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Career Transition Ledgers</h3>
              <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Create separate ledgers for every job or venture. Carry forward cumulative balances between career steps, tracking itemized asset purchases and pending obligations without losing context.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="glass-card" style={{ padding: '32px' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  background: 'rgba(244, 63, 94, 0.15)',
                  color: 'var(--danger)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}
              >
                <Sparkles size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Spend Quality Sentiment</h3>
              <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Every transaction includes a &quot;Good&quot; vs &quot;Bad&quot; sentiment tag. Instantly view your emotional spending ratio on the dashboard and filter entries to see where you can cut without sacrificing lifestyle.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="glass-card" style={{ padding: '32px' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  background: 'rgba(139, 92, 246, 0.15)',
                  color: 'var(--investment)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}
              >
                <TrendingUp size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Percentage Income Targeting</h3>
              <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Commit exact percentages (e.g. 1.00% to charitable or community giving). The system dynamically calculates your exact rupee quota as income grows, tracking Resolved vs Unresolved balances.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="glass-card" style={{ padding: '32px' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  background: 'rgba(245, 158, 11, 0.15)',
                  color: 'var(--warning)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}
              >
                <DollarSign size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Physical Cash &amp; Bank Balances</h3>
              <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Reconcile physical cash in your drawer (Cash 1 &amp; 2) and pending uncleared deposits (Pending 1 &amp; 2). Eliminate the discrepancy between digital accounting and tangible money in your pocket.
              </p>
            </div>

            {/* Pillar 5 */}
            <div className="glass-card" style={{ padding: '32px' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  background: 'rgba(52, 211, 153, 0.15)',
                  color: 'var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}
              >
                <Zap size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Cloud Resilience Shield</h3>
              <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Free and on-demand cloud servers sleep during inactivity. Money Flow features a smart ping loop with a friendly status screen so the app never throws connection errors or drops your data.
              </p>
            </div>

            {/* Pillar 6 */}
            <div className="glass-card" style={{ padding: '32px' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  background: 'rgba(192, 132, 252, 0.15)',
                  color: 'var(--investment-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}
              >
                <ShieldCheck size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Multi-Tenant Security</h3>
              <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Every user is isolated in an encrypted database partition with scoped authorization tokens and cryptographic hashing. No ad tracking, no telemetry selling.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SAVINGS CALCULATOR / ROI SIMULATOR */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <SavingsCalculator />
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Clear Superiority</span>
            <h2>Why Money Flow Beats Spreadsheets &amp; Generic Apps</h2>
            <p>
              Compare how Money Flow stacks up against complex Excel spreadsheets and traditional budgeting tools.
            </p>
          </div>

          <div
            className="glass-panel"
            style={{
              overflowX: 'auto',
              borderRadius: '20px'
            }}
          >
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                textAlign: 'left',
                fontSize: '0.92rem'
              }}
            >
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border-subtle)', background: 'var(--table-header-bg)' }}>
                  <th style={{ padding: '18px 24px', color: 'var(--text-primary)', fontWeight: 700 }}>Capabilities</th>
                  <th style={{ padding: '18px 24px', color: 'var(--text-secondary)', fontWeight: 600 }}>Excel Spreadsheets</th>
                  <th style={{ padding: '18px 24px', color: 'var(--text-secondary)', fontWeight: 600 }}>Standard Budget Apps</th>
                  <th style={{ padding: '18px 24px', color: 'var(--primary)', fontWeight: 800, background: 'rgba(16, 185, 129, 0.1)' }}>
                    Money Flow
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--table-border)' }}>
                  <td style={{ padding: '16px 24px', fontWeight: 600, color: 'var(--text-primary)' }}>Career Carry-Forward Ledgers</td>
                  <td style={{ padding: '16px 24px', color: 'var(--danger)' }}>Manual Formula Hassle</td>
                  <td style={{ padding: '16px 24px', color: 'var(--danger)' }}>❌ Not Supported</td>
                  <td style={{ padding: '16px 24px', color: 'var(--primary)', fontWeight: 700, background: 'rgba(16, 185, 129, 0.05)' }}>
                    ✓ Automated Multi-Company
                  </td>
                </tr>

                <tr style={{ borderBottom: '1px solid var(--table-border)' }}>
                  <td style={{ padding: '16px 24px', fontWeight: 600, color: 'var(--text-primary)' }}>&quot;Good vs Bad&quot; Sentiment Tagging</td>
                  <td style={{ padding: '16px 24px', color: 'var(--danger)' }}>❌ None</td>
                  <td style={{ padding: '16px 24px', color: 'var(--danger)' }}>❌ None (Categories only)</td>
                  <td style={{ padding: '16px 24px', color: 'var(--primary)', fontWeight: 700, background: 'rgba(16, 185, 129, 0.05)' }}>
                    ✓ Emotional Quality Score
                  </td>
                </tr>

                <tr style={{ borderBottom: '1px solid var(--table-border)' }}>
                  <td style={{ padding: '16px 24px', fontWeight: 600, color: 'var(--text-primary)' }}>Percentage Income Commitments (e.g. 1%)</td>
                  <td style={{ padding: '16px 24px', color: 'var(--text-muted)' }}>⚠️ Complex Sheet Formulas</td>
                  <td style={{ padding: '16px 24px', color: 'var(--danger)' }}>❌ Fixed Budgets Only</td>
                  <td style={{ padding: '16px 24px', color: 'var(--primary)', fontWeight: 700, background: 'rgba(16, 185, 129, 0.05)' }}>
                    ✓ Auto-Calculated Targets
                  </td>
                </tr>

                <tr style={{ borderBottom: '1px solid var(--table-border)' }}>
                  <td style={{ padding: '16px 24px', fontWeight: 600, color: 'var(--text-primary)' }}>Cash &amp; Pending Balance Reconcile</td>
                  <td style={{ padding: '16px 24px', color: 'var(--text-muted)' }}>⚠️ Prone to human errors</td>
                  <td style={{ padding: '16px 24px', color: 'var(--danger)' }}>❌ Ignores physical cash</td>
                  <td style={{ padding: '16px 24px', color: 'var(--primary)', fontWeight: 700, background: 'rgba(16, 185, 129, 0.05)' }}>
                    ✓ Dual Cash &amp; Pending Slates
                  </td>
                </tr>

                <tr style={{ borderBottom: '1px solid var(--table-border)' }}>
                  <td style={{ padding: '16px 24px', fontWeight: 600, color: 'var(--text-primary)' }}>Mobile Ergonomics &amp; Safe Area</td>
                  <td style={{ padding: '16px 24px', color: 'var(--danger)' }}>❌ Clunky on touchscreens</td>
                  <td style={{ padding: '16px 24px', color: 'var(--text-secondary)' }}>Varies by app</td>
                  <td style={{ padding: '16px 24px', color: 'var(--primary)', fontWeight: 700, background: 'rgba(16, 185, 129, 0.05)' }}>
                    ✓ Clean Touchscreen Ergonomics
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: '16px 24px', fontWeight: 600, color: 'var(--text-primary)' }}>Cost &amp; Data Ownership</td>
                  <td style={{ padding: '16px 24px', color: 'var(--primary)' }}>Free (Local file)</td>
                  <td style={{ padding: '16px 24px', color: 'var(--danger)' }}>Subscription + Ads</td>
                  <td style={{ padding: '16px 24px', color: 'var(--primary)', fontWeight: 700, background: 'rgba(16, 185, 129, 0.05)' }}>
                    ✓ 100% Free Community Edition
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* USER TESTIMONIALS & REVIEWS */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Social Proof</span>
            <h2>Loved by Professionals &amp; Builders</h2>
            <p>
              Here is how Money Flow transformed real users from spreadsheet chaos to effortless financial control.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px'
            }}
          >
            {/* Testimonial 1 */}
            <div className="glass-card" style={{ padding: '28px' }}>
              <div style={{ display: 'flex', gap: '4px', marginBottom: '14px', color: '#FBBF24' }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#FBBF24" />)}
              </div>
              <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '20px' }}>
                &quot;I changed companies twice in 3 years. In every other app, my balance would get mangled or reset to zero each financial year. Money Flow&apos;s carry-forward feature preserved my exact net wealth without a single formula mistake!&quot;
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800 }}>
                  AM
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>Arjun Mehta</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Senior Software Engineer</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="glass-card" style={{ padding: '28px' }}>
              <div style={{ display: 'flex', gap: '4px', marginBottom: '14px', color: '#FBBF24' }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#FBBF24" />)}
              </div>
              <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '20px' }}>
                &quot;The Good vs Bad sentiment tagging opened my eyes. I didn&apos;t realize that 22% of my monthly salary was vanishing into late-night impulse food orders and subscriptions I didn&apos;t need. Reclaiming that funded my new workstation in 4 months.&quot;
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--investment)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800 }}>
                  RP
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>Rohit Patel</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Product Designer</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="glass-card" style={{ padding: '28px' }}>
              <div style={{ display: 'flex', gap: '4px', marginBottom: '14px', color: '#FBBF24' }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#FBBF24" />)}
              </div>
              <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '20px' }}>
                &quot;The physical cash and pending balance reconciliations are genius. I always had ₹5,000 to ₹10,000 unaccounted for between my bank account and cash in hand. Now the app matches my physical wallet down to the rupee.&quot;
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--danger)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800 }}>
                  AS
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>Ankit Sharma</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Operations Lead</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Got Questions?</span>
            <h2>Frequently Asked Questions</h2>
            <p>
              Everything you need to know about Money Flow, mobile access, and data privacy.
            </p>
          </div>
          <FaqAccordion />
        </div>
      </section>

      {/* FINAL BOTTOM CTA CARD */}
      <section style={{ padding: '40px 0 80px 0' }}>
        <div className="container">
          <div
            className="glass-panel"
            style={{
              padding: '64px 36px',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(139, 92, 246, 0.15) 50%, var(--surface-glass-card) 100%)',
              border: '1px solid var(--border-subtle)'
            }}
          >
            <div className="badge badge-emerald" style={{ marginBottom: '20px' }}>
              <Sparkles size={14} />
              <span>Available for Android</span>
            </div>

            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '16px', color: 'var(--text-primary)' }}>
              Take Full Command of Your Capital Today
            </h2>

            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '640px', margin: '0 auto 36px auto', lineHeight: 1.7 }}>
              Get Money Flow on your mobile device today. Zero subscription fees, zero privacy compromises, 100% financial clarity.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
              <Link href="/download" className="btn btn-primary" style={{ padding: '16px 36px', fontSize: '1.1rem' }}>
                <Smartphone size={22} />
                <span>Get Money Flow for Mobile</span>
              </Link>
              <Link href="/features" className="btn btn-secondary" style={{ padding: '16px 28px', fontSize: '1.1rem' }}>
                <span>Explore All Features</span>
              </Link>
            </div>

            <div style={{ marginTop: '24px', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              Compatible with all modern Android devices • Verified Private
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
