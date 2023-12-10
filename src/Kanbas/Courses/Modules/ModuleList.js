import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./ModulesReducer";
import { findModulesForCourse } from "./client";

function ModuleList() {
  const { courseId } = useParams();
  useEffect(() => {
    findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  return (
    <ul className="list-group">
      <li className="list-group-item">
        <button
          onClick={() => dispatch(addModule({ ...module, course: courseId }))}
          className="btn btn-success">Add</button>
          <button 
          className="btn btn-warning"
          onClick={() => dispatch(updateModule(module))}>
                Update
        </button>
        <input value={module.name}
          className="form-control"
          onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
        />
        <textarea
          className="form-control"
          value={module.description}
          onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
        />
      </li>

      {
        modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index} className="list-group-item">
              <h3>{module.name}</h3>
              <p>{module.description}</p>
              <button
                className="btn btn-danger"
                onClick={() => dispatch(deleteModule(module._id))}>
                Delete
              </button>
              <button
              className="btn btn-warning"
              onClick={() => dispatch(setModule(module))}>
              Edit
            </button>
            </li>
          ))
      }
    </ul>
  );
}
export default ModuleList;