import { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";
import { apiInstance, getValidToken } from "~/shared/api";

export type Category = {
  id: number;
  name: string;
  image: string;
};

export type ProductType = {
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
  is_favorite: boolean;
  discount?: number;
};

export const addToFavorites = async (
  product: ProductType,
  setProduct: Dispatch<SetStateAction<ProductType>>
) => {
  const token = await getValidToken();
  if (token) {
    apiInstance
      .post("/shop/toggle_favorite/", { product_id: product.id })
      .then((response) => {
        setProduct({ ...product, is_favorite: !product.is_favorite });
        toast.success(response.data.message);
      })
      .catch((error) => {
        console.log(error);
        toast.error(
          `Произошла ошибка. Продукт ${
            product.is_favorite
              ? "не удален из избранного"
              : "не добавлен в избранное"
          }`
        );
      });
  } else {
    toast.error(
      "Вы не авторизованы. Авторизуйтесь, чтобы добавлять продукты в избранное"
    );
  }
};
