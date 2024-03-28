import { Footer, Header, LoginForm } from "~/widgets";

export default function Register() {
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
