/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useCities } from "../../contexts/CitiesContextNoServer";
import Spinner from "../Spinner/Spinner";
import { formateDate } from "../City/City";
import BackButton from "../BackButton/BackButton";
import style from "./CityDetails.module.css";

export default function CityDetails() {
  const { id } = useParams();
  const { currentCity, getCurrentCity, loading, error } = useCities();

  useEffect(() => {
    getCurrentCity(id);
  }, [id, getCurrentCity]);

  if (loading) return <Spinner />;
  if (error) return <p className="fs-4">⛔{error}</p>;

  const { cityName, emoji, date, notes } = currentCity;
  return (
    <div className="text-start w-100 row m-0 justify-content-center ">
      <div
        className={`${style.cityDetails} col-10 p-3 rounded-2 d-flex flex-column gap-2`}
      >
        <div>
          <h6 className="text-white-50 mb-0 text-uppercase fs-sm">city name</h6>
          <h1 className="fs-5">
            <span className="me-2 fw-bold">{emoji}</span>
            {cityName}
          </h1>
        </div>

        <div>
          <h6 className="text-uppercase fs-sm text-white-50">
            you went to {cityName} on
          </h6>
          <p>{formateDate(date || null)}</p>
        </div>

        {notes && (
          <div>
            <h6 className="text-uppercase fs-sm text-white-50">Your Notes</h6>
            <p>{notes}</p>
          </div>
        )}

        <div>
          <h6 className="text-uppercase fs-sm text-white-50">learn more</h6>
          <a href={`https://en.wikipedia.org/wiki/${cityName}`} target="blank">
            Check out {cityName} on Wikipedia &rarr;
          </a>
        </div>

        <BackButton align={"e"} />
      </div>
    </div>
  );
}
