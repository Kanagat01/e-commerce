import { ProductType, ProductItem } from "~/entities/Product";

export function NewArrivals() {
  const products: ProductType[] = [
    {
      img: "images/product-1.jpg",
      title: "MEN'S CLOTHES",
      description: "Quis Nostrud Exercitation",
      price: 700,
    },
    {
      img: "images/product-2.jpg",
      title: "MEN'S CLOTHES",
      description: "Concepts Solid Pink Men’s Polo",
      price: 150,
    },
    {
      img: "images/product-3.jpg",
      discount: 50,
      title: "MEN'S CLOTHES",
      description: "Sonata White Men’s Shirt",
      price: 800,
    },
    {
      img: "images/product-4.jpg",
      discount: 50,
      title: "MEN'S CLOTHES",
      description: "Edor do eiusmod tempor",
      price: 900,
    },
    {
      img: "images/product-5.jpg",
      title: "MEN'S CLOTHES",
      description: "Edor do eiusmod tempor",
      price: 100,
    },
    {
      img: "images/product-6.jpg",
      title: "MEN'S CLOTHES",
      description: "Edor do eiusmod tempor",
      price: 500,
    },
    {
      img: "images/product-2.jpg",
      title: "MEN'S CLOTHES",
      description: "Edor do eiusmod tempor",
      price: 560,
    },
  ];
  return (
    <section className="section new-arrival">
      <div className="title">
        <h1>NEW ARRIVALS</h1>
        <p>All the latest picked from designer of our store</p>
      </div>

      <div className="products">
        {products.map((product, idx) => (
          <ProductItem key={idx} {...product} />
        ))}
      </div>
    </section>
  );
}
