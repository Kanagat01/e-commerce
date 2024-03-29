import styles from "./styles.module.scss";

export function Pagination() {
  return (
    <section className={styles.pagination}>
      <div className="container-2">
        <span>
          <i className="bx bx-left-arrow-alt"></i>
        </span>
        <span>1</span> <span>2</span> <span>3</span> <span>4</span>
        <span>
          <i className="bx bx-right-arrow-alt"></i>
        </span>
      </div>
    </section>
  );
}
