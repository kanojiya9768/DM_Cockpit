import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import StillhaveaQueryIMage from "../../../assets/querysection/charts.png";

export const StillhaveaQuery = () => {
  return (
    <div className="StillhaveaQuery_Container">
      <form className="StillHaveaQueryForm">
        <div>
          <p
            className="heading"
            style={{ color: "white", fontSize: "45px", fontWeight: "800" }}
          >
            Still Have A Query?{" "}
          </p>
          <p
            className="heading"
            style={{
              color: "var(--green-color)",
              fontSize: "26px",
              fontWeight: "800",
            }}
          >
            Get A Call Back!{" "}
          </p>
        </div>

        <div className="QueryInput_COntainer">
          <input
            type="text"
            className="QueryInput"
            placeholder="Enter Your Name"
          />
          <input
            type="number"
            className="QueryInput"
            placeholder="Enter Your Phone Number"
          />
        </div>

        <button>
          SEND <MdKeyboardDoubleArrowRight style={{ fontSize: "20px" }} />
        </button>
      </form>
      <img src={StillhaveaQueryIMage} alt="StillhaveaQueryIMage" />
    </div>
  );
};
