import { asap } from '@/assets/fonts';
import type { Metadata } from 'next';
import '@/styles/core.scss';

export const metadata: Metadata = {
  title: 'Firestore RealTime App',
  description: 'Firestore RealTime App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${asap.variable} font-asap`}>{children}</body>
    </html>
  );
}
