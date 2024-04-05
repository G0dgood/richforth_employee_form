import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import EmployeesOnboarding from "./page/EmployeesOnboarding";


const App: React.FC<any> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmployeesOnboarding />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;


