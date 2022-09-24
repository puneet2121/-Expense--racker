import React, { useState } from "react";
import Login from "./components/Login";
import Home from './components/Home';
function App() {
  const [isLogin, setIslogin] = useState(false)
  
  return (
    <div className="App">
      {isLogin ? <Home /> : <Login />}

    </div>
  );
}

export default App;
