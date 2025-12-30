import { useEffect, useState, useCallback } from "react";

import StudentTable from "../components/StudentTable";
import Pagination from "../components/Pagination";
import AddStudentModal from "../components/AddStudentModal";

import {
  getStudents,
  deleteStudent,
  addStudent,
  updateStudent,
} from "../services/StudentService";

import "../styles/table.css";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const [showModal, setShowModal] = useState(false);
  const [editStudent, setEditStudent] = useState(null);

  /* ================= FETCH STUDENTS ================= */
  const fetchStudents = useCallback(async () => {
   
      const res = await getStudents(page, 5);
      setStudents(res.data.content);
      setTotalPages(res.data.totalPages);
    
  }, [page]);

  useEffect(() => {
    fetchStudents();
  }, [fetchStudents]);

  /* ================= DELETE ================= */
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this student?")) return;

    try {
      await deleteStudent(id);
      fetchStudents();
    } catch (err) {
      alert("Delete failed");
    }
  };

  /* ================= ADD / UPDATE ================= */
  const handleSaveStudent = async (studentData) => {
    try {
      if (editStudent) {
        await updateStudent(editStudent.id, studentData);
      } else {
        await addStudent(studentData);
      }

      setShowModal(false);
      setEditStudent(null);
      fetchStudents();
    } catch (err) {
      alert("Save failed");
    }
  };

  /* ================= EDIT ================= */
  const handleEdit = (student) => {
    setEditStudent(student);
    setShowModal(true);
  };

  return (
    <div className="page-container">
      {/* HEADER */}
      <div className="page-header">
        <h1>Student Management System</h1>
        <button
          className="btn btn-primary"
          onClick={() => {
            setEditStudent(null);
            setShowModal(true);
          }}
        >
          + Add Student
        </button>
      </div>

      {/* TABLE */}
      <StudentTable
        students={students}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />

      {/* PAGINATION */}
      <Pagination
        page={page}
        totalPages={totalPages}
        setPage={setPage}
      />

      {/* MODAL */}
      {showModal && (
        <AddStudentModal
          onClose={() => setShowModal(false)}
          onSave={handleSaveStudent}
          editStudent={editStudent}
        />
      )}
    </div>
  );
};

export default StudentList;