import axios from "axios";

const BASE_URL = "http://localhost:8080/api/students";

export const getStudents = (page, size) =>
  axios.get(`${BASE_URL}?page=${page}&size=${size}`);

export const addStudent = (student) =>
  axios.post(BASE_URL, student);

export const deleteStudent = (id) =>
  axios.delete(`${BASE_URL}/${id}`);

export const updateStudent = (id, student) =>
  axios.put(`${BASE_URL}/${id}`, student);