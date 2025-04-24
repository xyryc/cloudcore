export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
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
