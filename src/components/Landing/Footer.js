import React from "react";
import logo from "../../assets/logo2.png";

const Footer = () => {
  return (
    <div className="bg p-10 md:p-20 text-white flex flex-col md:flex-row justify-between items-center bg-customBlue">
      <div className="flex gap-3 items-center mb-4">
        <img alt="logo" src={logo} />
        <h1 className="text-lg font-semibold">HelpMeOut</h1>
      </div>
      <div className="text-center md:text-left mt-2 md:mt-0">
        <h1 className="font-semibold">Menu</h1>
        <p className="mt-2 font-thin text-xs">Home</p>
        <p className="mt-1 font-thin text-xs">Converter</p>
        <p className="mt-1 font-thin text-xs">How it Works</p>
      </div>
      <div className="mt-6 text-center md:text-left md:mt-0">
        <h1>About Us</h1>
        <p className="mt-2 font-thin text-xs">About</p>
        <p className="mt-1 font-thin text-xs">Contact Us</p>
        <p className="mt-1 font-thin text-xs">Privacy Policy</p>
      </div>
      <div className="mt-6 text-center md:text-left md:mt-0">
        <h1>Screen Record</h1>
        <p className="mt-2 font-thin text-xs">Browser Window</p>
        <p className="mt-1 font-thin text-xs">Desktop</p>
        <p className="mt-1 font-thin text-xs">Application</p>
      </div>
    </div>
  );
};

export default Footer;