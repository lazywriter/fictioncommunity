import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import UserProfile from "../components/UserProfile";

function Account() {
  const [user, setuser] = useState({});

  const loadData = async () => {
    const token = localStorage.getItem("authToken");
    let response = await fetch("http://localhost:5000/api/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    setuser(response);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <UserProfile userData={user}></UserProfile>
      <hr />
    </div>
  );
}

export default Account;
