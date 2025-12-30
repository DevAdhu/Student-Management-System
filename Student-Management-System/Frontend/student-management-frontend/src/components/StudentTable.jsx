const StudentTable = ({ students, onDelete, onEdit }) => {
  return (
    <table className="student-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th className="actions-col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.length === 0 ? (
          <tr>
            <td colSpan="3" className="empty">
              No students found
            </td>
          </tr>
        ) : (
          students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td className="actions">
                <button
                  className="btn btn-edit"
                  onClick={() => onEdit(student)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => onDelete(student.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default StudentTable;