import TaskItem from "./TaskItem";

function TaskList({
  tasks,
  toggleStatus,
}) {
  return (
    <>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleStatus={toggleStatus}
        />
      ))}
    </>
  );
}

export default TaskList;