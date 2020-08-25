import React, { FC, ChangeEvent, useState } from "react";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";

import "./task-dialog-content.css";

interface TaskDialogContentProps {
  addDescription: (description: string) => void;
  addTerm: (term: string) => void;
  description?: string;
  term?: string;
}

const TaskDialogContent: FC<TaskDialogContentProps> = ({
  description,
  term,
  addDescription,
  addTerm,
}) => {
  const [selectedDate, setSelectedDate] = useState<string | undefined>(
    term || " "
  );

  const [newDescription, setNewDescription] = useState<string | undefined>(
    description
  );

  const handleDescriptionChange = (
    e: ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setNewDescription(e.target.value);
  };

  const handleTermChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSelectedDate(e.target.value);
  };

  const handleTermBlur = (): void => {
    if (selectedDate !== undefined) {
      addTerm(selectedDate);
    }
  };

  const handleDescriptionBlur = (): void => {
    if (newDescription !== undefined) {
      addDescription(newDescription);
    }
  };

  return (
    <DialogContent>
      <h3>Description</h3>
      <textarea
        className="description"
        placeholder="description"
        value={newDescription}
        onChange={handleDescriptionChange}
        onBlur={handleDescriptionBlur}
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
