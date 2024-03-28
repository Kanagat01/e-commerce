import { ProductItem, ProductType } from "~/entities/Product";
import { Footer, Header } from "~/widgets";

export default function ProductDetails() {
  const products: ProductType[] = [
    {
      img: "../images/product-6.jpg",
      title: "MEN'S CLOTHES",
      description: "Concepts Solid Pink Men’s Polo",
      price: 150,
    },
  ];
  return (
    <>
      <Header />

      <section className="section product-detail">
        <div className="details container">
          <div className="left image-container">
            <div className="main">
              <img src="../images/product-8.jpg" alt="" />
            </div>
          </div>
          <div className="right">
            <span>Home/T-shirt</span>
            <h1>Boy’s T-Shirt By Handsome</h1>
            <div className="price">$50</div>
            <form>
              <div>
                <select>
                  <option value="Select Size" selected disabled>
                    Select Size
                  </option>
                  <option value="1">32</option>
                  <option value="2">42</option>
                  <option value="3">52</option>
                  <option value="4">62</option>
                </select>
                <span>
                  <i className="bx bx-chevron-down"></i>
                </span>
              </div>
            </form>
            <form className="form">
              <input type="text" placeholder="1" />
              <a href="cart.html" className="addCart">
                Add To Cart
              </a>
            </form>
            <h3>Product Detail</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              minima delectus nulla voluptates nesciunt quidem laudantium,
              quisquam voluptas facilis dicta in explicabo, laboriosam ipsam
              suscipit!
            </p>
          </div>
        </div>
      </section>

      <section className="section featured">
        <div className="top container">
          <h1>Related Products</h1>
          <a href="#" className="view-more">
            View more
          </a>
        </div>
        <div className="products container">
          {products.map((product) => (
            <ProductItem {...product} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
