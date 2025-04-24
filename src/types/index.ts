export interface Product {
  id: number;
  unique_id: string;
  name: string;
  short_desc: string;
  image: string;
  description: string;
  video: string | null;
  category_id: number;
  is_published: number;
  price: number;
  stock: number;
  code: string;
  pre_order: string | null;
  stock_location: string | null;
  buying_price: number;
  has_variation: number;
  is_discount: number;
  discount_amount: string;
  discount_date: string | null;
  created_by: number;
  stock_location_id: number;
  created_at: string;
  updated_at: string;
  category: {
    id: number;
    name: string;
  };
}

export interface OrderPayload {
  product_ids: string;
  s_product_qty: string;
  c_name: string;
  c_phone: string;
  address: string;
  courier: string;
  advance: null | number;
  cod_amount: number;
  discount_amount: null | number;
  delivery_charge: string;
}
