import { useUnit } from "effector-react";
import { Header, Footer, ProductSection } from "~/widgets";
import { $userProfile } from "~/entities/User";

export default function Favorites() {
  const userProfile = useUnit($userProfile);
  return (
    <>
      <Header />
      <ProductSection title="Избранное" products={userProfile!.favorites} />
      <Footer />
    </>
  );
}
