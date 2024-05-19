import { Dispatch, SetStateAction } from "react";
import { NavigateFunction } from "react-router-dom";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

import { ResponseError, apiInstance } from "~/shared/api";
import { HOME_ROUTE } from "~/shared/routes";
import { TRegisterData, TLoginData } from ".";
import { setAuth } from "~/features/auth";

export const authorise = async (
  data: TRegisterData | TLoginData,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  navigate: NavigateFunction,
  mode: "reg" | "auth"
) => {
  return apiInstance
    .post(mode === "auth" ? "auth/token/" : "auth/register/", data)
    .then(async (response) => {
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
