import { useState, useEffect } from "react";

import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

function Home({ userName }) {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskName) => {
    setTasks([...tasks, { id: Date.now(), title: taskName, completed: false }]);
  };

  const toggleStatus = (id) =>
    setTasks(tasks.map((t) => t.id === id ? { ...t, completed: !t.completed } : t));

  const deleteTask = (id) =>
    setTasks(tasks.filter((t) => t.id !== id));

  const editTask = (id, newTitle) =>
    setTasks(tasks.map((t) => t.id === id ? { ...t, title: newTitle } : t));

  const filtered = tasks.filter((t) =>
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto p-4 sm:p-10">
        <div className="bg-white dark:bg-gray-900 dark:text-white shadow-lg rounded p-6">

          <h1 className="text-2xl sm:text-3xl font-bold mb-4">
            Welcome, {userName}
          </h1>

          <p className="mb-5 font-semibold">
            Total Tasks: {tasks.length}
          </p>

          <TaskForm addTask={addTask} />

          <input
            type="text"
            placeholder="Search tasks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border dark:border-gray-600 dark:bg-gray-700 dark:text-white p-2 rounded w-full mb-5"
          />

          {filtered.length === 0 ? (
            <p className="text-red-500">
              {tasks.length === 0 ? "No Tasks Available" : "No tasks match your search"}
            </p>
          ) : (
            <TaskList
              tasks={filtered}
              toggleStatus={toggleStatus}
              deleteTask={deleteTask}
              editTask={editTask}
            />
          )}

        </div>
      </div>
    </div>
  );
}

export default Home;