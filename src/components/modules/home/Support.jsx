import React from "react";
import call from "../../../assets/footerfeatures/call247.svg";
import SecureIMage from "../../../assets/footerfeatures/secure.svg";
import star from "../../../assets/footerfeatures/star.svg";
import { Footer } from "./Footer";

const SupportData = [
  {
    title: "Free 24-Hours Support",
    logo: SecureIMage,
  },
  {
    title: "Serious about security & privacy",
    logo: call,
  },
  {
    title: "Curated Features for user needs",
    logo: star,
  },
];

export const Support = () => {
  return <div className="support_Conatiner">
   <div className="supportlisting">
   {
        SupportData?.map((suport,index)=>{
            return(
            <div key={index} className="supportDiv" style={{borderRight : index<2 && "2px dashed var(--primary-color)"}}>
                    <img src={suport?.logo} alt="logo" />
                    <p className="support_title">{suport?.title}</p>
                </div>
            )
        })
    }
   </div>

   <Footer />
  </div>;
};
