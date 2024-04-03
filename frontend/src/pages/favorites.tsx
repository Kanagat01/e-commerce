import { useUnit } from "effector-react";
import { Header, Footer, ProductSection } from "~/widgets";
import { $userProfile } from "~/entities/User";

export default function Favorites() {
  const userProfile = useUnit($userProfile);
  return (
    <>
      <Header />
      <ProductSection
        title="Избранное"
        description="Продукты добавленные в избранное"
        products={userProfile!.favorites}
      />
      <Footer />
    </>
  );
}
