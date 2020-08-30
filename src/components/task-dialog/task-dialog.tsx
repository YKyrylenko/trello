import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { addTaskTerm } from "../../actions/taskActions";
import TaskDialogHeader from "../task-dialog-header";
import TaskDialogContent from "../task-dialog-content";

import Dialog from "@material-ui/core/Dialog";

import "./task-dialog.css";

interface TaskDialogProps {
  open: boolean;
  taskId: number;
  taskTitle: string;
  description?: string;
  term?: string;
  columnId: number;
  handleClose: () => void;
}

const TaskDialog: FC<TaskDialogProps> = ({
  open,
  taskId,
  columnId,
  taskTitle,
  description,
  term,
  handleClose,
}) => {
  const dispatch = useDispatch();

  const addTerm = (term: string): void => {
    dispatch(addTaskTerm(taskId, term, columnId));
  };

  return (
    <Dialog open={open} fullWidth={true} onClose={handleClose}>
      <TaskDialogHeader
        taskId={taskId}
        columnId={columnId}
        taskTitle={taskTitle}
      />
      <TaskDialogContent
        addTerm={addTerm}
        taskId={taskId}
        columnId={columnId}
        description={description}
        term={term}
      />
    </Dialog>
  );
};

export default TaskDialog;
