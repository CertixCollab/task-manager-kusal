function TaskItem({ task, onToggleStatus, onDeleteTask }) {
  const isCompleted = task.status === 'Completed';

  return (
    <li className="task-item">
      <div>
        <p className={isCompleted ? 'task-name completed' : 'task-name'}>
          {task.text}
        </p>
        <span className={isCompleted ? 'status completed-status' : 'status'}>
          {task.status}
        </span>
      </div>
      <div className="task-actions">
        <button type="button" onClick={() => onToggleStatus(task.id)}>
          {isCompleted ? 'Mark Pending' : 'Mark Completed'}
        </button>
        <button
          className="delete-button"
          type="button"
          onClick={() => onDeleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
