import React from "react";
import "react-bootstrap";
import { Link } from "react-router-dom";

const footer = () => {
  return (
    <footer className="py-3">
      <div className="d-flex justify-content-center">
        <Link className="link px-2" to="#main">
          MAIN
        </Link>
        <Link className="link px-2" to="#about">
          ABOUT
        </Link>
        <Link className="link px-2" to="#game">
          GAME FEATURES
        </Link>
        <Link className="link px-2" to="#system">
          SYSTEM REQUIREMENTS
        </Link>
        <Link className="link px-2" to="#quotes">
          QUOTES
        </Link>
      </div>
      <hr />
      <div className="d-flex justify-content-between">
        <p> &copy; 2021 Suit-Games, Inc. All Rights Reserved</p>
        <p> PRIVACY POLICY | TERMS OF SERVICES | CODE OF CONDUCT</p>
      </div>
    </footer>
  );
};
export default footer;
