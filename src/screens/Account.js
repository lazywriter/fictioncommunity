import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import UserProfile from "../components/UserProfile";
import Card from "../components/Card";

function Account() {
  const [user, setuser] = useState({});
  const [bookData, setbookData] = useState([]);

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

  const loadBooks = async () => {
    let response = await fetch("http://localhost:5000/api/bookData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    setbookData(response[0]);
  };

  useEffect(() => {
    loadData();
    loadBooks();
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <UserProfile userData={user}></UserProfile>
      <hr />
      <div className="container">
        <h1 className="mb-2 lead">Books Being Lent By You :</h1>
        <div className="row mb-3">
          {bookData.length !== 0
            ? bookData
                .filter((book) => book.lenderEmail === user.email)
                .map((filterItems) => {
                  return (
                    <div className="col-12 col-md-6 col-lg-3">
                      <Card bookData={filterItems}></Card>
                    </div>
                  );
                })
            : ""}
        </div>
      </div>
    </div>
  );
}

export default Account;
