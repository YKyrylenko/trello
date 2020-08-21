import {
  TASK_DND_SAME_COLUMN,
  TASK_DND_DIFFERENT_COLUMN,
  COLUMN_DND,
} from "./index";

interface DNDPayload {
  source: {
    index: number;
    droppableId: string;
  };
  destination: {
    index: number;
    droppableId: string;
  };
}

interface TaskDNDSameColumnAction {
  type: typeof TASK_DND_SAME_COLUMN;
  payload: DNDPayload;
}

interface TaskDNDDifferentColumnAction {
  type: typeof TASK_DND_DIFFERENT_COLUMN;
  payload: DNDPayload;
}

interface ColumnDNDAction {
  type: typeof COLUMN_DND;
  payload: DNDPayload;
}

export const taskDNDSameColumn = ({
  source,
  destination,
}: {
  source: {
    index: number;
    droppableId: string;
  };
  destination: {
    index: number;
    droppableId: string;
  };
}): TaskDNDSameColumnAction => ({
  type: TASK_DND_SAME_COLUMN,
  payload: {
    source,
    destination,
  },
});

export const taskDNDDifferentColumn = ({
  source,
  destination,
}: {
  source: {
    index: number;
    droppableId: string;
  };
  destination: {
    index: number;
    droppableId: string;
  };
}): TaskDNDDifferentColumnAction => ({
  type: TASK_DND_DIFFERENT_COLUMN,
  payload: {
    source,
    destination,
  },
});

export const columnDND = ({
  source,
  destination,
}: {
  source: {
    index: number;
    droppableId: string;
  };
  destination: {
    index: number;
    droppableId: string;
  };
}): ColumnDNDAction => ({
  type: COLUMN_DND,
  payload: {
    source,
    destination,
  },
});

export type DragAndDropActionsTypes =
  | TaskDNDSameColumnAction
  | TaskDNDDifferentColumnAction
  | ColumnDNDAction;
