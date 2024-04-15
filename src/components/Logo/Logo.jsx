import { Link } from "react-router-dom";
import logoImage from "../../../public/icon.png";

export default function Logo() {
  return (
    <Link
      className="navbar-brand d-flex align-items-center gap-2 text-white"
      to={"/worldWise"}
    >
      <img
        src={logoImage}
        alt="World Wise logo"
        className=" d-inline-block"
        style={{ height: "40px" }}
      />
      <span className="fw-bold ">World Wise</span>
    </Link>
  );
}
