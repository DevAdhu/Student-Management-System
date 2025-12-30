import { useState } from "react";
import { addStudent } from "../services/StudentService";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email) {
      alert("All fields are required");
      return;
    }

    try {
      setLoading(true);
      await addStudent({ name, email });
      navigate("/"); // go back to student list
    } catch (error) {
      console.error(error);
      alert("Failed to add student");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container">
      <h2>Add Student</h2>

      <form className="form-card" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Student Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="form-actions">
          <button type="submit" disabled={loading}>
            {loading ? "Saving..." : "Add Student"}
          </button>

          <button
            type="button"
            className="secondary"
            onClick={() => navigate("/")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddStudent;