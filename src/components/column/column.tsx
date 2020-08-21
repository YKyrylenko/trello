import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { deleteColumn } from "../../actions/columnActions";
import { Droppable, Draggable } from "react-beautiful-dnd";
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

const Column: FC<ColumnProps> = ({ column, index }) => {
  const { title, id, tasks } = column;

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
