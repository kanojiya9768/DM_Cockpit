import React, { useMemo, useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import FeatureSectionAnimationLine from "../../../assets/features/feature-animation-line.png";
import FeatureSectiondetailsSVG from "../../../assets/features/featurelogo.svg";
import { features } from "../../../json/features";


export const FeaturesSection = () => {
  const typesoffeatures = ["SEO", "Performance Marketing", "Reporting"];
  const [selectedfeatures, setselectedfeatures] = useState("SEO");

  const currentfeaturedetails = useMemo(() => {
    return features?.find((data) => data?.featureHeading == selectedfeatures);
  }, [selectedfeatures]);

  const [selectedfeaturesOption, setselectedfeaturesOption] = useState(
    currentfeaturedetails?.features[0]
  );

  const currentFeatureOptiondetails = useMemo(() => {
    return currentfeaturedetails?.features?.find(
      (data) => data?.featureName === selectedfeaturesOption?.featureName
    );
  }, [selectedfeaturesOption]);

  return (
    <div className="feature_section_Container">
      <p className="heading">Features</p>
      <p className="description">Here's Few More Reasons To Use DM Cockpit</p>

      {/* //types of features  */}
      <div className="types_of_features">
        {typesoffeatures?.map((feature, index) => {
          return (
            <div
              onClick={() => setselectedfeatures(feature)}
              key={index}
              className={`${
                selectedfeatures === feature
                  ? "feature_heading_active"
                  : "feature_heading_inactive"
              }`}
            >
              {feature}
            </div>
          );
        })}
      </div>

      {/* //all features listing  */}
      <div className="all_features_listing_Container">
        {currentfeaturedetails?.features?.map((data, index) => {
          return (
            <div
              onClick={() => setselectedfeaturesOption(data)}
              key={index}
              className={`${
                selectedfeaturesOption?.featureName === data?.featureName
                  ? "feature_div_active"
                  : "feature_div_inactive"
              }  feature_div`}
            >
              <img src={data?.featureLogo} alt="featureLogo" />
              <p style={{ textAlign: "center" }}>{data?.featureName}</p>
            </div>
          );
        })}
      </div>

      {/* //feature details  */}
      <div className="feature_option_deatails_Container">
        <img
          src={FeatureSectionAnimationLine}
          alt="FeatureSectionAnimationLine"
          className="FeatureSectionAnimationLine"
        />
        {/* div.featureoption_details  */}
        <div className="feature_option_details_div">
          <div className="left">
            <div className="heading">
              <p style={{color : "var(--green-color)"}}>0{currentFeatureOptiondetails?.id}.</p>
              <p>{currentFeatureOptiondetails?.featureName}</p>
            </div>
            <p className="description">{currentFeatureOptiondetails?.featureDescription}</p>
            <button>Learn More <MdKeyboardDoubleArrowRight style={{fontSize : "17px"}} /></button>
          </div>
          <img src={FeatureSectiondetailsSVG} className="right_image" alt="right_image" />
        </div>
        <div style={{marginBlock : "200px"}}></div>

        <img
          src={FeatureSectionAnimationLine}
          alt="FeatureSectionAnimationLine"
          className="FeatureSectionAnimationLine2"
        />
      </div>
    </div>
  );
};
