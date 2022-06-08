import React, { useState } from "react";

function Navbar() {
  const [isopen, setIsopen] = useState(true);
  const toggle = () => {
    setIsopen(!isopen);
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div
          className="container-fluid"
          style={{
            background: "#f8f3f2",
            margin: "-10px  0 -20px 0",
          }}
        >
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={!isopen ? true : false}
            onClick={toggle}
            aria-label="Toggle navigation"
            style={{ border: "none" }}
          >
            <img
              src="/assets/sort.png"
              className="img-responsive"
              style={{
                width: "30px",
                height: "30px ",
              }}
            ></img>
          </button>

          <img
            src="/assets/lower-logo.png"
            className="img-responsive mx-auto d-block"
            alt=""
            width="120"
            height="120"
            style={{
              marginTop: "20px",
            }}
          />

          <div
            className={`${isopen ? "collapse" : ""} navbar-collapse`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item ">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
            </ul>
          </div>
          <div className="nav-icons">
            <i class="fa fa-heart" id="nav-heart"></i>
            <i className="fa fa-shopping-bag ms-3" id="nav-bag"></i>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
