import { ProductType } from "./model";

export function ProductItem(product: ProductType) {
  return (
    <div className="product-item">
      <div className="overlay">
        <a href="productDetails.html" className="product-thumb">
          <img src={product.img} alt="" />
        </a>
        {product.discount ? (
          <span className="discount">{product.discount}%</span>
        ) : (
          ""
        )}
      </div>
      <div className="product-info">
        <span>{product.title}</span>
        <a href="productDetails.html">{product.description}</a>
        <h4>${product.price}</h4>
      </div>
      <ul className="icons">
        <li>
          <i className="bx bx-heart"></i>
        </li>
        <li>
          <i className="bx bx-search"></i>
        </li>
        <li>
          <i className="bx bx-cart"></i>
        </li>
      </ul>
    </div>
  );
}
