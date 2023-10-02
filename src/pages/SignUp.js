import React, { useState } from "react";
import { Link } from "react-router-dom";
import facebook from "../assets/g12.png";
import google from "../assets/Google svg.png";
import logo from "../assets/logo.png";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const loginHandler = async (e) => {
    e.preventDefault();

    // Client-side form validation
    if (!email || !password) {
      setError("Please fill in both email and password fields.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const user = {
        email,
        password,
      };

      const response = await fetch("", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (response.ok) {
        const result = await response.json();
        localStorage.setItem("user-info", JSON.stringify(result));
        setSuccess(true);
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Signup failed.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="relative w-full pl-[113.5px] py-[80px]">
        <div>
          <Link to="/">
            <img className="w-[150px]" src={logo} alt="logo"></img>
          </Link>
        </div>
        <div className="flex flex-col items-center content-center justify-center mt-[15px] ">
          <div className=" w-[475px]">
            <aside className="flex flex-col items-center">
              <h4 className=" font-bold text-[32px] leading-[48px] tracking-[1%] text-[#141414]">
                Log in and Sign up
              </h4>
              <p className=" px-[77px] mt-[8px] text-center text-[14px] leading-[21px] font-normal tracking-[1%] text-[#434343]">
                Join millions of others in sharing successful moves on
                HelpMeOut.
              </p>
            </aside>
            <div className="flex flex-col items-center content-center w-full ">
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
            <form className="w-full mx-auto " onSubmit={loginHandler}>
              <div className="flex flex-col">
                <label className=" place-self-start mb-[12px]" htmlFor="email">
                  Email
                </label>
                <input
                  className="relative rounded-[12px] p-[16px] border-[1px] border-[#B6B3C6]"
                  placeholder="Enter your email address"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>
              <div className="flex flex-col mt-[16px]">
                <label
                  className="place-self-start mb-[12px]"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="relative p-[16px] rounded-[12px] border-[1px] border-[#B6B3C6]"
                  placeholder="Enter your password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </div>
              <button
                onClick={loginHandler}
                className=" w-[475px] h-[53px] mt-[32px] text-center rounded-[8px] text-[18px] font-medium leading-[21.1px] text-[#f9f9ff] bg-[#120b48] py-[16px] px-[20px]"
                type="submit"
                disabled={loading}
              >
                {loading ? "Signing up..." : "Sign Up"}
              </button>
              {error && <p className="text-red-500">{error}</p>}
              {success && <p className="text-green-500">Signup successful!</p>}
              <Link to="/dashboard">
                <p className=" my-[20px] underline font-semibold text-center text-[#120b48] cursor-pointer">
                  <a href="/">Continue to Dashboard</a>
                </p>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
