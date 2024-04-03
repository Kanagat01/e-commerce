import { Footer, Header } from "~/widgets";
import { sortProducts } from "~/features";
import { ProductItem, ProductType } from "~/entities/Product";
import { createResource } from "~/shared/api";
import { Pagination, Select } from "~/shared/ui";
import { ChangeEvent, useState } from "react";

const resource = createResource("/shop/products/");

export default function Products() {
  const [products, setProducts] = useState<ProductType[]>(resource.read());
  return (
    <>
      <Header />
      <section className="section all-products" id="products">
        <div className="top container-2">
          <h1>Все продукты</h1>
          <form>
            <Select
              options={[
                { label: "По умолчанию", value: "default" },
                { label: "По цене", value: "by_price" },
                { label: "По количеству продаж", value: "by_sales" },
                { label: "По рейтингу", value: "by_rating" },
              ]}
              onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                setProducts(sortProducts(products, e.target.value));
              }}
            />
          </form>
        </div>
        <div className="products container-2">
          {products.map((product, key) => (
            <ProductItem key={key} {...product} />
          ))}
        </div>
      </section>
      <Pagination data_length={products.length} setData={setProducts} />
      <Footer />
    </>
  );
}
