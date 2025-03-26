import React from "react";
import "./TaskItem.css";
const TaskItem = ({ name, priority }) => {
  return (
    <li className={`task-item ${priority.toLowerCase()}`}>
      <strong>{name}</strong> - <span className="priority">{priority}</span>
    </li>
  );
};

export default TaskItem;
