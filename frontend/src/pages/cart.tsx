import { ProductItem, ProductType } from "~/entities/Product";
import { Header, Footer, Cart } from "~/widgets";

export default function CartPage() {
  const latestProducts: ProductType[] = [
    {
      img: "images/product-6.jpg",
      title: "MEN'S CLOTHES",
      description: "Concepts Solid Pink Men’s Polo",
      price: 150,
    },
  ];
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
