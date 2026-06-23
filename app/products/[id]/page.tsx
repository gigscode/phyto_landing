import { redirect } from 'next/navigation';
import { getProductById } from '../../../lib/products';

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProductById(id);

  if (product) {
    redirect(`/${product.slug}`);
  }

  redirect('/');
}


