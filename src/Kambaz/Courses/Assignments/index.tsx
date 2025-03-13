import {
  Button,
  FormControl,
  FormGroup,
  InputGroup,
  ListGroup,
} from "react-bootstrap";
import { BsGripVertical, BsSearch } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { BiCaretDown } from "react-icons/bi";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { MdAssignment } from "react-icons/md";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

export default function Assignments() {
  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentReducer);
  const assignment = assignments.filter(
    (assignment: any) => assignment.course === cid
  );
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser.role === "FACULTY";
  const dateFormater = (s: string): string => {
    const d = new Date(s);
    const m = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ][d.getMonth()];
    let h = d.getHours();
    const min = d.getMinutes();
    const per = h >= 12 ? "pm" : "am";
    h = h % 12 || 12;
    const hh = h < 10 ? `0${h}` : h;
    const mm = min < 10 ? `0${min}` : min;
    return `${m} ${d.getDate()} at ${hh}:${mm}${per}`;
  };
  return (
    <div id="wd-assignments">
      <div className="d-flex justify-content-end align-items-center gap-2">
        <FormGroup>
          <InputGroup
            id="wd-search-assignment"
            className="mb-0 text-nowrap float-end"
          >
            <InputGroup.Text>
              <BsSearch />
            </InputGroup.Text>
            <FormControl placeholder="Search..." />
          </InputGroup>
        </FormGroup>
        {isFaculty && (
          <>
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
            <a
              href={`#/Kambaz/Courses/${cid}/Assignments/${uuidv4()}`}
              className="text-decoration-none text-reset fw-semibold"
            >
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
            </a>
          </>
        )}
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
            {assignment.map((assig: any) => (
              <ListGroup.Item className="wd-lesson p-3 ps-1">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <MdAssignment className="me-2 fs-4 text-success" />
                  <div className="flex-grow-1">
                    <a
                      href={`#/Kambaz/Courses/${assig.course}/Assignments/${assig._id}`}
                      className="text-decoration-none text-reset fw-semibold"
                    >
                      {assig.title}
                    </a>
                    <br />
                    <span className="fs-6 text-danger">Multiple Modules</span>
                    <span className="fs-6">
                      {" "}
                      | Not available until {dateFormater(
                        assig.available_date
                      )}{" "}
                      |
                    </span>
                    <br />
                    <span className="fs-6">
                      Due {dateFormater(assig.due_date)} | {assig.points} pts
                    </span>
                  </div>
                  <LessonControlButtons />
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
