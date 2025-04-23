import { Product } from "@/types";

const API_BASE = "https://admin.refabry.com/api";

export async function fetchAllProducts(): Promise<Product[]> {
  const res = await fetch(`${API_BASE}/all/product/get`);
  const { data } = await res.json();
  return data.data;
}
