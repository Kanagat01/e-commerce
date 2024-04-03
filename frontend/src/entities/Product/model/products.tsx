import { apiInstance } from "~/shared/api";
import { TProduct } from ".";
import { createEffect, createEvent, createStore } from "effector";

export const $products = createStore<TProduct[]>([]);

export const fetchProductsFx = createEffect(async () => {
  const response = await apiInstance.get("/shop/products/");
  return response.data;
});

$products.on(fetchProductsFx.doneData, (_, products) => products);
fetchProductsFx();

// Получить продукт по ID
export const getProduct = (id: number) =>
  $products.getState().find((product) => product.id === id);

// --------------------
// Обновить продукт
// --------------------
export const updateProduct = createEvent<{
  id: number;
  changes: Partial<TProduct>;
}>();

const update = (
  state: TProduct[],
  { id, changes }: { id: number; changes: Partial<TProduct> }
) => {
  return state.map((product) =>
    product.id === id ? { ...product, ...changes } : product
  );
};

$products.on(updateProduct, update);

// --------------------
// Сортировать продукты
// --------------------
export const sortProducts = createEvent<{
  selectedOption: string;
}>();

const sortProductsFunc = (
  state: TProduct[],
  { selectedOption }: { selectedOption: string }
) => {
  let newState = [...state];
  switch (selectedOption) {
    case "by_price":
      return newState.sort((a, b) => a.price - b.price);
    case "by_sales":
      return newState.sort((a, b) => b.total_sales - a.total_sales);
    case "by_rating":
      return newState.sort((a, b) => b.average_rating - a.average_rating);
    default:
      return newState.sort((a, b) => a.id - b.id);
  }
};

$products.on(sortProducts, sortProductsFunc);
