import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="logo">
        Student Management System
      </Link>

      {/* Navigation */}
      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/students">
          Student List
        </Link>

        <Link to="/add-student">
          + Add Student
        </Link>

        <Link to="/teachers">
          Teacher List
        </Link>

        <Link to="/add-teacher">
          + Add Teacher
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
