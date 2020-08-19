import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers";
import { deleteColumn } from "../../actions/columnActions";
import ColumnModel from "../../models/column";
import CloseIcon from "@material-ui/icons/Close";
import ColumnHeader from "../column-header";
import Card from "../card";

import "./column.css";
import Task from "../../models/task";
import AddCard from "../add-card";

interface ColumnProps {
  column: ColumnModel;
  index: number;
}

interface StateProps {
  tasks: Task[];
}

const Column: FC<ColumnProps> = ({ column, index }) => {
  const { title, id } = column;

  const { tasks } = useSelector<RootState, StateProps>(
    (state) => state.column.columns[index]
  );

  const dispatch = useDispatch();

  const handleDelete = (): void => {
    dispatch(deleteColumn(id));
  };

  return (
    <div className="column">
      <CloseIcon className="close-icon" onClick={handleDelete} />
      <ColumnHeader title={title} id={id} />
      <div className="card-list">
        {tasks.map((task) => (
          <Card title={task.title} id={task.id} columnId={id} key={task.id} />
        ))}
      </div>
      <AddCard columnId={id} />
    </div>
  );
};

export default Column;
