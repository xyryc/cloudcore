import { Product } from "@/types";

export async function fetchAllProducts(): Promise<Product[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE}/api/all/product/get`
  );
  const { data } = await res.json();
  return data.data;
}
