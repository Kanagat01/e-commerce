import { Spinner } from "react-bootstrap";

export function Preloader() {
  return (
    <div className="d-flex align-items-center justify-content-center mt-5">
      <Spinner
        style={{ color: "var(--green)", width: "15rem", height: "15rem" }}
      />
    </div>
  );
}
