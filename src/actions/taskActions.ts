import { ADD_TASK, CHANGE_TASK_TITLE } from "./index";
import Task from "../models/task";

interface AddTaskAction {
  type: typeof ADD_TASK;
  payload: {
    newTask: Task;
    columnId: number;
  };
}

interface ChangeTaskTitleAction {
  type: typeof CHANGE_TASK_TITLE;
  payload: {
    taskId: number;
    newTitle: string;
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
  newTitle: string,
  taskId: number,
  columnId: number
): ChangeTaskTitleAction => ({
  type: CHANGE_TASK_TITLE,
  payload: {
    taskId,
    newTitle,
    columnId,
  },
});
export type TaskActionsType = AddTaskAction | ChangeTaskTitleAction;
