import React, { FC, ChangeEvent, useState } from "react";
import { addTaskDescription } from "../../actions/taskActions";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import EditTitle from "../edit-title";

import "./task-dialog-content.css";

interface TaskDialogContentProps {
  addTerm: (term: string) => void;
  taskId: number;
  columnId: number;
  description?: string;
  term?: string;
}

const TaskDialogContent: FC<TaskDialogContentProps> = ({
  taskId,
  columnId,
  description,
  term,
  addTerm,
}) => {
  const [selectedDate, setSelectedDate] = useState<string | undefined>(
    term || " "
  );

  const handleTermChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSelectedDate(e.target.value);
  };

  const handleTermBlur = (): void => {
    if (selectedDate !== undefined) {
      addTerm(selectedDate);
    }
  };

  return (
    <DialogContent>
      <h3>Description</h3>
      <EditTitle
        title={description || ""}
        type="description-edit-title"
        taskId={taskId}
        columnId={columnId}
        autoFocus={false}
        action={addTaskDescription}
      />
      <h3>Term</h3>
      <TextField
        type="date"
        value={selectedDate}
        onChange={handleTermChange}
        onBlur={handleTermBlur}
      />
    </DialogContent>
  );
};

export default TaskDialogContent;
