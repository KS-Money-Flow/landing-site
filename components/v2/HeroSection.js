'use client';

import Link from 'next/link';
import { ArrowRight, Check, ExternalLink } from 'lucide-react';

export default function HeroSection() {
  return (
    <section style={{ padding: '40px 0 60px 0', position: 'relative' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '48px',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Copy & Actions */}
          <div style={{ maxWidth: '580px' }}>
            {/* Pill Tag */}
            <div style={{ marginBottom: '20px' }}>
              <span className="badge badge-emerald" style={{ padding: '6px 14px', fontSize: '0.78rem' }}>
                NEW V2.4 · A new chapter for your money
              </span>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                fontWeight: 800,
                lineHeight: 1.12,
                letterSpacing: '-0.035em',
                color: 'var(--text-primary)',
                marginBottom: '20px'
              }}
            >
              Life moves. <br />
              Your money story <br />
              stays together.
            </h1>

            {/* Subheadline */}
            <p
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
                marginBottom: '32px'
              }}
            >
              One clear ledger for every career, every rupee, and the way spending makes you feel.
            </p>

            {/* Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '14px',
                marginBottom: '28px'
              }}
            >
              <a
                href="https://play.google.com/store/apps/details?id=com.krishna.moneyflow"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{
                  padding: '14px 26px',
                  fontSize: '0.96rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <span>Get on Google Play</span>
                <ExternalLink size={18} />
              </a>
              <Link
                href="/features"
                className="btn btn-secondary"
                style={{
                  padding: '14px 22px',
                  fontSize: '0.96rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <span>Explore features</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Trust Checkmarks */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '20px',
                fontSize: '0.84rem',
                color: 'var(--text-primary)',
                fontWeight: 600,
                marginBottom: '14px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Check size={16} color="var(--primary)" strokeWidth={3} />
                <span>Free Community</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Check size={16} color="var(--primary)" strokeWidth={3} />
                <span>Offline-first</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Check size={16} color="var(--primary)" strokeWidth={3} />
                <span>No ads</span>
              </div>
            </div>

            {/* Disclaimer */}
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Product previews use illustrative INR data, not a linked bank account.
            </p>
          </div>

          {/* Right Column: Device Mockup Card */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              className="animate-float"
              style={{
                background: 'var(--surface-mint)',
                borderRadius: '28px',
                padding: '36px 28px',
                width: '100%',
                maxWidth: '480px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
                boxShadow: 'var(--shadow-card)',
                border: '1px solid var(--border-subtle)'
              }}
            >
              {/* Phone Frame */}
              <div className="phone-mockup-frame">
                <div className="phone-mockup-screen">
                  {/* Phone Header with Camera Punch Hole / Dynamic Island */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                    <span style={{ fontWeight: 700 }}>9:41</span>
                    <div className="phone-dynamic-island">
                      <div className="phone-camera-lens" />
                    </div>
                    <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.68rem', fontWeight: 700 }}>5G</span>
                      <span style={{ fontSize: '0.68rem', fontWeight: 700 }}>100%</span>
                    </div>
                  </div>

                  <div style={{ marginBottom: '14px' }}>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Good morning</div>
                    <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)' }}>Your money, in view.</div>
                  </div>

                  {/* Total Balance Card */}
                  <div
                    style={{
                      background: 'var(--primary)',
                      borderRadius: '16px',
                      padding: '16px',
                      color: '#FFFFFF',
                      marginBottom: '14px'
                    }}
                  >
                    <div style={{ fontSize: '0.68rem', opacity: 0.85, fontWeight: 600, letterSpacing: '0.05em' }}>
                      TOTAL BALANCE · INR
                    </div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 800, margin: '4px 0', fontFamily: 'var(--font-mono)' }}>
                      ₹2,35,000
                    </div>
                    <div style={{ fontSize: '0.7rem', opacity: 0.85 }}>
                      Horizon Global · October 2026
                    </div>
                  </div>

                  {/* Income & Outflow mini cards */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '14px' }}>
                    <div style={{ background: 'var(--surface-subtle)', borderRadius: '12px', padding: '10px', border: '1px solid var(--border-subtle)' }}>
                      <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>Income</div>
                      <div style={{ fontSize: '0.98rem', fontWeight: 800, color: 'var(--primary)', fontFamily: 'var(--font-mono)' }}>₹85,000</div>
                    </div>
                    <div style={{ background: 'var(--surface-subtle)', borderRadius: '12px', padding: '10px', border: '1px solid var(--border-subtle)' }}>
                      <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>Outflow</div>
                      <div style={{ fontSize: '0.98rem', fontWeight: 800, color: 'var(--danger)', fontFamily: 'var(--font-mono)' }}>₹30,000</div>
                    </div>
                  </div>

                  {/* Cashflow Bar Chart Preview */}
                  <div style={{ background: 'var(--surface)', borderRadius: '12px', padding: '10px', border: '1px solid var(--border-subtle)', marginBottom: '12px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.65rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
                      <span>Your cashflow</span>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <span style={{ color: 'var(--primary)' }}>● Income</span>
                        <span style={{ color: 'var(--danger)' }}>● Outflow</span>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', height: '54px', gap: '4px', paddingBottom: '4px' }}>
                      {[
                        { m: 'May', inH: 36, outH: 22 },
                        { m: 'Jun', inH: 48, outH: 24 },
                        { m: 'Jul', inH: 42, outH: 26 },
                        { m: 'Aug', inH: 52, outH: 28 },
                        { m: 'Sep', inH: 46, outH: 25 },
                        { m: 'Oct', inH: 54, outH: 20 },
                      ].map((item, idx) => (
                        <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', flex: 1 }}>
                          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '2px', height: '40px' }}>
                            <div style={{ width: '6px', height: `${item.inH * 0.7}px`, background: 'var(--primary)', borderRadius: '2px' }} />
                            <div style={{ width: '6px', height: `${item.outH * 0.7}px`, background: 'var(--danger)', borderRadius: '2px' }} />
                          </div>
                          <span style={{ fontSize: '0.58rem', color: 'var(--text-muted)' }}>{item.m}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Intentional Spending Tag */}
                  <div style={{ background: 'var(--surface-mint)', borderRadius: '10px', padding: '8px 10px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.68rem', color: 'var(--primary)', fontWeight: 600 }}>
                    <span className="pulse-dot" style={{ width: '6px', height: '6px' }} />
                    <span>80% Intentional spending</span>
                  </div>

                  {/* Mobile Home / Gesture Indicator Bar */}
                  <div className="phone-home-indicator" />
                </div>
              </div>

              {/* Floating Pill Below Phone */}
              <div
                className="phone-floating-badge"
                style={{
                  fontSize: '0.8rem',
                  color: 'var(--text-primary)'
                }}
              >
                <div>New job. Same money story.</div>
                <div style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '0.85rem' }}>
                  ₹1,80,000 carried forward
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
