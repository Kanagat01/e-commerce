import { apiInstance } from "~/shared/api";

export const getFavoritesCnt = async (): Promise<number> => {
  const response = await apiInstance.get("/shop/get_favorites_count/");
  return response.data.favorites_cnt;
};
