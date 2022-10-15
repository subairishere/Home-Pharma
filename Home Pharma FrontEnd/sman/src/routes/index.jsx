import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";

import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import Location from "../pages/Location";
import Home from "../pages/Home";
import Medicine from "../pages/Medicine";
import Login from "../pages/Login";
import AdminRoutes from "./admin";
import AuthContext from "../context/AuthContext";
import OrderSuccess from "../pages/OrderSuccess";
import Search from "../pages/Search";

const MyRoutes = () => {
  const auth = useContext(AuthContext);
  const token = auth.getToken();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/medicine/:id" element={<Medicine />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/search" element={<Search />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/location" element={<Location />} />
        <Route path="/OrderSuccess" element={<OrderSuccess />} />
        <Route
          path="/admin"
          element={token ? <Navigate to="/admin/dashboard" /> : <Login />}
        />
        <Route
          path="/admin/*"
          element={
            token ? <AdminRoutes token={token} /> : <Navigate to="/admin" />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
