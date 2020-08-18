import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { changeColumnTitle, deleteColumn } from "../../actions/columnActions";
import ColumnModel from "../../models/column";
import CloseIcon from "@material-ui/icons/Close";

import "./column.css";

interface ColumnProps {
  column: ColumnModel;
}

const Column: FC<ColumnProps> = ({ column }) => {
  const { title, id } = column;

  const dispatch = useDispatch();

  const [isTileChange, setIsTitleChange]: [boolean, any] = useState(false);

  const [newTitle, setNewTitle]: [string, any] = useState(title);

  const handleTitleClick = (e: any): void => {
    setIsTitleChange(true);
  };

  const handleChange = (e: any): void => {
    setNewTitle(e.target.value);
  };

  const handleDelete = (e: any): void => {
    dispatch(deleteColumn(id));
  };

  const onSubmit = (e: any): void => {
    e.preventDefault();

    dispatch(changeColumnTitle(id, newTitle));
    setIsTitleChange(false);
  };

  return (
    <div className="column">
      <CloseIcon
        style={{
          position: "absolute",
          left: "calc(100% - 27px)",
          cursor: "pointer",
        }}
        onClick={handleDelete}
      />
      <div className="column-header" onClick={handleTitleClick}>
        {!isTileChange && <span>{title} </span>}
        {isTileChange && (
          <form onSubmit={onSubmit}>
            <input
              className="change-title"
              value={newTitle}
              autoFocus={true}
              onChange={handleChange}
            />
          </form>
        )}
      </div>
    </div>
  );
};

export default Column;
