import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import "./App.css";
import EmpCreate from "./EmpCreate";
import EmpLists from "./EmpLists";
import EmpEdit from "./EmpEdit";
import EmpDetail from "./EmpDetail";
import EmployeeAgeChart from "./EmployeeAgeChart";

function App() {
  return (
    <div className="App">
      <h1>Employee Management System</h1>




      <BrowserRouter>
<Routes>

          <Route path="/EmployeeAgeChart" element={<EmployeeAgeChart/>}></Route>
          <Route path="/" element={<EmpLists />}></Route>
          <Route path="/employee/create" element={<EmpCreate />}></Route>
          <Route path="/employee/detail/:id" element={<EmpDetail />}></Route>
          <Route path="/employee/edit/:id" element={<EmpEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}


export default App;
