import React, { useState } from "react";

import ExpenseItem from "./components/ExpenseItem";
function App() {
  const date = new Date(2022, 9, 27);

  return (
    <>
    <ExpenseItem date={date}/>
  
    {/* <Navlink />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>

        <Route path="/home" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </BrowserRouter> */}
    </>
  );
}

export default App;

