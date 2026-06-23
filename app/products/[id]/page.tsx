import { notFound } from 'next/navigation';
import { getProductById } from '../../../lib/products';
import { ProductLanding } from '@/components/product-landing';

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  // Map the product to ensure it matches the component's expected interface if necessary
  // (In this case, lib/products.ts already has the correct fields)

  return <ProductLanding product={product} />;
}

