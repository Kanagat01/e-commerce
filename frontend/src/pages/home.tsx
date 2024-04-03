import { useUnit } from "effector-react";
import { $products } from "~/entities/Product";
import {
  Banner,
  Categories,
  Contacts,
  Footer,
  HeroSlider,
  Header,
  ProductSection,
} from "~/widgets";

export default function Home() {
  return (
    <>
      <header className="header" id="header">
        <Header />
        <HeroSlider />
      </header>
      <Categories />
      <ProductSection
        title="NEW ARRIVALS"
        description="All the latest picked from designer of our store"
        products={useUnit($products)}
      />
      <Banner />
      <Contacts />
      <Footer />
    </>
  );
}
