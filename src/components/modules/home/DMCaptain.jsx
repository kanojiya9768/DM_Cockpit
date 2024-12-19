import React from "react";
import by247 from "../../../assets/dm-captain/24.png";
import Bell from "../../../assets/dm-captain/bell.png";
import PreciseAnswers from "../../../assets/dm-captain/precise.png";
import RealTimeImage from "../../../assets/dm-captain/real-time.png";
import Recording from "../../../assets/dm-captain/recor.mp4";
import SeamlessIntegrationImage from "../../../assets/dm-captain/seamless.png";
import SecureImage from "../../../assets/dm-captain/secure.png";

const FirstDMCaptain = [
  {
    title: "Real-time insights",
    logo: RealTimeImage,
  },
  {
    title: "Precise Answers",
    logo: PreciseAnswers,
  },
  {
    title: "24/7 Availability",
    logo: by247,
  },
];

const SecondDMCaptain = [
  {
    title: "Seamless Integration",
    logo: SeamlessIntegrationImage,
  },
  {
    title: "Alerts and Notifications",
    logo: Bell,
  },
  {
    title: "Secure",
    logo: SecureImage,
  },
];
export const DMCaptain = () => {
  return (
    <div className="DMCaptainContainer">
      <p className="heading">DM Captain! </p>

      {/* DNCaptain Main div is here   */}
      <div className="DMCaptainMainDiv">
        {/* //first div  */}
        <div className="firstDiv">
          {FirstDMCaptain?.map((data, index) => {
            return (
              <div key={index} className="DmCaptainOptionsDiv">
                <p>{data?.title}</p>
                <img src={data?.logo} alt="DmCaptainLogos" />
              </div>
            );
          })}
        </div>

        {/* //second div  video */}
        <video
          className="DmCaptaimVideo"
          src={Recording}
          autoPlay
          loop
          muted
        ></video>

        {/* //third div  */}
        <div className="ThirdDiv">
          {SecondDMCaptain?.map((data, index) => {
            return (
              <div key={index} className="DmCaptainOptionsDiv">
                <img src={data?.logo} alt="DmCaptainLogos" />
                <p>{data?.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
