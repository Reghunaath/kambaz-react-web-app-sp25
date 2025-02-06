import { Button, FormControl, FormGroup, ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { BiCaretDown } from "react-icons/bi";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { MdAssignment } from "react-icons/md";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <div className="d-flex justify-content-end align-items-center gap-2">
        <FormGroup
          id="wd-search-assignment"
          className="mb-0 text-nowrap float-end"
        >
          <FormControl placeholder="Search..." />
        </FormGroup>
        <Button
          variant="secondary"
          className="me-1 float-end"
          id="wd-add-module-btn"
        >
          <FaPlus
            className="position-relative me-2"
            style={{ bottom: "1px" }}
          />
          Group
        </Button>
        <Button
          variant="danger"
          className="me-1 float-end"
          id="wd-add-module-btn"
        >
          <FaPlus
            className="position-relative me-2"
            style={{ bottom: "1px" }}
          />
          Assignment
        </Button>
      </div>
      <br />
      <ListGroup className="rounded-0" id="wd-modules">
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-0 fs-3" />
            <BiCaretDown className="me-0 fs-5" /> Assignments
            <AssignmentControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroup.Item className="wd-lesson p-3 ps-1 align-items-center">
              <BsGripVertical className="me-0 fs-3" />
              <MdAssignment className="me-0 fs-4 text-success" />
              <LessonControlButtons />
              <a
                href="#/Kambaz/Courses/1234/Assignments/1"
                className="text-decoration-none text-reset"
              >
                <span className="fw-semibold"> A1</span>
              </a>
              <br />
              <span className="me-2 fs-6 text-danger">Multiple Modules</span>
              <span className="me-2 fs-6">
                {" "}
                | Not available until May 6 at 12:00 AM |
              </span>
              <br />
              <span className="me-2 fs-6">
                Due May 13 at 11:59 PM | 100 pts
              </span>
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-1 align-items-center">
              <BsGripVertical className="me-0 fs-3" />
              <MdAssignment className="me-0 fs-4 text-success" />
              <LessonControlButtons />
              <a
                href="#/Kambaz/Courses/1234/Assignments/2"
                className="text-decoration-none text-reset"
              >
                <span className="fw-semibold"> A2</span>
              </a>
              <br />
              <span className="me-2 fs-6 text-danger">Multiple Modules</span>
              <span className="me-2 fs-6">
                {" "}
                | Not available until May 13 at 12:00 AM |
              </span>
              <br />
              <span className="me-2 fs-6">
                Due May 20 at 11:59 PM | 100 pts
              </span>
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-1 align-items-center">
              <BsGripVertical className="me-0 fs-3" />
              <MdAssignment className="me-0 fs-4 text-success" />
              <LessonControlButtons />
              <a
                href="#/Kambaz/Courses/1234/Assignments/3"
                className="text-decoration-none text-reset"
              >
                <span className="fw-semibold"> A3</span>
              </a>
              <br />
              <span className="me-2 fs-6 text-danger">Multiple Modules</span>
              <span className="me-2 fs-6">
                {" "}
                | Not available until May 20 at 12:00 AM |
              </span>
              <br />
              <span className="me-2 fs-6">
                Due May 27 at 11:59 PM | 100 pts
              </span>
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
