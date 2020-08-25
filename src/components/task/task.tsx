import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { changeTaskTitle } from "../../actions/taskActions";
import { Draggable } from "react-beautiful-dnd";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import DescriptionIcon from "@material-ui/icons/Description";
import compareAsc from "date-fns/compareAsc";
import addDays from "date-fns/addDays";
import EditIcon from "@material-ui/icons/Edit";
import TaskDialog from "../task-dialog";

import "./task.css";
import TaskModel from "../../models/task";

interface TaskProps {
  task: TaskModel;
  columnId: number;
  index: number;
}

const Task: FC<TaskProps> = ({
  columnId,
  index,
  task: { id, title, description, term },
}) => {
  const dispatch = useDispatch();

  const [newTitle, setNewTitle] = useState<string>(title);

  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setNewTitle(e.target.value);
  };

  const handleEditButtonClick = (): void => {
    setIsClicked(true);
  };

  const handleBlur = (): void => {
    if (newTitle !== title) {
      dispatch(changeTaskTitle(newTitle, id, columnId));
    }
    setIsClicked(false);
  };

  const handleOpenDialog = (): void => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = (): void => {
    setIsDialogOpen(false);
  };

  const compare = (term: any): string => {
    let className = "task";
    if (term) {
      let taskTerm = new Date(term);
      let currentDate = new Date();
      currentDate.setHours(0, 0, 0, 0);
      taskTerm.setHours(0, 0, 0, 0);
      if (compareAsc(currentDate, taskTerm) > 0) {
        className += " expiredTerm";
      } else if (compareAsc(currentDate, taskTerm) === 0) {
        className += " equalTerm";
      } else if (compareAsc(addDays(currentDate, 1), taskTerm) === 0) {
        className += " oneDayLeftTerm";
      }
    }
    return className;
  };

  return (
    <React.Fragment>
      {isDialogOpen && (
        <TaskDialog
          open={isDialogOpen}
          description={description}
          term={term}
          taskId={id}
          columnId={columnId}
          taskTitle={title}
          handleClose={handleCloseDialog}
        />
      )}
      {!isClicked && (
        <Draggable draggableId={`${id}`} index={index}>
          {(provided) => (
            <div
              className={compare(term)}
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <span className="task-title" onClick={handleOpenDialog}>
                {title}
              </span>
              <EditIcon
                fontSize="small"
                className="edit-icon"
                onClick={handleEditButtonClick}
              />
              <div className="badges">
                {term && <AccessTimeIcon />}
                {description && <DescriptionIcon />}{" "}
              </div>
            </div>
          )}
        </Draggable>
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
