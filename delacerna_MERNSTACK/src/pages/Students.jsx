import { useState } from "react";
import students from "../data/students.json";
import Student from "../components/student";
function Students() {
  const [name, setName] = useState("");
  const [studentnumber, setStudentNumber] = useState("");
  const [course, setCourse] = useState("");
  const [year, setYear] = useState("");
  const [section, setSection] = useState("");

  const [newStudents, setNewStudents] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !studentnumber || !course || !year || !section) {
      alert("Please fill in all fields.");
      return;
    }

    const newStudent = {
      id: students.length + newStudents.length + 1,
      name: name,
      studentnumber: studentnumber,
      course: course,
      year: year,
      section: section,
    };

    setNewStudents([...newStudents, newStudent]);
    setName("");
    setStudentNumber("");
    setCourse("");
    setYear("");
    setSection("");
  };

  const allStudents = [...students, ...newStudents];

  return (
    <div className="page max-w-6xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">
        Students
      </h1>

      <div className="student-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {allStudents.map((student) => (
          <Student
            key={student.id}
            student={student}
          />
        ))}
      </div>
      <div className="mt-10">

        <h1 className="text-3xl font-bold mb-6">
          Student Registration
        </h1>

        <div className="border border-gray-300 rounded-lg p-6 shadow-sm">

          <h2 className="text-xl font-semibold mb-4">
            Add Student
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <input
              type="text"
              className="border border-gray-300 p-3 rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name"
            />

            <input
              type="text"
              className="border border-gray-300 p-3 rounded"
              value={studentnumber}
              onChange={(e) => setStudentNumber(e.target.value)}
              placeholder="Student Number"
            />
            <input
              type="text"
              className="border border-gray-300 p-3 rounded"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              placeholder="Course"
            />
            <input
              type="text"
              className="border border-gray-300 p-3 rounded"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder="Year"
            />
            <input
              type="text"
              className="border border-gray-300 p-3 rounded"
              value={section}
              onChange={(e) => setSection(e.target.value)}
              placeholder="Section"
            />

          </div>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold px-5 py-3 rounded mt-4"
            onClick={handleSubmit}
          >
            Add Student
          </button>

        </div>
      </div>

    </div>
  );
}

export default Students;