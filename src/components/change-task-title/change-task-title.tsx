import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { changeTaskTitle } from "../../actions/taskActions";

import "./change-task-title.css";

interface ChangeTaskTitleProps {
  taskId: number;
  title: string;
  columnId: number;
  toggleTask: () => void;
}

const ChangeTaskTitle: FC<ChangeTaskTitleProps> = ({
  title,
  taskId,
  columnId,
  toggleTask,
}) => {
  const dispatch = useDispatch();
  const [newTitle, setNewTitle] = useState<string>(title);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setNewTitle(e.target.value);
  };

  const handleBlur = (): void => {
    if (newTitle !== title) {
      dispatch(changeTaskTitle(newTitle, taskId, columnId));
    }
    toggleTask();
  };

  return (
    <textarea
      className="change-task-title"
      value={newTitle}
      autoFocus={true}
      onChange={handleInputChange}
      onBlur={handleBlur}
    />
  );
};

export default ChangeTaskTitle;
