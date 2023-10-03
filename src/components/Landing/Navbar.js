import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { UserAuth } from "../AuthContext";
const Navbar = () => {
  const { user, logOut } = UserAuth();
  return (
    <nav className="flex flex-col md:flex-row justify-between items-center w-full px-[100px] bg-customWhite py-[12px]">
      <div className="logo w-[150px] mt-8 md:mt-0">
        <Link to="/">
          <img src={logo} alt="help me out logo" />
        </Link>
      </div>
      <div className="mt-2 md:mt-0 flex flex-col md:flex-row items-center gap-3 md:gap-12">
        <a href="/">Features</a>
        <a href="/">How it works</a>
      </div>
      <div className="flex  text-customBlue gap-4 items-center mb-6 md:mb-0 mt-2 md:mt-0">
        <Link className="font-bold " to="/getStarted">
          Get Started
        </Link>
        {user != null && <button onClick={() => logOut()}>Sign Out</button>}
      </div>
    </nav>
  );
};

export default Navbar;
