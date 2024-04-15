import Map from "../Map/Map";
import Sidebar from "../Sidebar/Sidebar";
import style from "./AppLayout.module.css";

export default function AppLayout() {
  return (
    <div className={`${style.app}`}>
      <div className="h-100 row m-0">
        <Sidebar />
        <Map />
      </div>
    </div>
  );
}
