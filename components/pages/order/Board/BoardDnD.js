import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import List from "components/pages/order/Board/List";
const lists = [
  {
    id: Math.random().toString(36).substring(7),
    title: "TO DO",
    cards: [],
  },
  {
    id: Math.random().toString(36).substring(7),
    title: "IN PROGRESS",
    cards: [
      {
        id: Math.random().toString(36).substring(7),
        title: "card 1",
      },
      {
        id: Math.random().toString(36).substring(7),
        title: "work in progress",
      },
    ],
  },
  {
    id: Math.random().toString(36).substring(7),
    title: "DONE",
    cards: [
      {
        id: Math.random().toString(36).substring(7),
        title: "card 1",
      },
    ],
  },
];
const BoardDnD = () => {
  const onDragEnd = (result) => {};
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="all-lists" direction="horizontal" type="list">
        {(provided) => (
          <div
            className="mr-auto px-4 sm:px-6 md:px-8 flex"
            style={{ width: "max-content" }}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {lists.map((list, index) => (
              <List list={list} key={list.id} index={index} />
            ))}
            {provided.placeholder}
            <div
              className="bg-gray-300 w-80 p-2 rounded shadow group h-full cursor-pointer"
              style={{ minWidth: "20rem" }}
            >
              <div className="flex items-center text-gray-500">
                <svg
                  className="flex-shrink-0 mr-1.5 h-5 w-5 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                <span className="text-gray-500">Add another list</span>
              </div>
            </div>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default BoardDnD;
