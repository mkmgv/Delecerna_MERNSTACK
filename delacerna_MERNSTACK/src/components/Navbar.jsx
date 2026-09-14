import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="bg-blue-600 shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link
          to="/"
          className="text-white text-xl font-bold"
        >
          Student Management System
        </Link>
        <div className="flex items-center gap-2">

          <Link
            to="/"
            className="text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Home
          </Link>

          <Link
            to="/students"
            className="text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Students
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;
