import logo from "../assets/logo.png";
import user from "../assets/profile-circle.svg";
import { Link } from "react-router-dom";

export default function VideoViewNavbar() {
  return (
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
  );
}
