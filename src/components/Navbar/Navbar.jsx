import { Link, NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import { useAuth } from "../../contexts/AuthContext";

export default function Navbar() {
  const { isAuthenticated } = useAuth();

  return (
    <nav className="navbar navbar-expand-md bg-dark position-absolute w-100">
      <div className="container">
        <Logo />
        <button
          className="navbar-toggler shadow-none text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-lg-0 text-center gap-3">
            <li className="nav-item">
              <NavLink
                className="nav-link text-white"
                to={"/worldWise/pricing"}
              >
                PRICING
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-white"
                to={"/worldWise/product"}
              >
                PRODUCT
              </NavLink>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white cta py-1 py-md-2 px-3 px-md-2"
                to={isAuthenticated ? "/worldWise/app" : "/worldWise/login"}
              >
                LOG IN
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
