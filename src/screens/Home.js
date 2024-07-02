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
    console.log(response);
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
        {genreData.length !== 0
          ? genreData.map((data) => {
              return (
                <div className="row mb-3">
                  <div key={data._id} className="fs-3 m-3">
                    {data.genreName}
                  </div>
                  <hr />
                  {bookData.length !== 0 ? (
                    bookData
                      .filter((item) => item.genreName === data.genreName)
                      .map((fitlerItems) => {
                        return (
                          <div
                            id={fitlerItems._id}
                            className="col-12 col-md-6 col-lg-3"
                          >
                            <Card bookData={fitlerItems}></Card>
                          </div>
                        );
                      })
                  ) : (
                    <div>No such Element exists</div>
                  )}
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
}

export default Home;
