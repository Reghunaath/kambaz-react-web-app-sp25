import {
  Button,
  DropdownButton,
  DropdownItem,
  Form,
  FormCheck,
  FormControl,
  FormGroup,
  FormLabel,
  FormSelect,
} from "react-bootstrap";
import Select from "react-select";
const assignOptions = [
  { value: "everyone", label: "Everyone" },
  { value: "group1", label: "Group 1" },
  { value: "group2", label: "Group 2" },
  { value: "group3", label: "Group 3" },
];
export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <FormGroup className="mb-3" controlId="wd-email">
        <FormLabel>Assignment Name</FormLabel>
        <FormControl value="A1" />
      </FormGroup>
      <FormGroup className="mb-3" controlId="wd-textarea">
        <FormControl as="textarea" value="lorem ipsom" rows={3} />
      </FormGroup>
      <FormGroup
        controlId="wd-points"
        className="mb-3 d-flex align-items-center justify-content-end"
      >
        <FormLabel className="me-2 mb-0">Points</FormLabel>
        <FormControl className="w-50" value="0" />
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
            <FormControl type="datetime-local" />
          </FormGroup>

          <div className="d-flex gap-2">
            <FormGroup className="w-50">
              <FormLabel className="fw-bold">Available from</FormLabel>
              <FormControl type="datetime-local" />
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
      >
        Save
      </Button>
      <Button
        variant="secondary"
        className="me-1 float-end"
        id="wd-add-module-btn"
      >
        Cancel
      </Button>
    </div>
  );
}
