import React, { useState, FC } from "react";
import AddTaskFrom from "../add-task-form";

import "./add-task.css";

interface AddTaskProps {
  columnId: number;
}

const AddTask: FC<AddTaskProps> = ({ columnId }) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleClick = (): void => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="add-task">
      {!isClicked && (
        <div className="add-task-button" onClick={handleClick}>
          <span className="add-task-button-title">Add new task</span>
        </div>
      )}
      {isClicked && (
        <AddTaskFrom columnId={columnId} handleClose={handleClick} />
      )}
    </div>
  );
};

export default AddTask;
