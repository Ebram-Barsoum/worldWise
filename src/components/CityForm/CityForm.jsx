import { useNavigate } from "react-router-dom";
import style from "./CityForm.module.css";
import BackButton from "../BackButton/BackButton";
import { usePosition } from "../../hooks/usePosition";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../Spinner/Spinner";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useCities } from "../../contexts/CitiesContextNoServer";

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

export default function CityForm() {
  const navigate = useNavigate();
  const [lat, lng] = usePosition();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [city, setCity] = useState(null);
  const [notes, setNotes] = useState("");
  const [date, setDate] = useState(new Date());
  const { addCity } = useCities();

  const emoji = city && convertToEmoji(city.countryCode);

  const handleAddCity = (e) => {
    e.preventDefault();

    if (!city.city || !date) return;

    const newCity = {
      cityName: city.city,
      id: crypto.randomUUID(),
      country: city.countryName,
      emoji: convertToEmoji(city.countryCode),
      date,
      notes,
      position: { lat: city.latitude, lng: city.longitude },
    };

    addCity(newCity);
    navigate("/worldWise/app/cities");
  };

  useEffect(() => {
    if (!lat && !lng) return;

    setLoading(true);
    axios
      .get(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
      )
      .then(({ data }) => {
        setError("");

        console.log(data);
        if (!data.city && !data.countryName) {
          setError("This is not a city, please click somewhere else! 🤔");
        } else {
          setCity(data);
        }
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [lat, lng]);

  if (loading) return <Spinner />;
  if (error)
    return (
      <p className="text-center fw-bold fs-5 w-75 text-center">⛔{error}</p>
    );

  if (!lat && !lng)
    return (
      <p className="text-center fw-bold fs-5 w-75 text-center">
        👋 Start by Clicking on the map
      </p>
    );

  return (
    <form
      className={`${style.form} col-12 col-sm-8 col-md-10 d-flex flex-column gap-2 py-3 px-4 rounded-3`}
      onSubmit={(e) => handleAddCity(e)}
    >
      <div className="position-relative">
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          value={city?.city}
          onChange={(e) =>
            setCity((city) => {
              return { ...city, city: e.target.value };
            })
          }
        />
        <span className={`${style.emoji} fs-4 translate-middle-x `}>
          {emoji}{" "}
        </span>
      </div>

      <div>
        <label htmlFor="date">When did you go to {city?.city}?</label>
        <ReactDatePicker
          id="date"
          selected={date}
          onChange={(date) => setDate(date)}
          dateFormat={"dd/MM/yyyy"}
        />
      </div>

      <div>
        <label htmlFor="notes">Notes about your trip to </label>
        <textarea
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>

      <div
        className={`${style.buttons} d-flex justify-content-between align-items-center`}
      >
        <button className={`btn`} type="submit" onClick={handleAddCity}>
          Add
        </button>
        <BackButton align={"s"} />
      </div>
    </form>
  );
}
