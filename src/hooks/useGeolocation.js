import { useState } from "react";

export function useGeolocation() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [location, setLocation] = useState(null);

    const getLocation = () => {
        if (!navigator.geolocation) return setError('This browser does not support Geolocation');

        setLoading(true);
        navigator.geolocation.getCurrentPosition((pos) => {
            setLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude });
            setLoading(false);

        },
            (error) => {
                alert(error.message);
                setLoading(false);
            }
        );
    }

    return { loading, error, location, getLocation };
}