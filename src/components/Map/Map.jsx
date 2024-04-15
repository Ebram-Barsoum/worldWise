/* eslint-disable no-unused-vars */
import { icon } from "leaflet";
import { useEffect, useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { useNavigate } from "react-router-dom";
import { useCities } from "../../contexts/CitiesContextNoServer";
import { useGeolocation } from "../../hooks/useGeolocation";
import style from "./Map.module.css";
import { usePosition } from "../../hooks/usePosition";
import User from "../User/User";

export default function Map() {
  const [mapPosition, setMapPosition] = useState([44.9, 32.6]);

  const { cities } = useCities();
  const { loading, location, getLocation } = useGeolocation();
  const [lat, lng] = usePosition();

  const getUserLocation = () => {
    getLocation();
  };

  useEffect(() => {
    if (lat && lng) setMapPosition([lat, lng]);
  }, [lat, lng, setMapPosition]);

  useEffect(() => {
    if (location) setMapPosition([location.lat, location.lng]);
  }, [location]);

  return (
    <div
      className={`${style.map} h-100 col-12 col-md-7 p-0 position-relative `}
    >
      <MapContainer
        center={mapPosition}
        zoom={6}
        scrollWheelZoom={true}
        className="h-100"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => {
          return (
            <Marker position={city.position} key={city.id}>
              <Popup>
                <span className="fw-bold me-3">{city.emoji}</span>
                <span>{city.cityName}</span>
              </Popup>
            </Marker>
          );
        })}
        <ChangePosition position={mapPosition} />
        <DetectPositionOnClick />
      </MapContainer>

      <button
        className={`btn ${style.locationBtn} ${location && "d-none"}`}
        onClick={getUserLocation}
      >
        {loading ? "Getting your position..." : "USE YOUR LOCATION"}
      </button>
      <User />
    </div>
  );
}

function ChangePosition({ position }) {
  const map = useMap();
  map.setView(position);
}

function DetectPositionOnClick() {
  const navigate = useNavigate();

  useMapEvents({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
}
