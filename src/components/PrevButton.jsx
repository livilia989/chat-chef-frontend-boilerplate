import React from "react";
import { useNavigate } from "react-router-dom";

const PrevButton = () => {
  // logic
  const history = useNavigate();

  const hadlePrev = () => {
    history(-1);
  };

  // view
  return (
    <button
      type="button"
      className="text-none absolute top-6 left-4 px-4 py-2"
      onClick={hadlePrev}
    >
      <img src="./images/arrow-prev.svg" alt="뒤로가기" className="block" />
      뒤로가기
    </button>
  );
};

export default PrevButton;
