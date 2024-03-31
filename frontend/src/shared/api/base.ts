import axios from "axios";
import { API_URL } from "~/shared/config";

export type ResponseError = {
  data: { code: string; detail: string };
};

export const apiInstance = axios.create({
  baseURL: API_URL,
});

export const verifyToken = async (token: string | null) => {
  if (token) {
    try {
      const response = await apiInstance.post("/auth/token/verify/", {
        token,
      });
      return response.status === 200;
    } catch {
      return false;
    }
  }
  return false;
};
