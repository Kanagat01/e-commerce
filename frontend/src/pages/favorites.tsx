import { Header, Footer, ProductSection } from "~/widgets";
import { ProductType } from "~/entities/Product";
import { createResource } from "~/shared/api";

const resource = createResource("/shop/products/");

export default function CartPage() {
  const latestProducts: ProductType[] = resource.read();
  return (
    <>
      <Header />
      <ProductSection title="Избранное" products={latestProducts} />
      <Footer />
    </>
  );
}
