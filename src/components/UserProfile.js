import React from "react";
import { Link } from "react-router-dom";

function UserProfile(props) {
  return (
    <div>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-12 col-xl-4">
              <div className="card" style={{ borderRadius: "15px" }}>
                <div className="card-body text-center">
                  <div className="mt-3 mb-4">
                    <img
                      src="./user-profile.webp"
                      className="rounded-circle img-fluid"
                      style={{ width: "100px" }}
                    />
                  </div>
                  <h4 className="mb-2">{props.userData.name}</h4>
                  <p className="text-muted">{props.userData.email}</p>
                  <p className="text-muted">{props.userData.location}</p>
                  <Link to="/addbook">
                    <button
                      type="button"
                      data-mdb-button-init
                      data-mdb-ripple-init
                      className="btn btn-primary btn-rounded btn-md"
                    >
                      <h5>Add Book</h5>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UserProfile;
