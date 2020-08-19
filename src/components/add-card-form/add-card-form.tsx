import React, { useState, FC } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../actions/taskActions";
import Button from "@material-ui/core/Button";

import "./add-card-form.css";

interface AddCardFormProps {
  columnId: number;
  handleClose: () => void;
}

const AddCardForm: FC<AddCardFormProps> = ({ columnId, handleClose }) => {
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
    <form className="add-card-form" onSubmit={onSubmit}>
      <textarea
        className="add-card-form-input"
        placeholder="Enter new task"
        onChange={handleInputChange}
        value={taskName}
      />
      <div className="add-card-form-actions">
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

export default AddCardForm;
