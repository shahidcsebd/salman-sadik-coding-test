import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import OutlineCard from "./OutlineCard";

const OutlinesCard = ({
  draggableId,
  index,
  key,
  outline,
  onOutlines,
  onSetOutlines,
}) => {
  const [keywordHover, setKeywordHover] = useState(false);

  return (
    <Draggable draggableId={draggableId} index={index} key={key}>
      {(provided, snapshot) => (
        <div
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
          className={`w-full bg-white border p-2 my-4 rounded-md group ${
            keywordHover
              ? `border-indigo-600`
              : snapshot.isDragging
              ? "border-indigo-600"
              : ""
          }`}
        >
          <OutlineCard
            {...outline}
            onSetOutlines={onSetOutlines}
            onOutlines={onOutlines}
            keywordHover={keywordHover}
            setKeywordHover={setKeywordHover}
          />
        </div>
      )}
    </Draggable>
  );
};

export default OutlinesCard;
