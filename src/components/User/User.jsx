import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import style from "./User.module.css";

export default function User() {
  const {
    user: { name, avatar },
    logout,
  } = useAuth();
  const navigate = useNavigate();
  return (
    <div
      className={`${style.user} d-flex align-items-center gap-3 rounded-3 p-2`}
    >
      <img src={avatar} alt="user image" className="rounded-circle" />
      <p className="m-0">Welcome, {name}</p>
      <button
        className="btn fs-sm"
        onClick={() => {
          logout();
          navigate("/worldWise");
        }}
      >
        LOGOUT
      </button>
    </div>
  );
}
