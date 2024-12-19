import React from "react";
import { IoIosRocket } from "react-icons/io";
import Laptop from "../../../assets/banner2-30-days-free-triel/laptop.png";

export const BannerSection24_7 = () => {
  return (
    <div className="BannerSection24_7_Container">
      <div className="banner24_7">
        <img src={Laptop} alt="Laptop" className="Laptop_banner_24_7" />
        <div className="right24_7_Section">
          <p className="singUpText">SIGN UP NOW</p>
          <p className="Triel_Text">
            GET <span>30 DAYS</span> FREE TRIAL{" "}
          </p>
          <p className="For_Which_user_text">For Agencies</p>
          <button>
            <IoIosRocket /> Sign Up Now
          </button>
        </div>
      </div>
    </div>
  );
};
