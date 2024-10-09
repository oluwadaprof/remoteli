import React from "react";
import Button from "../components/ui/button";
import { handleAuth } from "../auth/auth";
import { TbHandFinger } from "react-icons/tb";

const WelcomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen mx-auto">
      <h1 className="pb-1 text-6xl font-bold text-black">
        Welcome to Remoteli
      </h1>
      <p className="pb-6 text-gray-500">
        your road to the best career path in tech
      </p>
      <Button className="mb-8" onClick={handleAuth}>
        {" "}
        <p>Get Started</p>{" "}
      </Button>
      <TbHandFinger size={40} className="animate-bounce" />
    </div>
  );
};

export default WelcomePage;
