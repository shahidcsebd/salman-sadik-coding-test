import React from "react";
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
  return (
    <Draggable draggableId={draggableId} index={index} key={key}>
      {(provided) => (
        <div
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
          className="w-full bg-white border p-2 my-4 rounded-md group "
        >
          <OutlineCard
            {...outline}
            onSetOutlines={onSetOutlines}
            onOutlines={onOutlines}
          />
        </div>
      )}
    </Draggable>
  );
};

export default OutlinesCard;
