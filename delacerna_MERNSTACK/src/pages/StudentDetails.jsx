import { Link, useParams } from "react-router-dom";
import students from "../data/students.json";

function StudentDetails() {
  const { id } = useParams();

  const student = students.find(
    (student) => student.id === parseInt(id)
  );

  if (!student) {
    return (
      <div className="details-page">
        <h1>Student Not Found</h1>

        <Link to="/students" className="back-btn">
          Back to Students
        </Link>
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
            {student.studentnumber}
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
            {student.address}
          </p>
        </div>

        <Link to="/students" className="back-btn">
          ← Back to Students
        </Link>
      </div>
    </div>
  );
}

export default StudentDetails;