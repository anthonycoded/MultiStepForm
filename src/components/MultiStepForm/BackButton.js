import React from "react";

const BackButton = ({ prevStep }) => {
  return (
    <button
      onClick={() => prevStep()}
      className="rounded-full bg-yellow-300 h-8 w-20"
    >
      Back
    </button>
  );
};

export default BackButton;
