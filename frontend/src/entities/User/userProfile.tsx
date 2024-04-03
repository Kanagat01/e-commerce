import { createStore, createEffect, createEvent } from "effector";
import { apiInstance } from "~/shared/api";
import { TUserProfile } from "./types";
import { TProduct } from "../Product";

export const $userProfile = createStore<TUserProfile | null>(null);

export const fetchUserProfileFx = createEffect(async () => {
  const response = await apiInstance.get(`/auth/getUserProfile/`);
  return response.data;
});
$userProfile.on(fetchUserProfileFx.doneData, (_, userProfile) => userProfile);

// -----------
// update
export const updateFavorites = createEvent<{
  product: TProduct;
}>();

const updateFavoritesFunc = (
  state: TUserProfile | null,
  { product }: { product: TProduct }
) => {
  if (state) {
    let newFavorites = [...state.favorites];
    if (newFavorites.indexOf(product) > -1) {
      newFavorites = newFavorites.filter((p) => p.id !== product.id);
    } else {
      newFavorites.push(product);
    }
    return { ...state, favorites: newFavorites };
  }
  return state;
};
$userProfile.on(updateFavorites, updateFavoritesFunc);

// -----------
// delete
export const deleteUserProfileFx = createEffect(async (userId: number) => {
  const response = await apiInstance.delete(`/userProfile/${userId}`);
  return response.data;
});
$userProfile.on(deleteUserProfileFx.done, () => {});
