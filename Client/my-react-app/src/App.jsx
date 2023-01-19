import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./Components/PrivateRoute";
import Doctors from "./Pages/Admin/Doctors";
import User from "./Pages/Admin/User";
import ApplyDoctor from "./Pages/ApplyDoctor";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import NotFound404 from "./Pages/NotFound404";
import Register from "./Pages/Register";
function App() {
  const userState = PrivateRoute();
  return (
    <>
      <Routes>
        {userState ? (
          <>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/applydoc" element={<ApplyDoctor />}></Route>
            <Route path="/admin/users" element={<User />}></Route>
            <Route path="/admin/doctors" element={<Doctors />}></Route>
          </>
        ) : (
          <>
            <Route path="/" element={<Login />}></Route>

            <Route path="/login" element={<Login />}></Route>
          </>
        )}
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </>
  );
}

export default App;
