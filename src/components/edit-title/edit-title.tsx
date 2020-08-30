import React, { useState, useEffect, useRef, FC, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { autosize, size } from "../../utils/autosize";
import { ChangeTitleActionsType } from "../../actions/changeTitleActions";

import "./edit-title.css";

interface EditTitleProps {
  title: string;
  type: string;
  columnId: number;
  taskId?: any;
  autoFocus: boolean;
  action: (
    columnId: number,
    title: string,
    taskId?: any
  ) => ChangeTitleActionsType;
  event?: () => void;
}

const EditTitle: FC<EditTitleProps> = ({
  title,
  taskId,
  columnId,
  type,
  autoFocus,
  action,
  event,
}) => {
  const dispatch = useDispatch();

  const textareaEl = useRef(null);

  const [newTitle, setNewTitle] = useState<string>(title);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewTitle(e.target.value);
  };

  const handleBlur = (): void => {
    if (newTitle !== title) {
      dispatch(action(columnId, newTitle, taskId));
    }
    event && event();
  };

  useEffect(() => {
    size(textareaEl);
  }, []);

  return (
    <textarea
      value={newTitle}
      className={`edit-title ${type}`}
      ref={textareaEl}
      autoFocus={autoFocus}
      onChange={handleChange}
      onBlur={handleBlur}
      onKeyDown={autosize}
      onLoad={size}
    />
  );
};

export default EditTitle;
