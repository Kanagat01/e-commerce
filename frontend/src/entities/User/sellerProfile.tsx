import { createEffect, createStore } from "effector";
import { apiInstance } from "~/shared/api";
import { TSellerProfile } from "./types";

export const $sellerProfile = createStore<TSellerProfile | {}>({});

export const fetchSellerProfileFx = createEffect(async (userId: number) => {
  const response = await apiInstance.get(`/sellerProfile/${userId}`);
  return response.data;
});
$sellerProfile.on(
  fetchSellerProfileFx.doneData,
  (_, sellerProfile) => sellerProfile
);

export const updateSellerProfileFx = createEffect(
  async (sellerProfile: TSellerProfile) => {
    const response = await apiInstance.put(
      `/sellerProfile/${sellerProfile.user.id}`,
      sellerProfile
    );
    return response.data;
  }
);
$sellerProfile.on(
  updateSellerProfileFx.doneData,
  (_, sellerProfile) => sellerProfile
);

export const deleteSellerProfileFx = createEffect(async (userId: number) => {
  const response = await apiInstance.delete(`/sellerProfile/${userId}`);
  return response.data;
});
$sellerProfile.on(deleteSellerProfileFx.done, () => {});
