import { Link } from "react-router-dom";
import { React, useState, useEffect } from "react";
import axios from 'axios';

function Dashboard() {
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState({});
  const URL = "http://localhost:4000/api/courses";
  const updateCourse = async (course) => {
    const response = await axios.put(
      `${URL}/${course._id}`,
      course
    );
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        }
        return c;
      })
    );
    setCourse({ name: "" });
  };

  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  const addCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([
      response.data,
      ...courses,
    ]);
    setCourse({ name: "" });
  };
  const deleteCourse = async (corse) => {
    const response = await axios.delete(`${URL}/${corse._id}`);
    setCourses(courses.filter(
      (c) => c._id !== corse._id));
  };

  useEffect(() => {
    findAllCourses();
  }, []);
  return (
    <div className="container-fluid">
      <h1>Dashboard</h1>
      <hr />
      <div className="row g-2 mb-2">
        <div className="col-auto">
          <input className="form-control me-2"
            type="text"
            value={course.name}
            onChange={(e) => setCourse({ ...course, name: e.target.value })}>
          </input>
        </div>
        <button className="btn btn-success col-auto me-2"
          onClick={addCourse}>
          Add
        </button>
        <button className="btn btn-primary col-auto"
          onClick={() => updateCourse(course)}>
          Update
        </button>
      </div>
      <div className="row">
        <label for="course-num" class="col-2 col-form-label">Course Number:</label>
        <input className="form-control w-50 col-auto"
          onChange={(e) => setCourse({ ...course, number: e.target.value })}
          type="text"
          id="course-num"
          value={course.number}>
        </input>
      </div>
      <div className="row">
        <label for="start-date" class="col-2 col-form-label">Start Date:</label>
        <input className="form-control w-50 col-auto"
          onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
          type="text"
          id="start-date"
          value={course.startDate}>
        </input>
      </div>
      <div className="row">
        <label for="end-date" class="col-2 col-form-label">End Date:</label>
        <input className="form-control w-50 col-auto"
          onChange={(e) => setCourse({ ...course, number: e.target.value })}
          type="text"
          id="end-date"
          value={course.endDate}>
        </input>
      </div>
      <ul className="list-group w-50">
        {courses.map((course) => (
          <ul className="list-group-item">
            <button className="btn btn-warning me-2 float-end"
              onClick={() => {
                setCourse({ ...course })
              }}>
              Edit
            </button>
            <button className="btn btn-danger me-2 float-end"
              onClick={() => deleteCourse(course)}>
              Delete
            </button>
            <Link to={`/Kanbas/Courses/${course._id}`}
              className="btn btn-primary me-2 float-end">
              Go to Course
            </Link>
            <h3>{course.name}</h3>
            <div className="row">
              <p className="col-auto">{course._id}</p>
              <p className="col-auto">{course.number}</p>
              <p className="col-auto">{course.startDate}</p>
              <p className="col-auto">{course.endDate}</p>
            </div>
          </ul>
        ))}
      </ul>
    </div>
  );
}
export default Dashboard;