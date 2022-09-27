import React, { useState } from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Navlink from "./components/Navbar";
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";
function App() {
  const [isLogin, setIslogin] = useState('');

  return (
    <>
    <Navlink />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>

        <Route path="/home" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

