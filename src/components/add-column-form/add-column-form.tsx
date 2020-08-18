import React, { useState, FC } from "react";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { addColumn } from "../../actions/columnActions";
import Column from "../../models/column";

import "./add-column-form.css";

interface AddColumnFormProps {
  handleClose: () => void;
}

const AddColumnForm: FC<AddColumnFormProps> = ({ handleClose }) => {
  const dispatch = useDispatch();
  const [newColumnTitle, setNewColumnTitle] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNewColumnTitle(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const column: Column = {
      id: Date.now(),
      title: newColumnTitle,
      tasks: [],
    };

    if (!!newColumnTitle) {
      dispatch(addColumn(column));
    }

    setNewColumnTitle("");
  };

  return (
    <form className="add-column-form" onSubmit={onSubmit}>
      <input
        className="add-column-input"
        type="text"
        autoFocus={true}
        value={newColumnTitle}
        onChange={handleInputChange}
      />
      <div className="form-actions">
        <Button type="submit" color="primary">
          add
        </Button>
        <Button style={{ zIndex: 10 }} color="secondary" onClick={handleClose}>
          cancel
        </Button>
      </div>
    </form>
  );
};
export default AddColumnForm;
