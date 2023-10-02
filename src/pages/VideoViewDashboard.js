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
    <div className="px-[100px]">
      <VideoViewNavbar />
      {/* links to other pages */}
      <div className="pt-8 ">
        <div className="flex items-center">
          <div className="flex space-x-2">
            <span to="/" className="text-gray-500">
              <Link to="/">Home /</Link>
            </span>
            <span to="/recent-video" className="text-gray-500">
              <Link to="/dashboard"> Recent Video /</Link>
            </span>
            <span
              to="/how-to-create-facebook-and-listing"
              className="text-blue-700"
            >
              How to Create a Facebook and Listing
            </span>
          </div>
        </div>
        <div className="flex items-center pt-12">
          <span className="text-2xl font-semibold ">
            How To Create A Facebook Ad Listing{" "}
          </span>
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="pl-4 text-blue-700"
          />
        </div>
      </div>
      {/* video image */}
      <div className="mt-10 border border-gray-300 rounded-2xl">
        <img src={image2} alt="Logo" className="w-full" />
      </div>

      {/* copy and send */}
      <div className="flex justify-between py-4 bg-transparent gap-16">
        <form className=" flex justify-between items-center border rounded-lg w-full px-6">
          <input
            type="text"
            className="focus:outline-none placeholder:text-sm w-full"
            placeholder="enter email of receiver"
          />
          <button className=" px-4 py-2 text-white bg-gray-300 hover:bg-gray-500 rounded-lg right-2 transition-colors duration-500">
            Send
          </button>
        </form>

        <div className="flex justify-between items-center border rounded-lg w-full px-3 py-2">
          <p className="flex-grow  text-sm text-gray-500">
            https://www.helpmeout/Untitled_Video_20232509
          </p>
          <button className="px-3 py-2 text-blue-900 border border-blue-900 rounded-lg backdrop-blur-md flex items-center w-fit">
            <FontAwesomeIcon icon={faCopy} className="mr-1 text-gray-500" />
            Copy URL
          </button>
        </div>
      </div>
      {/*  */}
      <div className=" mt-10">
        <p className="mb-4 text-xl font-semibold">Share your video</p>
        <div className="flex space-x-4">
          <button className="flex gap-3 items-center px-2 py-2 border-gray-500 border-[1px] rounded-md">
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-blue-400 text-xl"
            />
            Facebook
          </button>
          <button className="  flex gap-3 items-center px-2 py-2 border-gray-500 border-[1px] rounded-md">
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="text-green-500 text-xl"
            />
            WhatsApp
          </button>
          <button className="flex gap-3 items-center px-2 py-2 border-gray-500 border-[1px] rounded-md">
            <FontAwesomeIcon
              icon={faTelegram}
              className="text-blue-400 text-xl"
            />
            Telegram
          </button>
        </div>
      </div>
      {/*  */}
      <div className="flex flex-col pt-10">
        <div className="mb-4 flex flex-col gap-4">
          <h2 className="text-lg font-semibold ">Transcript</h2>
          <select
            className="py-2 px-6 border-[1px] border-gray-300 rounded text-gray-400 w-fit"
            name="language"
            id=""
          >
            <option value="English">English</option>
            <option value="French">French</option>
            <option value="Yoruba">Yoruba</option>
          </select>
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
    </div>
  );
}
