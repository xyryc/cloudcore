"use client";

import Link from "next/link";
import { Product } from "@/types";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tag, ShoppingCart, PackageCheck } from "lucide-react";
import Image from "next/image";

export default function ProductCard({ product }: { product: Product }) {
    const BASE_URL = process.env.NEXT_PUBLIC_API_BASE;
    const imageUrl = `${BASE_URL}/storage/product/${product.image}`;
    const inStock = product.stock > 0;
    // console.log(product)

    return (
        <Link href={`/product/${product.id}`}>
            <Card className="py-0 hover:shadow-xl transition-all duration-200 rounded-2xl overflow-hidden group">
                <div className="relative">
                    <Image
                        src={imageUrl}
                        alt={product.name}
                        width={600}
                        height={600}
                        className="w-full h-64 object-scale-down group-hover:scale-105 transition-all duration-500"
                    />
                    {product.is_discount ? (
                        <Badge className="absolute top-2 left-2 bg-red-500 text-white shadow">
                            <Tag className="w-4 h-4 mr-1" />
                            ৳{product.discount_amount} OFF
                        </Badge>
                    ) : null}
                    {inStock ? (
                        <Badge className="absolute top-2 right-2 bg-emerald-500 text-white shadow">
                            <PackageCheck className="w-4 h-4 mr-1" />
                            In Stock
                        </Badge>
                    ) : (
                        <Badge className="absolute top-2 right-2 bg-gray-500 text-white shadow">
                            Out of Stock
                        </Badge>
                    )}
                </div>

                <CardContent className="p-4 space-y-1">
                    <CardTitle className="text-base md:text-lg line-clamp-1">
                        {product.name}
                    </CardTitle>

                    <div className="text-muted-foreground text-sm flex items-center gap-1">
                        <ShoppingCart className="w-4 h-4" />
                        {product.price}৳
                    </div>

                    <div className="text-xs text-gray-500 mt-1">
                        Category: {product.category?.name || "Unknown"}
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}
