import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddTeacher() {
  const navigate = useNavigate();

  const [teacher, setTeacher] = useState({
    name: "",
    teacherNumber: "",
    department: "",
    email: ""
  });

  const handleChange = (e) => {
    setTeacher({
      ...teacher,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingTeachers =
      JSON.parse(localStorage.getItem("teachers")) || [];

    const newTeacher = {
      id: Date.now(),
      ...teacher
    };

    localStorage.setItem(
      "teachers",
      JSON.stringify([...existingTeachers, newTeacher])
    );

    navigate("/teachers");
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="bg-gray-100 rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Add Teacher
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="block font-semibold mb-1">
              Teacher Name
            </label>

            <input
              type="text"
              name="name"
              value={teacher.name}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3"
              placeholder="Enter teacher name"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">
              Teacher Number
            </label>

            <input
              type="text"
              name="teacherNumber"
              value={teacher.teacherNumber}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3"
              placeholder="Enter teacher number"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">
              Department
            </label>

            <input
              type="text"
              name="department"
              value={teacher.department}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3"
              placeholder="Enter department"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={teacher.email}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3"
              placeholder="Enter email"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Add Teacher
            </button>

            <button
              type="button"
              onClick={() => navigate("/")}
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

export default AddTeacher;