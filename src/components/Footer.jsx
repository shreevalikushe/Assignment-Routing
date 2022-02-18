import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "3rem",
        width: "600px",
        margin: " 50px auto",
        backgroundColor: "#F1D00A",
        padding: "20px",
      }}
    >
      <span>Footer</span>
      <Link to="/career">Job Opportunities</Link>
      <Link to="/linkedin">Linkedin</Link>
      <Link to="/instagram">Instagram</Link>
      <Link to="/facebook">Facebook</Link>
    </div>
  );
};
