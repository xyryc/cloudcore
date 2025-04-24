import { use } from 'react';
import { fetchAllProducts } from '@/lib/api';
import ProductClient from './ProductClient';

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const numericId = Number(id);

    const allProducts = use(fetchAllProducts());
    const product = allProducts?.find((item) => item.id === numericId);

    return <ProductClient product={product || null} />;
}
