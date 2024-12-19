import React, { useState } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

import comment from "../../../assets/testimonial/comment.svg";
import ratings from "../../../assets/testimonial/ratings.svg";
import image_1 from "../../../assets/testimonial/testimonial.svg";
import image_2 from "../../../assets/testimonial/testimonial2.svg";
import image_3 from "../../../assets/testimonial/testimonial3.svg";

const Tesimonials = [
  {
    profilePhot: image_1,
    review: `The Argument In Favor Of Using Filler Text Goes Something Like This: If You
Use Real Content In The Design Process, Anytime You Reach A Review Point
You’ll End Up Reviewing And Negotiating The Content Itself And Not The
Design. This Will Just Slow Down The Design Process.
`,
    name: "Aleesha Brown",
    desgination: "CEO OF COMAPNY",
  },
  {
    profilePhot: image_3,
    review: `The Argument In Favor Of Using Filler Text Goes Something Like This: If You
Use Real Content In The Design Process, Anytime You Reach A Review Point
You’ll End Up Reviewing And Negotiating The Content Itself And Not The
Design. This Will Just Slow Down The Design Process.
`,
    name: "Brown",
    desgination: "CEO OF FACEBOOK",
  },
  {
    profilePhot: image_2,
    review: `The Argument In Favor Of Using Filler Text Goes Something Like This: If You
Use Real Content In The Design Process, Anytime You Reach A Review Point
You’ll End Up Reviewing And Negotiating The Content Itself And Not The
Design. This Will Just Slow Down The Design Process.
`,
    name: "Aleesha",
    desgination: "CEO OF INSTAGRAM",
  },
];

export const Testimonial = () => {
  const [selectedTest, setSelectedTest] = useState(Tesimonials[1]);

  return (
    <div className="Testimonial_Container">
      {" "}
      <p className="heading">Testimonials</p>
      <p className="description" style={{ fontSize: "18px" }}>
        Lorem Ipsum Dolor Sit Amet, Consectetur{" "}
      </p>
      {/* //testimonial  */}
      <div className="testimonial_Parent_div">
        {Tesimonials?.map((testimonial, idx) => {
          return (
            <div
              className={`testimonial_div ${
                testimonial?.name == selectedTest?.name && "testimonial_active"
              }`}
              key={idx}
            >
              <img
                src={testimonial?.profilePhot}
                alt="profile"
                className="profile"
              />
              {testimonial?.name == selectedTest?.name && (
                <img src={comment} alt="comment" className="Comment" />
              )}
            </div>
          );
        })}
      </div>
      <div className="testimonial_details_Container">
        {Tesimonials?.map((testimonial, idx) => {
          return (
            <div className={`testimonial_details_div`} key={idx}>
              {selectedTest?.name === testimonial?.name && (
                <>
                  {/* //rating  */}
                  <img src={ratings} alt="ratings" className="ratings" />
                  <p className="testimonial_desc">{testimonial?.review}</p>
                  <div className="name_and_work">
                    <p
                      className="name"
                      style={{
                        color: "var(--green-color)",
                        fontSize: "17px",
                        fontWeight: "700",
                      }}
                    >
                      {testimonial?.name}
                    </p>
                    <p className="desgination">{testimonial?.desgination}</p>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
      {/* //prev button  */}
      <IoIosArrowRoundBack className="ArrowBack arrowkActive" />
      {/* //next button  */}
      <IoIosArrowRoundForward className="ArrowForward arrowActive" />
    </div>
  );
};
