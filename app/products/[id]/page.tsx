
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { products as allProducts } from '../products-data';
import type { Metadata } from 'next';
import { Star } from 'lucide-react';
import Link from 'next/link';


export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const product = allProducts.find(p => p.id === params.id);

  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The requested product could not be found.',
    };
  }

  return {
    title: product.metaTitle,
    description: product.metaDescription,
    alternates: {
      canonical: `/products/${product.id}`,
    },
    openGraph: {
        title: product.metaTitle,
        description: product.metaDescription,
        images: [
            {
                url: product.image,
                width: 1200,
                height: 630,
                alt: product.name,
            },
        ],
        type: 'website',
    }
  };
}

export async function generateStaticParams() {
  return allProducts.map((product) => ({
    id: product.id,
  }));
}

const ProductPage = ({ params }: { params: { id: string } }) => {
  const product = allProducts.find(p => p.id === params.id);

  if (!product) {
    notFound();
  }

  const whatsappLink = `https://wa.me/447868197528?text=Hello, I'm interested in the ${encodeURIComponent(product.name)} (${product.price}).`;


  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="flow-root">
          <div className="lg:float-left lg:w-2/5 lg:pr-12 mb-4">
            <div className="relative aspect-square w-full max-w-md mx-auto">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover rounded-lg shadow-2xl"
                priority
              />
              {product.badge && (
                <div className="absolute top-4 left-4 bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {product.badge}
                </div>
              )}
            </div>
          </div>
          
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">{product.name}</h1>
            
            <div className="mt-4 flex items-center">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="ml-2 text-sm text-gray-300">({product.reviews} reviews)</p>
            </div>

            <p className="mt-4 text-gray-300">{product.shortDescription}</p>

            <div className="mt-6">
              <span className="text-4xl font-bold text-orange-400">{product.price}</span>
              {product.oldPrice && (
                <span className="ml-3 text-xl text-gray-500 line-through">{product.oldPrice}</span>
              )}
            </div>

            <div className="mt-8">
              <Link
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center max-w-xs px-8 py-4 text-lg font-bold text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 focus:ring-offset-gray-900 transition-colors duration-300"
              >
                Order Now on WhatsApp
              </Link>
            </div>

            <div className="mt-10 prose prose-invert max-w-none text-gray-300">
                <h2 className="text-xl font-bold text-white mb-4">Why Choose {product.name}?</h2>
                <div dangerouslySetInnerHTML={{ __html: product.longDescription }} />

                {product.seoNotice && (
                    <div className="mt-6 p-4 bg-gray-800 rounded-lg border border-orange-500/50">
                        <p className="text-sm italic text-gray-400">{product.seoNotice}</p>
                    </div>
                )}
                
                <div className="mt-8 text-gray-300" dangerouslySetInnerHTML={{ __html: product.seoText }} />
            </div>
          </div>
        </div>

      
        <div className="mt-16 lg:mt-24">
            <div className="prose prose-invert max-w-none text-gray-300">
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white text-center">{product.seoHeading}</h2>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="bg-gray-800 p-6 rounded-lg">
                        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-orange-500 text-white font-bold text-xl mx-auto mb-4">1</div>
                        <div dangerouslySetInnerHTML={{ __html: product.step1 }} />
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg">
                        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-orange-500 text-white font-bold text-xl mx-auto mb-4">2</div>
                        <div dangerouslySetInnerHTML={{ __html: product.step2 }} />
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg">
                        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-orange-500 text-white font-bold text-xl mx-auto mb-4">3</div>
                        <div dangerouslySetInnerHTML={{ __html: product.step3 }} />
                    </div>
                </div>
            </div>
        </div>

      </main>
    </div>
  );
};

export default ProductPage;
