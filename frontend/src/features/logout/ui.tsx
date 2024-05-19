import { Modal } from "react-bootstrap";
import { Button } from "~/shared/ui";
import { useLogout } from ".";

export function Logout({ className }: { className: string }) {
  const { showModal, changeModal, handleLogout } = useLogout();
  return (
    <>
      <div className={className} onClick={changeModal}>
        <i className="bx bx-log-out"></i>
      </div>
      <Modal show={showModal} onHide={changeModal}>
        <Modal.Body>
          <h2 className="text-center p-4">
            Вы уверены, что хотите выйти со своего аккаунта?
          </h2>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-evenly">
          <Button onClick={changeModal}>Отмена</Button>
          <Button onClick={handleLogout}>Выйти</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
