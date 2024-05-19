import { useState } from "react";
import { toast } from "react-toastify";
import { setAuth } from "~/features/auth";

export const useLogout = () => {
  const [showModal, setShowModal] = useState(false);
  const changeModal = () => {
    setShowModal(!showModal);
  };
  const handleLogout = async () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    setAuth(false);
    setShowModal(false);
    toast.success("Вы вышли со своего аккаунта");
  };
  return { showModal, changeModal, handleLogout };
};
