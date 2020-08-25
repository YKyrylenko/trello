import React, { FC, useState, useRef, useEffect } from "react";
import AddColumnForm from "../add-column-form";

import "./add-column-button.css";

const AddColumnButton: FC = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const addColumnRef = useRef<HTMLDivElement>(null);

  const handleOpen = (): void => {
    setIsClicked(true);
  };

  const handleClose = (): void => {
    setIsClicked(false);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleOutsideClick = (e: Event) => {
    if (
      addColumnRef.current &&
      isClicked &&
      !addColumnRef.current.contains(e.target as Node)
    ) {
      setIsClicked(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleOutsideClick]);

  return (
    <div
      ref={addColumnRef}
      className={isClicked ? "add-column add" : "add-column"}
    >
      {!isClicked && (
        <span className="add-column-title" onClick={handleOpen}>
          Add new column
        </span>
      )}
      {isClicked && <AddColumnForm handleClose={handleClose} />}
    </div>
  );
};

export default AddColumnButton;
