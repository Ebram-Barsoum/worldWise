import style from "./SpinnerFullPage.module.css";
import Spinner from "../Spinner/Spinner";

export default function SpinnerFullPage() {
  return (
    <div className={style.spinner}>
      <Spinner />
    </div>
  );
}
