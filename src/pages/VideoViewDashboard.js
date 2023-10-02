import VideoViewNavbar from "../components/VideoViewNavbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import image2 from "../assets/video frame (1).png";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {
  faFacebook,
  faWhatsapp,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";


export default function VideoViewDashboard() {
  return (
    <>
      <VideoViewNavbar />
      {/* links to other pages */}
      <div className="pt-8 ">
        <div className="flex items-center pl-20">
          <div className="flex space-x-2">
            <span to="/" className="text-gray-500">
             <Link to="/">Home /</Link> 
            </span>
            <span to="/recent-video" className="text-gray-500">
            <Link to="/dashboard"> Recent Video /</Link> 
            </span>
            <span
              to="/how-to-create-facebook-and-listing"
              className="text-blue-700 s"
            >
              How to Create a Facebook and Listing
            </span>
          </div>
        </div>
        <div className="flex items-center pt-12 pl-20 space-x-2">
          <span className="text-2xl font-semibold ">
            How To Create A Facebook Ad Listing{" "}
          </span>
          <FontAwesomeIcon icon={faPenToSquare} className="pl-4" />
        </div>
      </div>
      {/* video image */}
      <div className="flex items-center justify-center my-10">
        <div className="text-center border border-gray-300 rounded-2xl">
          <img src={image2} alt="Logo" className="w-full" />
        </div>
      </div>
      {/* copy and send */}
      <div className="flex justify-between p-4 bg-transparent">
        <div className="relative flex items-center pl-8">
          <input
            type="text"
            className="px-10 py-3 pr-10 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            placeholder="enter email of receiver"
          />
          <button className="absolute px-2 py-1 text-white bg-gray-500 rounded-r-lg right-2">
            Send
          </button>
        </div>
        <div className="relative flex items-center pr-8">
          <div className="flex">
            <input
              type="text"
              className="flex-grow px-8 py-3 pr-10 text-sm border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              placeholder="https://www.helpmeout/Untitled_Video_20232509"
            />
            <button className="absolute px-2 py-1 text-blue-500 transform -translate-y-1/2 border border-blue-500 rounded backdrop-blur-md right-10 top-1/2">
              <FontAwesomeIcon icon={faCopy} className="mr-1 text-gray-500" />
              Copy
            </button>
          </div>
        </div>
      </div>
      {/* ......................................................................... */}
      <div className="pl-10 mt-10">
        <p className="mb-4 text-xl font-semibold">Share your video</p>
        <div className="flex space-x-4">
          <button className="flex items-center px-2 py-2 text-white bg-blue-500 rounded-md">
            <FontAwesomeIcon icon={faFacebook} className="mr-2 text-xl" />
            Facebook
          </button>
          <button className="flex items-center px-2 py-2 text-white bg-green-500 rounded-md">
            <FontAwesomeIcon icon={faWhatsapp} className="mr-2 text-xl" />
            WhatsApp
          </button>
          <button className="flex items-center px-2 py-2 text-white bg-blue-400 rounded-md">
            <FontAwesomeIcon icon={faTelegram} className="mr-2 text-xl" />
            Telegram
          </button>
        </div>
      </div>
      {/* .................................................................... */}
      <div className="flex flex-col pt-10 pl-10">
        {/* Transcript */}
        <div className="mb-4 ">
          <h2 className="text-lg font-semibold ">Transcript</h2>
        </div>

        {/* Language Selector */}
        {/* <div className="flex items-center pt-5">
          <p className="mr-2">English</p>
          <FontAwesomeIcon icon={faAngleDown} />
        </div> */}
      </div>
      {/* {................................................................................} */}
      {/* <div className="flex items-center pt-10 pl-10 space-x-20">
        <div className="text-xl font-bold">0.01</div>
        <div className="text-gray-500 whitespace-normal">
          <h2>
            First step. Open Facebook on your desktop or mobile device and
            locate "Marketplace" in the left-hand <br /> menu or at the top of
            the First step. Open Facebook on your desktop or mobile device and
            locate <br /> "Marketplace" in the left-hand menu or at the top of
            the{" "}
          </h2>
        </div>
      </div> */}
      {/* ....................................................................... */}

      {/* <div className="flex items-center pt-10 pl-10 space-x-20">
        <div className="text-xl font-bold">0.15</div>
        <div className="text-gray-500 whitespace-normal">
          <h2>
            First step. Open Facebook on your desktop or mobile device and
            locate "Marketplace" in the left-hand <br /> menu or at the top of
            the . Open Facebook on your desktop or mobile device and locate
            "Marketplace" <br /> in the left-ha
          </h2>
        </div>
      </div> */}
      {/* ....................................................................... */}
{/* 
      <div className="flex items-center pt-10 pl-10 space-x-20">
        <div className="text-xl font-bold">0.30</div>
        <div className="text-gray-500 whitespace-normal">
          <h2>
            First step. Open Facebook on your desktop or mobile device and
            locate "Marketplace" in the left-hand <br /> menu or at the top of
            the
          </h2>
        </div>
      </div> */}
    </>
  );
}