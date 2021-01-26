import React from "react";

const ProductInfo = () => {
  return (
    <div>
      <h1 class="text-2xl font-bold text-gray-900">
        ARIA attribute misspelled
      </h1>
      <div className="md:flex justify-between">
        <div>
          <p class="mt text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            placeat aspernatur, tenetur ad non, ullam amet quo quos porro magnam
            dolor commodi ratione facere odit impedit tempora? Sequi, expedita
            autem?
          </p>
        </div>
        <p className="hidden md:block pl-20 pr-5 font-bold">$34.25</p>
      </div>
    </div>
  );
};

export default ProductInfo;
