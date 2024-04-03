import { ProductItem, ProductType } from "~/entities/Product";
import { createResource } from "~/shared/api";
import { Header, Footer, Cart } from "~/widgets";

const resource = createResource("/shop/products/");

export default function CartPage() {
  const latestProducts: ProductType[] = resource.read();
  return (
    <>
      <Header />
      <Cart />
      <section className="section featured">
        <div className="top container-2">
          <h1>Latest Products</h1>
          <a href="#" className="view-more">
            View more
          </a>
        </div>
        <div className="products container-2">
          {latestProducts.map((product, idx) => (
            <ProductItem key={idx} {...product} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
