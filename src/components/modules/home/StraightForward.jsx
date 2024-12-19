import React from "react";
import straightForwad from '../../../assets/straightForwad.png';

export const StraightForward = () => {
  return (
    <div className="straightForwad_Container">
      <p className="heading">As straightforward as it gets</p>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation
      </p>

      {/* //points  */}
      <img src={straightForwad} alt="straightForwad" className="straightForwadImg" />
    </div>
  );
};
