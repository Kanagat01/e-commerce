import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";
import { NavigateFunction } from "react-router-dom";
import { InputProps } from "~/shared/ui";
import { TRegisterData, loginInputs, registerInputs, authorise } from ".";

export const useAuth = (
  navigate: NavigateFunction,
  setAuth: Dispatch<SetStateAction<boolean>>,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  isLoginForm: boolean
): {
  inputs: InputProps[];
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
} => {
  const [user, setUser] = useState<TRegisterData>({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
  });
  const [pswRepeat, setPswRepeat] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const inputs = isLoginForm
    ? loginInputs(user, handleChange)
    : registerInputs(user, handleChange, pswRepeat, setPswRepeat);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const data = isLoginForm
      ? { username: user.email, password: user.password }
      : user;
    const mode = isLoginForm ? "auth" : "reg";
    authorise(data, setIsLoading, setAuth, navigate, mode);
  };

  return { inputs, onSubmit };
};
