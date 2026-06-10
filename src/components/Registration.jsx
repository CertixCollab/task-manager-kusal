import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Registration({ onRegister }) {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    onRegister(name.trim());
    navigate("/home");
  };

  return (
    <section className="registration-container">
      <div className="panel">
        <p className="eyebrow">Task Manager App</p>
        <h1>Register</h1>
        <p className="muted">Enter your name to start managing daily tasks.</p>
      </div>
      <form className="form-panel" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </section>
  );
}

export default Registration;
