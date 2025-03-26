import React from "react";
import TaskItem from "./TaskItem";

const ListItem = ({ items }) => {
    return (
      <ul className="task-list">
        {items.map((task, index) => (
          <TaskItem key={index} name={task.name} priority={task.priority} />
        ))}
      </ul>
    );
  };
  
export default ListItem