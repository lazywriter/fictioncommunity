import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Account() {
  const [user, setuser] = useState({});

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

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <div>
        <section className="vh-100">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-12 col-xl-4">
                <div className="card" style={{ borderRadius: "15px" }}>
                  <div className="card-body text-center">
                    <div className="mt-3 mb-4">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                        className="rounded-circle img-fluid"
                        style={{ width: "100px" }}
                      />
                    </div>
                    <h4 className="mb-2">{user.name}</h4>
                    <p className="text-muted mb-4">
                      {user.email} <span className="mx-2">|</span>{" "}
                    </p>
                    <div className="mb-4 pb-2">
                      <button
                        type="button"
                        data-mdb-button-init
                        data-mdb-ripple-init
                        className="btn btn-outline-primary btn-floating"
                      >
                        <i className="fab fa-facebook-f fa-lg"></i>
                      </button>
                      <button
                        type="button"
                        data-mdb-button-init
                        data-mdb-ripple-init
                        className="btn btn-outline-primary btn-floating"
                      >
                        <i className="fab fa-twitter fa-lg"></i>
                      </button>
                      <button
                        type="button"
                        data-mdb-button-init
                        data-mdb-ripple-init
                        className="btn btn-outline-primary btn-floating"
                      >
                        <i className="fab fa-skype fa-lg"></i>
                      </button>
                    </div>
                    <Link to="/addbook">
                      <button
                        type="button"
                        data-mdb-button-init
                        data-mdb-ripple-init
                        className="btn btn-primary btn-rounded btn-lg"
                      >
                        Add Books for Lending
                      </button>
                    </Link>

                    <div className="d-flex justify-content-between text-center mt-5 mb-2">
                      <div>
                        <p className="mb-2 h5">8471</p>
                        <p className="text-muted mb-0">Wallets Balance</p>
                      </div>
                      <div className="px-3">
                        <p className="mb-2 h5">8512</p>
                        <p className="text-muted mb-0">Income amounts</p>
                      </div>
                      <div>
                        <p className="mb-2 h5">4751</p>
                        <p className="text-muted mb-0">Total Transactions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Account;
