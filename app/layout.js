import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ThemeToggle from '../components/ThemeToggle';

export const metadata = {
  metadataBase: new URL('https://moneyflow.app'),
  title: 'Money Flow — Ultimate Wealth, Career Ledgers & Spending Sentiment Tracker',
  description: 'Track lifetime inflows, carry forward workplace balances across career transitions, eliminate bad spending with emotional sentiment tagging, and reconcile physical cash with 100% precision.',
  keywords: [
    'money tracker',
    'wealth manager',
    'career ledger',
    'carry forward balance',
    'spending sentiment',
    'personal finance android app',
    'money flow app'
  ],
  authors: [{ name: 'Money Flow Team' }],
  openGraph: {
    title: 'Money Flow — Next-Gen Personal Wealth & Multi-Company Tracker',
    description: 'Master your capital. Automated career transition carry-forward, sentiment spending analysis, and cash reconciliation.',
    url: 'https://moneyflow.app',
    siteName: 'Money Flow',
    images: [
      {
        url: '/assets/icon.png',
        width: 512,
        height: 512,
        alt: 'Money Flow App'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  icons: {
    icon: '/assets/favicon.png',
    apple: '/assets/icon.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('theme');
                  var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var theme = stored || (systemDark ? 'dark' : 'light');
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `
          }}
        />
      </head>
      <body>
        <Navbar />
        <main style={{ paddingTop: '76px', minHeight: 'calc(100vh - 76px)' }}>
          {children}
        </main>
        <Footer />
        <ThemeToggle />
      </body>
    </html>
  );
}
