import type { Metadata } from 'next';
import { Rethink_Sans } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RegisterModal from '@/components/RegisterModal';

const rethinkSans = Rethink_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-rethink-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'EmergeAI Risk Radar',
  description: 'AI-powered software risk assessment tool for release pipelines.',
  icons: {
    icon: '/images/favicon.png',
    apple: '/images/favicon.png',
  },
  verification: {
    google: 'kGrVdPWrQkcTe_tpwSTdqQyWdxi04ImPCmqGsJUmx3U',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={rethinkSans.variable}>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-7JGSPCK1YR"
        strategy="beforeInteractive"
      />
      <Script id="google-analytics" strategy="beforeInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-7JGSPCK1YR');`}
      </Script>
      <body className={rethinkSans.className}>
        <Header />
        <main id="content" className="site-main">{children}</main>
        <Footer />
        <RegisterModal />
      </body>
    </html>
  );
}
