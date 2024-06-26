import axios from "axios";
import { API_URL } from "~/shared/config";

export type ResponseError = {
  data: { code: string; detail: string };
};

export const getValidToken = async (): Promise<string | null> => {
  const verifyToken = async (token: string | null) => {
    let result = false;
    if (token) {
      try {
        const response = await axios.post(`${API_URL}/auth/token/verify/`, {
          token,
        });
        result =
          response.status === 200 && Object.keys(response.data).length === 0;
      } catch (error) {
        console.log(error);
      }
    }
    return result;
  };

  const accessToken = localStorage.getItem("access_token");
  const refreshToken = localStorage.getItem("refresh_token");

  try {
    const is_access_verified = await verifyToken(accessToken);
    if (is_access_verified) {
      return accessToken;
    }
  } catch (error) {
    console.log(error);
  }
  try {
    const is_refresh_verified = await verifyToken(refreshToken);
    if (is_refresh_verified) {
      const response = await axios.post(`${API_URL}/auth/token/refresh/`, {
        refresh: refreshToken,
      });
      localStorage.setItem("access_token", response.data.access);
    }
  } catch (error) {
    console.log(error);
  }
  return null;
};

export const apiInstance = axios.create({
  baseURL: API_URL,
});

apiInstance.interceptors.request.use(async (config) => {
  const token = await getValidToken();
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});
