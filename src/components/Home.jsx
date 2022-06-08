import React from "react";

function Home() {
  return (
    <div className="hero container">
      <div
        className="card text-white border-0 card-home"
        style={{
          backgroundColor: "#ffe6e1",
          margin: "-18px -12px 0 -12px",
        }}
      >
        <img
          src="/assets/1.png"
          alt="Background-image"
          className="ms-auto d-block"
          style={{
            background: "#FFE6E1 ",
            height: "390px",
            paddingTop: "30px",
          }}
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5
              className="h3card-title fw-bolder mb-2"
              style={{ color: "black", fontWeight: "800" }}
            >
              EXPLORE
            </h5>
            <h6
              className="card-title fw-bolder mb-2"
              style={{
                color: "#d47070",
                fontWeight: "800",
              }}
            >
              YOUR STYLE
            </h6>
            <p
              className="card-text mb-2"
              style={{
                color: "black",
                fontSize: "13px",
                paddingRight: "170px",
              }}
            >
              Refresh your style with on-trend pieces from our best cloathing
              collection
            </p>

            <button type="button" className="btn btn-xs" id="home-button">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
