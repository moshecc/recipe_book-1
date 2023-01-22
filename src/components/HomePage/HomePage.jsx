import React from "react";
import { Link } from "react-router-dom";
import Login from "../Log in/Login";
import "./HomePage.css";
import ""
export default function HomePage() {
  return (
    <>
      <div className="bgImg">
        <img className="position-absolute" src="../../imges/logo.png" alt="" />
        <h1 className="myFont">המתכונים שלי</h1>
<<<<<<< HEAD
        <div className="h-50">
        </div>

=======
        <div className="h-50"></div>
        <Login/>
>>>>>>> 22de30ab4519a83f391c992f460bd28fe01fda7d
        <div className=" justify-content-center d-flex">
          <span>
            <Link className="nav-link active">about us</Link>
          </span>
        </div>
      </div>
    </>
  );
}
