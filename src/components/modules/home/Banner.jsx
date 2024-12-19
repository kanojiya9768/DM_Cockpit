import React from 'react';
import { IoIosRocket } from "react-icons/io";
import { ContactUsForm } from "./ContactUsForm";


export const Banner = () => {
  return (
    <div className="banner_Container">
        {/* //Start Your FREE Trial Now */}
        <div className="start_a_free_triel_button">
          <IoIosRocket className="icons" /> Start Your{" "}
          <p style={{ fontWeight: "600" }}>FREE</p> Trial Now
        </div>

        <ContactUsForm />
      </div>
  )
}
