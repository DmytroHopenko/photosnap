import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Arrow from "../img/svg/Arrow";

export default function MainPricing() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const slider = document.querySelector(
      ".price_wrap .price_plan_wrap .button_wrap .button_style .slider"
    );
    const checkbox = document.querySelector(
      ".price_wrap .price_plan_wrap .button_wrap .button_style .checkbox"
    );
    const pricebasic = document.querySelector(
      ".price_wrap .price_plan_wrap .plans_wrap .plan .price_set_basic"
    );
    const pricepro = document.querySelector(
      ".price_wrap .price_plan_wrap .plans_wrap .plan .price_set_pro"
    );
    const pricebusiness = document.querySelector(
      ".price_wrap .price_plan_wrap .plans_wrap .plan .price_set_business"
    );

    if (isActive) {
      slider.style.backgroundColor = "$black";
      pricebasic.innerHTML = "$190.00";
      pricepro.innerHTML = "$390.00";
      pricebusiness.innerHTML = "$990.00";
      checkbox.checked = true;
    } else {
      slider.style.backgroundColor = "$grey";
      pricebasic.innerHTML = "$19.00";
      pricepro.innerHTML = "$39.00";
      pricebusiness.innerHTML = "$90.00";
      checkbox.checked = false;
    }
    const timeElements = document.querySelectorAll(".time");

    timeElements.forEach((timeElement) => {
      timeElement.textContent = isActive ? "per year" : "per month";
    });
  }, [isActive]);

  const toggleTime = () => {
    setIsActive(!isActive);
  };

  const Section1 = () => (
    <section className="intro_pricing_wrap">
      <div className="intro_pricing_info">
        <h1>PRICING</h1>
        <p>
          Create a your stories, Photosnap is a platform for photographers and
          visual storytellers. It’s the simple way to create and share your
          photos.
        </p>
      </div>
      <div className="intro_pricing_img"></div>
    </section>
  );
  const Section2 = () => (
    <section className="price_wrap">
      <div className="price_plan_wrap">
        <div className="button_wrap">
          <p className={`${isActive ? "" : "active"}`} onClick={toggleTime}>
            Monthly
          </p>
          <div className="button_style">
            <label className="switch">
              <input
                type="checkbox"
                className="checkbox"
                id="checkbox"
                onClick={toggleTime}
              />
              <div className="slider"></div>
            </label>
          </div>
          <p className={`${isActive ? "active" : ""}`} onClick={toggleTime}>
            Yearly
          </p>
        </div>
        <div className="plans_wrap">
          <div className="plan">
            <h3>Basic</h3>
            <p>
              Includes basic usage of our platform. Recommended for new and
              aspiring photographers.
            </p>
            <p className="price_set_basic"></p>
            <span className="time"></span>
            <Link to="/pricing">Pick plan</Link>
          </div>
          <div className="plan pro">
            <h3>Pro</h3>
            <p>
              More advanced features available. Recommended for photography
              veterans and professionals.
            </p>
            <p className="price_set_pro"></p>
            <span className="time"></span>
            <Link to="/pricing">Pick plan</Link>
          </div>
          <div className="plan">
            <h3>Business</h3>
            <p>
              Additional features available such as more detailed metrics.
              Recommended for business owners.
            </p>
            <p className="price_set_business"></p>
            <span className="time"></span>
            <Link to="/pricing">Pick plan</Link>
          </div>
        </div>
      </div>
      <div className="compare_wrap">
        <h1>COMPARE</h1>
        <div className="compare_table">
          <div className="compare_row">
              <p>THE FEATURES</p>
              <div className="checked">
                <p>BASIC</p>
                <p>PRO</p>
                <p>BUSINESS</p>
              </div>
          </div>
          <div className="compare_row">
              <p>UNLIMITED STORY POSTING</p>
              <div className="types">
                <p>BASIC</p>
                <p>PRO</p>
                <p>BUSINESS</p>
              </div>
              <div className="checked">
                <Check />
                <Check />
                <Check />
              </div>
          </div>
          <div className="compare_row">
              <p>UNLIMITED PHOTO UPLOAD</p>
              <div className="types">
                <p>BASIC</p>
                <p>PRO</p>
                <p>BUSINESS</p>
              </div>
              <div className="checked">
                <Check />
                <Check />
                <Check />
              </div>
          </div>
          <div className="compare_row">
              <p>EMBEDDING CUSTOM CONTENT</p>
              <div className="types">
                <p>BASIC</p>
                <p>PRO</p>
                <p>BUSINESS</p>
              </div>
              <div className="checked">
                <Check />
                <Check />
              </div>
          </div>
          <div className="compare_row">
              <p>CUSTOMIZE METADATA</p>
              <div className="types">
                <p>BASIC</p>
                <p>PRO</p>
                <p>BUSINESS</p>
              </div>
              <div className="checked">
                <Check />
                <Check />
              </div>
          </div>
          <div className="compare_row">
              <p>ADVANCED METRICS</p>
              <div className="types">
                <p>BASIC</p>
                <p>PRO</p>
                <p>BUSINESS</p>
              </div>
              <div className="checked">
              <Check />
              </div>
          </div>
          <div className="compare_row">
              <p>PHOTO DOWNLOADS</p>
              <div className="types">
                <p>BASIC</p>
                <p>PRO</p>
                <p>BUSINESS</p>
              </div>
              <div className="checked">
              <Check />
              </div>
          </div>
          <div className="compare_row">
              <p>SEARCH ENGINE INDEXING</p>
              <div className="types">
                <p>BASIC</p>
                <p>PRO</p>
                <p>BUSINESS</p>
              </div>
              <div className="checked">
              <Check />
              </div>
          </div>
          <div className="compare_row">
              <p>CUSTOM ANALYTICS</p>
              <div className="types">
                <p>BASIC</p>
                <p>PRO</p>
                <p>BUSINESS</p>
              </div>
              <div className="checked">
              <Check />
              </div>
          </div>
        </div>
      </div>
    </section>
  );
  const Check = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15">
      <path
        fill="none"
        stroke="#000"
        stroke-width="2"
        d="M1 8.124L5.623 13 17 1"
      />
    </svg>
  );
  const Section3 = () => (
    <section className="beta_invite_wrap">
      <h1>We’re in beta. Get your invite today!</h1>
      <div className="get_redirect_link">
        <Link to="/stories">Get an invite</Link>
        <Arrow />
      </div>
    </section>
  );
  return (
    <main className="main_pricing">
      <Section1 />
      <Section2 />
      <Section3 />
    </main>
  );
}
