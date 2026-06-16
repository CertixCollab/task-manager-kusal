import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex gap-6">
        <Link
          to="/home"
          className="hover:underline"
        >
          Home
        </Link>

        <Link
          to="/about"
          className="hover:underline"
        >
          About
        </Link>

        <Link
          to="/dashboard"
          className="hover:underline"
        >
          Dashboard
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;