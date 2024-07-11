import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

function BookReview() {
  const { bookId } = useParams();
  const [book, setbook] = useState([]);
  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/getbook", {
      method: "GET",
      headers: {
        Authorization: `${bookId}`,
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    console.log(response);
    setbook(response);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <h1 className="text-lg-start m-3 display-4">{book.title}</h1>
      <h3 className="text-lg-start m-3 display 4">
        <small className="text-muted">By {book.authorName}</small>
      </h3>
      <img src={`./book-pics/${book.imgSource}.jpg`} />
      <hr />
      <div className="m-3">
        <p className=" fs-4 fw-bold">Lender Details:</p>
        <p className="fs-6">Name : {book.lenderName}</p>
        <p className="fs-6">Email : {book.lenderEmail}</p>
      </div>
      <hr />
      <div className="container">
        <button type="button" className="btn btn-primary m-3">
          Rent Now
        </button>
        <div class="d-flex justify-content-end">
          <div class="p-2">
            <h1>{book.rate}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookReview;
