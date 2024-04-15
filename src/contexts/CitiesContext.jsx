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

  useEffect(() => {
    dispatch({ type: "loading" });
    axios
      .get(URL)
      .then(({ data }) => {
        dispatch({ type: "error", payload: "" });
        dispatch({ type: "cities/loaded", payload: data });
      })
      .catch((error) => {
        dispatch({ type: "error", payload: error.message });
      });
  }, [dispatch]);

  const getCurrentCity = useCallback(
    (id) => {
      if (currentCity.id === id) return;

      dispatch({ type: "loading" });
      axios
        .get(`http://localhost:9000/cities/${id}`)
        .then(({ data }) => {
          dispatch({ type: "error", payload: "" });
          dispatch({ type: "city/current", payload: data });
        })
        .catch((error) => {
          dispatch({ type: "error", payload: error.message });
        });
    },
    [currentCity.id]
  );

  const addCity = (newCity) => {
    dispatch({ type: "loading" });
    axios
      .post(URL, { ...newCity })
      .then(({ data }) => {
        console.log(data);
        dispatch({ type: "city/added", payload: data });
      })
      .catch((error) => {
        dispatch({ type: "error", payload: error.message });
      });
  };

  const deleteCity = (id) => {
    dispatch({ type: "loading", payload: true });
    axios
      .delete(`${URL}/${id}`)
      .then(() => {
        dispatch({
          type: "city/deleted",
          payload: id,
        });
      })
      .catch((error) => {
        dispatch({ type: "error", payload: error.message });
      });
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
