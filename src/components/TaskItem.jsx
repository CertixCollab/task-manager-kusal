import { useState } from "react";

function TaskItem({ task, toggleStatus, deleteTask, editTask }) {
  const [editing, setEditing] = useState(false);
  const [editValue, setEditValue] = useState(task.title);

  const handleSave = () => {
    if (!editValue.trim()) return;
    editTask(task.id, editValue);
    setEditing(false);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-700 dark:text-white shadow p-4 rounded mb-3 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
      <div className="flex-1">
        {editing ? (
          <input
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            className="border dark:border-gray-500 dark:bg-gray-600 dark:text-white p-1 rounded w-full"
          />
        ) : (
          <h3 className="font-semibold">{task.title}</h3>
        )}
        <p>
          Status:
          <span className={`ml-2 font-bold ${task.completed ? "text-green-500" : "text-red-400"}`}>
            {task.completed ? "Completed" : "Pending"}
          </span>
        </p>
      </div>

      <div className="flex gap-2 flex-wrap">
        {editing ? (
          <>
            <button onClick={handleSave} className="bg-green-500 text-white px-3 py-1 rounded text-sm">Save</button>
            <button onClick={() => { setEditing(false); setEditValue(task.title); }} className="bg-gray-400 text-white px-3 py-1 rounded text-sm">Cancel</button>
          </>
        ) : (
          <button onClick={() => setEditing(true)} className="bg-yellow-500 text-white px-3 py-1 rounded text-sm">Edit</button>
        )}
        <button onClick={() => toggleStatus(task.id)} className="bg-blue-500 text-white px-3 py-1 rounded text-sm">Toggle</button>
        <button onClick={() => deleteTask(task.id)} className="bg-red-500 text-white px-3 py-1 rounded text-sm">Delete</button>
      </div>
    </div>
  );
}

export default TaskItem;
