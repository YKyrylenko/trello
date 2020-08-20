import React, { useState, FC } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../actions/taskActions";
import Button from "@material-ui/core/Button";

import "./add-task-form.css";

interface AddTaskFormProps {
  columnId: number;
  handleClose: () => void;
}

const AddTaskForm: FC<AddTaskFormProps> = ({ columnId, handleClose }) => {
  const dispatch = useDispatch();

  const [taskName, setTaskName] = useState<string>("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setTaskName(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (taskName) {
      const task = {
        id: Date.now(),
        title: taskName,
      };
      dispatch(addTask(task, columnId));
    }
    setTaskName("");
  };

  return (
    <form className="add-task-form" onSubmit={onSubmit}>
      <textarea
        className="add-task-form-input"
        placeholder="Enter new task"
        onChange={handleInputChange}
        value={taskName}
      />
      <div className="add-task-form-actions">
        <Button variant="contained" color="default" type="submit">
          Add
        </Button>
        <Button variant="contained" color="secondary" onClick={handleClose}>
          Close
        </Button>
      </div>
    </form>
  );
};

export default AddTaskForm;
