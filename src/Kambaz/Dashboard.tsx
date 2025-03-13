import { Button, Card, Col, FormControl, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCourse, deleteCourse, updateCourse } from "./Courses/reducer";
import { useState } from "react";
import { addEnrollment, deleteEnrollment } from "./Courses/Enrollment/reducer";

export default function Dashboard({ course }: { course: any }) {
  const dispatch = useDispatch();
  const [isEnrollment, setIsEnrollment] = useState(false);
  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const { courses } = useSelector((state: any) => state.courseReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser.role === "FACULTY";
  const { enrollments } = useSelector((state: any) => state.enrollmentReducer);
  const [courseUpdate, setcourseUpdate] = useState({
    _id: "",
    name: "",
    description: "",
  });

  const handleUpdateCourse = () => {
    if (courseUpdate) {
      dispatch(
        updateCourse({
          ...courseUpdate,
          name: courseName,
          description: courseDescription,
        })
      );
    }
  };

  const handleEnroll = (courseId: string) => {
    console.log("Enroll in course:", courseId);
    dispatch(addEnrollment({ user: currentUser._id, course: courseId }));
  };

  const handleUnenroll = (courseId: string) => {
    console.log("Unenroll from course:", courseId);
    dispatch(deleteEnrollment({ user: currentUser._id, course: courseId }));
  };

  return (
    <div id="wd-dashboard" style={{ position: "relative" }}>
      <Button
        variant="primary"
        className="position-absolute top-0 end-0 m-2"
        onClick={() => setIsEnrollment((prev) => !prev)}
      >
        Enrollment
      </Button>
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      {isFaculty && (
        <>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={() => {
                dispatch(
                  addCourse({
                    name: courseName,
                    description: courseDescription,
                  })
                );
              }}
            >
              {" "}
              Add{" "}
            </button>
            <button
              className="btn btn-warning float-end me-2"
              id="wd-update-course-click"
              onClick={(event) => {
                event.preventDefault();
                handleUpdateCourse();
              }}
            >
              Update
            </button>
          </h5>
          <br />
          <FormControl
            placeholder={course.name}
            className="mb-2"
            onChange={(e) => setCourseName(e.target.value)}
          />
          <FormControl
            as="textarea"
            placeholder={course.description}
            rows={3}
            onChange={(e) => setCourseDescription(e.target.value)}
          />
          <hr />
        </>
      )}
      <h2 id="wd-dashboard-published">
        Published Courses (
        {
          courses.filter((course: any) =>
            enrollments.some(
              (enrollment: any) =>
                enrollment.user === currentUser._id &&
                enrollment.course === course._id
            )
          ).length
        }
        )
      </h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses
            .filter((course: any) =>
              isEnrollment
                ? true
                : enrollments.some(
                    (enrollment: any) =>
                      enrollment.user === currentUser._id &&
                      enrollment.course === course._id
                  )
            )
            .map((course: any) => {
              const isEnrolled = enrollments.some(
                (enrollment: any) =>
                  enrollment.user === currentUser._id &&
                  enrollment.course === course._id
              );

              return (
                <Col
                  className="wd-dashboard-course"
                  style={{ width: "300px" }}
                  key={course._id}
                >
                  <Card>
                    <Link
                      to={`/Kambaz/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark"
                    >
                      <Card.Img
                        src="/images/reactjs.jpg"
                        variant="top"
                        width="100%"
                        height={160}
                      />
                      <Card.Body className="card-body">
                        <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                          {course.name}{" "}
                        </Card.Title>
                        <Card.Text
                          className="wd-dashboard-course-description overflow-hidden"
                          style={{ height: "100px" }}
                        >
                          {course.description}{" "}
                        </Card.Text>
                        <Button variant="primary"> Go </Button>
                        {isFaculty && (
                          <>
                            <button
                              onClick={(event) => {
                                event.preventDefault();
                                dispatch(deleteCourse(course._id));
                              }}
                              className="btn btn-danger float-end"
                              id="wd-delete-course-click"
                            >
                              Delete
                            </button>
                            <button
                              id="wd-edit-course-click"
                              onClick={(event) => {
                                event.preventDefault();
                                setcourseUpdate(course);
                                console.log(course);
                              }}
                              className="btn btn-warning me-2 float-end"
                            >
                              Edit
                            </button>
                          </>
                        )}
                        {isEnrollment && !isEnrolled && (
                          <Button
                            variant="success"
                            className="float-end me-2"
                            onClick={(event) => {
                              event.preventDefault();
                              handleEnroll(course._id);
                            }}
                          >
                            Enroll
                          </Button>
                        )}
                        {isEnrollment && isEnrolled && (
                          <Button
                            variant="danger"
                            className="float-end me-2"
                            onClick={(event) => {
                              event.preventDefault();
                              handleUnenroll(course._id);
                            }}
                          >
                            Unenroll
                          </Button>
                        )}
                      </Card.Body>
                    </Link>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </div>
    </div>
  );
}
