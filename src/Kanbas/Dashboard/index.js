import { Link } from "react-router-dom";
import db from "../Database";
import { React, useState } from "react";
import './dashboard.css';

function Dashboard() {
  const [courses, setCourses] = useState(db.courses);
  return (
    <div className="container-fluid">
      <h1>Dashboard</h1>
      <hr/>
      <div className="list-group-item">
        <button className="btn btn-success">Add</button>
        <button className="btn btn-primary">Update</button>
        <input className="form-control" value="Hi" placeholder="Course"/>
      </div>
      <div className="list-group">
      {courses.map((course) => (
          <div key={course._id} className="card">
            <div className="card-body">
              <h5 className="card-title">{course.name}</h5>
              <p className="card-text">Course ID: {course._id}</p>
              <Link to={`/Kanbas/Courses/${course._id}`} className="btn btn-primary">
                Go to Course
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;