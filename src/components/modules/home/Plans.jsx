import React, { useMemo, useState } from "react";
import { MdOutlineCheck } from "react-icons/md";
import payAnanualImg from "../../../assets/plans-section/discount.svg";
import MostPopular from "../../../assets/plans-section/most-popular.svg";
import rocket from "../../../assets/plans-section/rocket.svg";
import starShine from "../../../assets/plans-section/stars-shine.svg";
import { AllPlans } from "../../../json/plans";

export const Plans = () => {
  const [SelectedPlanUser, setSelectedPlanUser] = useState("Agency");
  const [selectedPlanTypes, setSelectedPlanTypes] = useState("SEO");
  const planUsers = ["Agency", "Individual"];
  const planTypes = ["SEO", "Social and ads", "Digital"];

  const allPlans = useMemo(
    () => AllPlans?.filter((data) => data?.planType === selectedPlanTypes),
    [selectedPlanTypes]
  );

  const [selectedPlan, setSelectedPlan] = useState(allPlans[0]);

  return (
    <div className="Plans_Container">
      <p className="heading">Plans & Pricing </p>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation
      </p>
      <p className="heading" style={{ marginTop: "10px" }}>
        Are you an <span style={{ color: "var(--green-color)" }}>Agency?</span>{" "}
      </p>
      <div className="plans_quotes_container">
        <img src={rocket} alt="rocket" className="rocket" />
        <p>
          Then This plan fits you <span>perfectly</span>
        </p>
        <img src={starShine} className="starShine" alt="starShine" />
      </div>

      {/* //plan user  */}
      <div className="plan_users">
        {planUsers?.map((planuser, index) => {
          return (
            <div
              onClick={() => setSelectedPlanUser(planuser)}
              className={`${
                SelectedPlanUser === planuser
                  ? "plan_user_div_active"
                  : "plan_user_div_inactive"
              }`}
              key={index}
            >
              {planuser}
            </div>
          );
        })}
      </div>

      {/* //plan types  */}
      <div className="PlanTypes_Container">
        {planTypes?.map((planType, index) => {
          return (
            <div
              onClick={() => setSelectedPlanTypes(planType)}
              key={index}
              className={`${
                selectedPlanTypes === planType
                  ? "feature_heading_active"
                  : "feature_heading_inactive"
              }`}
            >
              {planType}
            </div>
          );
        })}
      </div>

      {/* //discout message  */}
      <div className="pay_anually_discount_Container">
        <div>
          <div class="check">
            <input id="check" type="checkbox" />
            <label for="check"></label>
          </div>
        </div>
        <img src={payAnanualImg} alt="payAnanualImg" />
      </div>

      {/* //all plans  */}
      <div className="all_plans_Container">
        {allPlans?.map((plan, id) => {
          return (
            <div
              onClick={() => setSelectedPlan(plan)}
              className={`${
                selectedPlan?.title === plan?.title
                  ? "plans_div_active"
                  : "plans_div_inactive"
              } plans_div most_popular_div`}
              key={id}
            >
              {plan?.mostPopular && (
                <img
                  src={MostPopular}
                  alt="MostPopular"
                  className="most_popular_img"
                />
              )}

              <div className="plan_title">
                <p
                  className="plan_heading"
                  style={{
                    color:
                      selectedPlan?.title === plan?.title
                        ? "white"
                        : "var(--primary-color)",
                  }}
                >
                  {plan?.title}
                </p>
                <p className="plan_desc">For Professional Use</p>
              </div>
              <div className="plan_benefits">
                {plan?.benefits?.map((benefits, index) => {
                  return (
                    <div key={index}>
                      {selectedPlan?.title === plan?.title ? (
                        <>
                          <div>
                            <MdOutlineCheck
                              style={{
                                fontSize: "12px",
                                marginTop: "7px",
                                color: "white",
                              }}
                            />
                          </div>
                          <p style={{ color: "white" }}>{benefits}</p>
                        </>
                      ) : (
                        <>
                          <div>
                            <MdOutlineCheck
                              style={{ fontSize: "12px", marginTop: "7px" }}
                            />
                          </div>
                          <p>{benefits}</p>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
              <button
                className={`${
                  selectedPlan?.title === plan?.title
                    ? "plan_choose_btn_active"
                    : "plan_choose_btn_inactive"
                }`}
              >
                Choose Plan
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
