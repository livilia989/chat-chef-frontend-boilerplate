import React from "react";

const AddButton = ({ onClick }) => {
  // logic

  // view
  return (
    <div className="pt-4 pb-2 first:pt-0 last:pb-0">
      <button
        type="button"
        className="w-full p-4 text-chef-blue-600 font-bold text-center border border-chef-blue-600 rounded-2xl"
        onClick={onClick}
      >
        + 재료 추가
      </button>
    </div>
  );
};

export default AddButton;
