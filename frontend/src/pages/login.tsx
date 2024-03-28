import { Footer, Header, LoginForm } from "~/widgets";

export default function Login() {
  return (
    <>
      <Header />
      <div className="container">
        <LoginForm />
      </div>
      <Footer />
    </>
  );
}