import { ProductType, ProductItem } from "~/entities/Product";

type ProductSectionProps = {
  title: string;
  description?: string;
  products: ProductType[];
};

export function ProductSection(props: ProductSectionProps) {
  return (
    <section className="section new-arrival">
      <div className="title">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>

      <div className="products">
        {props.products.map((product, idx) => (
          <ProductItem key={idx} {...product} />
        ))}
      </div>
    </section>
  );
}
