import React, { useState } from "react";
import arrowDown from "../../../assets/arrow_down.svg";
import arrowUp from "../../../assets/arrow_up.svg";
import { AllFaq } from "../../../json/faq";

export const Faq = () => {
  const [selectedFaq, setSelectedFaq] = useState(AllFaq[4]);

  return (
    <div className="Faq_Container">
      <p className="heading">Frequently Asked Questions</p>
      <p className="description" style={{ fontSize: "18px" }}>
        Ask Us Anything
      </p>

      {/* //all faq  */}
      <div className="faq_parent_div">
        <div className="faqs_listing_div">
          {AllFaq?.slice(0, 4)?.map((faq, index) => {
            return (
              <div
                onClick={() => setSelectedFaq(faq)}
                key={index}
                className={`${
                  selectedFaq?.id == faq?.id ? "faq_active" : "faq_inactive"
                } faq`}
              >
                <div>
                  <p>{faq?.title}</p>
                  {selectedFaq?.id == faq?.id ? (
                    <img src={arrowUp} alt="arrowUp" className="faq_icon" />
                  ) : (
                    <img src={arrowDown} alt="arrowDown" className="faq_icon" />
                  )}
                </div>
                {selectedFaq?.id === faq?.id && (
                  <p className="faq_desc">{faq?.desc}</p>
                )}
              </div>
            );
          })}
        </div>{" "}
        <div className="faqs_listing_div">
          {AllFaq?.slice(4)?.map((faq, index) => {
            return (
              <div
                onClick={() => setSelectedFaq(faq)}
                key={index}
                className={`${
                  selectedFaq?.id == faq?.id ? "faq_active" : "faq_inactive"
                } faq`}
              >
                <div>
                  <p>{faq?.title}</p>
                  {selectedFaq?.id == faq?.id ? (
                    <img src={arrowUp} alt="arrowUp" className="faq_icon" />
                  ) : (
                    <img src={arrowDown} alt="arrowDown" className="faq_icon" />
                  )}
                </div>
                {selectedFaq?.id === faq?.id && (
                  <p className="faq_desc">{faq?.desc}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
