'use client';

import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
    ShoppingCart,
    PackageCheck,
    Tag,
    Info,
    Percent,
    Layers
} from 'lucide-react';
import PlaceOrderForm from './PlaceOrderForm';
import { Product } from '@/types';

export default function ProductClient({ product }: { product: Product | null }) {
    if (!product) {
        return <div className="p-6 text-center text-red-500">Product not found.</div>;
    }

    const BASE_URL = process.env.NEXT_PUBLIC_API_BASE;
    const imageUrl = `${BASE_URL}/storage/product/${product.image}`;
    const hasDiscount = product.is_discount && product.discount_amount;
    const finalPrice = hasDiscount
        ? product.price - Number(product.discount_amount)
        : product.price;

    return (
        <div className="p-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Image */}
            <div className="rounded-xl overflow-hidden shadow">
                <Image
                    src={imageUrl}
                    alt={product.name}
                    width={400}
                    height={600}
                    className="w-full h-[600px] object-scale-down2"
                />
            </div>

            {/* Info */}
            <div className="space-y-5">
                <h1 className="text-3xl font-bold capitalize flex items-center gap-2">
                    <Tag className="w-5 h-5 text-primary" />
                    {product.name}
                </h1>

                <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="flex items-center gap-1">
                        <Layers className="w-4 h-4" /> {product.category.name}
                    </Badge>
                    <Badge variant="outline">Code: {product.code}</Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                        <PackageCheck className="w-4 h-4 text-green-600" />
                        {product.stock > 0 ? `In Stock (${product.stock})` : 'Out of Stock'}
                    </Badge>
                </div>

                <div className="text-2xl font-semibold">
                    {hasDiscount ? (
                        <>
                            <span className="line-through text-muted-foreground mr-2">
                                {product.price}৳
                            </span>
                            <span className="text-red-600">{finalPrice}৳</span>
                            <Badge variant="destructive" className="ml-2 flex items-center gap-1">
                                <Percent className="w-4 h-4" /> -{product.discount_amount}৳
                            </Badge>
                        </>
                    ) : (
                        <span>{product.price}৳</span>
                    )}
                </div>

                <Separator />

                <div className="text-sm text-muted-foreground whitespace-pre-line flex gap-2">
                    <Info className="w-5 h-5 text-primary mt-1" />
                    <p>{product.short_desc}</p>
                </div>

                <Separator />

                <div className='flex gap-10'>
                    <h2 className="text-lg font-semibold flex items-center gap-2">
                        <ShoppingCart className="w-5 h-5" />
                        Place Order
                    </h2>
                    <PlaceOrderForm product={product} />
                </div>
            </div>
        </div>
    );
}
