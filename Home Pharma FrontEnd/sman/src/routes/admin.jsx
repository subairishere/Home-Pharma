import { Routes, Route, Navigate } from "react-router-dom";

import AddDoctor from "../pages/admin/AddDoctor";
import AddMedicine from "../pages/admin/AddMedicine";
import Ask from "../pages/admin/Ask";
import Dashboard from "../pages/admin/Dashboard";
import SaleDetail from "../pages/admin/SaleDetail";
import Sales from "../pages/admin/Sales";
import ViewDoctors from "../pages/admin/ViewDoctors";
import ViewMedicines from "../pages/admin/ViewMedicines";

const AdminRoutes = ({ token }) => {
  return (
    <Routes>
      <Route
        path="/dashboard"
        element={token ? <Dashboard /> : <Navigate to="/admin" />}
      />
      <Route path="/view-doctors" element={<ViewDoctors token={token} />} />
      <Route path="/view-asks" element={<Ask token={token} />} />
      <Route path="/add-doctor" element={<AddDoctor token={token} />} />
      <Route path="/add-medicine" element={<AddMedicine token={token} />} />
      <Route path="/view-medicines" element={<ViewMedicines token={token} />} />
      <Route path="/view-sales" element={<Sales token={token} />} />
      <Route path="/sale/:id" element={<SaleDetail token={token} />} />
    </Routes>
  );
};

export default AdminRoutes;
