import { ChangeEvent } from "react";
import { InputProps } from "~/shared/ui";
import { TRegisterData } from "./types";

export const loginInputs = (
  user: TRegisterData,
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
): InputProps[] => [
  {
    label: "Email",
    type: "email",
    value: user.email,
    placeholder: "Введите Email",
    name: "email",
    onChange: handleChange,
  },
  {
    label: "Пароль",
    type: "password",
    value: user.password,
    placeholder: "Введите Пароль",
    name: "password",
    onChange: handleChange,
  },
];

export const registerInputs = (
  user: TRegisterData,
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void,
  pswRepeat: string,
  setPswRepeat: (value: string) => void
): InputProps[] => [
  {
    label: "Имя",
    type: "text",
    value: user.first_name,
    placeholder: "Введите имя",
    name: "first_name",
    onChange: handleChange,
  },
  {
    label: "Фамилия",
    type: "text",
    value: user.last_name,
    placeholder: "Введите фамилию",
    name: "last_name",
    onChange: handleChange,
  },
  ...loginInputs(user, handleChange),
  {
    label: "Повторите Пароль",
    type: "password",
    value: pswRepeat,
    placeholder: "Повторите Пароль",
    name: "psw-repeat",
    onChange: (e: ChangeEvent<HTMLInputElement>) =>
      setPswRepeat(e.target.value),
    pattern: user.password,
    title: "Пароли не совпадают",
  },
];
