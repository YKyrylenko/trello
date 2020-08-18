import { combineReducers } from "redux";
import { columnReducer } from "./columnReducer";

export const rootReducer = combineReducers({
  column: columnReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
