import { Dispatch, SetStateAction, useState } from "react";
import styles from "./styles.module.scss";

type PaginationProps = {
  data_length: number;
  setData: Dispatch<SetStateAction<any[]>>;
};

export function Pagination({ data_length, setData }: PaginationProps) {
  const ITEMS_PER_PAGE = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data_length / ITEMS_PER_PAGE);

  const onPageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setData((prevData) =>
        prevData.slice(
          (currentPage - 1) * ITEMS_PER_PAGE,
          currentPage * ITEMS_PER_PAGE
        )
      );
      setCurrentPage(newPage);
    }
  };
  return (
    <section className={styles.pagination}>
      <div className="container-2">
        <span
          className={currentPage === 1 ? "d-none" : ""}
          onClick={() => onPageChange(currentPage - 1)}
        >
          <i className="bx bx-left-arrow-alt"></i>
        </span>
        {[...Array(totalPages)].map((_, i) => (
          <span
            key={i}
            className={i + 1 === currentPage ? styles.active : ""}
            onClick={() => onPageChange(i + 1)}
          >
            {i + 1}
          </span>
        ))}
        <span
          className={currentPage === totalPages ? "d-none" : ""}
          onClick={() => onPageChange(currentPage + 1)}
        >
          <i className="bx bx-right-arrow-alt"></i>
        </span>
      </div>
    </section>
  );
}
