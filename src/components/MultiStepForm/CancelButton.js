import React from "react";

const CancelButton = ({ setOpen }) => {
  return (
    <button onClick={() => setOpen(false)} className="h-8 w-20">
      cancel
    </button>
  );
};

export default CancelButton;
