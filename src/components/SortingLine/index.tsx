import React from "react";
import classNames from "classnames";

type SortingLineProps = {
  height: number;
  totalLines: number;
};

const SortingLine = ({ height, totalLines }: SortingLineProps) => {
  const dynamicWidth = `${100 / totalLines}%`;
  return (
    <div
      className={classNames(`bg-blue-500`)}
      style={{
        height: `${height}px`,
        width: dynamicWidth,
        margin: "1px",
      }}
    ></div>
  );
};

export default SortingLine;
