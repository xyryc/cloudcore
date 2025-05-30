import ProductCard from "@/components/ProductCard";
import { fetchAllProducts } from "@/lib/api";

export const revalidate = 0;

export default async function Home() {
  const products = await fetchAllProducts()
  // console.log(products)

  return (
    <>
      <h1 className="text-3xl font-bold text-center my-4">CloudCore Store</h1>
      <main className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.length === 0 ? (
          <p className="text-center col-span-full text-red-500">No products found. Please refresh.</p>
        ) : (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}

      </main>
    </>
  );
}
