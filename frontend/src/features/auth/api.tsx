import { Dispatch, SetStateAction } from "react";
import { NavigateFunction } from "react-router-dom";
import { ResponseError, User, apiInstance } from "~/shared/api";
import { HOME_ROUTE } from "~/shared/routes";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

export const authorise = async (
  data: User | { username: string; password: string },
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  setAuth: Dispatch<SetStateAction<boolean>>,
  navigate: NavigateFunction,
  mode: "auth" | "reg"
) => {
  return apiInstance
    .post(mode === "auth" ? "auth/token/" : "auth/register/", data)
    .then((response) => {
      localStorage.setItem("access_token", response.data.access);
      localStorage.setItem("refresh_token", response.data.refresh);
      setAuth(true);
      navigate(HOME_ROUTE);
      toast.success(
        mode === "reg"
          ? "Вы успешно зарегистрированы"
          : `Вы вошли в свой аккаунт`
      );
    })
    .catch((error: AxiosError) => {
      const { data } = error.response as ResponseError;
      if (data.detail) {
        toast.error(data.detail);
      } else {
        toast.error(`Ошибка: ${error}`);
      }
    })
    .finally(() => {
      setIsLoading(false);
    });
};
