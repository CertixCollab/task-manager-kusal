import { Link } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="bg-blue-600 dark:bg-gray-900 text-white p-4">
      <div className="container mx-auto flex gap-6 items-center">
        <Link to="/home" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/dashboard" className="hover:underline">Dashboard</Link>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-auto bg-white text-blue-600 dark:bg-gray-700 dark:text-white px-3 py-1 rounded text-sm"
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;