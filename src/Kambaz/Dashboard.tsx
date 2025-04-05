import { Button, Card, Col, FormControl, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {} from "./Courses/reducer";
import { useEffect, useState } from "react";
import * as courseClient from "./Courses/client";
import * as userClient from "./Account/client";

export default function Dashboard() {
  const [isEnrollment, setIsEnrollment] = useState(false);
  const [courseName, setCourseName] = useState("");
  const [courseId, setCourseId] = useState("");
  const [course, setCourse] = useState<any>({});
  const [courseDescription, setCourseDescription] = useState("");
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser.role === "FACULTY";
  const [courses, setCourses] = useState<any[]>([]);
  const [allCourses, setAllCourses] = useState<any[]>([]);
  const fetchCourses = async () => {
    try {
      const courses = await userClient.findMyCourses();
      const allCourses = await courseClient.fetchAllCourses();
      setCourses(courses);
      setAllCourses(allCourses);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, [currentUser]);

  const addNewCourse = async (coursenew: any) => {
    const newCourse = await userClient.createCourse(coursenew);
    setCourses([...courses, newCourse]);
    setAllCourses([...allCourses, newCourse]);
  };
  const deleteCourse = async (courseId: string) => {
    const status = await courseClient.deleteCourse(courseId);
    console.log(status);
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = async () => {
    await courseClient.updateCourse(course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  const handleEnroll = async (courseId: string) => {
    userClient.enroll_unenroll(courseId);
    const courseToAdd = allCourses.find((course) => course._id === courseId);
    setCourses([...courses, courseToAdd]);
  };

  const handleUnenroll = async (courseId: string) => {
    userClient.enroll_unenroll(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  return (
    <div id="wd-dashboard" style={{ position: "relative" }}>
      <Button
        variant="primary"
        className="position-absolute top-0 end-0 m-2"
        onClick={() => {
          setIsEnrollment((prev) => !prev);
        }}
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
                setCourse({
                  name: courseName,
                  description: courseDescription,
                });
                const newCourse = {
                  name: courseName,
                  description: courseDescription,
                };
                console.log(course);
                addNewCourse(newCourse);
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
                setCourse({
                  _id: courseId,
                  name: courseName,
                  description: courseDescription,
                });
                updateCourse();
              }}
            >
              Update
            </button>
          </h5>
          <br />
          <FormControl
            placeholder="New Course"
            value={courseName}
            className="mb-2"
            onChange={(e) => setCourseName(e.target.value)}
          />
          <FormControl
            as="textarea"
            placeholder="New Description"
            value={courseDescription}
            rows={3}
            onChange={(e) => setCourseDescription(e.target.value)}
          />
          <hr />
        </>
      )}
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {(isEnrollment ? allCourses : courses).map((course: any) => {
            const isEnrolled = courses.some((c: any) => c._id === course._id);

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
                              deleteCourse(course._id);
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
                              setCourseId(course._id);
                              setCourseName(course.name);
                              setCourseDescription(course.description);
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
