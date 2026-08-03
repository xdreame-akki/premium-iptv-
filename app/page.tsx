import type { Metadata } from 'next';
import Image from 'next/image';
import {
  Tv,
  Film,
  Zap,
  ShieldCheck,
  Smartphone,
  Laptop,
  Globe,
  PlusCircle,
  Calendar,
  Sparkles,
  ChevronDown,
  MessageCircle,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best IPTV UK | Premium IPTV Subscription UK & Providers',
  description:
    'Searching for the best IPTV UK? Get a premium IPTV subscription UK with 18,000+ channels. As one of the UK best IPTV providers, enjoy 4K sports. IPTV subscribe today!',
  alternates: {
    canonical: 'https://premium-iptv-woad.vercel.app/', // Replace with your actual domain
  },
  openGraph: {
    title: 'The Best IPTV UK Subscription | Premium UK IPTV Providers',
    description:
      'Join the #1 IPTV providers in the UK. Our IPTV subscription UK offers buffer-free 4K streaming, instant access to sports, PPV, and thousands of channels. Perfect for Firestick, Smartone IPTV, and all devices.',
    url: 'https://premium-iptv-woad.vercel.app/', // Replace with your actual domain
    siteName: 'Premium IPTV UK',
    images: [
      {
        url: '/og-image.jpg', // Replace with your actual OG image path
        width: 1200,
        height: 630,
        alt: 'Best IPTV UK Service',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  verification: {
    google: 'lAulvS6O3UO1brZqxvSjfuF8ogFcp1TTjjk29lsUoBM',
  },
};

const JsonLdSchema = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'Premium IPTV Subscription UK',
        description: 'High-performance IPTV services for the UK market with 4K/UHD streaming, 18,000+ channels, and full sports coverage from the UK best IPTV providers.',
        brand: {
          '@type': 'Brand',
          name: 'Premium IPTV UK',
        },
        sku: 'IPTV-UK-12M',
        mpn: 'IPTV-UK-12M',
        offers: {
          '@type': 'Offer',
          url: 'https://premium-iptv-woad.vercel.app/#pricing', // Replace with your actual domain
          priceCurrency: 'GBP',
          price: '69.99',
          priceValidUntil: '2026-12-31',
          availability: 'https://schema.org/InStock',
          seller: {
            '@type': 'Organization',
            name: 'Premium IPTV UK',
          },
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '247',
        },
        review: [
            {
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": "John D."
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5"
              },
              "reviewBody": "Absolutely flawless IPTV services. The 4K quality is stunning and there's never any buffering, even during big football matches. Highly recommended as the best IPTV UK!"
            }
        ]
      }),
    }}
  />
);

const FaqJsonLdSchema = () => (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Do I need a VPN to use this IPTV subscription UK?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "While our IPTV providers network is secure, we highly recommend using a VPN in the UK. It ensures your streaming activity remains private from your ISP and helps bypass any potential ISP-level blocking, guaranteeing uninterrupted access."
                }
              },
              {
                "@type": "Question",
                "name": "Does this IPTV service work on an Amazon Firestick and Smartone IPTV?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, absolutely. Our service is fully compatible with all Amazon Firestick devices and major apps like Smartone IPTV. We provide a simple, step-by-step installation guide to get you set up in minutes."
                }
              },
              {
                "@type": "Question",
                "name": "What UK sports channels are included with the best IPTV UK?",
                "acceptedAnswer": {
                  "@type": "Answer",
                    "text": "We provide comprehensive coverage of UK sports, including all Sky Sports, TNT Sports (formerly BT Sport), Viaplay Sports, and access to major PPV events in boxing and UFC. You won't miss any action."
                }
              },
               {
                "@type": "Question",
                "name": "Can I watch on multiple devices at the same time with my IPTV subscription?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our standard IPTV subscription UK allows for one connection at a time. However, we offer affordable multi-room options if you need to watch on multiple devices simultaneously. Please contact our support for a custom quote."
                }
              }
            ]
        })
      }}
    />
)

const HeroSection = () => (
  <section className="relative w-full py-20 md:py-32 lg:py-40">
    <div className="absolute inset-0 -z-10">
      <Image
        src="/placeholder-hero.webp" // Replace with a high-quality, relevant background image
        alt="Background image of a modern living room with a large TV displaying a vibrant sports match"
        layout="fill"
        objectFit="cover"
        quality={80}
        className="opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-background to-card opacity-50"></div>
    </div>
    <div className="container mx-auto px-4 text-center md:px-6 relative">
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
        The Best IPTV UK Provider for Premium 4K Streaming
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary md:text-xl">
        Get the ultimate IPTV subscription UK. Join the UK best IPTV providers for buffer-free, 99.9% uptime with all premium channels, sports, and PPV events. Ready to subscribeIP TV?
      </p>
      <div className="mt-10">
        <a
          href="#pricing"
          className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-lg font-semibold text-background shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-primary-hover"
        >
          View Subscription Plans
        </a>
      </div>
    </div>
  </section>
);

const FeaturesGrid = () => (
  <section id="features" className="relative w-full py-20 md:py-28">
    <div className="absolute inset-0 -z-10">
      <Image
        src="/FeaturesGrid-image.webp"
        alt="Background image showcasing IPTV features"
        layout="fill"
        objectFit="cover"
        quality={80}
        className="opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-background to-card opacity-50"></div>
    </div>
    <div className="container mx-auto px-4 md:px-6 relative">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Top IPTV Services for a Perfect Stream</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-text-secondary">
          Our IPTV providers network is packed with features designed for the ultimate UK viewing experience.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {/* Changed bg-background to bg-background/70 and added backdrop-blur-sm */}
        <div className="flex flex-col items-center text-center p-6 border border-card-border/50 rounded-lg bg-background/70 backdrop-blur-sm">
          <Globe className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">18,000+ Channels</h3>
          <p className="text-text-secondary">Worldwide content including the UK, USA, Canada, and more in stunning HD & 4K.</p>
        </div>
        <div className="flex flex-col items-center text-center p-6 border border-card-border/50 rounded-lg bg-background/70 backdrop-blur-sm">
          <Film className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Full UK Sports & PPV</h3>
          <p className="text-text-secondary">Never miss a match. Includes all 3pm kick-offs, Sky, TNT Sports, and major PPV events.</p>
        </div>
        <div className="flex flex-col items-center text-center p-6 border border-card-border/50 rounded-lg bg-background/70 backdrop-blur-sm">
          <Calendar className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">EPG TV Guide</h3>
          <p className="text-text-secondary">Modern, easy-to-use Electronic Programme Guide so you always know what's on.</p>
        </div>
        <div className="flex flex-col items-center text-center p-6 border border-card-border/50 rounded-lg bg-background/70 backdrop-blur-sm">
          <Zap className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Anti-Buffer Technology</h3>
          <p className="text-text-secondary">Our powerful servers ensure a smooth, buffer-free experience, even on match days.</p>
        </div>
      </div>
    </div>
  </section>
);


const PricingTable = () => (
  <section id="pricing" className="w-full py-20 md:py-28">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">IPTV Subscribe: Choose Your Plan</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-text-secondary">Simple, transparent pricing from the UK best IPTV providers. Get instant access after payment.</p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:items-start">
        {/* Pricing Card 1 */}
        <div className="flex flex-col rounded-lg border border-card-border bg-card p-8">
            <h3 className="text-2xl font-semibold">1 Month</h3>
            <p className="mt-4 text-4xl font-bold">£14.99</p>
            <p className="mt-1 text-sm text-text-secondary">Billed monthly</p>
            <ul className="mt-6 space-y-4 text-text-secondary">
                <li className="flex items-center"><PlusCircle className="h-5 w-5 text-primary mr-3" /> 1 Connection</li>
                <li className="flex items-center"><PlusCircle className="h-5 w-5 text-primary mr-3" /> 18,000+ Channels</li>
                <li className="flex items-center"><PlusCircle className="h-5 w-5 text-primary mr-3" /> 4K/UHD Quality</li>
                <li className="flex items-center"><PlusCircle className="h-5 w-5 text-primary mr-3" /> 24/7 Support</li>
            </ul>
             <a href="https://wa.me/447868197528?text=Hello,%20I%20would%20like%20to%20subscribe%20to%20the%201%20Month%20IPTV%20plan." target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 font-medium text-background shadow transition-colors hover:bg-primary-hover">
                IPTV Subscribe
            </a>
        </div>
        
        {/* Pricing Card 2 - Best Value */}
        <div className="relative flex flex-col rounded-lg border-2 border-primary bg-card p-8 shadow-2xl shadow-primary/20">
            <div className="absolute top-0 -translate-y-1/2 rounded-full bg-primary px-4 py-1 text-sm font-semibold text-background">
                Best Value
            </div>
            <h3 className="text-2xl font-semibold">12 Months</h3>
            <p className="mt-4 text-4xl font-bold">£39.99</p>
            <p className="mt-1 text-sm text-text-secondary">Equals just £5.83/month</p>
             <ul className="mt-6 space-y-4 text-text-secondary">
                <li className="flex items-center"><Sparkles className="h-5 w-5 text-primary mr-3" /> 1 Connection</li>
                <li className="flex items-center"><Sparkles className="h-5 w-5 text-primary mr-3" /> 18,000+ Channels</li>
                <li className="flex items-center"><Sparkles className="h-5 w-5 text-primary mr-3" /> 4K/UHD & VOD</li>
                <li className="flex items-center"><Sparkles className="h-5 w-5 text-primary mr-3" /> Priority 24/7 Support</li>
            </ul>
            <a href="https://wa.me/447868197528?text=Hello,%20I%20would%20like%20to%20subscribe%20to%20the%2012%20Months%20(Best%20Value)%20IPTV%20plan." target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 font-medium text-background shadow-lg transition-transform duration-200 hover:scale-105">
                IPTV Subscribe
            </a>
        </div>
        
        {/* Pricing Card 3 */}
         <div className="flex flex-col rounded-lg border border-card-border bg-card p-8">
            <h3 className="text-2xl font-semibold">6 Months</h3>
            <p className="mt-4 text-4xl font-bold">£29.99</p>
            <p className="mt-1 text-sm text-text-secondary">Equals £6.66/month</p>
            <ul className="mt-6 space-y-4 text-text-secondary">
                <li className="flex items-center"><PlusCircle className="h-5 w-5 text-primary mr-3" /> 1 Connection</li>
                <li className="flex items-center"><PlusCircle className="h-5 w-5 text-primary mr-3" /> 18,000+ Channels</li>
                <li className="flex items-center"><PlusCircle className="h-5 w-5 text-primary mr-3" /> 4K/UHD Quality</li>
                <li className="flex items-center"><PlusCircle className="h-5 w-5 text-primary mr-3" /> 24/7 Support</li>
            </ul>
            <a href="https://wa.me/447868197528?text=Hello,%20I%20would%20like%20to%20subscribe%20to%20the%206%20Months%20IPTV%20plan." target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 font-medium text-background shadow transition-colors hover:bg-primary-hover">
                IPTV Subscribe
            </a>
        </div>
      </div>
    </div>
  </section>
);


const DeviceCompatibility = () => (
    <section id="devices" className="w-full bg-card py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
             <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Works on All Your Devices</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-text-secondary">Our IPTV subscription UK works perfectly on Firestick, Smart TV, Android, iOS, Smartone IPTV, and more.
                    Watch at home or on the go. Our service is compatible with all major devices and platforms.
                </p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6 text-text-secondary">
                <div className="flex flex-col items-center space-y-3">
                    <Image src="/icons/smart-tv.svg" alt="Smart TV Icon" width={64} height={64} />
                    <span className="font-semibold">Smart TV</span>
                </div>
                <div className="flex flex-col items-center space-y-3">
                    <Image src="/icons/firestick.svg" alt="Amazon Firestick Icon" width={64} height={64} />
                    <span className="font-semibold">Amazon Firestick</span>
                </div>
                <div className="flex flex-col items-center space-y-3">
                    <Image src="/icons/android.svg" alt="Android Icon" width={64} height={64} />
                    <span className="font-semibold">Android</span>
                </div>
                 <div className="flex flex-col items-center space-y-3">
                    <Image src="/icons/apple.svg" alt="iOS Icon" width={64} height={64} />
                    <span className="font-semibold">iOS</span>
                </div>
                <div className="flex flex-col items-center space-y-3">
                    <Image src="/icons/windows.svg" alt="Windows Icon" width={64} height={64} />
                    <span className="font-semibold">Windows</span>
                </div>
                 <div className="flex flex-col items-center space-y-3">
                    <Image src="/icons/mag-box.svg" alt="MAG Box Icon" width={64} height={64} />
                    <span className="font-semibold">MAG Box</span>
                </div>
            </div>
        </div>
    </section>
);


const FAQSection = () => (
  <section id="faq" className="w-full py-20 md:py-28">
    <div className="container mx-auto max-w-4xl px-4 md:px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
        <p className="mt-4 text-lg text-text-secondary">Everything you need to know about our UK IPTV subscription service.
          Your questions, answered by the UK best IPTV providers.
        </p>
      </div>
      <div className="space-y-6">
        <details className="group rounded-lg bg-card p-6 border border-card-border">
          <summary className="flex cursor-pointer items-center justify-between text-lg font-medium text-text-primary group-open:text-primary">
            Do I need a VPN to use this IPTV subscription UK?
            <ChevronDown className="h-6 w-6 transition-transform group-open:rotate-180" />
          </summary>
          <p className="mt-4 text-text-secondary">
            While our IPTV providers network is secure, we highly recommend using a VPN in the UK. It ensures your streaming activity remains private from your ISP and helps bypass any potential ISP-level blocking, guaranteeing uninterrupted access.
          </p>
        </details>
        <details className="group rounded-lg bg-card p-6 border border-card-border">
          <summary className="flex cursor-pointer items-center justify-between text-lg font-medium text-text-primary group-open:text-primary">
            Does this IPTV service work on an Amazon Firestick and Smartone IPTV?
            <ChevronDown className="h-6 w-6 transition-transform group-open:rotate-180" />
          </summary>
          <p className="mt-4 text-text-secondary">
            Yes, absolutely. Our service is fully compatible with all Amazon Firestick devices and major apps like Smartone IPTV. We provide a simple, step-by-step installation guide to get you set up in minutes.
          </p>
        </details>
         <details className="group rounded-lg bg-card p-6 border border-card-border">
          <summary className="flex cursor-pointer items-center justify-between text-lg font-medium text-text-primary group-open:text-primary">
            What UK sports channels are included with the best IPTV UK?
            <ChevronDown className="h-6 w-6 transition-transform group-open:rotate-180" />
          </summary>
          <p className="mt-4 text-text-secondary">
            We provide comprehensive coverage of UK sports, including all Sky Sports, TNT Sports (formerly BT Sport), Viaplay Sports, and access to major PPV events in boxing and UFC. You won't miss any action.
          </p>
        </details>
         <details className="group rounded-lg bg-card p-6 border border-card-border">
          <summary className="flex cursor-pointer items-center justify-between text-lg font-medium text-text-primary group-open:text-primary">
            Can I watch on multiple devices at the same time with my IPTV subscription?
            <ChevronDown className="h-6 w-6 transition-transform group-open:rotate-180" />
          </summary>
          <p className="mt-4 text-text-secondary">
            Our standard IPTV subscription UK allows for one connection at a time. However, we offer affordable multi-room options if you need to watch on multiple devices simultaneously. Please contact our support for a custom quote.
          </p>
        </details>
      </div>
    </div>
  </section>
);

export default function HomePage() {
  return (
    <>
      <JsonLdSchema />
      <FaqJsonLdSchema />
      <HeroSection />
      <FeaturesGrid />
      <PricingTable />
      <DeviceCompatibility />
      <FAQSection />
    </>
  );
}