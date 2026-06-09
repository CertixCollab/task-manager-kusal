import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './Footer';

function Home() {
  const location = useLocation();
  const name = location.state?.name ||'User';
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const isTasksEmpty = tasks.length === 0;

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: input.trim() }]);
    setInput('');
  };

  return (
    <div className="home-container">
      <h1>Welcome, {name}!</h1>
      <p>Task Count: {tasks.length}</p>
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="New task..."
          onKeyDown={(e) => e.key === 'Enter' && addTask()}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      {isTasksEmpty ? <p>No tasks yet. Add your first task!</p> : 
            <ul>
        {tasks.map(t => (
          <li key={t.id}>
            {t.text}
          </li>
        ))}
      </ul>}
      <Footer />
    </div>
  );
}

export default Home;
