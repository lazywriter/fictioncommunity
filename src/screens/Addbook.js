import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function Addbook() {
  const [bookData, setbookData] = useState({
    imgSource: "",
    title: "",
    authorName: "",
    lenderId: "",
    description: "",
    genreName: "",
    rate: 0,
  });

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await fetch("http://localhost:5000/api/createbook", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        imgSource: bookData.imgSource,
        title: bookData.title,
        authorName: bookData.authorName,
        description: bookData.description,
        genreName: bookData.genreName,
        rate: bookData.rate,
      }),
    });

    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("Data Addition Failed");
    }
    if (json.success) {
      navigate("/account");
    }
  };

  const onChange = (event) => {
    setbookData({ ...bookData, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="container" onSubmit={handleSubmit}>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Image Soruce
            </label>
            <input
              type="text"
              className="form-control"
              name="imgSource"
              value={bookData.imgSource}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              name="title"
              value={bookData.title}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Author Name
            </label>
            <input
              type="text"
              className="form-control"
              name="authorName"
              value={bookData.authorName}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Genre
            </label>
            <input
              type="text"
              className="form-control"
              name="genreName"
              value={bookData.genreName}
              onChange={onChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              name="description"
              value={bookData.description}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Rate per week
            </label>
            <input
              type="number"
              className="form-control"
              name="rate"
              value={bookData.rate}
              onChange={onChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
}

export default Addbook;
