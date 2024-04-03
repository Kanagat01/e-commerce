import { createStore, createEffect, createEvent, combine } from "effector";
import { apiInstance } from "~/shared/api";
import { TUserProfile } from "./types";
import { TProduct, updateProduct } from "../Product";

export const fetchUserProfileFx = createEffect(async () => {
  const response = await apiInstance.get(`/auth/getUserProfile/`);
  return response.data;
});

export const $userProfile = createStore<TUserProfile | null>(null);
$userProfile.on(fetchUserProfileFx.doneData, (_, userProfile: TUserProfile) => {
  userProfile.favorites.map((p) =>
    updateProduct({ id: p.id, changes: { is_favorite: true } })
  );
  return userProfile;
});

export const $favoritesCount = combine(
  $userProfile,
  (userProfile: TUserProfile | null) => userProfile?.favorites.length || 0
);

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
    const is_favorite = newFavorites.indexOf(product) > -1;
    if (is_favorite) {
      newFavorites = newFavorites.filter((p) => p.id !== product.id);
    } else {
      newFavorites.push(product);
    }
    updateProduct({ id: product.id, changes: { is_favorite: !is_favorite } });
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
