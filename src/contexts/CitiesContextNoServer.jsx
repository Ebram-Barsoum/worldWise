/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import axios from "axios";
import { useCallback, useContext, useEffect, useReducer } from "react";
import { createContext } from "react";

const CitiesContext = createContext(null);
const URL = "http://localhost:9000/cities";

const initialState = {
  cities: [],
  loading: false,
  error: "",
  currentCity: {},
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, loading: true };
    case "error":
      return { ...state, loading: false, error: action.payload };
    case "cities/loaded":
      return { ...state, loading: false, cities: action.payload };
    case "city/added":
      return {
        ...state,
        loading: false,
        cities: [...state.cities, action.payload],
      };
    case "city/deleted":
      return {
        ...state,
        loading: false,
        cities: state.cities.filter((city) => city.id !== action.payload),
      };
    case "city/current":
      return { ...state, loading: false, currentCity: action.payload };
    default:
      throw new Error("Unknown action type...!");
  }
}

export default function CitiesProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { cities, loading, error, currentCity } = state;

  const getCurrentCity = useCallback(
    (id) => {
      if (currentCity.id === id) return;

      dispatch({ type: "loading" });

      const targetCity = cities.filter((city) => city.id === id).at(0);
      dispatch({ type: "city/current", payload: targetCity });
    },
    [currentCity.id, cities]
  );

  const addCity = (newCity) => {
    dispatch({ type: "loading" });
    dispatch({ type: "city/added", payload: newCity });
  };

  const deleteCity = (id) => {
    dispatch({ type: "loading" });
    dispatch({ type: "city/deleted", payload: id });
  };

  return (
    <CitiesContext.Provider
      value={{
        cities,
        loading,
        error,
        currentCity,
        getCurrentCity,
        addCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

export function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outSide the CitiesProvider");
  return context;
}
