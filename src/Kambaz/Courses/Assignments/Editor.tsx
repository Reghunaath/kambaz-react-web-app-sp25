import {
  Button,
  FormCheck,
  FormControl,
  FormGroup,
  FormLabel,
  FormSelect,
} from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addAssignment, updateAssignment } from "./reducer";
import { v4 as uuidv4 } from "uuid";
const assignOptions = [
  { value: "everyone", label: "Everyone" },
  { value: "group1", label: "Group 1" },
  { value: "group2", label: "Group 2" },
  { value: "group3", label: "Group 3" },
];
export default function AssignmentEditor() {
  const navigate = useNavigate();
  const { assignments } = useSelector((state: any) => state.assignmentReducer);
  const dispatch = useDispatch();
  const { cid, aid } = useParams();
  const assignment = assignments.find(
    (assignment: any) => assignment._id === aid && assignment.course === cid
  );

  const [title, setTitle] = useState(assignment?.title ?? "");
  const [description, setDescription] = useState(assignment?.description ?? "");
  const [points, setPoints] = useState(assignment?.points ?? "");
  const [due_date, setDue_date] = useState(assignment?.due_date ?? "");
  const [available_date, setAvailable_date] = useState(
    assignment?.available_date ?? ""
  );
  const handleSave = () => {
    if (assignment) {
      const updatedAssignment = {
        ...assignment,
        title,
        description,
        points,
        due_date,
        available_date,
      };
      dispatch(updateAssignment(updatedAssignment));
    } else {
      const newAssignment = {
        title,
        description,
        points,
        due_date,
        available_date,
        _id: uuidv4(),
        course: cid,
      };
      dispatch(addAssignment(newAssignment));
    }

    navigate(`/Kambaz/Courses/${cid}/Assignments`);
  };
  return (
    <div id="wd-assignments-editor">
      <FormGroup className="mb-3" controlId="wd-email">
        <FormLabel>Assignment Name</FormLabel>
        <FormControl value={title} onChange={(e) => setTitle(e.target.value)} />
      </FormGroup>
      <FormGroup className="mb-3" controlId="wd-textarea">
        <FormControl
          as="textarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          rows={3}
        />
      </FormGroup>
      <FormGroup
        controlId="wd-points"
        className="mb-3 d-flex align-items-center justify-content-end"
      >
        <FormLabel className="me-2 mb-0">Points</FormLabel>
        <FormControl
          className="w-50"
          onChange={(e) => setPoints(e.target.value)}
          value={points}
        />
      </FormGroup>
      <FormGroup
        controlId="wd-group"
        className="mb-3 d-flex align-items-center justify-content-end"
      >
        <FormLabel className="me-2 mb-0">Assignment Group</FormLabel>
        <FormSelect className="w-50">
          <option selected>Group 1</option>
          <option value="1">Group 1</option>
          <option value="2">Group 2</option>
          <option value="3">Group 3</option>
        </FormSelect>
      </FormGroup>
      <FormGroup
        controlId="wd-points"
        className="mb-3 d-flex align-items-center justify-content-end"
      >
        <FormLabel className="me-2 mb-0">Display Grade as</FormLabel>
        <FormSelect className="w-50">
          <option selected>Percentage</option>
          <option value="1">Percentage</option>
          <option value="2">Points</option>
        </FormSelect>
      </FormGroup>
      <FormGroup
        controlId="wd-submission-type"
        className="mb-3 d-flex  justify-content-end"
      >
        <FormLabel className="me-2 mb-0">Submission Type</FormLabel>
        <div className="border rounded p-3 shadow-sm w-50">
          <FormGroup className="mb-3">
            <FormSelect>
              <option>Online</option>
              <option>Offline</option>
            </FormSelect>
          </FormGroup>
          <FormLabel className="mb-2 fw-bold">Online Entry Options</FormLabel>
          <FormGroup>
            <FormCheck type="checkbox" label="Text Entry" />
            <FormCheck type="checkbox" label="Website URL" defaultChecked />
            <FormCheck type="checkbox" label="Media Recordings" />
            <FormCheck type="checkbox" label="Student Annotation" />
            <FormCheck type="checkbox" label="File Uploads" />
          </FormGroup>
        </div>
      </FormGroup>
      <FormGroup
        controlId="wd-assign"
        className="mb-3 d-flex  justify-content-end"
      >
        <FormLabel className="me-2 mb-0">Assign</FormLabel>
        <div className="border rounded p-3 shadow-sm w-50">
          <FormGroup className="mb-3">
            <FormLabel className="fw-bold">Assign to</FormLabel>
            <Select
              options={assignOptions}
              isMulti
              defaultValue={[assignOptions[0]]}
            />
          </FormGroup>
          <FormGroup className="mb-3">
            <FormLabel className="fw-bold">Due</FormLabel>
            <FormControl
              type="datetime-local"
              onChange={(e) => setDue_date(e.target.value)}
              defaultValue={due_date}
            />
          </FormGroup>

          <div className="d-flex gap-2">
            <FormGroup className="w-50">
              <FormLabel className="fw-bold">Available from</FormLabel>
              <FormControl
                type="datetime-local"
                defaultValue={available_date}
                onChange={(e) => setAvailable_date(e.target.value)}
              />
            </FormGroup>

            <FormGroup className="w-50">
              <FormLabel className="fw-bold">Until</FormLabel>
              <FormControl type="datetime-local" />
            </FormGroup>
          </div>
        </div>
      </FormGroup>
      <hr />
      <Button
        variant="danger"
        className="me-1 float-end"
        id="wd-add-module-btn"
        onClick={handleSave}
      >
        Save
      </Button>
      <a href={`#/Kambaz/Courses/${cid}/Assignments`}>
        <Button
          variant="secondary"
          className="me-1 float-end"
          id="wd-add-module-btn"
        >
          Cancel
        </Button>
      </a>
    </div>
  );
}
