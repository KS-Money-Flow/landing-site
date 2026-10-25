import PrivacyContent from '../../components/v2/PrivacyContent';

export const metadata = {
  title: 'Privacy Policy',
  description: 'Read how Money Flow handles information for personal finance ledgers, spending reflection, and optional connected services. Plain language and transparent data practices.',
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    title: 'Privacy Policy — Money Flow',
    description: 'Read how Money Flow handles information for personal finance ledgers, spending reflection, and optional connected services.',
    url: '/privacy',
    images: [
      {
        url: '/assets/download-hero.png',
        width: 1024,
        height: 500,
        alt: 'Money Flow Privacy Policy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy — Money Flow',
    description: 'Read how Money Flow handles information for personal finance ledgers, spending reflection, and optional connected services.',
    images: ['/assets/download-hero.png'],
  },
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
