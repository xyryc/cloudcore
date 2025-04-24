'use client';

import Image from 'next/image';
import PlaceOrderForm from './PlaceOrderForm';
import { Product } from '@/types';

export default function ProductClient({ product }: { product: Product | null }) {
    if (!product) {
        return <div className="p-6 text-center text-red-500">Product not found.</div>;
    }

    const imageUrl = `https://admin.refabry.com/storage/product/${product.image}`;

    return (
        <div className="p-6 max-w-xl mx-auto">
            <Image
                src={imageUrl}
                alt={product.name}
                width={600}
                height={400}
                className="w-full h-64 object-cover mb-4 rounded"
            />
            <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
            <p className="text-gray-700 mb-2">Price: {product.price}৳</p>
            <p className="text-gray-600">{product.description}</p>

            <PlaceOrderForm product={product} />
        </div>
    );
}
