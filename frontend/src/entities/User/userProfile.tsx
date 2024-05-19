import { createStore, createEffect, createEvent, combine } from "effector";
import { apiInstance } from "~/shared/api";
import { TUserProfile } from "./types";
import { TProduct, updateProduct } from "../Product";
import { setAuth } from "~/features/auth";

export const fetchUserProfileFx = createEffect(async () => {
  const response = await apiInstance.get(`/auth/get_user_profile/`);
  return response.data;
});

export const $userProfile = createStore<TUserProfile | null>(null);
$userProfile.on(fetchUserProfileFx.doneData, (_, userProfile: TUserProfile) => {
  let newData = { ...userProfile };
  newData.favorites.map((p) => ({ ...p, is_favorite: true }));
  return newData;
});

fetchUserProfileFx.doneData.watch((userProfile: TUserProfile) => {
  userProfile.favorites.map((p) =>
    updateProduct({ id: p.id, changes: { is_favorite: true } })
  );
  setAuth(true);
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
    const idx = newFavorites.findIndex((p) => p.id === product.id);
    if (idx > -1) {
      newFavorites.splice(idx, 1);
    } else {
      newFavorites.push({ ...product, is_favorite: !product.is_favorite });
    }
    return { ...state, favorites: newFavorites };
  }
  return state;
};
$userProfile.on(updateFavorites, updateFavoritesFunc);
updateFavorites.watch(({ product }) => {
  updateProduct({
    id: product.id,
    changes: { is_favorite: !product.is_favorite },
  });
});

// -----------
// delete
export const deleteUserProfileFx = createEffect(async (userId: number) => {
  const response = await apiInstance.delete(`/userProfile/${userId}`);
  return response.data;
});
$userProfile.on(deleteUserProfileFx.done, () => {});
