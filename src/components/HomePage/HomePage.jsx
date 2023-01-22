import React from "react";
import { Link } from "react-router-dom";
import Login from "../Log in/Login";
import "./HomePage.css";
export default function HomePage() {
  return (
    <>
      <div className="bgImg">
        <img className="position-absolute" src="../../imges/logo.png" alt="" />
        <h3 className="myFont">המתכונים שלי</h3>
        <div className="" style={{}}><Login/></div>
        <div className=" justify-content-center d-flex">
          <span>
            <Link className="nav-link active">About Us</Link>
          </span>
        </div>
      </div>
    </>
  );
}
