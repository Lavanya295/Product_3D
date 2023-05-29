import React from "react";
import { hero } from "../../assets";
import Button from "../../components/Button";

function Hero() {
  return (
    <div className="h-screen flex items-center items-center flex-wrap-reverse ">
      <div className="flex-1">
        <span className="text-primary bg-hero-badge-bg bg-opacity-60 text-opacity-70 font-semibold p-2 rounded max-[600px]:flex max-[600px]:justify-center">
          AI-Powered 3D T-Shirts
        </span>
        <div className="py-3">
          <h1 className="text-heading font-semibold min-[600px]:text-5xl max-[600px]:text-4xl min-[600px]:leading-normal max-[600px]:leading-tight max-[600px]:text-center">
            Elevate Your Style with Intelligent Fashion
          </h1>
          <p className="text-secondary font-normal pt-3 leading-loose max-[600px]:text-center">
            Indulge in the mesmerizing world of 3D fashion and elevate your
            style with our extraordinary collection of vibrant designs.
          </p>
        </div>
        <div className="pt-3 max-[600px]:flex max-[600px]:justify-center">
          <Button>Design Now</Button>
        </div>
      </div>
      <div className="flex-3">
        <img src={hero} alt="" />
      </div>
    </div>
  );
}

export default Hero;
