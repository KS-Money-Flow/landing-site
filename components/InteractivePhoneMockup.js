'use client';

import { useState, useEffect } from 'react';
import { 
  TrendingUp, TrendingDown, PieChart, Briefcase, Plus, 
  Sparkles, CheckCircle2, AlertCircle, ArrowUpRight, ArrowDownLeft,
  Calendar, Layers, Shield, Battery, Wifi, Signal, DollarSign,
  Sun, Moon
} from 'lucide-react';

export default function InteractivePhoneMockup() {
  const [activeTab, setActiveTab] = useState('dashboard'); // 'dashboard', 'companies', 'goals'
  const [selectedCompany, setSelectedCompany] = useState('Vertex Digital');
  const [sentimentFilter, setSentimentFilter] = useState('all'); // 'all', 'good', 'bad'
  const [quickAddOpen, setQuickAddOpen] = useState(false);
  const [phoneTheme, setPhoneTheme] = useState('dark');

  // Automatically synchronize phone theme with website data-theme attribute
  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    setPhoneTheme(currentTheme);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
          const newTheme = document.documentElement.getAttribute('data-theme') || 'dark';
          setPhoneTheme(newTheme);
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  const isLight = phoneTheme === 'light';

  // Palette mapped precisely to frontend/src/theme/theme.js
  const p = isLight ? {
    phoneOuter: 'linear-gradient(145deg, #CBD5E1, #94A3B8)',
    phoneBorder: '2px solid #94A3B8',
    phoneShadow: '0 25px 60px -15px rgba(15, 23, 42, 0.2), 0 0 35px rgba(5, 150, 105, 0.15)',
    notchBg: '#CBD5E1',
    notchDot: '#64748B',
    screenBg: '#F1F5F9',
    statusBarText: '#334155',
    textPrimary: '#0F172A',
    textSecondary: '#475569',
    textMuted: '#94A3B8',
    cardBg: '#FFFFFF',
    cardBorder: '1px solid #E2E8F0',
    cardElevated: '#F8FAFC',
    netCardBg: 'linear-gradient(135deg, rgba(5, 150, 105, 0.14), rgba(255, 255, 255, 0.95))',
    netCardBorder: '1px solid #CBD5E1',
    netCardShadow: '0 8px 24px rgba(15, 23, 42, 0.08)',
    bottomBarBg: 'rgba(255, 255, 255, 0.95)',
    bottomBarBorder: '1px solid #E2E8F0',
    fabBorder: '2px solid #F1F5F9',
    primary: '#059669',
    primaryLight: '#10B981',
    investment: '#7C3AED',
    investmentLight: '#8B5CF6',
    danger: '#E11D48',
    dangerLight: '#F43F5E',
    companyCarryBg: 'rgba(124, 58, 237, 0.08)',
    companyCarryBorder: '1px solid rgba(124, 58, 237, 0.25)',
    companyCarryText: '#7C3AED',
    pillsBg: '#E2E8F0',
    modalBg: 'rgba(255, 255, 255, 0.98)',
    modalBorder: '1px solid #059669',
    modalShadow: '0 10px 30px rgba(15, 23, 42, 0.18)'
  } : {
    phoneOuter: 'linear-gradient(145deg, #2A364F, #0E1422)',
    phoneBorder: '2px solid rgba(51, 65, 85, 0.8)',
    phoneShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 40px rgba(16, 185, 129, 0.2)',
    notchBg: '#070A10',
    notchDot: '#1E293B',
    screenBg: '#0B0F19',
    statusBarText: '#94A3B8',
    textPrimary: '#F8FAFC',
    textSecondary: '#94A3B8',
    textMuted: '#64748B',
    cardBg: '#151D2E',
    cardBorder: '1px solid #2A364F',
    cardElevated: '#1E293B',
    netCardBg: 'linear-gradient(135deg, rgba(21, 29, 46, 0.95), rgba(30, 41, 59, 0.9))',
    netCardBorder: '1px solid rgba(16, 185, 129, 0.3)',
    netCardShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
    bottomBarBg: 'rgba(15, 22, 38, 0.95)',
    bottomBarBorder: '1px solid #2A364F',
    fabBorder: '2px solid #0B0F19',
    primary: '#10B981',
    primaryLight: '#34D399',
    investment: '#8B5CF6',
    investmentLight: '#A78BFA',
    danger: '#F43F5E',
    dangerLight: '#FB7185',
    companyCarryBg: 'rgba(139, 92, 246, 0.08)',
    companyCarryBorder: '1px solid rgba(139, 92, 246, 0.3)',
    companyCarryText: '#A78BFA',
    pillsBg: '#1E293B',
    modalBg: 'rgba(30, 41, 59, 0.98)',
    modalBorder: '1px solid #10B981',
    modalShadow: '0 10px 30px rgba(0,0,0,0.8)'
  };

  const companiesData = {
    'Nexus Technologies': {
      period: 'Feb 2024 - Sep 2025',
      openingBalance: 0,
      totalEarned: 284500,
      totalSpent: 141700,
      netCarried: 142800,
      transactions: [
        { id: 1, title: 'Monthly Salary Credit', date: '25 Sep 2025', amount: '+₹38,000', type: 'income', category: 'Salary', sentiment: 'good' },
        { id: 2, title: 'Purchased Workstation Laptop', date: '12 Sep 2025', amount: '-₹22,000', type: 'expense', category: 'Asset', sentiment: 'good' },
        { id: 3, title: 'Impulse Online Shopping', date: '04 Sep 2025', amount: '-₹4,200', type: 'expense', category: 'Shopping', sentiment: 'bad' }
      ]
    },
    'Vertex Digital': {
      period: 'Oct 2025 - Jul 2026',
      openingBalance: 142800,
      totalEarned: 198000,
      totalSpent: 98500,
      netCarried: 242300,
      transactions: [
        { id: 4, title: 'Senior Dev Salary Credit', date: '01 Jul 2026', amount: '+₹46,500', type: 'income', category: 'Salary', sentiment: 'good' },
        { id: 5, title: 'Monthly Mutual Fund SIP', date: '05 Jul 2026', amount: '-₹15,000', type: 'investment', category: 'Investments', sentiment: 'good' },
        { id: 6, title: 'Unplanned Late Night Clubbing', date: '18 Jun 2026', amount: '-₹3,850', type: 'expense', category: 'Dining', sentiment: 'bad' },
        { id: 7, title: 'Grocery & Home Supplies', date: '10 Jun 2026', amount: '-₹6,200', type: 'expense', category: 'Groceries', sentiment: 'good' }
      ]
    },
    'Horizon Global': {
      period: 'Aug 2026 - Present',
      openingBalance: 242300,
      totalEarned: 73866,
      totalSpent: 75442,
      netCarried: 240724,
      transactions: [
        { id: 8, title: 'Lead Architect Salary', date: '15 Sep 2026', amount: '+₹54,000', type: 'income', category: 'Salary', sentiment: 'good' },
        { id: 9, title: 'Health & Wellness Checkup', date: '12 Sep 2026', amount: '-₹4,500', type: 'expense', category: 'Health', sentiment: 'good' },
        { id: 10, title: 'Gaming In-App Purchases', date: '08 Sep 2026', amount: '-₹2,400', type: 'expense', category: 'Entertainment', sentiment: 'bad' }
      ]
    }
  };

  const currentCompanyTransactions = companiesData[selectedCompany].transactions.filter(t => {
    if (sentimentFilter === 'all') return true;
    return t.sentiment === sentimentFilter;
  });

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '400px', margin: '0 auto' }}>
      
      {/* Top Preview Control Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', padding: '0 8px' }}>
        <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary)' }} />
          Interactive Mobile Live Demo
        </span>
        <button
          onClick={() => setPhoneTheme(isLight ? 'dark' : 'light')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: 'var(--surface-elevated)',
            border: '1px solid var(--border-subtle)',
            color: 'var(--text-primary)',
            padding: '5px 12px',
            borderRadius: '9999px',
            fontSize: '0.74rem',
            fontWeight: 700,
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            boxShadow: 'var(--shadow-card)'
          }}
          title="Toggle preview theme"
        >
          {isLight ? <Sun size={13} color="#D97706" /> : <Moon size={13} color="#8B5CF6" />}
          <span>{isLight ? 'App Light Mode' : 'App Dark Mode'}</span>
        </button>
      </div>

      {/* Outer Phone Shell */}
      <div
        style={{
          background: p.phoneOuter,
          borderRadius: '46px',
          padding: '10px',
          boxShadow: p.phoneShadow,
          border: p.phoneBorder,
          position: 'relative',
          transition: 'all 0.4s ease'
        }}
      >
        {/* Phone Speaker & Camera Notch */}
        <div
          style={{
            position: 'absolute',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '120px',
            height: '22px',
            background: p.notchBg,
            borderRadius: '20px',
            zIndex: 30,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            boxShadow: isLight ? 'inset 0 1px 3px rgba(0,0,0,0.1)' : 'none'
          }}
        >
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: p.notchDot }} />
          <div style={{ width: '38px', height: '4px', borderRadius: '2px', background: p.notchDot }} />
        </div>

        {/* Screen Bezel */}
        <div
          style={{
            background: p.screenBg,
            borderRadius: '38px',
            overflow: 'hidden',
            minHeight: '660px',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            transition: 'background 0.3s ease'
          }}
        >
          {/* Status Bar (Clock, WiFi, Battery) */}
          <div
            style={{
              height: '44px',
              padding: '12px 24px 0 24px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '0.75rem',
              fontWeight: 700,
              color: p.statusBarText,
              zIndex: 25
            }}
          >
            <span>09:41</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Signal size={12} />
              <Wifi size={12} />
              <Battery size={14} color={p.primary} />
            </div>
          </div>

          {/* Interactive Screen Content */}
          <div style={{ flex: 1, padding: '12px 16px 80px 16px', overflowY: 'auto' }}>
            
            {/* TAB 1: DASHBOARD ANALYTICS */}
            {activeTab === 'dashboard' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {/* Header Profile Greeting */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: p.textMuted }}>Welcome back,</span>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: p.textPrimary }}>Alex Morgan</h3>
                  </div>
                  <div
                    style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #10B981, #8B5CF6)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      color: '#FFFFFF'
                    }}
                  >
                    AM
                  </div>
                </div>

                {/* Lifetime Net Card */}
                <div
                  style={{
                    background: p.netCardBg,
                    border: p.netCardBorder,
                    borderRadius: '18px',
                    padding: '16px',
                    boxShadow: p.netCardShadow
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <span style={{ fontSize: '0.75rem', color: p.textSecondary, textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
                      Net In Hand
                    </span>
                    <span className="badge badge-emerald" style={{ fontSize: '0.68rem' }}>+28.4% YoY</span>
                  </div>
                  <div style={{ fontSize: '1.75rem', fontWeight: 800, color: p.textPrimary, letterSpacing: '-0.02em', marginBottom: '14px' }}>
                    ₹2,40,724<span style={{ fontSize: '1.1rem', color: p.textMuted }}>.06</span>
                  </div>

                  {/* 3 Metric Pills */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '6px', textAlign: 'center' }}>
                    <div style={{ background: isLight ? 'rgba(5, 150, 105, 0.12)' : 'rgba(16, 185, 129, 0.1)', padding: '8px 4px', borderRadius: '10px' }}>
                      <div style={{ fontSize: '0.65rem', color: p.primary, fontWeight: 700 }}>Total In</div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 700, color: p.textPrimary }}>₹5.56L</div>
                    </div>
                    <div style={{ background: isLight ? 'rgba(225, 29, 72, 0.12)' : 'rgba(244, 63, 94, 0.1)', padding: '8px 4px', borderRadius: '10px' }}>
                      <div style={{ fontSize: '0.65rem', color: p.danger, fontWeight: 700 }}>Total Out</div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 700, color: p.textPrimary }}>₹3.15L</div>
                    </div>
                    <div style={{ background: isLight ? 'rgba(124, 58, 237, 0.12)' : 'rgba(139, 92, 246, 0.1)', padding: '8px 4px', borderRadius: '10px' }}>
                      <div style={{ fontSize: '0.65rem', color: p.investment, fontWeight: 700 }}>Invested</div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 700, color: p.textPrimary }}>₹2.38L</div>
                    </div>
                  </div>
                </div>

                {/* Spending Sentiment Gauge */}
                <div
                  style={{
                    background: p.cardBg,
                    border: p.cardBorder,
                    borderRadius: '16px',
                    padding: '14px',
                    boxShadow: isLight ? '0 2px 8px rgba(0,0,0,0.04)' : 'none'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.78rem', fontWeight: 700, color: p.textPrimary }}>Spend Quality Score</span>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: p.primary }}>78% Healthy</span>
                  </div>
                  <div style={{ height: '8px', background: p.danger, borderRadius: '4px', overflow: 'hidden', display: 'flex' }}>
                    <div style={{ width: '78%', background: p.primary }} />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6px', fontSize: '0.68rem', color: p.textSecondary, fontWeight: 600 }}>
                    <span>🟢 78% Productive &amp; Assets</span>
                    <span>🔴 22% Bad / Impulse</span>
                  </div>
                </div>

                {/* Cash Reconciliation Mini Card */}
                <div
                  style={{
                    background: p.cardBg,
                    border: p.cardBorder,
                    borderRadius: '14px',
                    padding: '12px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    boxShadow: isLight ? '0 2px 8px rgba(0,0,0,0.04)' : 'none'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.68rem', color: p.textMuted }}>Physical Cash in Hand</div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 700, color: p.textPrimary }}>₹8,200.00</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.68rem', color: p.textMuted }}>Pending Reconciled</div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 700, color: p.primary }}>₹12,450.00</div>
                  </div>
                </div>

                {/* Recent Activities Mini List */}
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: p.textMuted, marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Recent Ledger Activity
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div
                      style={{
                        background: p.cardBg,
                        border: p.cardBorder,
                        borderRadius: '12px',
                        padding: '10px 12px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}
                    >
                      <div>
                        <div style={{ fontSize: '0.78rem', fontWeight: 700, color: p.textPrimary }}>Monthly Salary Inflow</div>
                        <div style={{ fontSize: '0.65rem', color: p.textMuted }}>Vertex Digital • Salary</div>
                      </div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 800, color: p.primary }}>+₹46,500</div>
                    </div>
                    <div
                      style={{
                        background: p.cardBg,
                        border: p.cardBorder,
                        borderRadius: '12px',
                        padding: '10px 12px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}
                    >
                      <div>
                        <div style={{ fontSize: '0.78rem', fontWeight: 700, color: p.textPrimary }}>Mutual Fund SIP</div>
                        <div style={{ fontSize: '0.65rem', color: p.textMuted }}>Investments • Good</div>
                      </div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 800, color: p.investment }}>-₹15,000</div>
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* TAB 2: COMPANY CAREER LEDGERS */}
            {activeTab === 'companies' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 800, color: p.textPrimary }}>Career Ledgers</h3>
                  <span className="badge badge-purple" style={{ fontSize: '0.68rem' }}>Carry-Forward Live</span>
                </div>

                {/* Company Switcher Pills */}
                <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '4px' }}>
                  {Object.keys(companiesData).map(comp => (
                    <button
                      key={comp}
                      onClick={() => setSelectedCompany(comp)}
                      style={{
                        padding: '6px 10px',
                        borderRadius: '10px',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        border: 'none',
                        cursor: 'pointer',
                        whiteSpace: 'nowrap',
                        background: selectedCompany === comp ? p.investment : p.pillsBg,
                        color: selectedCompany === comp ? '#FFFFFF' : p.textSecondary,
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {comp.split(' ')[0]}
                    </button>
                  ))}
                </div>

                {/* Carry-Forward Card */}
                <div
                  style={{
                    background: p.companyCarryBg,
                    border: p.companyCarryBorder,
                    borderRadius: '14px',
                    padding: '12px'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: p.companyCarryText, marginBottom: '4px', fontWeight: 600 }}>
                    <span>Opening Carried Forward</span>
                    <span>{companiesData[selectedCompany].period}</span>
                  </div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: p.textPrimary }}>
                    +₹{companiesData[selectedCompany].openingBalance.toLocaleString('en-IN')}
                  </div>
                </div>

                {/* Sentiment Tag Filter */}
                <div style={{ display: 'flex', gap: '6px' }}>
                  {['all', 'good', 'bad'].map(mode => (
                    <button
                      key={mode}
                      onClick={() => setSentimentFilter(mode)}
                      style={{
                        flex: 1,
                        padding: '5px',
                        borderRadius: '8px',
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        border: '1px solid',
                        borderColor: sentimentFilter === mode ? p.primary : (isLight ? '#CBD5E1' : '#2A364F'),
                        background: sentimentFilter === mode ? (isLight ? 'rgba(5, 150, 105, 0.15)' : 'rgba(16, 185, 129, 0.15)') : p.cardBg,
                        color: sentimentFilter === mode ? p.primary : p.textMuted,
                        textTransform: 'capitalize',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {mode}
                    </button>
                  ))}
                </div>

                {/* Transactions List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {currentCompanyTransactions.map(t => (
                    <div
                      key={t.id}
                      style={{
                        background: p.cardBg,
                        border: p.cardBorder,
                        borderRadius: '12px',
                        padding: '10px 12px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        boxShadow: isLight ? '0 1px 4px rgba(0,0,0,0.03)' : 'none'
                      }}
                    >
                      <div>
                        <div style={{ fontSize: '0.78rem', fontWeight: 700, color: p.textPrimary }}>{t.title}</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}>
                          <span style={{ fontSize: '0.65rem', color: p.textMuted }}>{t.category} • {t.date}</span>
                          <span
                            style={{
                              fontSize: '0.6rem',
                              fontWeight: 700,
                              padding: '1px 6px',
                              borderRadius: '4px',
                              background: t.sentiment === 'good' ? (isLight ? 'rgba(5, 150, 105, 0.15)' : 'rgba(16, 185, 129, 0.2)') : (isLight ? 'rgba(225, 29, 72, 0.15)' : 'rgba(244, 63, 94, 0.2)'),
                              color: t.sentiment === 'good' ? p.primary : p.danger
                            }}
                          >
                            {t.sentiment.toUpperCase()}
                          </span>
                        </div>
                      </div>
                      <div
                        style={{
                          fontSize: '0.85rem',
                          fontWeight: 800,
                          color: t.amount.startsWith('+') ? p.primary : p.danger
                        }}
                      >
                        {t.amount}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: INCOME TARGETING & NOTES */}
            {activeTab === 'goals' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 800, color: p.textPrimary }}>Income Targeting</h3>
                  <span className="badge badge-emerald" style={{ fontSize: '0.68rem' }}>1% Auto-Formula</span>
                </div>

                {/* Target 1: Charitable / Cause Giving */}
                <div
                  style={{
                    background: p.cardBg,
                    border: isLight ? '1px solid #CBD5E1' : '1px solid rgba(16, 185, 129, 0.3)',
                    borderRadius: '16px',
                    padding: '14px',
                    boxShadow: isLight ? '0 2px 8px rgba(0,0,0,0.04)' : 'none'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <span style={{ fontSize: '0.82rem', fontWeight: 700, color: p.textPrimary }}>Annual Community Giving</span>
                    <span style={{ fontSize: '0.72rem', color: p.primary, fontWeight: 700 }}>1.00% of Income</span>
                  </div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: p.textPrimary, marginBottom: '10px' }}>
                    ₹5,563<span style={{ fontSize: '0.8rem', color: p.textMuted }}>.66</span>
                  </div>

                  {/* Progress Bar */}
                  <div style={{ height: '6px', background: isLight ? '#E2E8F0' : '#1E293B', borderRadius: '3px', overflow: 'hidden', marginBottom: '8px' }}>
                    <div style={{ width: '18%', height: '100%', background: p.primary }} />
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', fontWeight: 600 }}>
                    <span style={{ color: p.primary }}>Resolved: ₹1,000.00</span>
                    <span style={{ color: p.danger }}>Pending: ₹4,563.66</span>
                  </div>
                </div>

                {/* Target 2: Laptop Asset Replacement */}
                <div
                  style={{
                    background: p.cardBg,
                    border: p.cardBorder,
                    borderRadius: '16px',
                    padding: '14px',
                    boxShadow: isLight ? '0 2px 8px rgba(0,0,0,0.04)' : 'none'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <span style={{ fontSize: '0.82rem', fontWeight: 700, color: p.textPrimary }}>Workstation Upgrade</span>
                    <span style={{ fontSize: '0.72rem', color: p.investment, fontWeight: 700 }}>Fixed Target</span>
                  </div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: p.textPrimary, marginBottom: '10px' }}>
                    ₹1,20,000
                  </div>

                  <div style={{ height: '6px', background: isLight ? '#E2E8F0' : '#1E293B', borderRadius: '3px', overflow: 'hidden', marginBottom: '8px' }}>
                    <div style={{ width: '65%', height: '100%', background: p.investment }} />
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', fontWeight: 600 }}>
                    <span style={{ color: p.investment }}>Accumulated: ₹78,000</span>
                    <span style={{ color: p.textMuted }}>Remaining: ₹42,000</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Floating Quick-Add Modal Simulator */}
          {quickAddOpen && (
            <div
              style={{
                position: 'absolute',
                bottom: '70px',
                left: '12px',
                right: '12px',
                background: p.modalBg,
                backdropFilter: 'blur(20px)',
                borderRadius: '18px',
                padding: '16px',
                border: p.modalBorder,
                zIndex: 40,
                boxShadow: p.modalShadow
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <span style={{ fontSize: '0.82rem', fontWeight: 800, color: p.primary }}>⚡ 5-Second Quick Add</span>
                <button
                  onClick={() => setQuickAddOpen(false)}
                  style={{ background: 'none', border: 'none', color: p.textMuted, cursor: 'pointer', fontSize: '14px' }}
                >
                  ✕
                </button>
              </div>
              <div style={{ fontSize: '0.75rem', color: p.textSecondary, marginBottom: '10px' }}>
                Instant entry with dynamic category sorting and Good/Bad sentiment flag!
              </div>
              <button
                onClick={() => setQuickAddOpen(false)}
                className="btn btn-primary"
                style={{ width: '100%', padding: '8px', fontSize: '0.78rem' }}
              >
                Simulate Instant Save
              </button>
            </div>
          )}

          {/* Bottom Floating Navigation Bar */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '68px',
              background: p.bottomBarBg,
              backdropFilter: 'blur(20px)',
              borderTop: p.bottomBarBorder,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              padding: '0 8px',
              zIndex: 30
            }}
          >
            <button
              onClick={() => setActiveTab('dashboard')}
              style={{
                background: 'none',
                border: 'none',
                color: activeTab === 'dashboard' ? p.primary : p.textMuted,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '2px',
                cursor: 'pointer',
                fontSize: '0.65rem',
                fontWeight: 700
              }}
            >
              <PieChart size={18} />
              <span>Analytics</span>
            </button>

            <button
              onClick={() => setActiveTab('companies')}
              style={{
                background: 'none',
                border: 'none',
                color: activeTab === 'companies' ? p.investment : p.textMuted,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '2px',
                cursor: 'pointer',
                fontSize: '0.65rem',
                fontWeight: 700
              }}
            >
              <Briefcase size={18} />
              <span>Ledgers</span>
            </button>

            {/* Quick Add FAB */}
            <button
              onClick={() => setQuickAddOpen(!quickAddOpen)}
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #10B981, #059669)',
                border: p.fabBorder,
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(16, 185, 129, 0.4)',
                transform: 'translateY(-8px)'
              }}
              aria-label="Quick Add"
            >
              <Plus size={22} />
            </button>

            <button
              onClick={() => setActiveTab('goals')}
              style={{
                background: 'none',
                border: 'none',
                color: activeTab === 'goals' ? p.primary : p.textMuted,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '2px',
                cursor: 'pointer',
                fontSize: '0.65rem',
                fontWeight: 700
              }}
            >
              <TrendingUp size={18} />
              <span>Targets</span>
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Helper Callout */}
      <div
        style={{
          textAlign: 'center',
          marginTop: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px',
          fontSize: '0.8rem',
          color: 'var(--primary)'
        }}
      >
        <Sparkles size={14} />
        <span>Try tapping bottom icons, company pills, or toggle Light/Dark above!</span>
      </div>
    </div>
  );
}
