import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Account() {
  return (
    <div>
      <Navbar></Navbar>
      <p>This is Accounts page</p>
      <Link
        to="/addbook"
        className="btn btn-primary"
        style={{ borderRadius: "40%" }}
      >
        +
      </Link>
    </div>
  );
}

export default Account;
