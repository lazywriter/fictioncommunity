import React from "react";

function Card(props) {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="..."
          className="card-img-top"
          alt="..."
          style={{ height: "120px", objectFit: "fill" }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.bookData.title}</h5>
          <p className="card-text"></p>
        </div>
      </div>
    </div>
  );
}

export default Card;
