import { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// import Home from "./components/Home/Home.jsx";
// import Login from "./components/Login/Login.jsx";
// import Pricing from "./components/Pricing/Pricing.jsx";
// import Product from "./components/Product/Product.jsx";
// import Notfound from "./components/Notfound/Notfound.jsx";
// import AppLayout from "./components/AppLayout/AppLayout.jsx";

const Home = lazy(() => import("./components/Home/Home.jsx"));
const Login = lazy(() => import("./components/Login/Login.jsx"));
const Pricing = lazy(() => import("./components/Pricing/Pricing.jsx"));
const Product = lazy(() => import("./components/Product/Product.jsx"));
const Notfound = lazy(() => import("./components/Product/Product.jsx"));
const AppLayout = lazy(() => import("./components/AppLayout/AppLayout.jsx"));

import CityList from "./components/CityList/CityList.jsx";
import CountryList from "./components/CountryList/CountryList.jsx";
import CityDetails from "./components/CityDetails/CityDetails.jsx";
import CityForm from "./components/CityForm/CityForm.jsx";
import CitiesProvider from "./contexts/CitiesContextNoServer.jsx";
import SpinnerFullPage from "./components/SpinnerFullPage/SpinnerFullPage.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<SpinnerFullPage />}>
        <Routes>
          <Route
            path="/worldWise"
            element={
              <AuthProvider>
                <Home />
              </AuthProvider>
            }
          />
          <Route
            path="/worldWise/login"
            element={
              <AuthProvider>
                <Login />
              </AuthProvider>
            }
          />
          <Route
            path="/worldWise/pricing"
            element={
              <AuthProvider>
                <Pricing />
              </AuthProvider>
            }
          />
          <Route
            path="/worldWise/product"
            element={
              <AuthProvider>
                <Product />
              </AuthProvider>
            }
          />
          <Route
            path="/worldWise/app"
            element={
              <AuthProvider>
                <CitiesProvider>
                  {" "}
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                </CitiesProvider>
              </AuthProvider>
            }
          >
            <Route index element={<Navigate replace to="cities" />} />
            <Route path="cities" element={<CityList />} />
            <Route path="cities/:id" element={<CityDetails />} />
            <Route path="countries" element={<CountryList />} />
            <Route path="form" element={<CityForm />} />
          </Route>
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
