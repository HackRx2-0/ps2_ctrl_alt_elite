import "./styles.scss";
import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaHome } from 'react-icons/fa';

const Header = () => {
  const [error, setError] = useState("");
  const { logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/");
    } catch {
      setError("Failed to log out");
    }
  }
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="/" className="menu-bars">
            <FaHome/>
          </Link>
          <button className="btn btn-header">
            <Link to="/login" className="menu-bars" onClick={handleLogout}>
              Logout
            </Link>
          </button>
        </div>
      </IconContext.Provider>
    </>
  );
};
export default Header;