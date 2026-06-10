import { useState } from 'react';
import TaskItem from './TaskItem';

function Home({ userName }) {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const isTasksEmpty = tasks.length === 0;

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: input.trim(), status: 'Pending' }]);
    setInput('');
  };

  const toggleTaskStatus = (taskId) => {
    setTasks(tasks.map((task) => (
      task.id === taskId
        ? { ...task, status: task.status === 'Completed' ? 'Pending' : 'Completed' }
        : task
    )));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <section className="home-container">
      <div className="panel">
        <p className="eyebrow">Home</p>
        <h1>Welcome, {userName}</h1>
        <p className="task-total">Total Tasks: {tasks.length}</p>
      </div>

      <div className="task-manager">
        <div className="task-form">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a task name"
            onKeyDown={(e) => e.key === 'Enter' && addTask()}
          />
          <button onClick={addTask}>Add Task</button>
        </div>

        {isTasksEmpty ? (
          <p className="empty-state">No Tasks Available</p>
        ) : (
          <ul className="task-list">
            {tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onToggleStatus={toggleTaskStatus}
                onDeleteTask={deleteTask}
              />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default Home;
