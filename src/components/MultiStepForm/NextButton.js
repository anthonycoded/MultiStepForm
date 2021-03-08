import React from "react";

const NextButton = ({ nextStep }) => {
  return (
    <button
      onClick={() => nextStep()}
      className="rounded-full bg-blue-500 h-8 w-20"
    >
      Next
    </button>
  );
};

export default NextButton;
