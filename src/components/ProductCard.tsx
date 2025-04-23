"use client";

import Link from "next/link";
import { Product } from "@/types";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

export default function ProductCard({ product }: { product: Product }) {
    const imageUrl = `https://admin.refabry.com/storage/product/${product.image}`;

    return (
        <Link href={`/product/${product.id}`}>
            <Card className="hover:shadow-lg transition">
                <img
                    src={imageUrl}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t"
                />
                <CardContent className="p-4">
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <p className="text-muted-foreground text-sm">{product.price}৳</p>
                </CardContent>
            </Card>
        </Link>
    );
}
