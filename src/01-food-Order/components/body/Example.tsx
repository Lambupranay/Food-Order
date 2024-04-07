import React, { useState } from "react";

const Example = () => {
  const [value, setValue] = useState(0);

  const handleAdd = () => {
    setValue(value + 1);
  };
  const handleSub = () => {
    setValue(value - 1);
  };
  const handleMul = () => {
    setValue(value * 2);
  };
  const handleDiv = () => {
    setValue(value / 2);
  };
  return (
    <>
      <div>Value = {value}</div>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSub}>Sub</button>
      <button onClick={handleMul}>Multi</button>
      <button onClick={handleDiv}>div</button>
    </>
  );
};

export default Example;
