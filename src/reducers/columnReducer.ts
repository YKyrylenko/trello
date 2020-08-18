import {
  ADD_COLUMN,
  DELETE_COLUMN,
  CHANGE_COLUMN_TITLE,
} from "./../actions/index";
import Column from "../models/column";
import { ColumnActionTypes } from "../actions/columnActions";

interface ColumnState {
  columns: Column[];
}

const initialState: ColumnState = {
  columns: [
    {
      id: 1,
      title: "todo",
      tasks: [],
    },
  ],
};

export const columnReducer = (
  state = initialState,
  action: ColumnActionTypes
): ColumnState => {
  switch (action.type) {
    case ADD_COLUMN:
      return {
        ...state,
        columns: [...state.columns, action.payload],
      };
    case CHANGE_COLUMN_TITLE:
      return {
        ...state,
        columns: state.columns.map((column) =>
          column.id === action.payload.id
            ? { ...column, title: action.payload.newTitle }
            : column
        ),
      };
    case DELETE_COLUMN:
      return {
        ...state,
        columns: state.columns.filter((column) => column.id !== action.payload),
      };
    default:
      return state;
  }
};
