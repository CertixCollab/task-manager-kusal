import { useState } from "react";

import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

function Home({ userName }) {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName) => {
    const newTask = {
      id: Date.now(),
      title: taskName,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  };

  const toggleStatus = (id) => {
    const updatedTasks = tasks.map(
      (task) =>
        task.id === id
          ? {
              ...task,
              completed:
                !task.completed,
            }
          : task
    );

    setTasks(updatedTasks);
  };

  return (
    <div className="container mx-auto p-10">
      <div className="bg-white shadow-lg rounded p-6">

        <h1 className="text-3xl font-bold mb-4">
          Welcome, {userName}
        </h1>

        <p className="mb-5 font-semibold">
          Total Tasks: {tasks.length}
        </p>

        <TaskForm addTask={addTask} />

        {tasks.length === 0 ? (
          <p className="text-red-500">
            No Tasks Available
          </p>
        ) : (
          <TaskList
            tasks={tasks}
            toggleStatus={
              toggleStatus
            }
          />
        )}

      </div>
    </div>
  );
}

export default Home;