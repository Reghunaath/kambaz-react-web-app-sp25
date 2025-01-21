import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1001/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/Economics.jpg" width={200} />
            <div>
              <h5> EC1001 ME </h5>
              <p className="wd-dashboard-course-title">Macro Economics </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1002/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/quantum.jpg" width={200} />
            <div>
              <h5> PH1002 QM </h5>
              <p className="wd-dashboard-course-title">Quantum Mechanics </p>
              <button> Go </button>
            </div>
          </Link>{" "}
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1003/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/greek.jpg" width={200} />
            <div>
              <h5> CS1003 Greek Mythology </h5>
              <p className="wd-dashboard-course-title">
                Intro to Greek Mythology{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1004/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/Astronomy.jpg" width={200} />
            <div>
              <h5> PH1004 Astronomy </h5>
              <p className="wd-dashboard-course-title">
                Introduction to Astronomy{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
      <div className="wd-dashboard-course">
        <Link
          to="/Kambaz/Courses/1005/Home"
          className="wd-dashboard-course-link"
        >
          <img src="/images/ml.jpg" width={200} />
          <div>
            <h5> CS1005 ML </h5>
            <p className="wd-dashboard-course-title">
              Intro to Machine learning{" "}
            </p>
            <button> Go </button>
          </div>
        </Link>
      </div>
      <div className="wd-dashboard-course">
        <Link
          to="/Kambaz/Courses/1006/Home"
          className="wd-dashboard-course-link"
        >
          <img src="/images/pandemic.jpg" width={200} />
          <div>
            <h5> BL1006 Pandemics </h5>
            <p className="wd-dashboard-course-title">Potential pandemics </p>
            <button> Go </button>
          </div>
        </Link>
      </div>
    </div>
  );
}
