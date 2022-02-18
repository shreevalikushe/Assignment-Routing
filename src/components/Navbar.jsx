import React from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "3rem",
        width: "1050px",
        margin: " 50px auto",
        backgroundColor: "#F1D00A",
        padding: "20px",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/women">Women's Wear</Link>
      <Link to="/men">Men's Wear</Link>
      <h2 style={{ padding: "0px", margin: "0px" }}>E-commerce Website</h2>
      <Link to="/about">About</Link>
      <Link to="/faq">FAQ</Link>
      <Link to="/contact">Contact Us</Link>
      <Link to="/cart">
        <img
          style={{
            maxWidth: "15px",
            maxHeight: "15px",
            padding: "0px",
            margin: "0px",
          }}
          src="https://i.pinimg.com/originals/15/4f/df/154fdf2f2759676a96e9aed653082276.png"
        />
        Cart{" "}
      </Link>
    </div>
  );
};
