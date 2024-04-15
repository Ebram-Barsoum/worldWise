import style from "./home.module.css";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
export default function Home() {
  const { isAuthenticated } = useAuth();

  return (
    <div className={style.home}>
      <Navbar />

      <section className="h-100 py-5 d-flex flex-column justify-content-center text-center gap-3">
        <h1 className="mt-5">You travel the world.</h1>
        <h1>WorldWise keeps track of your adventures.</h1>
        <p className="text-white-50  px-sm-3 px-md-5 fs-5 fw-bold">
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </p>

        <Link
          className="btn d-block color-black"
          to={isAuthenticated ? "/worldWise/app" : "/worldWise/login"}
        >
          Start tracking now
        </Link>
      </section>
    </div>
  );
}
