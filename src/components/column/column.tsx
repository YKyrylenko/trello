import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { deleteColumn } from "../../actions/columnActions";
import ColumnModel from "../../models/column";
import CloseIcon from "@material-ui/icons/Close";
import ColumnHeader from "../column-header";

import "./column.css";

interface ColumnProps {
  column: ColumnModel;
}

const Column: FC<ColumnProps> = ({ column }) => {
  const { title, id } = column;

  const dispatch = useDispatch();

  const handleDelete = (): void => {
    dispatch(deleteColumn(id));
  };

  return (
    <div className="column">
      <CloseIcon className="close-icon" onClick={handleDelete} />
      <ColumnHeader title={title} id={id} />
    </div>
  );
};

export default Column;
