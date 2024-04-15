/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import style from "./City.module.css";
import { useCities } from "../../contexts/CitiesContextNoServer";

export const formateDate = (date) => {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
};

export default function City({ city }) {
  const { currentCity, deleteCity } = useCities();

  console.log(currentCity);
  return (
    <li
      className={`w-100 d-flex align-items-center gap-2 rounded-2 p-2 flex-wrap pointer ${
        style.city
      } ${city.id === currentCity.id && style.active} w-100`}
    >
      <Link
        className={`d-flex align-items-center pointer flex-grow-1`}
        to={`${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`}
      >
        <div>{city.emoji}</div>
        <div className="fw-bold mx-3">{city.cityName}</div>

        <time className="ms-auto">{formateDate(city.date)}</time>
      </Link>

      <button
        className="ms-auto d-flex justify-content-center align-items-center rounded-circle "
        onClick={() => deleteCity(city.id)}
      >
        <i className="fa-solid fa-xmark"></i>
      </button>
    </li>
  );
}
