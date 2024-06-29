import React from "react";
import { Image } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
const TabMenu = () => {
  const location = useLocation();
  return (
    <>
      <Image src="./welcome-sign1.svg" className="welcome-img" />
      <ul>
        <li>
          <Link
            to="/deposit"
            className={`${
              location.pathname == "/"
                ? "active"
                : location.pathname == "/deposit"
                ? "active"
                : ""
            }`}
          >
            Deposit
          </Link>
        </li>
        <li>
          <Link
            to="/withdraw"
            className={`${location.pathname == "/withdraw" ? "active" : ""}`}
          >
            Withdraw
          </Link>
        </li>
        <li>
          <Link
            to="/account/withdraw"
            className={`${
              location.pathname == "/account/withdraw" ? "active" : ""
            }`}
          >
            Proofs
          </Link>
        </li>
      </ul>
    </>
  );
};

export default TabMenu;
