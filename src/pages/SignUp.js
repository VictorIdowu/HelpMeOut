import React, { useState } from "react";
import { Link } from "react-router-dom";
import facebook from "../assets/g12.png";
import google from "../assets/Google svg.png";
import logo from "../assets/logo.png";
import SignUpLogin from "../components/SignUpLogin";

const SignUp = () => {
  const [asAcc, setAsAcc] = useState(false);

  const toggleSinupLogin = () => {
    setAsAcc((prev) => !prev);
  };

  return (
    <>
      <section className="relative w-full pl-[113.5px] py-[80px]">
        <div>
          <Link to="/">
            <img className="w-[150px]" src={logo} alt="logo"></img>
          </Link>
        </div>
        <div className="flex flex-col items-center content-center justify-center mt-[15px] ">
          <div className=" w-[475px]">
            {/*  */}
            <aside className="flex flex-col items-center">
              <h4 className=" font-bold text-[32px] leading-[48px] tracking-[1%] text-[#141414]">
                {asAcc ? "Log in" : "Sign up"}
              </h4>
              <p className=" px-[77px] mt-[8px] text-center text-[14px] leading-[21px] font-normal tracking-[1%] text-[#434343]">
                {!asAcc
                  ? "Join millions of others in sharing successful moves on HelpMeOut."
                  : "Welcome back on Board"}
              </p>
            </aside>
            <div className="flex flex-col items-center content-center w-full ">
              {/* With Google */}
              <button
                className="flex items-center justify-center text-center mt-[32px] text-[16px] tracking-[1%] leading-[24px] w-[475px] h-[48px] border-[1px] rounded-[12px] text-[#141414] border-[#141414]"
                type="link"
              >
                {" "}
                <img
                  className=" w-[24px] h-[24px] mr-[16px]"
                  src={google}
                  alt="Google Logo"
                ></img>
                Continue with Google
              </button>
              {/* With Facebook */}
              <button
                className="flex items-center justify-center w-[475px] mt-[24px] text-center text-[16px] tracking-[1%] leading-[24px] h-[48px] rounded-[12px] text-[#141414] border-[#141414] border-[1px]"
                type="link"
              >
                {" "}
                <img
                  className="w-[24px] h-[24px] mr-[16px]"
                  src={facebook}
                  alt="Facebook Logo"
                ></img>
                Continue with Facebook
              </button>
            </div>
            <div className="flex flex-row my-[32px] items-center content-center justify-center text-[#B9C2C8]">
              <div className=" w-[200px] mr-[10px] border-[1px] border-[#B9C2C8]"></div>{" "}
              or{" "}
              <div className=" w-[200px] ml-[10px] border-[1px] border-[#B9C2C8]"></div>
            </div>

            {/* FORM */}
            <SignUpLogin asAcc={asAcc} switch={toggleSinupLogin} />
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
