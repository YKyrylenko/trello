import React, { FC, useState } from "react";
import { changeTaskTitle } from "../../actions/taskActions";
import { Draggable } from "react-beautiful-dnd";
import { compare } from "../../utils/compare";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import DescriptionIcon from "@material-ui/icons/Description";
import EditIcon from "@material-ui/icons/Edit";
import TaskDialog from "../task-dialog";
import TaskModel from "../../models/task";
import EditTitle from "../edit-title";

import "./task.css";

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
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const [isEdited, setIsEdited] = useState<boolean>(false);

  const toggleEdit = (): void => {
    setIsEdited(!isEdited);
  };

  const handleOpenDialog = (): void => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = (): void => {
    setIsDialogOpen(false);
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
      {!isEdited && (
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
                onClick={toggleEdit}
              />
              <div className="badges">
                {term && <AccessTimeIcon />}
                {description && <DescriptionIcon />}
              </div>
            </div>
          )}
        </Draggable>
      )}
      {isEdited && (
        <EditTitle
          title={title}
          taskId={id}
          columnId={columnId}
          type="task-edit-title"
          autoFocus={true}
          action={changeTaskTitle}
          event={toggleEdit}
        />
      )}
    </React.Fragment>
  );
};

export default Task;
