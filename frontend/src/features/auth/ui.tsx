import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";

import { AuthContext } from "~/app/providers/withAuthContext";
import { Button, Input } from "~/shared/ui";
import { LOGIN_ROUTE, REGISTER_ROUTE } from "~/shared/routes";

import { useAuth } from ".";
import styles from "./styles.module.scss";

export function AuthForm({ formType }: { formType: "login" | "register" }) {
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const isLoginForm = formType === "login";
  const { inputs, onSubmit } = useAuth(
    navigate,
    setAuth,
    setIsLoading,
    isLoginForm
  );

  return (
    <div className={styles["login-form"]}>
      <form onSubmit={onSubmit}>
        <h1>{isLoginForm ? "Войти" : "Зарегистрироваться"}</h1>
        <p className="mb-5">
          {isLoginForm ? "Еще нет аккаунта?" : "Уже есть аккаунт?"}
          <NavLink to={isLoginForm ? REGISTER_ROUTE : LOGIN_ROUTE}>
            {isLoginForm ? "Зарегистрироваться" : "Войти"}
          </NavLink>
        </p>
        {inputs.map((props, idx) => (
          <Input key={idx} {...props} className="mb-4" required />
        ))}

        {!isLoginForm ? (
          <p className="mt-3 mb-0">
            Создавая учетную запись, вы соглашаетесь с нашими
            <NavLink to={"#"}>Правилами и условиями</NavLink>.
          </p>
        ) : (
          ""
        )}
        <div className="d-flex mt-4" style={{ gap: "1rem" }}>
          <Button>Отмена</Button>
          <Button type="submit">
            {isLoading ? (
              <Spinner animation="border" />
            ) : isLoginForm ? (
              "Войти"
            ) : (
              "Зарегистрироваться"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
