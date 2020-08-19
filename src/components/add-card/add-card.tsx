import React, { useState, FC } from "react";
import AddCardFrom from "../add-card-form";

import "./add-card.css";

interface AddCardProps {
  columnId: number;
}

const AddCard: FC<AddCardProps> = ({ columnId }) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleClick = (): void => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="add-card">
      {!isClicked && (
        <div className="add-card-button" onClick={handleClick}>
          <span className="add-card-button-title">Add new task</span>
        </div>
      )}
      {isClicked && (
        <AddCardFrom columnId={columnId} handleClose={handleClick} />
      )}
    </div>
  );
};

export default AddCard;
