import HeroSection from '../components/v2/HeroSection';
import InteractiveCurrencyWidget from '../components/v2/InteractiveCurrencyWidget';
import BentoGrid from '../components/v2/BentoGrid';
import InteractiveSentimentDemo from '../components/v2/InteractiveSentimentDemo';
import CareerTimelineSection from '../components/v2/CareerTimelineSection';
import SavingsCalculator from '../components/SavingsCalculator';
import PassbookShowcaseSection from '../components/v2/PassbookShowcaseSection';
import ComparisonMatrix from '../components/v2/ComparisonMatrix';
import TrustSecuritySection from '../components/v2/TrustSecuritySection';
import FaqAccordion from '../components/FaqAccordion';
import FinalCtaBanner from '../components/v2/FinalCtaBanner';
import { getSiteUrl } from '../lib/siteConfig';

const siteUrl = getSiteUrl();

export const metadata = {
  title: 'Money Flow — Personal Ledger & Career Wealth Tracker',
  description: 'One clear ledger for every career, every rupee, and the way spending makes you feel. Automated carry-forward, sentiment tagging, and offline privacy.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Money Flow — Personal Ledger & Career Wealth Tracker',
    description: 'One clear ledger for every career, every rupee, and the way spending makes you feel. Automated carry-forward, sentiment tagging, and offline privacy.',
    url: siteUrl,
    siteName: 'Money Flow',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/assets/download-hero.png',
        width: 1024,
        height: 500,
        alt: 'Money Flow Personal Ledger App',
      },
      {
        url: '/assets/brand-logo.png',
        width: 1024,
        height: 1024,
        alt: 'Money Flow Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Money Flow — Personal Ledger & Career Wealth Tracker',
    description: 'One clear ledger for every career, every rupee, and the way spending makes you feel. Automated carry-forward, sentiment tagging, and offline privacy.',
    images: ['/assets/download-hero.png'],
  },
};

export default function HomePage() {
  const jsonLdHome = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'Money Flow',
        operatingSystem: 'ANDROID',
        applicationCategory: 'FinanceApplication',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'INR',
        },
        description: 'A personal finance ledger for a life that moves. Offline-first, carry-forward career balance, spending sentiment reflection, and cash reconciliation.',
        downloadUrl: `${siteUrl}/download`,
        image: `${siteUrl}/logo.png`,
        softwareVersion: 'v2.4',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Can I use Money Flow without connecting a bank?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Money Flow is a manual personal ledger and does not collect bank credentials. Record income, spending and transfers yourself, then reconcile totals against your real cash and bank balance.',
            },
          },
          {
            '@type': 'Question',
            name: 'What happens to my balance when I change jobs?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'When you transition to a new employer or venture, you create a new chapter ledger. Your previous closing balance automatically carries forward as your opening balance so your multi-year historical wealth remains continuous and connected.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is the Community app really free?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. The core Community personal ledger is 100% free with unlimited entries, categories, carrier ledgers, sentiment tagging and offline capability. There are no ads and no tracking.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I take my data with me?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. You retain complete ownership of your records. You can generate vector PDF passbooks or export your full history to JSON and Excel spreadsheets at any time.',
            },
          },
        ],
      },
    ],
  };

  return (
    <div style={{ paddingBottom: '20px' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHome) }}
      />
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Interactive Currency Switcher Strip */}
      <InteractiveCurrencyWidget />

      {/* 3. 5-Tile Bento Grid */}
      <BentoGrid />

      {/* 4. Spending Sentiment Reflection */}
      <InteractiveSentimentDemo />

      {/* 5. Career Journey Timeline */}
      <CareerTimelineSection />

      {/* 6. Bad Spend Wealth Simulator */}
      <SavingsCalculator />

      {/* 7. Personal Passbook & Statement Showcase */}
      <PassbookShowcaseSection />

      {/* 8. Comparison Matrix */}
      <ComparisonMatrix />

      {/* 9. Trust & Boundaries Strip */}
      <TrustSecuritySection />

      {/* 10. FAQ Accordions */}
      <FaqAccordion />

      {/* 11. Final CTA Banner */}
      <FinalCtaBanner />
    </div>
  );
}
