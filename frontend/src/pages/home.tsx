import { createResource } from "~/shared/api";
import {
  Banner,
  Categories,
  Contacts,
  Footer,
  HeroSlider,
  Header,
  ProductSection,
} from "~/widgets";

const resource = createResource("/shop/products/");
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
        products={resource.read()}
      />
      <Banner />
      <Contacts />
      <Footer />
    </>
  );
}
