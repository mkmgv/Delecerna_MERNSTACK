import { useState } from "react";
import { Link } from "react-router-dom";

function Teachers() {
  const [teachers, setTeachers] = useState(() => {
    return JSON.parse(localStorage.getItem("teachers")) || [];
  });

  const handleDelete = (id) => {
    const updatedTeachers = teachers.filter(
      (teacher) => teacher.id !== id
    );

    setTeachers(updatedTeachers);
    localStorage.setItem("teachers", JSON.stringify(updatedTeachers));
  };

  return (
    <div className="max-w-6xl mx-auto p-6">

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Teacher List
        </h1>

        <Link
          to="/add-teacher"
          className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700"
        >
          + Add Teacher
        </Link>
      </div>

      {teachers.length === 0 ? (
        <div className="bg-gray-100 rounded-lg p-8 text-center">
          <h2 className="text-xl font-semibold text-gray-700">
            No Teachers Found
          </h2>

          <p className="text-gray-500 mt-2">
            Add a teacher to display them here.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {teachers.map((teacher) => (
            <div
              key={teacher.id}
              className="bg-white border rounded-lg shadow-md p-6"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                {teacher.name}
              </h2>

              <div className="space-y-2 text-gray-600">
                <p>
                  <strong>Teacher ID:</strong>{" "}
                  {teacher.teacherId}
                </p>

                <p>
                  <strong>Subject:</strong>{" "}
                  {teacher.subject}
                </p>

                <p>
                  <strong>Email:</strong>{" "}
                  {teacher.email}
                </p>

                <p>
                  <strong>Address:</strong>{" "}
                  {teacher.address}
                </p>
              </div>

             
            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default Teachers;

