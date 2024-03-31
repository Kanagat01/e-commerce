import { ProductItem, ProductType } from "~/entities/Product";
import { Pagination, Select } from "~/shared/ui";
import { Footer, Header } from "~/widgets";

export default function Products() {
  const products: ProductType[] = [
    {
      id: 1,
      seller: "",
      image: "images/product-6.jpg",
      name: "MEN'S CLOTHES",
      description: "Concepts Solid Pink Men’s Polo",
      price: 150,
      category: { id: 1, name: "" },
      total_amount: 1,
    },
  ];
  return (
    <>
      <Header />
      <section className="section all-products" id="products">
        <div className="top container-2">
          <h1>Все продукты</h1>
          <form>
            <Select
              label="Сортировать по"
              options={[
                { label: "По умолчанию", value: "" },
                { label: "По цене", value: "by_price" },
                { label: "По количеству продаж", value: "by_sales" },
                { label: "По рейтингу", value: "by_rating" },
              ]}
            />
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
