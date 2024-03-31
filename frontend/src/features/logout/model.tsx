import { Dispatch, SetStateAction, useState } from "react";
import { toast } from "react-toastify";

export const useLogout = (setAuth: Dispatch<SetStateAction<boolean>>) => {
  const [showModal, setShowModal] = useState(false);
  const changeModal = () => {
    setShowModal(!showModal);
  };
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    setAuth(false);
    setShowModal(false);
    toast.success("Вы вышли со своего аккаунта");
  };
  return { showModal, changeModal, handleLogout };
};
