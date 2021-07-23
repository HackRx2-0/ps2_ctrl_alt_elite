import { useRef, useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import "./Login.scss";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  debugger;
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <div className="App">
      <div className="appAside">
        
      </div>
      <div className="appForm">
        {error && <alert variant="danger">{error}</alert>}
        <div className="pageSwitcher">
          <Link to="/login" className="pageSwitcherItem-active leftItem">
            Sign In
          </Link>
          <Link exact to="/signup" className="pageSwitcherItem rightItem">
            Sign Up
          </Link>
        </div>

        <div className="formTitle">
          <Link to="/login" className="formTitleLink">
            Sign In
          </Link>{" "}
          or{" "}
          <Link exact to="/signup" className="formTitleLink2">
            Sign Up
          </Link>
        </div>

        <div className="formCenter">
          <form className="formFields">
            <div className="formField">
              <label className="fromFieldLabel" htmlFor="email">
                E-Mail Address
              </label>
              <input
                type="email"
                id="email"
                className="formFieldInput"
                placeholder="Enter your email"
                name="email"
                ref={emailRef}
              />
            </div>

            <div className="formField">
              <label className="formFieldLabel" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="formFieldInput"
                placeholder="Enter your password"
                name="password"
                ref={passwordRef}
              />
            </div>
            <div className="formField">
              <Link to="/forgotpassword" className="formFieldLink">
                Forgot Password
              </Link>
            </div>

            <div className="formField">
              <button className="formFieldButton" onClick={handleSubmit}>
                Sign In
              </button>{" "}
              <Link to="/signup" className="formFieldLink">
                Create an account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}