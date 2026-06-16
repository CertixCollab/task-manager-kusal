function TaskItem({ task, toggleStatus, deleteTask }) {
  return (
    <div className="bg-white shadow p-4 rounded mb-3 flex justify-between items-center">
      <div>
        <h3 className="font-semibold">{task.title}</h3>

        <p>
          Status:
          <span
            className={`ml-2 font-bold ${
              task.completed ? "text-green-600" : "text-red-500"
            }`}
          >
            {task.completed ? "Completed" : "Pending"}
          </span>
        </p>
      </div>

      <button
        onClick={() => toggleStatus(task.id)}
        className="bg-blue-500 text-white px-3 py-2 rounded"
      >
        Toggle Status
      </button>
      <button
        onClick={() => deleteTask(task.id)}
        className="bg-red-500 text-white px-3 py-2 rounded"
      >
        Delete
      </button>
    </div>
  );
}

export default TaskItem;
