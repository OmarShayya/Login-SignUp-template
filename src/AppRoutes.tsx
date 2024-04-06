import { Routes, Route, Navigate } from "react-router-dom";
import LoginSignUp from "./pages/LoginSignUp/LoginSignUp";
import Home from "./pages/Home/Home";
import ProtectedRoute from "./ProtectedRoute";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginSignUp />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
         
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
