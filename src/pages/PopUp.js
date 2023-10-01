import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/logo.png";
// install react-media-recorder
import {
  faCog,
  faTimes,
  faCopy,
  faMicrophone,
  faCamera,
  faDesktop,
  faToggleOn,
  faToggleOff,
} from "@fortawesome/free-solid-svg-icons";

function PopUp() {
  const [minimized, setMinimized] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState("currentTab");
  const [isCameraOn, setCameraOn] = useState(true);
  const [isAudioOn, setAudioOn] = useState(true);

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const handleDocumentClick = (event) => {
    if (!document.getElementById("popup").contains(event.target)) {
      setMinimized(true);
    }
  };

  const handleCloseClick = () => {
    setMinimized(true);
  };

  const handleIconClick = (iconName) => {
    setSelectedIcon(iconName);
  };

  const toggleCamera = () => {
    setCameraOn((prevState) => !prevState);
  };

  const toggleAudio = () => {
    setAudioOn((prevState) => !prevState);
  };

  return (
    <div
      id="popup"
      className={`popup px-3 py-3 ${
        minimized ? "hidden" : ""
      }`}
    >
      {/* logo container */}
      <div className="logo_setting_container flex items-center gap-x-10 justify-around w-full">
        <div className="logo w-[150px] cursor-pointer">
          <img src={logo} alt="help me out logo" />
        </div>
        <div
          className="close_icon flex gap-x-3 items-center cursor-pointer">
          <FontAwesomeIcon
            icon={faCog}
            className="text-customBlue text-2xl"
          />
          <div className="w-6 h-6 border-2 border-customGray rounded-full flex justify-center items-center"
          onClick={handleCloseClick}>
            <FontAwesomeIcon
              icon={faTimes}
              className="text-customGray cursor-pointer text-sm"
            />
          </div>
        </div>
      </div>
      {/* text */}
      <p className="text-customGray py-3">
        This extension helps you record and share help videos with ease.
      </p>
      {/* icons */}
      <div className="icons flex justify-center gap-x-20 my-5">
        <div
          className={`fullscreen flex flex-col justify-center items-center ${
            selectedIcon === "fullScreen"
              ? "text-customBlue"
              : "text-customGray"
          }`}
          onClick={() => handleIconClick("fullScreen")}
        >
          <FontAwesomeIcon
            icon={faDesktop}
            className="text-5xl cursor-pointer"
          />
          <p className="text-center pt-5 font-semibold">Full Screen</p>
        </div>
        <div
          className={`current_tab flex flex-col justify-center items-center ${
            selectedIcon === "currentTab"
              ? "text-customBlue"
              : "text-customGray"
          }`}
          onClick={() => handleIconClick("currentTab")}
        >
          <FontAwesomeIcon
            icon={faCopy}
            className="text-5xl cursor-pointer"
          />
          <p className="text-center pt-5 font-semibold">Current Tab</p>
        </div>
      </div>
      {/* camera and audio selection */}
      <div className="camera_audio_btn pb-5 flex flex-col items-center gap-y-5">
        <div className="camer_button flex justify-between items-center px-5 border-2 border-customBlue w-full text-customBlue py-3 rounded-xl">
          <div className="flex gap-x-3">
            <FontAwesomeIcon
              icon={faCamera}
              className="text-3xl cursor-pointer"
            />
            <p>Camera</p>
          </div>
          <FontAwesomeIcon
            icon={isCameraOn ? faToggleOn : faToggleOff}
            className="text-3xl cursor-pointer"
            onClick={toggleCamera}
          />
        </div>
        <div className="audio_button flex justify-between items-center px-5 border-2 border-customBlue w-full text-customBlue py-3 rounded-xl">
          <div className="flex gap-x-3">
            <FontAwesomeIcon
              icon={faMicrophone}
              className="text-3xl cursor-pointer"
            />
            <p>Audio</p>
          </div>
          <FontAwesomeIcon
            icon={isAudioOn ? faToggleOn : faToggleOff}
            onClick={toggleAudio}
            className="text-3xl cursor-pointer"
          />
        </div>
      </div>
      {/* start recording button */}
      <button className="record_button bg-customBlue text-customWhite px-10 py-4 rounded-xl w-full">
        Start Recording
      </button>
    </div>
  );
}

export default PopUp;