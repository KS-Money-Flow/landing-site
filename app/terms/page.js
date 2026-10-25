import TermsContent from '../../components/v2/TermsContent';

export const metadata = {
  title: 'Terms of Service',
  description: 'Review the terms and conditions for using the Money Flow Community app and planned Pro features. Clear boundaries, user ownership, and service guidelines.',
  alternates: {
    canonical: '/terms',
  },
  openGraph: {
    title: 'Terms of Service — Money Flow',
    description: 'Review the terms and conditions for using the Money Flow Community app and planned Pro features. Clear boundaries, user ownership, and service guidelines.',
    url: '/terms',
    images: [
      {
        url: '/assets/download-hero.png',
        width: 1024,
        height: 500,
        alt: 'Money Flow Terms of Service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service — Money Flow',
    description: 'Review the terms and conditions for using the Money Flow Community app and planned Pro features.',
    images: ['/assets/download-hero.png'],
  },
};

export default function TermsPage() {
  return <TermsContent />;
}
