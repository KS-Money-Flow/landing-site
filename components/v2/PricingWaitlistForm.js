'use client';

import { useState } from 'react';
import { Mail, Loader2, AlertCircle } from 'lucide-react';
import { submitSupportTicket } from '../../lib/api';

export default function PricingWaitlistForm() {
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [waitlistJoined, setWaitlistJoined] = useState(false);
  const [waitlistSubmitting, setWaitlistSubmitting] = useState(false);
  const [waitlistError, setWaitlistError] = useState('');

  const handleWaitlist = async (e) => {
    e.preventDefault();
    setWaitlistError('');

    const trimmedEmail = waitlistEmail.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      setWaitlistError('Please provide a valid email address.');
      return;
    }

    const derivedName = trimmedEmail.split('@')[0];
    const staticTitle = '[Waitlist] Pro Lifetime Premium Access';
    const staticMessage = `Visitor requested early access notification and waitlist enrollment for Pro Lifetime features (Email: ${trimmedEmail}).`;

    setWaitlistSubmitting(true);
    try {
      await submitSupportTicket({
        title: staticTitle,
        message: staticMessage,
        email: trimmedEmail,
        name: derivedName,
      });
      setWaitlistJoined(true);
      setWaitlistEmail('');
    } catch (err) {
      setWaitlistError(err.message || 'Failed to join waitlist. Please try again.');
    } finally {
      setWaitlistSubmitting(false);
    }
  };

  if (waitlistJoined) {
    return (
      <div
        style={{
          background: 'var(--surface)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '10px',
          padding: '14px',
          textAlign: 'center',
          fontWeight: 700,
          color: 'var(--investment)',
          marginBottom: '32px',
        }}
      >
        ✓ You’re on the waitlist! We’ll notify you.
      </div>
    );
  }

  return (
    <div style={{ marginBottom: '32px' }}>
      <form onSubmit={handleWaitlist} style={{ display: 'flex', gap: '8px' }}>
        <input
          type="email"
          required
          disabled={waitlistSubmitting}
          placeholder="your@email.com"
          value={waitlistEmail}
          onChange={(e) => setWaitlistEmail(e.target.value)}
          className="form-input"
          style={{ fontSize: '0.88rem' }}
        />
        <button
          type="submit"
          disabled={waitlistSubmitting}
          className="btn btn-secondary"
          style={{
            whiteSpace: 'nowrap',
            padding: '12px 18px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            opacity: waitlistSubmitting ? 0.75 : 1,
            cursor: waitlistSubmitting ? 'not-allowed' : 'pointer',
          }}
        >
          {waitlistSubmitting ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              <span>Joining...</span>
            </>
          ) : (
            <>
              <Mail size={16} />
              <span>Join waitlist</span>
            </>
          )}
        </button>
      </form>
      {waitlistError && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#C93D62', fontSize: '0.8rem', marginTop: '8px' }}>
          <AlertCircle size={14} />
          <span>{waitlistError}</span>
        </div>
      )}
    </div>
  );
}
