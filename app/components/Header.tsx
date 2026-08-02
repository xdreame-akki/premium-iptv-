'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Tv, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/#features', label: 'Features' },
    { href: '/#pricing', label: 'Pricing' },
    { href: '/products', label: 'All Products' },
    { href: '/#devices', label: 'Devices' },
    { href: '/#faq', label: 'FAQ' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-gray-900/80 backdrop-blur-sm border-b border-gray-700">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
          <Tv className="h-8 w-8 text-orange-500" />
          <span className="text-xl font-bold text-white">Premium IPTV</span>
        </Link>
        <nav className="hidden items-center space-x-6 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-gray-300 transition-colors hover:text-orange-400">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        <Link
          href="/#pricing"
          className="hidden h-10 items-center justify-center rounded-md bg-orange-500 px-6 text-sm font-medium text-white shadow transition-colors hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:inline-flex"
        >
          Get Started
        </Link>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center space-y-4 py-4 border-t border-gray-700">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-lg font-medium text-gray-300 transition-colors hover:text-orange-400" onClick={() => setIsMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link href="/#pricing" className="inline-flex h-10 items-center justify-center rounded-md bg-orange-500 px-6 text-sm font-medium text-white shadow transition-colors hover:bg-orange-600" onClick={() => setIsMenuOpen(false)}>
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;