import React from "react";

function Footer() {
  return (
    <div style={{ background: "#EEA7A7", padding: "20px 20px" }}>
      <div style={{ display: "flex" }}>
        <img
          src="/assets/lower-logo.png"
          style={{
            background: "#EEA7A7",
            width: "80px",
            height: "80px",
            margin: "-10px 0 20px 20px",
          }}
        />
        <div className="ms-auto" style={{ marginRight: "50px" }}>
          <p style={{ color: "#FFF", fontWeight: "500" }}>Follow Us</p>
          <i
            class="fa fa-instagram"
            style={{ marginRight: "10px", fontSize: "15px", color: "#5851DB" }}
          ></i>
          <i
            class="fa fa-twitter"
            style={{ marginRight: "10px", fontSize: "15px", color: "#00ACEE" }}
          ></i>
          <i class="fa fa-facebook" style={{ color: "blue" }}></i>
        </div>
      </div>

      <table class="table table-borderless">
        <thead>
          <tr>
            <th>Products</th>
            <th>About Us</th>
            <th>Informations</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Price Drop</td>
            <td>Price Drop</td>
            <td>Price Drop</td>
          </tr>
          <tr>
            <td>Best Sale</td>
            <td>Best Sale</td>
            <td>Best Sale</td>
          </tr>
          <tr>
            <td>New Product</td>
            <td>New Product</td>
            <td>New Product</td>
          </tr>
          <tr>
            <td>New Season</td>
            <td>New Season</td>
          </tr>
          <tr>
            <td>New Arrival</td>
            <td>New Arrival</td>
          </tr>
        </tbody>
      </table>
      <p className="p">
        Lorem Ipsum has been the industry's standard dummtext ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book. It has survived not only five centuries, but
        also the leap into electronic typesetting,
      </p>
    </div>
  );
}

export default Footer;
