
import type { Metadata } from 'next';
import Image from 'next/image';
import { Star, Tag, ShoppingCart } from 'lucide-react';
import { products } from './products-data';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Products | Premium IPTV UK',
  description: 'Browse our range of premium IPTV subscription packages, optimized for the UK market. Starting from £14.99.',
  keywords: ['IPTV UK', 'IPTV subscription', 'UK IPTV', 'buy IPTV', 'IPTV packages'],
  alternates: {
    canonical: '/products',
  },
};

const ProductsPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Choose Your Perfect UK IPTV Plan
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Select from our range of high-performance subscription packages. All plans include our full channel list, 4K content, and dedicated UK support.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-orange-400/20 transition-all duration-300 flex flex-col group">
              <Link href={`/products/${product.id}`} className="block cursor-pointer">
                <div className="relative w-full h-48">
                  <Image
                    src={product.image}
                    alt={`Image for ${product.name}`}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                  {product.badge && (
                    <div className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {product.badge}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-white mb-2" style={{ minHeight: '3.5rem' }}>{product.name}</h2>
                  
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(Math.floor(parseFloat(product.rating)))].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                    <span className="text-gray-400 text-sm ml-2">({product.reviews} reviews)</span>
                  </div>

                  <div className="mb-4">
                    <span className="text-3xl font-extrabold text-white">{product.price}</span>
                    {product.oldPrice && (
                      <span className="text-lg text-gray-500 line-through ml-2">{product.oldPrice}</span>
                    )}
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-6" style={{ minHeight: '5rem' }}>{product.shortDescription}</p>
                </div>
              </Link>
              <div className="p-6 pt-0 mt-auto">
                 <a 
                  href={`https://wa.me/447868197528?text=Hello,%20I%20would%20like%20to%20purchase%20the%20${encodeURIComponent(product.name)}%20for%20${product.price}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center rounded-lg bg-orange-500 px-4 py-3 text-base font-bold text-white shadow-sm transition-transform duration-200 hover:scale-105 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Buy Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
