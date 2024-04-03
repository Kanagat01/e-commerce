import { ProductType } from "~/entities/Product";

export const sortProducts = (
  products: ProductType[],
  selectedOption: string
) => {
  let newProducts = [...products];
  switch (selectedOption) {
    case "by_price":
      return newProducts.sort((a, b) => a.price - b.price);
    case "by_sales":
      return newProducts.sort((a, b) => b.total_sales - a.total_sales);
    case "by_rating":
      return newProducts.sort((a, b) => b.average_rating - a.average_rating);
    default:
      return newProducts.sort((a, b) => a.id - b.id);
  }
};
