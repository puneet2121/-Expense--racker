import React, { useState } from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import { Link, Route, Routes,BrowserRouter } from "react-router-dom";
function App() {
  const [isLogin, setIslogin] = useState(false);

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}></Route>
      
        <Route path="/home" element={<Home />} ></Route>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
{
  /* <div className="App">
      {isLogin ? <Home /> : <Login />}

    </div> */
}
