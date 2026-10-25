import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  metadataBase: new URL('https://moneyflow.app'),
  title: {
    default: 'Money Flow — Personal Ledger & Career Wealth Tracker',
    template: '%s | Money Flow',
  },
  description: 'One clear ledger for every career, every rupee, and the way spending makes you feel. Automated carry-forward, sentiment tagging, and offline privacy.',
  keywords: [
    'money tracker',
    'wealth manager',
    'career ledger',
    'carry forward balance',
    'spending sentiment',
    'personal finance android app',
    'money flow app',
    'offline personal finance',
    'cashflow tracker'
  ],
  authors: [{ name: 'Money Flow Team' }],
  creator: 'Money Flow',
  publisher: 'Money Flow',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Money Flow — Personal Ledger & Career Wealth Tracker',
    description: 'One clear ledger for every career, every rupee, and the way spending makes you feel. Automated carry-forward, sentiment tagging, and offline privacy.',
    url: 'https://moneyflow.app',
    siteName: 'Money Flow',
    images: [
      {
        url: '/assets/download-hero.png',
        width: 1024,
        height: 500,
        alt: 'Money Flow — Personal Ledger & Career Wealth Tracker',
      },
      {
        url: '/assets/brand-logo.png',
        width: 1024,
        height: 1024,
        alt: 'Money Flow Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Money Flow — Personal Ledger & Career Wealth Tracker',
    description: 'One clear ledger for every career, every rupee, and the way spending makes you feel. Automated carry-forward, sentiment tagging, and offline privacy.',
    images: ['/assets/download-hero.png'],
    creator: '@moneyflowapp',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.png', type: 'image/png' },
      { url: '/logo.png', type: 'image/png' }
    ],
    shortcut: '/favicon.ico',
    apple: '/icon.png'
  }
};

export default function RootLayout({ children }) {
  const jsonLdOrg = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://moneyflow.app/#organization',
        name: 'Money Flow',
        url: 'https://moneyflow.app',
        logo: {
          '@type': 'ImageObject',
          url: 'https://moneyflow.app/logo.png',
          width: 512,
          height: 512
        },
        sameAs: [
          'https://play.google.com/store/apps/details?id=com.krishna.moneyflow'
        ]
      },
      {
        '@type': 'WebSite',
        '@id': 'https://moneyflow.app/#website',
        url: 'https://moneyflow.app',
        name: 'Money Flow',
        description: 'Personal Ledger & Career Wealth Tracker for Android.',
        publisher: {
          '@id': 'https://moneyflow.app/#organization'
        }
      }
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){
              try {
                var stored = localStorage.getItem('mf_theme');
                var systemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
                var theme = stored ? stored : (systemDark ? 'dark' : 'light');
                document.documentElement.setAttribute('data-theme', theme);
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch(e) {}
            })();`
          }}
        />
      </head>
      <body>
        <Navbar />
        <main style={{ paddingTop: '84px', minHeight: 'calc(100vh - 84px)' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
