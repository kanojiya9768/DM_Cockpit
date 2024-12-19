import React, { useMemo } from "react";
import logo from "../../../assets/logo.svg";
import RocketImage from "../../../assets/rocket.svg";
import { Routes } from "../../../json/navbar";

export const Navbar = () => {
  const currentPathName = useMemo(() => {
    return window.location.pathname;
  }, []);

  return (
    <div className="navbar_parent_div">
      {/* //offer message */}
      <div className="navbar_offer_div">
        <img src={RocketImage} alt="rocket-img" />
        <p>Sign up today to accelerate your business! </p>
        <button>Join us</button>
        <img src={RocketImage} alt="rocket-img" />
      </div>

      {/* //navbar_container */}
      <nav className="navbar_container">
        <img
          src={logo}
          alt="logo"
          className="logo"
          style={{ width: "220px" }}
        />
        <div className="route_container">
          {Routes?.map((route, index) => {
            return (
              <a
                key={index}
                href={route?.route}
                className="navbar_link"
                style={{
                  textDecoration:
                    currentPathName === route?.route ? "underline" : "",
                  textUnderlineOffset: "8px",
                  textDecorationColor: "var(--green-color)",
                }}
              >
                {route?.title}
              </a>
            );
          })}
        </div>
        <div className="navbar_auth_container">
          <a href="#" className="route_links">
            Contact Us
          </a>
          <button className="singup_btn">Sign up</button>
          <button className="login_btn">Log in</button>
        </div>
      </nav>
    </div>
  );
};
