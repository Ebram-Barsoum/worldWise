/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import style from "./BackButton.module.css";

export default function BackButton({ align }) {
  const navigate = useNavigate();
  return (
    <button
      className={`btn ${style.backBtn} d-block w-auto m${align}-auto`}
      type="button"
      onClick={() => navigate(-1)}
    >
      &larr; Back
    </button>
  );
}
