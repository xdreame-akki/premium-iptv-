
import { MetadataRoute } from 'next';
import { products } from './products/products-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const productEntries: MetadataRoute.Sitemap = products.map(({ id }) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/products/${id}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/products`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/privacy-policy`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/terms-of-service`,
      lastModified: new Date(),
    },
    ...productEntries,
  ];
}
