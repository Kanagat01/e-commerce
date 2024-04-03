import { useUnit } from "effector-react";
import { NavLink, useParams } from "react-router-dom";
import { Footer, Header } from "~/widgets";
import {
  $products,
  ProductDetail,
  ProductItem,
  TProduct,
  getProduct,
} from "~/entities/Product";
import { PRODUCTS_ROUTE } from "~/shared/routes";

export default function ProductDetails() {
  const { product_id } = useParams();
  const products = useUnit($products);
  const product = getProduct(Number(product_id));
  return (
    product && (
      <>
        <Header />
        <section className="section product-detail">
          <ProductDetail {...product} />
        </section>
        <section className="section featured">
          <div className="top container-2">
            <h1>Похожие продукты</h1>
            <NavLink to={PRODUCTS_ROUTE} className="view-more">
              Увидеть больше
            </NavLink>
          </div>
          <div className="products container-2">
            {products.map((product: TProduct, idx) => (
              <ProductItem key={idx} {...product} />
            ))}
          </div>
        </section>
        <Footer />
      </>
    )
  );
}
