import React from "react";

type ArraySizeSlider = {
  arraySize: number;
  onChange: (e: any) => void;
  numberOfLines: number;
};

const ArraySizeSlider = ({
  arraySize,
  onChange,
  numberOfLines,
}: ArraySizeSlider) => {
  return (
    <div>
      <label htmlFor="arraySize" className="font-semibold text-sm mr-2">
        # of lines {numberOfLines}
      </label>
      <input
        className="h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        type="range"
        id="arraySize"
        min="50"
        max="240"
        step="1"
        value={arraySize}
        onChange={onChange}
      />
    </div>
  );
};

export default ArraySizeSlider;
