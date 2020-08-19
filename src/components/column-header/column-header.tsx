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

  const handleTitleClick = (): void => {
    setIsTitleChange(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNewTitle(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(changeColumnTitle(id, newTitle));
    setIsTitleChange(false);
  };

  return (
    <div className="column-header" onClick={handleTitleClick}>
      {!isTileChange && <span>{title} </span>}
      {isTileChange && (
        <form onSubmit={onSubmit}>
          <input
            className="change-title"
            value={newTitle}
            autoFocus={true}
            onChange={handleChange}
          />
        </form>
      )}
    </div>
  );
};

export default ColumnHeader;