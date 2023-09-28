import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/logo.png";
import fullScreen from "../assets/fullscreen.png";
import copy from "../assets/copy.png";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";



function PopUp() {
  return (
    <div className="popup p-10">
        {/* logo container */}
      <div className="logo_setting_container flex items-center justify-around w-full">
        <div className="logo w-[150px]">
          <img src={logo} alt="help me out logo" />
        </div>
        <div className="flex gap-x-3">
        <FontAwesomeIcon icon={faCog} className="text-lg" color="#100A42" />
        <div className="w-5 h-5 border-2 border-customGray rounded-[50%] flex justify-center items-center">
        <FontAwesomeIcon icon={faTimes} className="text-customGray" />
        </div>
        </div>
      </div>
      {/* text */}
      <p className="text-customGray py-3">
      This extension helps you record and share help videos with ease.
      </p>
      {/* icons */}
      <div className="icons flex justify-evenly my-10">
<div className="flex flex-col justify-center items-center"><img src={fullScreen} alt="fullScreen" className="w-8" /><p className="text-center block">Full Screen</p></div>
<div className="flex flex-col justify-center items-center"><img src={copy} alt="copy icon" className="w-8" /><p className="text-center block">Current Tab</p></div>
      </div>
      {/* recording button */}
      <button className="record_button bg-customBlue text-customWhite px-10 py-3 rounded-xl">Start Recording</button>
    </div>
  );
}

export default PopUp;
