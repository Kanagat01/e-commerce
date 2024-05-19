import { TProduct, ProductItem } from "~/entities/Product";

type ProductSectionProps = {
  title: string;
  description?: string;
  products: TProduct[];
};

export function ProductSection({
  title,
  description,
  products,
}: ProductSectionProps) {
  return (
    <section className="section new-arrival">
      <div className="title">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <div className="products">
        {products.length > 0 ? (
          products.map((product, idx) => <ProductItem key={idx} {...product} />)
        ) : (
          <p>Нет продуктов для отображения.</p>
        )}
      </div>
    </section>
  );
}
