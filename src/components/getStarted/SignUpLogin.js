import { useEffect, useState } from "react";
import { auth } from "../../Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../AuthContext";

const SignUpLogin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [btnValue, setBtnValue] = useState("");
  const navigate = useNavigate();
  const {
    asAcc,
    toggleSinupLogin,
    signupLoginHandler,
    error,
    loading,
    success,
  } = UserAuth();

  useEffect(() => {
    asAcc ? setBtnValue("Login") : setBtnValue("Signup");

    !asAcc
      ? setBtnValue((prev) => (loading ? "Signing up..." : prev))
      : setBtnValue((prev) => (loading ? "Login In..." : prev));
  }, [asAcc, loading]);

  // SignUp and Login Handler
  const signupOrLoginHandler = async (e) => {
    e.preventDefault();

    await signupLoginHandler(email, password);
  };

  const onSwitch = () => {
    setEmail("");
    setPassword("");
    toggleSinupLogin();
  };

  return (
    <form className="w-full mx-auto " onSubmit={signupOrLoginHandler}>
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
          required
        ></input>
      </div>
      <div className="flex flex-col mt-[16px]">
        <label className="place-self-start mb-[12px]" htmlFor="password">
          Password
        </label>
        <input
          className="relative p-[16px] rounded-[12px] border-[1px] border-[#B6B3C6]"
          placeholder="Enter your password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        ></input>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <button
        onClick={signupOrLoginHandler}
        className=" w-[475px] h-[53px] mt-[32px] text-center rounded-[8px] text-[18px] font-medium leading-[21.1px] text-[#f9f9ff] bg-[#120b48] py-[16px] px-[20px]"
        type="submit"
        disabled={loading}
      >
        {btnValue}
      </button>
      {success && <p className="text-green-500">Signup successful!</p>}
      <p className="my-[20px] text-gray-500  font-semibold justify-center flex gap-3">
        Already have an account?
        <span
          onClick={onSwitch}
          className="underline text-[#120b48] font-bold cursor-pointer"
        >
          {asAcc ? "Log In" : "Signup"}
        </span>
      </p>
    </form>
  );
};

export default SignUpLogin;
