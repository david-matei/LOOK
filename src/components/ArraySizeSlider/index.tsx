import React from "react";

type ArraySizeSlider = {
  arraySize: number;
  onChange: (e: any) => void;
};

const ArraySizeSlider = ({ arraySize, onChange }: ArraySizeSlider) => {
  return (
    <div>
      <label htmlFor="arraySize" className="font-semibold text-sm mr-2">
        Change Array Size:{" "}
      </label>
      <input
        className="h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        type="range"
        id="arraySize"
        min="50"
        max="200"
        step="1"
        value={arraySize}
        onChange={onChange}
      />
    </div>
  );
};

export default ArraySizeSlider;
