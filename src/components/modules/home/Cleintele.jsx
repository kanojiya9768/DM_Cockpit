import React from "react";
import clientele from '../../../assets/clientele.png';

export const Cleintele = () => {
  return (
    <div className="Cleintele_Container">
      <p className="heading">Clientele</p>
      <p className="description" style={{ fontSize: "18px" }}>
        Trusted by 1,25000+ customers worldwide
      </p>

      {/* //image bannner */}
      <img src={clientele} alt="clientele" className="clienteleImage" />
    </div>
  );
};
