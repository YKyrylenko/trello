import { ADD_COLUMN, DELETE_COLUMN, CHANGE_COLUMN_TITLE } from "./index";
import Column from "../models/column";

interface AddColumnAction {
  type: typeof ADD_COLUMN;
  payload: Column;
}

interface DeleteColumnAction {
  type: typeof DELETE_COLUMN;
  payload: number;
}

export interface ChangeColumnTitleAction {
  type: typeof CHANGE_COLUMN_TITLE;
  payload: {
    id: number;
    newTitle: string;
  };
}

export const addColumn = (newColumn: Column): AddColumnAction => ({
  type: ADD_COLUMN,
  payload: newColumn,
});

export const deleteColumn = (id: number): DeleteColumnAction => ({
  type: DELETE_COLUMN,
  payload: id,
});

export const changeColumnTitle = (
  id: number,
  newTitle: string
): ChangeColumnTitleAction => ({
  type: CHANGE_COLUMN_TITLE,
  payload: {
    id,
    newTitle,
  },
});

export type ColumnActionTypes =
  | AddColumnAction
  | DeleteColumnAction
  | ChangeColumnTitleAction;
