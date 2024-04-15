import style from "./Spinner.module.css";

export default function Spinner() {
  return (
    <div
      className={`${style.container} d-flex justify-content-center align-items-center`}
    >
      <p className={style.spinner}></p>
    </div>
  );
}
