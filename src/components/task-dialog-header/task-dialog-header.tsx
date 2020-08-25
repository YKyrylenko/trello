import React, { FC } from "react";

import DialogTitle from "@material-ui/core/DialogTitle";
import ChangeTaskTitle from "../change-task-title";

import "./task-dialog-header.css";

interface TaskDialogHeaderProps {
  taskId: number;
  taskTitle: string;
  columnId: number;
}

const TaskDialogHeader: FC<TaskDialogHeaderProps> = ({
  taskTitle,
  taskId,
  columnId,
}) => {
  return (
    <div className="task-dialog-header">
      <DialogTitle>
        <ChangeTaskTitle
          title={taskTitle}
          taskId={taskId}
          columnId={columnId}
        />
      </DialogTitle>
    </div>
  );
};

export default TaskDialogHeader;
