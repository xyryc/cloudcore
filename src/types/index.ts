export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
}

export type ProductType = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
};
