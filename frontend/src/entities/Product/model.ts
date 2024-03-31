export type Category = {
  id: number;
  name: string;
};

export type ProductType = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  seller: string;
  total_amount: number;
  discount?: number;
};

export const sortProducts = (
  products: ProductType[],
  selectedOption: string
) => {
  switch (selectedOption) {
    case "by_price":
      return products.sort((a, b) => a.price - b.price);
    // case "by_sales":
    //   return products.sort((a, b) => b.sales_count - a.sales_count);
    // case "by_rating":
    //   return products.sort((a, b) => b.rating - a.rating);
    default:
      return products;
  }
};
