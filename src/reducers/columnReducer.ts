import {
  ADD_COLUMN,
  DELETE_COLUMN,
  CHANGE_COLUMN_TITLE,
  ADD_TASK,
  CHANGE_TASK_TITLE,
  TASK_DND_SAME_COLUMN,
  TASK_DND_DIFFERENT_COLUMN,
  COLUMN_DND,
} from "./../actions/index";
import Column from "../models/column";
import { ColumnActionTypes } from "../actions/columnActions";
import { TaskActionsType } from "./../actions/taskActions";
import { DragAndDropActionsTypes } from "./../actions/dragAndDropActions";

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
  action: ColumnActionTypes | TaskActionsType | DragAndDropActionsTypes
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

    case TASK_DND_SAME_COLUMN: {
      const { source, destination } = action.payload;
      return {
        ...state,
        columns: state.columns.map((column) => {
          if (column.id === +source.droppableId) {
            let tasks = [...column.tasks];
            let task = tasks.splice(source.index, 1)[0];
            tasks.splice(destination.index, 0, task);
            return {
              ...column,
              tasks,
            };
          } else {
            return column;
          }
        }),
      };
    }

    case TASK_DND_DIFFERENT_COLUMN: {
      const { source, destination } = action.payload;
      let columns = [...state.columns];
      let task: any;
      columns = columns.map((column) => {
        if (column.id === +source.droppableId) {
          task = column.tasks.splice(source.index, 1)[0];
          return {
            ...column,
          };
        } else {
          return column;
        }
      });
      columns = columns.map((column) => {
        if (column.id === +destination.droppableId) {
          column.tasks.splice(destination.index, 0, task);
          return {
            ...column,
          };
        }
        return {
          ...column,
        };
      });
      return {
        ...state,
        columns,
      };
    }
    case COLUMN_DND: {
      const { source, destination } = action.payload;
      let columns = [...state.columns];
      let column = columns.splice(source.index, 1)[0];
      columns.splice(destination.index, 0, column);
      return {
        ...state,
        columns,
      };
    }

    default:
      return state;
  }
};
