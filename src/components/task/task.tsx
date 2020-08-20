import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { changeTaskTitle } from "../../actions/taskActions";
import EditIcon from "@material-ui/icons/Edit";

import "./task.css";

interface TaskProps {
  id: number;
  title: string;
  columnId: number;
}

const Task: FC<TaskProps> = ({ title, id, columnId }) => {
  const dispatch = useDispatch();

  const [newTitle, setNewTitle] = useState<string>(title);

  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setNewTitle(e.target.value);
  };

  const handleTaskClick = (): void => {
    setIsClicked(true);
  };

  const handleBlur = (): void => {
    if (newTitle !== title) {
      dispatch(changeTaskTitle(newTitle, id, columnId));
      setIsClicked(false);
    }
    setIsClicked(false);
  };
  return (
    <React.Fragment>
      {!isClicked && (
        <div className="task">
          <span className="task-title">{title}</span>
          <EditIcon
            fontSize="small"
            className="edit-icon"
            onClick={handleTaskClick}
          />
        </div>
      )}
      {isClicked && (
        <textarea
          className="change-title"
          value={newTitle}
          autoFocus={true}
          onChange={handleInputChange}
          onBlur={handleBlur}
        />
      )}
    </React.Fragment>
  );
};

export default Task;
