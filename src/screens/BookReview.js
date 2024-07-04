import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

  return <div>{book.title}</div>;
}

export default BookReview;
