import axios from "axios";
const COURSES_URL = "https://kanbas-node-server-app-mnvx.onrender.com/api";
export const findModulesForCourse = async (courseId) => {
  const response = await axios
    .get(`${COURSES_URL}/modules`);
  return response.data;
};
