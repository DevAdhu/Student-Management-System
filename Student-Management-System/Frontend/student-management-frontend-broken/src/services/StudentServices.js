import axios from "axios";

const BASE_URL = "http://localhost:8080/students";

// GET all students
export const getAllStudents = () => {
  return axios.get(BASE_URL);
};

// ADD new student
export const addStudent = (student) => {
  return axios.post(BASE_URL, student);
};