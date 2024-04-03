import { Footer, Header } from "~/widgets";
import { $products, ProductItem, sortProducts } from "~/entities/Product";
import { Select } from "~/shared/ui";
import { ChangeEvent } from "react";
import { useUnit } from "effector-react";

export default function Products() {
  const products = useUnit($products);
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
              onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                sortProducts({ selectedOption: e.target.value })
              }
            />
          </form>
        </div>
        <div className="products container-2">
          {products.map((product, key) => (
            <ProductItem key={key} {...product} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
