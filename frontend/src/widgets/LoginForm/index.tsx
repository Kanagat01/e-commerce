import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";
import { Button, Checkbox, Input } from "~/shared/ui";

type LoginFormProps = {
  is_reg: boolean;
};

export function LoginForm({ is_reg = false }: LoginFormProps) {
  return (
    <div className={styles["login-form"]}>
      <form onSubmit={() => {}}>
        <h1>{is_reg ? "Зарегистрироваться" : "Войти"}</h1>
        <p>
          {is_reg ? "Еще нет аккаунта?" : "Уже есть аккаунт?"}
          <NavLink to={""}>{is_reg ? "Зарегистрироваться" : "Войти"}</NavLink>
        </p>
        <Input
          label="Email"
          type="text"
          placeholder="Введите Email"
          name="email"
          required
        />
        <Input
          label="Пароль"
          type="password"
          placeholder="Введите Пароль"
          name="psw"
          required
        />
        {is_reg ? (
          <Input
            label="Повторите Пароль"
            type="password"
            placeholder="Повторите Пароль"
            name="psw-repeat"
            required
          />
        ) : (
          ""
        )}
        <Checkbox label="Запомнить меня" />
        {is_reg ? (
          <p>
            Создавая учетную запись, вы соглашаетесь с нашими
            <NavLink to={"#"}>Правилами и условиями</NavLink>.
          </p>
        ) : (
          ""
        )}
        <div className="mt-2">
          <Button>Отмена</Button>
          <Button type="submit">
            {is_reg ? "Зарегистрироваться" : "Войти"}
          </Button>
        </div>
      </form>
    </div>
  );
}
