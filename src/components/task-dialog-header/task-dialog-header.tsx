import React, { FC } from "react";
import { changeTaskTitle } from "../../actions/taskActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import EditTitle from "../edit-title";

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
        <EditTitle
          title={taskTitle}
          taskId={taskId}
          type="task-dialog-header-edit"
          columnId={columnId}
          action={changeTaskTitle}
          autoFocus={false}
        />
      </DialogTitle>
    </div>
  );
};

export default TaskDialogHeader;
