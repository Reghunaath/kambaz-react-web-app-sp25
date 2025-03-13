import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
export default function DeleteBox({
  show,
  handleClose,
  dialogTitle,
  deleteAssignment,
  assignmentId,
}: {
  show: boolean;
  handleClose: () => void;
  dialogTitle: string;
  assignmentId: string;
  deleteAssignment: (id: string) => any;
}) {
  const dispatch = useDispatch();
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{dialogTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are sure you want to remove the assignment?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          {" "}
          Cancel{" "}
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            dispatch(deleteAssignment(assignmentId));
            handleClose();
          }}
        >
          {" "}
          Delete Assignment{" "}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
