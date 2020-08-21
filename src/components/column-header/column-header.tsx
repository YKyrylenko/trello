import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { changeColumnTitle } from "../../actions/columnActions";

import "./column-header.css";

interface ColumnHeaderProps {
  id: number;
  title: string;
}

const ColumnHeader: FC<ColumnHeaderProps> = ({ title, id }) => {
  const dispatch = useDispatch();

  const [isTileChange, setIsTitleChange] = useState<boolean>(false);

  const [newTitle, setNewTitle] = useState<string>(title);

  const changeTitle = () => {
    dispatch(changeColumnTitle(id, newTitle));
    setIsTitleChange(false);
  };

  const handleTitleClick = (): void => {
    setIsTitleChange(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNewTitle(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    changeTitle();
  };

  const onBlur = (): void => {
    changeTitle();
  };

  return (
    <div className="column-header">
      {!isTileChange && <span onClick={handleTitleClick}>{title} </span>}
      {isTileChange && (
        <form onSubmit={onSubmit}>
          <input
            className="change-title-input"
            value={newTitle}
            autoFocus={true}
            onChange={handleChange}
            onBlur={onBlur}
          />
        </form>
      )}
    </div>
  );
};

export default ColumnHeader;
