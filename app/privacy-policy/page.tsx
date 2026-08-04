
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy for Premium IPTV UK Service - Your Data Rights',
  description: 'Understand our commitment to your privacy. This policy details how Premium IPTV UK collects, uses, and protects your personal data when you use our services in the UK.',
  alternates: {
    canonical: 'https://premium-iptv-woad.vercel.app/privacy-policy',
  },
};

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-background text-text-primary min-h-screen">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-primary mb-8">Privacy Policy</h1>
        <div className="prose prose-invert text-text-secondary">
          <p>Last updated: July 31, 2026</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-text-primary">1. Introduction</h2>
          <p>
            Welcome to Premium IPTV UK. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-text-primary">2. Information We Collect</h2>
          <p>
            We may collect information about you in a variety of ways. The information we may collect on the Site includes:
          </p>
          <ul>
            <li>
              <strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site, such as online chat and message boards.
            </li>
            <li>
              <strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-text-primary">3. Use of Your Information</h2>
          <p>
            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
          </p>
          <ul>
            <li>Create and manage your account.</li>
            <li>Email you regarding your account or order.</li>
            <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
            <li>Improve our website and services.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-text-primary">4. Contact Us</h2>
          <p>
            If you have questions or comments about this Privacy Policy, please contact us at: contact@premium-iptv-uk.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
