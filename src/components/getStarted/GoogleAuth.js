import { useEffect, useState } from "react";
import google from "../../assets/Google svg.png";
import { useNavigate } from "react-router-dom";

import { UserAuth } from "../AuthContext";

const GoogleAuth = () => {
  const { user, signInWithGoogle } = UserAuth();
  const navigate = useNavigate();

  const signIn = async () => {
    signInWithGoogle();
  };

  return (
    <button
      onClick={signIn}
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
  );
};

export default GoogleAuth;
