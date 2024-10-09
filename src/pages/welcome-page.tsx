import React from "react";
import Button from "../components/ui/button";
import { handleAuth } from "../auth/auth";
import { TbHandFinger } from "react-icons/tb";

const WelcomePage: React.FC = () => {
  return (
    <div
      className={`flex flex-col items-center justify-center w-full h-screen mx-auto pt-12  relative animate-fadein`}
    >
      <img
        src="/images/vector.png"
        alt="Welcome Background"
        className="absolute inset-0 w-full h-full object-cover opacity-60 rounded-full z-0"
      />
      <div className="absolute inset-0 bg-white opacity-70 rounded-full z-0"></div>{" "}
      {/* Radial fade effect */}
      <h1 className="pb-4 text-6xl font-bold text-black z-10">
        Welcome to Remoteli
      </h1>
      <p className="pb-6 text-black font-semibold z-10 mb-4">
        The <span className="text-white bg-orange-700 p-1">ON-DEMAND</span>{" "}
        workforce that{" "}
        <span className="text-white bg-green-700 p-1">GROWS</span> with you
      </p>
      <Button className="mb-8 z-10" onClick={handleAuth}>
        {" "}
        <p>Get Started</p>{" "}
      </Button>
      <TbHandFinger color="#229EFF" size={40} className="animate-bounce z-10" />
      <div className="w-[40rem] rounded-md mt-16 z-10 overflow-hidden shadow-lg">
        <img
          src="/images/team-work.jpg"
          alt="collaboration"
          className=" w-full h-full object-cover relative "
        />
      </div>
    </div>
  );
};

export default WelcomePage;
