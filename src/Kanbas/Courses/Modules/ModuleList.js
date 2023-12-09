import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";


function ModuleList() {
  const { courseID } = useParams();
  const [modules, setModules] = useParams(db.modules);
  const [module, setModule] = useState({
    name: "New Module",
    description: "New Description",
    course: courseId,
  });

  return (
    <ul className="list-group">
      {
       modules
         .filter((module) => module.course === courseID)
         .map((module, index) => (
           <li key={index} className="list-group-item">
             <h3>{module.name}</h3>
             <p>{module.description}</p>
           </li>
      ))
      }
    </ul>
  );
}
export default ModuleList;