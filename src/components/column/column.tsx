import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers";
import { deleteColumn } from "../../actions/columnActions";
import { Droppable, Draggable } from "react-beautiful-dnd";
import TaskModel from "../../models/task";
import AddTask from "../add-task";
import ColumnModel from "../../models/column";
import CloseIcon from "@material-ui/icons/Close";
import ColumnHeader from "../column-header";
import Task from "../task";

import "./column.css";

interface ColumnProps {
  index: number;
  column: ColumnModel;
}

interface StateProps {
  tasks: TaskModel[];
}

const Column: FC<ColumnProps> = ({ column, index }) => {
  const { title, id } = column;

  const { tasks } = useSelector<RootState, StateProps>(
    (state) => state.column.columns.filter((column) => column.id === id)[0]
  );

  const dispatch = useDispatch();

  const handleDelete = (): void => {
    dispatch(deleteColumn(id));
  };

  return (
    <Draggable draggableId={`column-${id}`} index={index}>
      {(provided) => (
        <div
          className="column"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <CloseIcon className="close-icon" onClick={handleDelete} />
          <ColumnHeader title={title} id={id} />
          <Droppable droppableId={`${id}`} type="task">
            {(provided) => (
              <div
                className="tasks-list"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {tasks.map((task, index) => (
                  <Task
                    title={task.title}
                    id={task.id}
                    columnId={id}
                    key={task.id}
                    index={index}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <AddTask columnId={id} />
        </div>
      )}
    </Draggable>
  );
};

export default Column;
