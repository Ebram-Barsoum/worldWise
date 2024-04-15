import { NavLink, Outlet } from "react-router-dom";
import Logo from "../Logo/Logo";
import style from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <div
      className={`h-100 col-12 col-md-5 p-3 d-flex flex-column align-items-center gap-4  ${style.sidebar}`}
    >
      <div className="d-flex justify-content-center fs-2">
        <Logo />
      </div>

      <ul className=" list-unstyled d-flex mb-0 py-1 rounded-3">
        <li>
          <NavLink to={"cities"} className="rounded-3 px-3 py-1">
            Cities
          </NavLink>
        </li>
        <li>
          <NavLink to={"countries"} className="rounded-3 px-3 py-1">
            Countries
          </NavLink>
        </li>
      </ul>

      <div
        className={`${style.dynamicContent} w-100 d-flex justify-content-center`}
      >
        <Outlet />
      </div>

      <footer className="p-2 text-center mt-auto">
        <p className="text-white-50">
          &copy; CopyRight {new Date().getFullYear()} by WoldWise inc.
        </p>
      </footer>
    </div>
  );
}
