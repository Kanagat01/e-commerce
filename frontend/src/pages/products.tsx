import { ProductItem, ProductType } from "~/entities/Product";
import { Pagination } from "~/shared/ui";
import { Footer, Header } from "~/widgets";

export default function Products() {
  const products: ProductType[] = [
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

      <section className="section all-products" id="products">
        <div className="top container-2">
          <h1>All Products</h1>
          <form>
            <select>
              <option value="1">Defualt Sorting</option>
              <option value="2">Sort By Price</option>
              <option value="3">Sort By Popularity</option>
              <option value="4">Sort By Sale</option>
              <option value="5">Sort By Rating</option>
            </select>
            <span>
              <i className="bx bx-chevron-down"></i>
            </span>
          </form>
        </div>
        <div className="products container-2">
          {products.map((product) => (
            <ProductItem {...product} />
          ))}
        </div>
      </section>
      <Pagination />
      <Footer />
    </>
  );
}
