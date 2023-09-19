import React, { useState } from "react";
import "./QuestionInput.css";
import { IoMdCreate } from "react-icons/io";

const QuestionInput = (props) => {
  const [questionValue, setQuestionValue] = useState("");

  const handleChange = (event) => {
    setQuestionValue(event.target.value);
  };

  const handleClick = () => {
    if (!questionValue) return;
    props.onSubmit(questionValue);
    setQuestionValue("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        value={questionValue}
        placeholder="Ex: Reduce Food Waste"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button type="submit" onClick={handleClick}>
        <IoMdCreate size={30} />
      </button>
    </div>
  );
};

export default QuestionInput;
