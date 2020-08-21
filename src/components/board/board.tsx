import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../reducers";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import {
  taskDNDSameColumn,
  taskDNDDifferentColumn,
  columnDND,
} from "../../actions/dragAndDropActions";
import Column from "../column";
import AddColumnButton from "../add-column-button";
import ColumnModel from "../../models/column";

import "./board.css";

interface StateProps {
  columns: ColumnModel[];
}

const Board: FC = () => {
  const dispatch = useDispatch();
  const { columns } = useSelector<RootState, StateProps>(
    (state) => state.column
  );

  const onDragEnd = (result: any) => {
    const { source, destination, type } = result;
    let payload = { source, destination };
    if (source.droppableId === destination.droppableId) {
      dispatch(taskDNDSameColumn(payload));
    }
    if (source.droppableId !== destination.droppableId) {
      dispatch(taskDNDDifferentColumn(payload));
    }
    if (type === "column") {
      dispatch(columnDND(payload));
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="board" direction="horizontal" type="column">
        {(provided) => (
          <div
            className="board"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {columns.map((column, index) => (
              <Column column={column} key={column.id} index={index} />
            ))}
            <AddColumnButton />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Board;
