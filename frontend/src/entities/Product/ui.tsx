import { NavLink, generatePath } from "react-router-dom";
import { ProductType, addToFavorites } from "./model";
import styles from "./styles.module.scss";
import { PRODUCT_DETAILS_ROUTE } from "~/shared/routes";
import { Input } from "~/shared/ui";
import { useState } from "react";

export function ProductItem(props: ProductType) {
  const [product, setProduct] = useState(props);
  return (
    <div className={styles["product-item"]}>
      <div className={styles.overlay}>
        <div className={styles["product-thumb"]}>
          <img src={product.image} alt="" />
        </div>
        {product.discount ? (
          <span className={styles.discount}>{product.discount}%</span>
        ) : (
          ""
        )}
      </div>
      <div className={styles["product-info"]}>
        <span>{product.category}</span>
        <NavLink
          to={generatePath(PRODUCT_DETAILS_ROUTE, {
            product_id: product.id.toString(),
          })}
        >
          {product.name}
        </NavLink>
        <h4>{product.price} ₽</h4>
      </div>
      <ul className={styles.icons}>
        <li onClick={() => addToFavorites(product, setProduct)}>
          {product.is_favorite ? (
            <i className="bx bxs-heart" style={{ color: "red" }}></i>
          ) : (
            <i className="bx bx-heart"></i>
          )}
        </li>
        <li>
          <i className="bx bx-cart"></i>
        </li>
        <li>
          <NavLink
            to={generatePath(PRODUCT_DETAILS_ROUTE, {
              product_id: product.id.toString(),
            })}
          >
            <i className="bx bx-info-circle"></i>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export function ProductDetail(product: ProductType) {
  return (
    <div className="details container-2">
      <div className="left image-container">
        <div className="main">
          <img src={product.image} alt="" />
        </div>
      </div>
      <div className="right">
        <span>Категории / {product.category}</span>
        <h1>{product.name}</h1>
        {product.discount ? (
          <div
            className="d-flex flex-column align-items-start"
            style={{ gap: "0.5rem" }}
          >
            <div className="d-flex align-items-center">
              <div className="discount">-{product.discount}%</div>
              <div className="price" style={{ textDecoration: "line-through" }}>
                {product.price - product.price * (product.discount / 100)} ₽
              </div>
            </div>
            <div className="price ms-2 mb-4" style={{ fontSize: "2.4rem" }}>
              {product.price} ₽
            </div>
          </div>
        ) : (
          <div className="price ms-2 mb-4" style={{ fontSize: "2.4rem" }}>
            {product.price} ₽
          </div>
        )}

        <form className="form">
          <Input name="count" label="" type="number" min={1} />
          <a href="cart.html" className="addCart">
            Добавить в корзину
          </a>
        </form>
        <h3>Описание продукта</h3>
        <p>{product.description}</p>
      </div>
    </div>
  );
}
