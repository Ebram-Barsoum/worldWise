import { useEffect, useState } from "react";
import style from "./Login.module.css";
import Navbar from "../Navbar/Navbar";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  useEffect(() => {
    if (isAuthenticated) navigate("/worldWise/app", { replace: true });
  }, [isAuthenticated, navigate]);

  return (
    <div className={style.login}>
      <Navbar />

      <main className=" h-100 py-5">
        <div className="row h-100 m-0 py-5 justify-content-center align-items-center ">
          <form
            className="col-11 col-sm-6 col-md-5 col-lg-4 d-flex flex-column gap-3 p-3  rounded-2"
            onSubmit={handleSubmit}
          >
            <div className={style.row}>
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>

            <div className={style.row}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>

            <div>
              <button className="btn">Login</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
