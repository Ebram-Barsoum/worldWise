import { useCities } from "../../contexts/CitiesContextNoServer.jsx";
import CountryItem from "../CountryItem/CountryItem.jsx";
import Spinner from "../Spinner/Spinner.jsx";

export default function CountryList() {
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

  const countries = Array.from(
    new Set(
      cities.map((city) => {
        return `${city.emoji + "," + city.country}`;
      })
    )
  ).map((ele) => {
    const data = ele.split(",");
    return { emoji: data[0], name: data[1] };
  });

  return (
    <ul
      className={`h-100 overflow-auto col-10 list-unstyled row m-0 gap-3 overflow-y-auto `}
    >
      {countries.map((country) => (
        <CountryItem country={country} key={country.name} />
      ))}
    </ul>
  );
}
