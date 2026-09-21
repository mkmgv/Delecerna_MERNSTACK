import { useState } from "react";
import { useNavigate } from "react-router-dom";


function AddStudent() {
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    name: "",
    studentNumber: "",
    course: "",
    year: "",
    email: "",
    address: ""
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingStudents =
      JSON.parse(localStorage.getItem("students")) || [];

    const newStudent = {
      id: Date.now(),
      ...student
    };

    localStorage.setItem(
      "students",
      JSON.stringify([...existingStudents, newStudent])
    );

    navigate("/students");
  };

  return (
    <div className="max-w-3xl mx-auto p-6">

      <div className="bg-gray-100 rounded-lg p-8">

        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Add Student
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="block font-semibold mb-1">
              Student Name
            </label>

            <input
              type="text"
              name="name"
              value={student.name}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3"
              placeholder="Enter student name"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">
              Student Number
            </label>

            <input
              type="text"
              name="studentNumber"
              value={student.studentNumber}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3"
              placeholder="Enter student number"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">
              Course
            </label>

            <input
              type="text"
              name="course"
              value={student.course}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3"
              placeholder="Enter course"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">
              Year
            </label>

            <select
              name="year"
              value={student.year}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3"
            >
              <option value="">Select Year</option>
              <option value="1st Year">1st Year</option>
              <option value="2nd Year">2nd Year</option>
              <option value="3rd Year">3rd Year</option>
              <option value="4th Year">4th Year</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-1">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={student.email}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3"
              placeholder="Enter email"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">
              Address
            </label>

            <textarea
              name="address"
              value={student.address}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3"
              placeholder="Enter address"
              rows="3"
            />
          </div>

          <div className="flex gap-3 pt-4">

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Add Student
            </button>

            <button
              type="button"
              onClick={() => navigate("/students")}
              className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600"
            >
              Cancel
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default AddStudent;
