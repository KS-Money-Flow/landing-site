'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { submitSupportTicket } from '../../lib/api';

export default function ContactMessageForm() {
  const [topic, setTopic] = useState('Setup & general support');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const topics = ['Setup & general support', 'Bug report', 'Feature idea', 'Privacy request'];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || trimmedName.length < 2) {
      setErrorMsg('Please enter your name (at least 2 characters).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    if (!trimmedMessage || trimmedMessage.length < 10) {
      setErrorMsg('Please enter a message with at least 10 characters.');
      return;
    }

    setSubmitting(true);
    try {
      const fullTitle = `[${topic}] Inquiry from ${trimmedName}`;
      const res = await submitSupportTicket({
        title: fullTitle,
        message: trimmedMessage,
        email: trimmedEmail,
        name: trimmedName,
      });

      setSubmitted(true);
      setSuccessMsg(res?.message || 'Your issue is noted, Support Team will contact you soon!');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setErrorMsg(err.message || 'Failed to send message. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="interactive-card contact-col-7 contact-form-card"
      style={{
        gridColumn: 'span 7',
        background: 'var(--surface)',
        border: '1px solid var(--border-subtle)',
        borderRadius: '20px',
        padding: '40px 36px',
        boxShadow: 'var(--shadow-card)',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', flexWrap: 'wrap', gap: '8px' }}>
        <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-primary)' }}>
          Send a message
        </h2>
        <span style={{ fontSize: '0.72rem', fontWeight: 600, padding: '4px 10px', borderRadius: '6px', background: 'var(--surface-subtle)', color: 'var(--text-muted)' }}>
          All fields required
        </span>
      </div>

      <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>
        Choose a topic so your question reaches the right context.
      </p>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {/* Name & Email 2 Cols */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="contact-form-row">
          <div>
            <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '6px' }}>
              Name
            </label>
            <input
              type="text"
              required
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="form-input"
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '6px' }}>
              Email address
            </label>
            <input
              type="email"
              required
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="form-input"
            />
          </div>
        </div>

        {/* Topic Dropdown & Quick Chips */}
        <div>
          <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '6px' }}>
            Topic
          </label>
          <select
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="form-input"
            style={{ marginBottom: '10px', cursor: 'pointer' }}
          >
            {topics.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {topics.slice(1).map((t) => (
              <button
                type="button"
                key={t}
                onClick={() => setTopic(t)}
                style={{
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  border: '1px solid',
                  borderColor: topic === t ? 'var(--primary)' : 'var(--border-subtle)',
                  background: topic === t ? 'var(--surface-mint)' : 'var(--surface-subtle)',
                  color: topic === t ? 'var(--primary)' : 'var(--text-secondary)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Message Textarea */}
        <div>
          <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '6px' }}>
            Message
          </label>
          <textarea
            required
            rows={5}
            placeholder="What can we help you with? Include your app version and device if you're reporting a bug."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="form-input"
            style={{ resize: 'vertical' }}
          />
        </div>

        <p style={{ fontSize: '0.76rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
          Your contact details are used to respond to this inquiry. Please don’t send financial records, passwords or full account identifiers. Read the <Link href="/privacy" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Privacy policy</Link> for details.
        </p>

        {/* Error Banner */}
        {errorMsg && (
          <div
            style={{
              background: 'var(--surface-rose)',
              border: '1px solid rgba(201, 61, 98, 0.3)',
              borderRadius: '12px',
              padding: '14px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              color: 'var(--danger)',
              fontSize: '0.88rem',
            }}
          >
            <AlertCircle size={18} style={{ flexShrink: 0 }} />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={submitting}
            className="btn btn-primary"
            style={{
              padding: '12px 24px',
              fontSize: '0.95rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              opacity: submitting ? 0.75 : 1,
              cursor: submitting ? 'not-allowed' : 'pointer',
            }}
          >
            {submitting ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                <span>Sending message...</span>
              </>
            ) : (
              <>
                <span>Send message</span>
                <Send size={16} />
              </>
            )}
          </button>
        </div>

        {/* Success Banner */}
        {submitted && (
          <div
            style={{
              background: 'var(--surface-mint)',
              borderRadius: '12px',
              padding: '16px 18px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px',
              marginTop: '8px',
              border: '1px solid var(--border-subtle)',
            }}
          >
            <CheckCircle2 size={20} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--primary)' }}>
                {successMsg || 'Message received. Thank you for reaching out!'}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                Our support team has received your ticket and will respond via email.
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
