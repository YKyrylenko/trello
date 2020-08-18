import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";
import Column from "../column";
import AddColumnButton from "../add-column-button";

import "./board.css";
import ColumnModel from "../../models/column";

interface StateProps {
  columns: ColumnModel[];
}

const Board: FC = () => {
  const { columns } = useSelector<RootState, StateProps>(
    (state: RootState) => state.column
  );

  return (
    <div className="board">
      {columns.map((column) => (
        <Column column={column} key={column.id} />
      ))}
      <AddColumnButton />
    </div>
  );
};

export default Board;
