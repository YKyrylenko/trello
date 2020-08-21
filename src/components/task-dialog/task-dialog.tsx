import React, { FC } from "react";
import TaskDialogHeader from "../task-dialog-header";
import TaskDialogContent from "../task-dialog-content";

import Dialog from "@material-ui/core/Dialog";

import "./task-dialog.css";

interface TaskDialogProps {
  open: boolean;
  taskId: number;
  taskTitle: string;
  columnTitle: string;
  columnId: number;
  handleClose: () => void;
}

const TaskDialog: FC<TaskDialogProps> = ({
  open,
  taskId,
  columnId,
  taskTitle,
  columnTitle,
  handleClose,
}) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <TaskDialogHeader
        taskId={taskId}
        columnId={columnId}
        taskTitle={taskTitle}
        columnTitle={columnTitle}
      />
      <TaskDialogContent />
    </Dialog>
  );
};

export default TaskDialog;
