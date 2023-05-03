// import React from "react";
import chair from "../../../assets/images/chair.png";
import bannerBG from "../../../assets/images/bg.png";
import clock from '../../../assets/icons/clock.svg';

const Banner = () => {
  return (
    <>
      <div className="hero bg-base-100 mt-3">
        <div
          style={{
            backgroundImage: `url(${bannerBG})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "600px",
          }}
          className="hero-content flex-col lg:flex-row-reverse"
        >
          <img src={chair} className=" rounded-lg shadow-2xl w-1/2" />
          <div>
            <h1 className="text-5xl font-bold">
              Your New Smile Starts <br />
              Here
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>

            <button className="btn btn-accent bg-gradient-to-l from-cyan-500 to-blue-500 text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
