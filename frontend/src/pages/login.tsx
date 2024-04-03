import { Footer, Header } from "~/widgets";
import { AuthForm } from "~/features";

export default function Login({
  formType,
}: {
  formType: "register" | "login";
}) {
  return (
    <>
      <Header />
      <div className="container-2">
        <AuthForm formType={formType} />
      </div>
      <Footer />
    </>
  );
}
