/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useAuth } from "./contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) navigate("/worldWise/login");
  }, [isAuthenticated, navigate]);
  return isAuthenticated ? children : null;
}
