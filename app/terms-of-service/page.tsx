
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Premium IPTV UK',
  description: 'Terms of Service for Premium IPTV UK.',
};

const TermsOfServicePage = () => {
  return (
    <div className="bg-background text-text-primary min-h-screen">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-primary mb-8">Terms of Service</h1>
        <div className="prose prose-invert text-text-secondary">
          <p>Last updated: July 31, 2026</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-text-primary">1. Agreement to Terms</h2>
          <p>
            By using our service, you agree to be bound by these Terms of Service. If you do not agree to these Terms, do not use the service.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-text-primary">2. Service Description</h2>
          <p>
            Premium IPTV UK provides a subscription-based IPTV service that allows users to stream television channels over the internet.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-text-primary">3. Subscription and Payment</h2>
          <p>
            You may be required to purchase a subscription to access the service. You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Site.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-text-primary">4. User Conduct</h2>
          <p>
            You may not use the service for any illegal or unauthorized purpose. You agree to comply with all laws, rules, and regulations applicable to your use of the service.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-text-primary">5. Disclaimer</h2>
          <p>
            Our service is provided "as is" without any warranties. We do not guarantee that the service will be uninterrupted or error-free.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-text-primary">6. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at: contact@premium-iptv-uk.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
