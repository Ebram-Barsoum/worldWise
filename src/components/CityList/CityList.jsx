/* eslint-disable react/prop-types */
import { useCities } from "../../contexts/CitiesContextNoServer.jsx";
import City from "../City/City";
import Spinner from "../Spinner/Spinner";

export default function CityList() {
  const { cities, loading, error } = useCities();

  if (loading) return <Spinner />;

  if (error)
    return (
      <p className="text-center h-100 d-flex justify-content-center align-items-center  ">
        ⛔{error}
      </p>
    );
  if (!cities.length)
    return <p>👋 Add your first city by clicking on the city on the map</p>;

  return (
    <ul className="h-100 p-2 overflow-auto col-12 col-md-10 col-lg-8 list-unstyled d-flex flex-column gap-3   ">
      {cities.map((city) => (
        <City city={city} key={city.id} />
      ))}
    </ul>
  );
}
