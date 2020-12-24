import React from "react";
import { Draggable } from "react-beautiful-dnd";
const Card = ({ card, index }) => {
  const { id, title } = card;
  return (
    <Draggable draggableId={String(id)} index={index}>
      {(provided) => (
        <div
          className="bg-gray-100 rounded p-3 shadow mb-2"
          {...provided.draggableProps}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
        >
          <span>{title}</span>
        </div>
      )}
    </Draggable>
  );
};

export default Card;
