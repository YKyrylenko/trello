import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { changeTaskTitle } from "../../actions/taskActions";

import "./card.css";

interface CardProps {
  id: number;
  title: string;
  columnId: number;
}

const Card: FC<CardProps> = ({ title, id, columnId }) => {
  const dispatch = useDispatch();

  const [newTitle, setNewTitle] = useState<string>(title);

  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setNewTitle(e.target.value);
  };

  const handeClick = (): void => {
    setIsClicked(true);
  };

  const handleBlur = (): void => {
    if (newTitle !== title) {
      dispatch(changeTaskTitle(newTitle, id, columnId));
      setIsClicked(false);
    }
    setIsClicked(false);
  };
  return (
    <React.Fragment>
      {!isClicked && (
        <div className="card" onClick={handeClick}>
          <span className="card-title">{title}</span>
        </div>
      )}
      {isClicked && (
        <textarea
          className="change-title"
          value={newTitle}
          autoFocus={true}
          onChange={handleInputChange}
          onBlur={handleBlur}
        />
      )}
    </React.Fragment>
  );
};

export default Card;
