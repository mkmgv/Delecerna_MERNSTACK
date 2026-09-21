import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import studentsData from "../data/students.json";

function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const savedStudents =
      JSON.parse(localStorage.getItem("students")) || [];

    setStudents([...studentsData, ...savedStudents]);
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Student List
        </h1>

        <Link
          to="/add-student"
          className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700"
        >
          + Add Student
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {students.map((student) => (
          <div
            key={student.id}
            className="bg-white border rounded-lg shadow p-6"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              {student.name}
            </h2>

            <p className="text-gray-600 mb-2">
              <strong>Student Number:</strong>{" "}
              {student.studentNumber}
            </p>

            <p className="text-gray-600 mb-2">
              <strong>Course:</strong>{" "}
              {student.course}
            </p>

            <p className="text-gray-600 mb-2">
              <strong>Year:</strong>{" "}
              {student.year}
            </p>

            <p className="text-gray-600 mb-2">
              <strong>Email:</strong>{" "}
              {student.email}
            </p>

            <p className="text-gray-600 mb-4">
              <strong>Address:</strong>{" "}
              {student.address || "Not provided"}
            </p>

            <Link
              to={`/students/${student.id}`}
              className="text-blue-600 hover:underline"
            >
              View Details →
            </Link>
          </div>
        ))}

      </div>

    </div>
  );
}