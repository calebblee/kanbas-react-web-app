import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import './index.css';

function Kanbas() {
   return (
      <div className="container-fluid d-flex">
         <KanbasNavigation />
         <div className="routes">
            <Routes>
               <Route path="/" element={<Navigate to="Dashboard" />} />
               <Route path="Account" element={<h1>Account</h1>} />
               <Route path="Dashboard" element={<Dashboard />} />
               <Route path="Courses/:courseID/*" element={<Courses />} />
            </Routes>
         </div>
      </div>
   );
}
export default Kanbas;