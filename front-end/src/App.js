import React, { useState } from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";
function App() {
  const [isLogin, setIslogin] = useState('');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login login={isLogin} setIslogin={setIslogin} />}></Route>

        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

