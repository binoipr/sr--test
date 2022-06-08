import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const data = [
  {
    image: require("../Images/summer1.jpg"),
    caption: "Summer Collections",
    description: "55 items",
  },
  {
    image: require("../Images/summer2.jpg"),
    caption: "Kurties",
    description: "70 items",
  },
  {
    image: require("../Images/summer3.jpg"),
    caption: "Bags",
    description: "35 items",
  },
];

function Itemlist() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div style={{ background: "#f8f3f2", paddingTop: "15px" }}>
      {/* -------------title---------- */}

      <h5
        className="h5 d-flex justify-content-center"
        style={{ marginTop: "35px", fontWeight: "800" }}
      >
        Featured Categories
      </h5>
      <p
        className="h6 d-flex justify-content-center"
        style={{ fontSize: "12px" }}
      >
        Visit our shop to see amazing creations from our fasion house
      </p>

      {/* --------Carousel-----*/}

      <Carousel activeIndex={index} onSelect={handleSelect}>
        {data.map((slide, i) => {
          return (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={slide.image}
                alt="slider image"
              />
              <Carousel.Caption>
                <h3>{slide.caption}</h3>
                <p>{slide.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>

      {/* --------------------------- */}
      <hr style={{ width: "70%", margin: "30px auto 30px auto" }} />
      <img src="/assets/4.png" className="card-img" alt="Trendy" />
      <h5
        className="h5"
        style={{
          paddingLeft: "50px",
          fontSize: "30px",
          color: "#D47070",
          fontWeight: "800",
        }}
      >
        Trendy Outfit of the day
      </h5>
      <p style={{ paddingLeft: "50px", fontSize: "10px", marginRight: "30px" }}>
        Refresh your style with on-trend pieces from our best
        clothingcollection. It was popularised in the 1960s with the release of
        Letraset sheets containing Lorem Ipsum.
      </p>

      <hr style={{ width: "70%", margin: "30px auto 30px auto" }} />

      {/* ---------------cards-------------- */}

      <h5 className="h5 d-flex justify-content-center">New In The Season</h5>
      <p style={{ textAlign: "center" }}>
        Visit our shop to see amazing creations from our fasion house
      </p>

      <div
        id="lower-card"
        style={{ backgroundColor: "#f8f3f2", display: "flex", margin: "5px" }}
      >
        <div
          className="card"
          style={{ backgroundColor: "#f8f3f2", border: "none" }}
        >
          <img src="/assets/coat1.jpg" class="card-img-top" alt="Card" />
          <div className="card-body" style={{ backgroundColor: "#f8f3f2" }}>
            <h5 className="card-title">Women Jacket</h5>
            <p className="card-text">$:25.00</p>
            <ul
              className="stars"
              style={{ listStyle: "none", paddingLeft: "0" }}
            >
              <li style={{ color: "yellow" }}>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half-o"></i>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="card"
          style={{ backgroundColor: "#f8f3f2", border: "none" }}
        >
          <img src="/assets/Kurtis.jpg" class="card-img-top" alt="Card" />
          <div className="card-body" style={{ backgroundColor: "#f8f3f2" }}>
            <h5 className="card-title">Women Long Top</h5>
            <p className="card-text">$:25.00</p>
            <ul
              className="stars"
              style={{ listStyle: "none", paddingLeft: "0" }}
            >
              <li style={{ color: "yellow" }}>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half-o"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <img
        src="/assets/lower-logo.png"
        className="card-img mx-auto d-block"
        alt="Lower Logo"
        style={{ width: "111px", height: "120px", marginTop: "-10px" }}
      />
    </div>
  );
}

export default Itemlist;
