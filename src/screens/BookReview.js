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
      <img
        src={`${process.env.PUBLIC_URL}/book-pics/${book.imgSource}.jpg`}
        alt={book.title}
        style={{ height: "25em", marginLeft: "40%" }}
      />
      <hr />
      <div className="m-3">
        <p>{book.description}</p>
        <p className=" fs-4 fw-bold">Lender Details:</p>
        <p className="fs-6">Name : {book.lenderName}</p>
        <p className="fs-6">Email : {book.lenderEmail}</p>
        <p className=" fs-4 fw-bold">Weekly Rent : Rs.{book.rate}</p>
        <button
          className="btn btn-outline-primary"
          style={{ marginTop: "1em" }}
        >
          Rent Now
        </button>
      </div>
      <hr />
    </div>
  );
}

export default BookReview;
