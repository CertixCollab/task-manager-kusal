import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register({ setUserName }) {
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const handleRegister = () => {
    if (!name.trim()) {
      alert("Please enter your name");
      return;
    }

    setUserName(name);

    navigate("/home");
  };

  return (
    <div className="container mx-auto p-10">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded p-6">
        <h1 className="text-2xl font-bold mb-4">
          User Registration
        </h1>

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          className="border p-2 w-full rounded mb-4"
        />

        <button
          onClick={handleRegister}
          className="bg-blue-600 text-white px-4 py-2 rounded w-full"
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;