import { useUnit } from "effector-react";
import { $products, ProductItem, TProduct } from "~/entities/Product";
import { Header, Footer, Cart } from "~/widgets";

export default function CartPage() {
  const latestProducts: TProduct[] = useUnit($products);
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
