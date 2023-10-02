import search from "../../assets/search-normal.svg";
import logo from "../../assets/logo.png";
import user from "../../assets/profile-circle.svg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="mx-[100px] pb-10">
      <aside className="flex items-center justify-between py-[40px]">
        <Link to="/">
          <img className="h-[40px]" src={logo} alt="logo" />
        </Link>
        <div className="flex gap-3">
          <img className="w-[40px]" src={user} alt="user" />
          <select name="username">
            <option value="name">John Mark</option>
          </select>
        </div>
      </aside>
      <aside className="flex items-center justify-between pt-5">
        <div>
          <h2 className="text-3xl font-bold">Hello, John Mark</h2>
          <p className="text-gray-600 text-base font-thin">
            Here are your recorded videos
          </p>
        </div>
        <form className="flex items-center gap-3 border-[1px] border-gray-200 py-4 w-[400px] pl-5 rounded-xl bg-gray-200">
          <label htmlFor="search">
            <img className="w-4 " src={search} alt="search" />
          </label>
          <input
            className="placeholder:text-xs placeholder:text-gray-400 bg-transparent focus:outline-none"
            type="text"
            placeholder="Search for a particular video"
          />
        </form>
      </aside>
    </div>
  );
};

export default Hero;
