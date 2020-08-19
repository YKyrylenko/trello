import {
  ADD_COLUMN,
  DELETE_COLUMN,
  CHANGE_COLUMN_TITLE,
  ADD_TASK,
  CHANGE_TASK_TITLE,
} from "./../actions/index";
import Column from "../models/column";
import { ColumnActionTypes } from "../actions/columnActions";
import { TaskActionsType } from "./../actions/taskActions";
import Task from "../models/task";

interface ColumnState {
  columns: Column[];
}

const initialState: ColumnState = {
  columns: [
    {
      id: 1,
      title: "todo",
      tasks: [
        { id: 1, title: "morning run" },
        { id: 2, title: "make a breakfast" },
      ],
    },
  ],
};

export const columnReducer = (
  state = initialState,
  action: ColumnActionTypes | TaskActionsType
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
    case ADD_TASK:
      return {
        ...state,
        columns: state.columns.map((column) =>
          column.id === action.payload.columnId
            ? { ...column, tasks: [...column.tasks, action.payload.newTask] }
            : column
        ),
      };

    case CHANGE_TASK_TITLE:
      const { taskId, columnId, newTitle } = action.payload;
      return {
        ...state,
        columns: state.columns.map((column) => {
          if (column.id === columnId) {
            return {
              ...column,
              tasks: column.tasks.map((task) =>
                task.id === taskId ? { ...task, title: newTitle } : task
              ),
            };
          } else {
            return column;
          }
        }),
      };

    default:
      return state;
  }
};
