import KanbasNavigation from "./KanbasNavigation";
import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import './index.css';
import axios from 'axios';
import Signin from './kanbas-node-server-app/users/signin';
import Account from "./kanbas-node-server-app/users/account.js";
import UserTable from "./kanbas-node-server-app/users/table.js";
import Signup from "./kanbas-node-server-app/users/signup.js";
import store from "./store";
import { Provider } from "react-redux";

function Kanbas() {
   const [courses, setCourses] = useState([]);
   const URL = "https://kanbas-node-server-app-mnvx.onrender.com/api/courses";
   const findAllCourses = async () => {
      const response = await axios.get(URL);
      setCourses(response.data);
   };
   useEffect(() => {
      findAllCourses();
   }, []);
   return (
      <Provider store={store}>
      <div className="container-fluid d-flex">
         <KanbasNavigation />
         <div className="routes">
            <Routes>
               <Route path="/" element={<Navigate to="Dashboard" />} />
               <Route path="Account" element={<Account />} />
               <Route path="Dashboard" element={<Dashboard />} />
               <Route path="Courses/:courseID/*" element={<Courses />} />
               <Route path="Sign in" element={<Signin />} />
               <Route path="Sign up" element={<Signup />} />
               <Route path="admin/users" element={<UserTable />} />
            </Routes>
         </div>
      </div>
      </Provider>
   );
}
export default Kanbas;