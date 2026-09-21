import { Link, useParams } from "react-router-dom";
import studentsData from "../data/students.json";

function StudentDetails() {
  const { id } = useParams();

  const savedStudents =
    JSON.parse(localStorage.getItem("students")) || [];

  const allStudents = [
    ...studentsData,
    ...savedStudents
  ];

  const student = allStudents.find(
    (student) => student.id.toString() === id
  );

  if (!student) {
    return (
      <div className="details-page">
        <div className="details-card">

          <h1>Student Not Found</h1>

          <Link
            to="/students"
            className="back-btn"
          >
            ← Back to Students
          </Link>

        </div>
      </div>
    );
  }

  return (
    <div className="details-page">

      <div className="details-card">

        <h1>{student.name}</h1>

        <div className="student-info">

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

          <p>
            <strong>Address:</strong>{" "}
            {student.address || "Not provided"}
          </p>

        </div>

        <Link
          to="/students"
          className="back-btn"
        >
          ← Back to Students
        </Link>

      </div>

    </div>
  );
}

export default StudentDetails;