import React from "react";

function Card(props) {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={`./book-pics/${props.bookData.imgSource}.jpg`}
          className="card-img-top"
          alt="..."
          style={{ height: "350px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h3 className="card-title">{props.bookData.title}</h3>
          <h5 className="card-title lead">{props.bookData.authorName}</h5>
          <hr />
          <p className="card-text">{props.bookData.description}</p>
          <strong className="card-title">
            Rent per week : Rs.{props.bookData.rate}
          </strong>
        </div>
      </div>
    </div>
  );
}

export default Card;
