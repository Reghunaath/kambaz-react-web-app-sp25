import { Link } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { LiaBookSolid } from "react-icons/lia";
import { FaRegCircleUser } from "react-icons/fa6";
import { HiBeaker } from "react-icons/hi2";
import { BiCalendar } from "react-icons/bi";
import { CgInbox } from "react-icons/cg";
export default function KambazNavigation() {
  return (
    <div
      id="wd-kambaz-navigation"
      style={{ width: 110 }}
      className="list-group rounded-0 position-fixed
    bottom-0 top-0 d-none d-md-block bg-black z-2"
    >
      <a
        id="wd-neu-link"
        target="_blank"
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center"
      >
        <img src="/images/NEU.png" width="75px" />
      </a>
      <Link
        to="/Kambaz/Account"
        id="wd-account-link"
        className="list-group-item text-center border-0 bg-black text-white"
      >
        <FaRegCircleUser className="fs-1 text text-white" />
        Account{" "}
      </Link>
      <Link
        to="/Kambaz/Dashboard"
        id="wd-dashboard-link"
        className="list-group-item text-center border-0
               bg-white text-danger"
      >
        <AiOutlineDashboard className="fs-1 text-danger" />
        Dashboard{" "}
      </Link>
      <Link
        to="/Kambaz/Dashboard"
        id="wd-course-link"
        className="list-group-item text-white
               bg-black text-center border-0"
      >
        <LiaBookSolid className="fs-1 text-danger" />
        Courses{" "}
      </Link>
      <Link
        to="/Kambaz/Calendar"
        id="wd-calendar-link"
        className="list-group-item text-white
               bg-black text-center border-0"
      >
        <BiCalendar className="fs-1 text-danger" />
        Calendar{" "}
      </Link>
      <Link
        to="/Kambaz/Inbox"
        id="wd-inbox-link"
        className="list-group-item text-white
               bg-black text-center border-0"
      >
        <CgInbox className="fs-1 text-danger" />
        <br />
        Inbox{" "}
      </Link>
      <Link
        to="/Labs"
        id="wd-labs-link"
        className="list-group-item text-white
               bg-black text-center border-0"
      >
        <HiBeaker className="fs-1 text-danger" />
        <br />
        Labs{" "}
      </Link>
      <br />
    </div>
  );
}
