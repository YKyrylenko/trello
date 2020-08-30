import { ChangeColumnTitleAction } from "./columnActions";
import { ChangeTaskTitleAction, AddTaskDescriptionAction } from "./taskActions";

export type ChangeTitleActionsType =
  | ChangeColumnTitleAction
  | ChangeTaskTitleAction
  | AddTaskDescriptionAction;
