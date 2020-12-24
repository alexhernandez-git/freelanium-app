import React from "react";
import Card from "./Card";

const List = ({ list }) => {
  const { title, cards } = list;
  return (
    <div
      className="bg-gray-300 w-80 px-2 py-4 rounded shadow group h-full mr-3"
      style={{ minWidth: "20rem" }}
    >
      <div className="mb-4 flex justify-between">
        <span>{title}</span>
        <div className="flex justify-between items-center">
          <svg
            className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-500 cursor-pointer opacity-0 group-hover:opacity-100 transition duration-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
          </svg>
          <svg
            className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-500 cursor-pointer opacity-0 group-hover:opacity-100 transition duration-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </div>
      </div>
      {cards.map((card, index) => (
        <Card card={card} key={card.id} />
      ))}
      <div className="flex items-center mt-4 text-gray-500 cursor-pointer">
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
        <span className=" text-gray-500">Add another card</span>
      </div>
    </div>
  );
};

export default List;
