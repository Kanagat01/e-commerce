import { ProductItem, ProductType } from "~/entities/Product";
import { Header, Footer } from "~/widgets";

export default function Cart() {
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
      <div className="container cart">
        <table>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
          <tr>
            <td>
              <div className="cart-info">
                <img src="./images/product-2.jpg" alt="" />
                <div>
                  <p>Boy’s T-Shirt</p>
                  <span>Price: $50.00</span> <br />
                  <a href="#">remove</a>
                </div>
              </div>
            </td>
            <td>
              <input type="number" value="1" min="1" />
            </td>
            <td>$50.00</td>
          </tr>
        </table>
        <div className="total-price">
          <table>
            <tr>
              <td>Subtotal</td>
              <td>$200</td>
            </tr>
            <tr>
              <td>Tax</td>
              <td>$50</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>$250</td>
            </tr>
          </table>
          <a href="#" className="checkout btn">
            Proceed To Checkout
          </a>
        </div>
      </div>
      <section className="section featured">
        <div className="top container">
          <h1>Latest Products</h1>
          <a href="#" className="view-more">
            View more
          </a>
        </div>
        <div className="products container">
          {latestProducts.map((product) => (
            <ProductItem {...product} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
