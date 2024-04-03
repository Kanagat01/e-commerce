import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Footer, Header } from "~/widgets";
import { ProductDetail, ProductItem, ProductType } from "~/entities/Product";
import { apiInstance, createResource } from "~/shared/api";
import { Preloader } from "~/shared/ui";

const productsResource = createResource("/shop/products/");

export default function ProductDetails() {
  const { product_id } = useParams();
  const [product, setProduct] = useState<ProductType>();
  const products: ProductType[] = productsResource.read();

  useEffect(() => {
    apiInstance
      .get(`/shop/products/${product_id}/`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [product_id]);

  if (!product) {
    return <Preloader />;
  }
  return (
    <>
      <Header />
      <section className="section product-detail">
        <ProductDetail {...product} />
      </section>
      <section className="section featured">
        <div className="top container-2">
          <h1>Похожие продукты</h1>
          <a href="#" className="view-more">
            Увидеть больше
          </a>
        </div>
        <div className="products container-2">
          {products.map((product: ProductType, idx) => (
            <ProductItem key={idx} {...product} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
