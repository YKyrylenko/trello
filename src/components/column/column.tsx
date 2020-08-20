import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers";
import { deleteColumn } from "../../actions/columnActions";
import ColumnModel from "../../models/column";
import CloseIcon from "@material-ui/icons/Close";
import ColumnHeader from "../column-header";
import Task from "../task";

import "./column.css";
import TaskModel from "../../models/task";
import AddTask from "../add-task";

interface ColumnProps {
  column: ColumnModel;
}

interface StateProps {
  tasks: TaskModel[];
}

const Column: FC<ColumnProps> = ({ column }) => {
  const { title, id } = column;

  const { tasks } = useSelector<RootState, StateProps>(
    (state) => state.column.columns.filter((column) => column.id === id)[0]
  );

  const dispatch = useDispatch();

  const handleDelete = (): void => {
    dispatch(deleteColumn(id));
  };

  return (
    <div className="column">
      <CloseIcon className="close-icon" onClick={handleDelete} />
      <ColumnHeader title={title} id={id} />
      <div className="tasks-list">
        {tasks.map((task) => (
          <Task title={task.title} id={task.id} columnId={id} key={task.id} />
        ))}
      </div>
      <AddTask columnId={id} />
    </div>
  );
};

export default Column;
