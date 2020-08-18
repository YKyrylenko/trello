import React, { FC, useState, useRef, useEffect } from "react";
import AddColumnForm from "../add-column-form";

import "./add-column-button.css";

const AddColumnButton: FC = () => {
  const [isClicked, setIsClicked]: [boolean, any] = useState(false);

  const addColumnRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (e: any): void => {
    if (
      addColumnRef.current &&
      isClicked &&
      !addColumnRef.current.contains(e.target)
    ) {
      setIsClicked(false);
    }
  };

  const handleOpen = (e: any): void => {
    setIsClicked(true);
  };

  const handleClose = (e: any): void => {
    setIsClicked(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  });

  return (
    <React.Fragment>
      <div
        ref={addColumnRef}
        className={isClicked ? "add-column add" : "add-column"}
        onClick={handleOpen}
      >
        {!isClicked && <span className="add-column-title">Add new column</span>}
        {isClicked && <AddColumnForm handleClose={handleClose} />}
      </div>
    </React.Fragment>
  );
};

export default AddColumnButton;
