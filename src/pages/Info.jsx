import React, { useEffect, useState } from "react";
import PrevButton from "../components/PrevButton";
import InfoInput from "../components/InfoInput";
import AddButton from "../components/AddButton";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Info = ({ sendIngredientList }) => {
  // logic
  const history = useNavigate();

  const [ingredientList, setIngredientList] = useState([]); // 사용자가 입력할 재료 목록

  const addIngredient = () => {
    const id = Date.now();

    const newItem = {
      id,
      label: `ingredient-${id}`,
      text: "재료명",
      value: "",
    };

    // setIngredientList([...ingredientList, newItem])

    // state값 변경
    setIngredientList((prev) => [...prev, newItem]);
  };

  const handleNext = () => {
    // 미션: chat페이지로 이동 구현
    // 입력값이 있는 배열
    const filterDataList = ingredientList.filter(
      (item) => item.value.trim() !== "",
    );
    //console.log("🚀filterDataList:", filterDataList);
    if (filterDataList.length) {
      // 재료 입력값이 있는 경우
      sendIngredientList(ingredientList);
      history("/chat");
      return;
    }

    // 재료 입력값이 없는 경우
    alert("재료를 최소 1개이상 입력해주세요");
  };

  const handleRemove = (selectedId) => {
    // 사용자가 클릭한 요소를 제외한 모든 요소들의 배열
    const filterIngredientList = ingredientList.filter(
      (ingredient) => ingredient.id !== selectedId,
    );

    setIngredientList(filterIngredientList);
  };

  const handleChange = (data) => {
    // console.log("🚀 data:", data); // 대상 객체
    const changeList = ingredientList.map((ingredient) =>
      ingredient.id === data.id ? data : ingredient,
    );

    setIngredientList(changeList);
  };

  const handleSubmit = (event) => {
    // 폼 제출시 페이지 새로고침 막기
    event.preventDefault();
  };

  // state변경 일어나면 실행
  useEffect(() => {
    //console.log("ingredientList", ingredientList);
  }, [ingredientList]);

  // view
  return (
    <div className="w-full h-full px-6 pt-10 break-keep overflow-auto">
      <i className="w-168 h-168 rounded-full bg-chef-green-500 fixed -z-10 -left-60 -top-104"></i>
      {/* START:뒤로가기 버튼 */}
      <PrevButton />
      {/* END:뒤로가기 버튼 */}
      <div className="h-full flex flex-col">
        {/* TODO:Title 컴포넌트 */}
        <div className="px-2 pt-6">
          <h1 className="text-4.5xl font-black text-white">
            당신의 냉장고를 알려주세요
          </h1>
        </div>
        {/* // TODO:Title 컴포넌트 */}

        {/* START:form 영역 */}
        <div className="mt-20 overflow-auto">
          <form onSubmit={(event) => handleSubmit(event)}>
            {/* START:input 영역 */}
            <div>
              {ingredientList.map((item) => (
                <InfoInput
                  key={item.id}
                  content={item}
                  onRemove={handleRemove}
                  onChange={handleChange}
                />
              ))}
            </div>
            {/* END:input 영역 */}
          </form>
        </div>
        {/* END:form 영역 */}
        {/* START:Add button 영역 */}
        <AddButton onClick={addIngredient} />
        {/* END:Add button 영역 */}
        {/* START:Button 영역 */}
        <Button text="Next" color="bg-chef-green-500" onClick={handleNext} />
        {/* END:Button 영역 */}
      </div>
    </div>
  );
};

export default Info;
