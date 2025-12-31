import { useEffect, useState } from "react";
import StudentListComponent from "../components/StudentList";
import { getAllStudents } from "../services/StudentServices";

function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getAllStudents()
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching students:", error);
      });
  }, []);

  return (
    <div>
      <h1>Student Management System</h1>
      <StudentListComponent students={students} />
    </div>
  );
}

export default StudentList;