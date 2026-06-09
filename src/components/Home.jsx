import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function Home() {
  const location = useLocation();
  const name = location.state?.name || localStorage.getItem('registeredUserName') || 'User';
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: input.trim() }]);
    setInput('');
  };

  const deleteTask = (id) => setTasks(tasks.filter(t => t.id !== id));

  return (
    <div className="home-container">
      <h1>Welcome, {name}!</h1>
      <h3>Total Tasks: {tasks.length}</h3>
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="New task..."
          onKeyDown={(e) => e.key === 'Enter' && addTask()}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map(t => (
          <li key={t.id}>
            {t.text} <button onClick={() => deleteTask(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
