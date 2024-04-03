export type TCategory = {
  id: number;
  name: string;
  image: string;
};

export type TProduct = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  seller: string;
  total_amount: number;
  total_sales: number;
  average_rating: number;
  isFavorite: boolean;
  discount?: number;
};
