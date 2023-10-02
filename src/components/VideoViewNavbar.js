import image1 from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function VideoViewNavbar() {
  return (
    <>
      <nav className="flex items-center justify-between w-full p-4 pt-10 bg-transparent">
        <div className="flex items-center pl-16 space-x-2">
            <Link to="/">
            <img src={image1} alt="Logo" className="h-8 w-ful" />
            </Link>
          {/* <span className="text-lg font-bold text-white">Your Logo</span> */}
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-8 h-8 bg-gray-500 rounded-full">
              {/* User icon */}
              <FontAwesomeIcon
                icon={faUser}
                className="mt-3 text-xl text-gray-200"
              />
            </div>
            <span className="text-gray-500">John Mark</span>
          </div>
          <div className="relative inline-block pr-16 text-white">
            <button className="text-gray-500 focus:outline-none">▼</button>
            <div className="absolute right-0 hidden w-32 mt-2 bg-gray-800 rounded-md shadow-lg">
              <button className="block w-full px-4 py-2 text-left hover:bg-gray-600">
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}