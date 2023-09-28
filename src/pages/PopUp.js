import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/logo.png";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { faToggleOn, faToggleOff } from "@fortawesome/free-solid-svg-icons";

function PopUp() {
  return (
    <div className="popup px-3 py-3">
      {/* logo container */}
      <div className="logo_setting_container flex items-center gap-x-10 justify-around w-full">
        <div className="logo w-[150px] cursor-pointer">
          <img src={logo} alt="help me out logo" />
        </div>
        <div className="flex gap-x-3">
          <FontAwesomeIcon icon={faCog} className="text-customBlue cursor-pointer" />
          <div className="w-5 h-5 border-2 border-customGray rounded-[50%] flex justify-center items-center">
            <FontAwesomeIcon icon={faTimes} className="text-customGray cursor-pointer" />
          </div>
        </div>
      </div>
      {/* text */}
      <p className="text-customGray py-3">
        This extension helps you record <br />
        and share help videos with ease.
      </p>
      {/* icons */}
      <div className="icons flex justify-center gap-x-10 my-5">
        <div className="flex flex-col justify-center items-center">
          <FontAwesomeIcon
            icon={faDesktop}
            style={{ color: "#616163", fontSize: "30px", cursor: "pointer" }}
          />
          <p className="text-center block pt-5"><p className="text-customGray">Full Screen</p></p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <FontAwesomeIcon
            icon={faCopy}
            style={{ color: "#100A42", fontSize: "30px", cursor: "pointer" }}
          />
          <p className="text-center block pt-5"><p className="text-customBlue">Current Tab</p></p>
        </div>
      </div>
      {/* toggle buttons */}
      <div className="camera_audio_btn pb-5 flex flex-col items-center gap-y-5">
        <div className="camer_button flex justify-between items-center px-5 bg-transparent border-2 border-customBlue w-full text-customBlue py-3 rounded-xl">
          <div className="flex gap-x-3">
            <FontAwesomeIcon
              icon={faCamera}
              style={{ color: "#100A42", fontSize: "30px", cursor: "pointer" }}
            />
            <p>Camera</p>
          </div>
          <FontAwesomeIcon
            icon={faToggleOn}
            style={{ color: "#100A42", fontSize: "30px", cursor: "pointer" }}
          />
        </div>
        <div className="audio_button flex justify-between items-center px-5 bg-transparent border-2 border-customBlue w-full text-customBlue py-3 rounded-xl">
          <div className="flex gap-x-3">
            <FontAwesomeIcon
              icon={faMicrophone}
              style={{ color: "#100A42", fontSize: "30px", cursor: "pointer" }}
            />
            <p>Audio</p>
          </div>
          <FontAwesomeIcon
            icon={faToggleOff}
            style={{ color: "#100A42", fontSize: "30px", cursor: "pointer" }}
          />
        </div>
      </div>
      {/* recording button */}
      <button className="record_button bg-customBlue text-customWhite px-10 py-3 rounded-xl w-full">
        Start Recording
      </button>
    </div>
  );
}

export default PopUp;
