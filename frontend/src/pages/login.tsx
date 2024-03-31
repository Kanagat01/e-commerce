import { useLocation } from "react-router-dom";
import { Footer, Header } from "~/widgets";
import { AuthForm } from "~/features";
import { REGISTER_ROUTE } from "~/shared/routes";

export default function Login() {
  const location = useLocation();
  const currentUrl = location.pathname;
  return (
    <>
      <Header />
      <div className="container-2">
        <AuthForm
          formType={currentUrl === REGISTER_ROUTE ? "register" : "login"}
        />
      </div>
      <Footer />
    </>
  );
}
