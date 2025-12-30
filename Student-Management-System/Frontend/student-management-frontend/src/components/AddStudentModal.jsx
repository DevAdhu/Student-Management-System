import { useEffect, useState } from "react";
import "../styles/modal.css";

const AddStudentModal = ({ onClose, onSave, editStudent }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (editStudent) {
      setName(editStudent.name);
      setEmail(editStudent.email);
    } else {
      setName("");
      setEmail("");
    }
  }, [editStudent]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ name, email });
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>{editStudent ? "Edit Student" : "Add Student"}</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Student Name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="modal-actions">
            <button type="submit" className="btn btn-primary">
              {editStudent ? "Update" : "Save"}
            </button>
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudentModal;