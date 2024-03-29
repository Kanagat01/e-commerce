import { ProductType } from "./model";
import styles from "./styles.module.scss";

export function ProductItem(product: ProductType) {
  return (
    <div className={styles["product-item"]}>
      <div className={styles.overlay}>
        <a href="#" className={styles["product-thumb"]}>
          <img src={product.img} alt="" />
        </a>
        {product.discount ? (
          <span className={styles.discount}>{product.discount}%</span>
        ) : (
          ""
        )}
      </div>
      <div className={styles["product-info"]}>
        <span>{product.title}</span>
        <a href="#">{product.description}</a>
        <h4>${product.price}</h4>
      </div>
      <ul className={styles.icons}>
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
