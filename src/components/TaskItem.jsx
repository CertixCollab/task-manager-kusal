function TaskItem({ task, onToggleStatus }) {
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
      <button type="button" onClick={() => onToggleStatus(task.id)}>
        {isCompleted ? 'Mark Pending' : 'Mark Completed'}
      </button>
    </li>
  );
}

export default TaskItem;
