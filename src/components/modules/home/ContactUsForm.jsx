import React from 'react';
import { IoIosArrowForward, IoMdArrowDropdown } from "react-icons/io";
import growthChart from "../../../assets/growth-chart.png";



export const ContactUsForm = () => {
  return (
    <form action="" className="contact_us_form_Container">
          <div className="heading_contact_us_form">
            {" "}
            <div>
              <p>Contact Us To</p> <p style={{ fontWeight: "600" }}>Grow</p>
            </div>{" "}
            <img src={growthChart} alt="growthChart" className="growthChart" />
          </div>

          {/* //main form inputs  */}
          <div className="contact_form_inputs_container">
            <input type="text" placeholder="Full Name" className="inputs" />
            <div
              style={{ width: "100%", position: "relative" }}
              className="phoneNumberInputCode"
            >
              <div>
                <p>+91</p>
                <IoMdArrowDropdown className="arrowIconDown" />
              </div>
              <input
                type="number"
                style={{ width: "100%", paddingLeft: "54px" }}
                className="inputs"
                placeholder="Phone Number"
              />
            </div>
            <input
              className="inputs"
              type="email"
              placeholder="Email Address"
            />
            <textarea
              name="message"
              placeholder="Message"
              id="Message"
              className="inputsTextarea"
              rows={5}
            ></textarea>
            <div className="agreement_Container">
              <input
                type="checkbox"
                className="contact_us_checkbox"
                name="check"
                id="check"
              />
              <div className="agreementText">
                <p>I agree to all</p>
                <p style={{ color: "var(--green-color)" }}>
                  terms & conditions
                </p>
              </div>
            </div>
          </div>

          {/* //submit button is here  */}
          <div className="Submit_btn_Contact_us">
            <div className="send_btn">Send</div>
            <IoIosArrowForward className="icon" />
          </div>
        </form>
  )
}
