import React from "react";
import GoogleAds from "../../../assets/integrated-with/google-ads-logo-freelogovectors.net_-1.png";
import GoogleAdsense from "../../../assets/integrated-with/Google-Adsense-Logo.png";
import GoogleAnalytics from "../../../assets/integrated-with/Google-Analytics-Logo.png";
import Instagram from "../../../assets/integrated-with/ig-logo.png";

const companies = [
  GoogleAds,
  GoogleAnalytics,
  GoogleAds,
  Instagram,
  GoogleAdsense,
];

export const DmCockpit_Integrated_With = () => {
  return (
    <div className="DmCockpit_Integrated_With_Container">
      <p className="heading">DmCockpit integrates with the</p>
      <p className="heading" style={{ color: "var(--green-color)" }}>
        App you use!
      </p>

      <section className="enable-animation">
        <div className="marquee">
          <ul className="marquee__content">
            {companies?.map((company, index) => {
              return (
                <div key={index} className=" marquee__item">
                  <img src={company} alt="companylogo" />
                </div>
              );
            })}
          </ul>

          <ul aria-hidden="true" className="marquee__content">
            {companies?.map((company, index) => {
              return (
                <div className=" marquee__item" key={index}>
                  <img src={company} alt="companylogo" />
                </div>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="enable-animation2">
        <div className="marquee">
          <ul className="marquee__content">
            {companies?.map((company, index) => {
              return (
                <div className=" marquee__item">
                  <img src={company} alt="companylogo" />
                </div>
              );
            })}
          </ul>

          <ul aria-hidden="true" className="marquee__content">
            {companies?.map((company, index) => {
              return (
                <div className=" marquee__item">
                  <img src={company} alt="companylogo" />
                </div>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
};
