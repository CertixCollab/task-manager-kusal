import { useState } from "react";

function TaskForm({ addTask }) {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = () => {
    if (!taskName.trim()) return;

    addTask(taskName);

    setTaskName("");
  };

  return (
    <div className="flex gap-3 mb-5">
      <input
        type="text"
        placeholder="Enter Task"
        value={taskName}
        onChange={(e) =>
          setTaskName(e.target.value)
        }
        className="border p-2 rounded flex-1"
      />

      <button
        onClick={handleSubmit}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Add Task
      </button>
    </div>
  );
}

export default TaskForm;