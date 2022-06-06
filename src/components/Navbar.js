import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="nav-container">
        <div className="nav-left">
          <Link to="/">
            <p>
              <span>K</span>rypto
            </p>
          </Link>
        </div>
        <div className="nav-right">
          <h4>
            <Link to="/">home</Link>
          </h4>
          <h4>
            <Link to="/about">about us</Link>
          </h4>
        </div>
      </nav>
    </>
  );
}
