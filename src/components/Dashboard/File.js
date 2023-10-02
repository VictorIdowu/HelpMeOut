import vid from "../../assets/video frame.png"
import link from "../../assets/link.svg";
import settings from "../../assets/more.svg";
import { Link } from "react-router-dom";

const File = () => {
  return (
    <Link to="/video">
    <div className="p-3 border-[1px] border-gray-300 rounded-3xl ">
      <img className="w-full" src={vid} alt="" />
      <aside className="flex justify-between pt-4 pb-1 items-start">
        <div className="flex flex-col gap-1">
          <h4 className="text-[20px]">How to create Facebook Ad listing</h4>
          <p className="text-base font-thin text-gray-400">
            SEPTEMBER 23, 2023
          </p>
        </div>
        <div className="flex gap-2">
          <img src={link} alt="link" />
          <img src={settings} alt="settings" />
        </div>
      </aside>
    </div>
    </Link>

  );
};

export default File;