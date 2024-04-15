/* eslint-disable react/prop-types */
import style from "./CountryItem.module.css";

export default function CountryItem({ country }) {
  return (
    <li
      className={`${style.countryItem} col-5 d-flex flex-column justify-content-center align-items-center rounded-3 py-2 px-3`}
    >
      <div className="emoji">{country.emoji}</div>
      <div className="name fw-bold">{country.name}</div>
    </li>
  );
}
