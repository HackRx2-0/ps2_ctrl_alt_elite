import { Link } from "react-router-dom";
import SignUp from "./SignUp/SignUp";
import "./StartPage.scss";

const StartPage = () => {
  return (
    <div className="App">
      <div className="appAside">
      </div>
      <div className="appForm">
        <div className="pageSwitcher">
          <Link to="/login" className="pageSwitcherItem leftItem">
            Sign In
          </Link>
          <Link exact to="/signup" className="pageSwitcherItem-active rightItem">
            Sign Up
          </Link>
        </div>
        <div className="formTitle">
          <Link to="/login" className="formTitleLink2">
            Sign In
          </Link>{" "}
          or{" "}
          <Link exact to="/signup" className="formTitleLink">
            Sign Up
          </Link>
        </div>
        <SignUp />
      </div>
    </div>
  );
};

export default StartPage;