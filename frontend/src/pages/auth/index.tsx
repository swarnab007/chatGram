import React from "react";
import Welcome from "../../../public/welcome.png";

const Auth: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-100">
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Section */}
        <div className="md:w-1/2 w-full">
          <img
            src={Welcome}
            alt="Welcome"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 w-full p-16 flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6 text-center md:text-left">
            WELCOME
          </h2>
          
        </div>
      </div>
    </div>
  );
};

export default Auth;
