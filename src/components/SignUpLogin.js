import { useEffect, useState } from "react";
import { auth } from "../Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignUpLogin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [btnValue, setBtnValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    props.asAcc ? setBtnValue("Login") : setBtnValue("Signup");

    !props.asAcc
      ? setBtnValue((prev) => (loading ? "Signing up..." : prev))
      : setBtnValue((prev) => (loading ? "Login In..." : prev));
  }, [props, loading]);

  // SignUp and Login Handler
  const signupLoginHandler = async (e) => {
    e.preventDefault();

    if (!email || !password)
      return setError("Please fill in both email and password fields.");

    setLoading(true);
    setError(null);

    // Sign Up ()
    if (!props.asAcc) {
      try {
        if (password.length < 7) {
          setError("Password must be minimum of 7 characters");
          return setLoading(false);
        }
        await createUserWithEmailAndPassword(auth, email, password);
        return navigate("/dashboard");
      } catch (error) {
        setError("Email is already associated with an existing account.");
      } finally {
        setLoading(false);
      }
    }

    // Login ()
    if (props.asAcc) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        return navigate("/dashboard");
      } catch (error) {
        setError(`Incorrect email or password entered`);
      } finally {
        setLoading(false);
      }
    }
  };

  const onSwitch = () => {
    setEmail("");
    setPassword("");
    setError("");
    props.switch();
  };

  return (
    <form className="w-full mx-auto " onSubmit={signupLoginHandler}>
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
        onClick={signupLoginHandler}
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
          {!props.asAcc ? "Log In" : "Signup"}
        </span>
      </p>
    </form>
  );
};

export default SignUpLogin;
