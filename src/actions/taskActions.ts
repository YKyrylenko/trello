import {
  ADD_TASK,
  CHANGE_TASK_TITLE,
  ADD_TASK_DESCRIPTION,
  ADD_TASK_TERM,
} from "./index";
import Task from "../models/task";

interface AddTaskAction {
  type: typeof ADD_TASK;
  payload: {
    newTask: Task;
    columnId: number;
  };
}

export interface ChangeTaskTitleAction {
  type: typeof CHANGE_TASK_TITLE;
  payload: {
    columnId: number;
    newTitle: string;
    taskId: number;
  };
}

export interface AddTaskDescriptionAction {
  type: typeof ADD_TASK_DESCRIPTION;
  payload: {
    columnId: number;
    description: string;
    taskId: number;
  };
}

interface AddTaskTermAction {
  type: typeof ADD_TASK_TERM;
  payload: {
    taskId: number;
    term: string;
    columnId: number;
  };
}

export const addTask = (newTask: Task, columnId: number): AddTaskAction => ({
  type: ADD_TASK,
  payload: {
    newTask,
    columnId,
  },
});

export const changeTaskTitle = (
  columnId: number,
  newTitle: string,
  taskId: number
): ChangeTaskTitleAction => ({
  type: CHANGE_TASK_TITLE,
  payload: { columnId, taskId, newTitle },
});

export const addTaskDescription = (
  columnId: number,
  description: string,
  taskId: number
): AddTaskDescriptionAction => ({
  type: ADD_TASK_DESCRIPTION,
  payload: {
    taskId,
    description,
    columnId,
  },
});

export const addTaskTerm = (
  taskId: number,
  term: string,
  columnId: number
): AddTaskTermAction => ({
  type: ADD_TASK_TERM,
  payload: {
    taskId,
    term,
    columnId,
  },
});

export type TaskActionsType =
  | AddTaskAction
  | ChangeTaskTitleAction
  | AddTaskDescriptionAction
  | AddTaskTermAction;
