import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import studentsData from "../data/students.json";

function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const savedStudents =
      JSON.parse(localStorage.getItem("students")) || [];

    setStudents([...studentsData, ...savedStudents]);
  }, []);

  return (
    <div className="students-page">

      <div className="flex justify-between items-center mb-6">
        <h1>Student List</h1>

        <Link
          to="/add-student"
          className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700"
        >
          + Add Student
        </Link>
      </div>

      {students.length === 0 ? (
        <div className="empty-message">
          <h2>No Students Found</h2>
          <p>Please add a student.</p>
        </div>
      ) : (
        <div className="student-container">

          {students.map((student) => (
            <div
              className="student-card"
              key={student.id}
            >
              <h2>{student.name}</h2>

              <p>
                <strong>Student Number:</strong>{" "}
                {student.studentNumber}
              </p>

              <p>
                <strong>Course:</strong>{" "}
                {student.course}
              </p>

              <p>
                <strong>Year:</strong>{" "}
                {student.year}
              </p>

              <p>
                <strong>Email:</strong>{" "}
                {student.email}
              </p>

              {student.address && (
                <p>
                  <strong>Address:</strong>{" "}
                  {student.address}
                </p>
              )}

              <Link
                to={`/students/${student.id}`}
                className="details-btn"
              >
                View Details
              </Link>
            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default Students;