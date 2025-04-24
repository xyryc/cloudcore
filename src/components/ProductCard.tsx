"use client";

import Link from "next/link";
import { Product } from "@/types";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function ProductCard({ product }: { product: Product }) {
    const BASE_URL = process.env.NEXT_PUBLIC_API_BASE;
    const imageUrl = `${BASE_URL}/storage/product/${product.image}`;


    return (
        <Link href={`/product/${product.id}`}>
            <Card className="hover:shadow-lg transition">
                <Image
                    src={imageUrl}
                    alt={product.name}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover mb-4 rounded"
                />
                <CardContent className="p-4">
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <p className="text-muted-foreground text-sm">{product.price}৳</p>
                </CardContent>
            </Card>
        </Link>
    );
}
