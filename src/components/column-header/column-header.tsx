import React, { FC, useState } from "react";
import { changeColumnTitle } from "../../actions/columnActions";
import EditTitle from "../edit-title";

import "./column-header.css";

interface ColumnHeaderProps {
  id: number;
  title: string;
}

const ColumnHeader: FC<ColumnHeaderProps> = ({ title, id }) => {
  const [isEdited, setIsEdited] = useState<boolean>(false);

  const toggleEdit = (): void => {
    setIsEdited(!isEdited);
  };

  return (
    <div className="column-header">
      {!isEdited && <span onClick={toggleEdit}>{title} </span>}
      {isEdited && (
        <EditTitle
          title={title}
          columnId={id}
          type="column-edit-title"
          autoFocus={true}
          action={changeColumnTitle}
          event={toggleEdit}
        />
      )}
    </div>
  );
};

export default ColumnHeader;
