import React from "react";
import classNames from "classnames";
type SortingLineProps = {
  height: number;
  totalLines: number;
  color?: boolean;
};

const SortingLine = ({ height, totalLines, color }: SortingLineProps) => {
  const dynamicWidth = `${100 / totalLines}%`;
  return (
    <div
      className={classNames(color ? `bg-purple-600` : `bg-blue-500`)}
      style={{
        height: `${height}px`,
        width: dynamicWidth,
        margin: "1px",
      }}
    ></div>
  );
};

export default SortingLine;
