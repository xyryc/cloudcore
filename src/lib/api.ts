import { Product } from "@/types";

export async function fetchAllProducts(): Promise<Product[]> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE}/api/all/product/get`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      throw new Error(`Fetch failed with status ${res.status}`);
    }

    const { data } = await res.json();
    return data.data;
  } catch (err) {
    console.error("fetchAllProducts error:", err);
    return [];
  }
}
