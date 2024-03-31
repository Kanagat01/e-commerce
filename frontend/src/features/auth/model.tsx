import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";
import { User } from "~/shared/api";
import { InputProps } from "~/shared/ui";
import { authorise } from "./api";
import { NavigateFunction } from "react-router-dom";

export const useAuth = (
  navigate: NavigateFunction,
  setAuth: Dispatch<SetStateAction<boolean>>,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  isLoginForm: boolean
): {
  inputs: InputProps[];
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  rememberMe: boolean;
  setRememberMe: Dispatch<SetStateAction<boolean>>;
} => {
  const [user, setUser] = useState<User>({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
  });
  const [pswRepeat, setPswRepeat] = useState<string>("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const loginInputs: InputProps[] = [
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
  const registerInputs: InputProps[] = [
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
    ...loginInputs,
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
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const data = isLoginForm
      ? { username: user.email, password: user.password }
      : user;
    const mode = isLoginForm ? "auth" : "reg";
    authorise(data, setIsLoading, setAuth, navigate, rememberMe, mode);
  };
  const inputs = isLoginForm ? loginInputs : registerInputs;
  return { inputs, onSubmit, rememberMe, setRememberMe };
};
