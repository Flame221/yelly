import { useColorMode } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./contexts/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import Signup from "./pages/Signup";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  useEffect(() => {
    toggleColorMode();
  }, []);
  return (
    <AuthProvider>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
