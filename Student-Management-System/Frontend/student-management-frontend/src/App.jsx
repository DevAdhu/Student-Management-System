import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentList from "./pages/StudentList";
import AddStudent from "./pages/AddStudent";
import "./styles/app.css";
import "./styles/table.css";
import "./styles/modal.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Student List Page */}
        <Route path="/" element={<StudentList />} />

        {/* Add Student Page */}
        <Route path="/add-student" element={<AddStudent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;