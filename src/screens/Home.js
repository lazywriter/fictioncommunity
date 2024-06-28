import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

function Home() {
  const [genreData, setgenreData] = useState([]);
  const [bookData, setbookData] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/bookData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    setgenreData(response[1]);
    setbookData(response[0]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <div className="container">
        <Card />
      </div>
    </div>
  );
}

export default Home;
