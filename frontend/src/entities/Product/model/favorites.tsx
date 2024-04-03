import { isAxiosError } from "axios";
import { combine, createEffect, createEvent } from "effector";
import { toast } from "react-toastify";
import { TProduct } from ".";
import { apiInstance } from "~/shared/api";
import { $userProfile, TUserProfile, updateFavorites } from "~/entities/User";

export const $favoritesCount = combine(
  $userProfile,
  (userProfile: TUserProfile | null) => userProfile?.favorites.length || 0
);

export const markFavorite = createEvent<TProduct>();

const toggleFavoriteFx = createEffect(async (product: TProduct) => {
  const response = await apiInstance.post("/shop/toggle_favorite/", {
    product_id: product.id,
  });
  return { product, message: response.data.message };
});

toggleFavoriteFx.done.watch(({ result: { product, message } }) => {
  updateFavorites({ product });
  toast.success(message);
});

toggleFavoriteFx.fail.watch(({ error }) => {
  if (isAxiosError(error)) {
    if (error?.response?.status === 401) {
      toast.error(
        "Вы не авторизованы. Авторизуйтесь, чтобы добавлять продукты в избранное"
      );
      return;
    }
  }
  console.log(error);
  toast.error(`Произошла ошибка. Продукт не добавлен в избранное`);
});

markFavorite.watch((product) => {
  toggleFavoriteFx(product);
});
