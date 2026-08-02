import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Tv, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import Header from './components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Premium IPTV UK',
  description: "The UK's #1 Premium IPTV Service - 4K & Ultra HD",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

const Footer = () => (
    <footer className="w-full bg-gray-900 border-t border-gray-800 py-12">
        <div className="container mx-auto px-4 md:px-6 text-center text-gray-400">
            <div className="flex flex-col items-center space-y-4">
                 <div className="flex items-center space-x-2">
                    <Tv className="h-6 w-6 text-orange-500" />
                    <span className="text-lg font-bold text-white">Premium IPTV</span>
                </div>
                 <div className="text-sm space-x-6">
                    <Link href="/privacy-policy" className="hover:text-orange-400">Privacy Policy</Link>
                    <Link href="/terms-of-service" className="hover:text-orange-400">Terms of Service</Link>
                </div>
                <p className="max-w-2xl text-xs">
                    Disclaimer: We are a reseller and are not affiliated with or endorsed by any of the third-party brands, channels, or applications mentioned. Trademarks are the property of their respective owners. The use of any third-party brand name or logo is for identification purposes only.
                </p>
                <p className="text-xs">&copy; {new Date().getFullYear()} Premium IPTV UK. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
)

const FloatingWhatsAppButton = () => (
  <a
    href="https://wa.me/447868197528?text=Hello,%20I%20am%20interested%20in%20purchasing%20an%20IPTV%20subscription.%20Could%20you%20please%20assist%20me?"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform duration-200 hover:scale-110"
    aria-label="Contact us on WhatsApp"
  >
    <MessageCircle className="h-8 w-8" />
  </a>
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
