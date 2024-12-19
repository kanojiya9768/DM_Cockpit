import React from "react";
import { Banner } from "./Banner";
import { BannerSection24_7 } from "./BannerSection24_7";
import { Cleintele } from "./Cleintele";
import { DMCaptain } from "./DMCaptain";
import { DmCockpit_Integrated_With } from "./DmCockpit_Integrated_With";
import { Faq } from "./Faq";
import { FeaturesSection } from "./FeaturesSection";
import { Plans } from "./Plans";
import { StillhaveaQuery } from "./StillhaveaQuery";
import { StraightForward } from "./StraightForward";
import { Support } from "./Support";
import { Testimonial } from "./Testimonial";

export const Home = () => {
  return (
    <>
      {/* //banner  */}
      <Banner />
      {/* //feature Section  */}
      <FeaturesSection />
      {/* //DMCaptain */}
      <DMCaptain />

      {/* //plans  */}
      <Plans />

      {/* //StraightForward section  */}
      <StraightForward />

      {/* //faq section  */}
      <Faq />

      {/* //testimonial  */}
      <Testimonial />

      {/* //Cleintele */}
      <Cleintele />

      {/* //Integrated With  */}
      <DmCockpit_Integrated_With />

      {/* //still have a query  */}
      <StillhaveaQuery />

      {/* //24/7 banner  */}
      <BannerSection24_7 />


      {/* //support  */}
      <Support />
    </>
  );
};
