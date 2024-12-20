import React, { useMemo, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import logo from "../../../assets/logo.svg";
import RocketImage from "../../../assets/rocket.svg";
import { Routes } from "../../../json/navbar";


export const Navbar = () => {
  const currentPathName = useMemo(() => {
    return window.location.pathname;
  }, []);

  const [showNavbar,setShowNavbar] = useState(false);
  

  return (
    <div className="navbar_parent_div" style={{position :"relative"}}>
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

       
      {/* //humburger  */}
      <GiHamburgerMenu className="mobile_humburger" onClick={()=>setShowNavbar(!showNavbar)} />


        <div className={`${showNavbar ? "mobileNavBarContainer_active" : "mobileNavBarContainer_inactive"} mobileNavBarContainer`}>
          <RxCross2 className="cross_navbar_cut_icon" onClick={()=>setShowNavbar(false)} />
          <div className="mobile_route_container">
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
            <a href="#" className="route_links">
              Contact Us
            </a>
          </div>
          <div className="mobile_navbar_auth_container">
            <button className="singup_btn">Sign up</button>
            <button className="login_btn">Log in</button>
          </div>{" "}
          
        </div>
      </nav>
    </div>
  );
};
