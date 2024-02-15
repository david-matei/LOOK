"use client";
import SortingLine from "@/components/SortingLine";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { bubbleSort } from "./algorithms/bubblesort";

export default function Home() {
  const [numberOfSortingLines, setNumberOfSortingLines] = useState<number[]>(
    Array.from({ length: 240 }, (_, index) => index + 1)
  );
  const [algorithmRunning, setAlgorithmRunning] = useState(false);

  const shuffleLines = () => {
    const array = [...numberOfSortingLines];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    setNumberOfSortingLines(array);
  };
  const startBubbleSort = () => {
    bubbleSort(
      [...numberOfSortingLines],
      setNumberOfSortingLines,
      setAlgorithmRunning
    );
  };
  return (
    <>
      <nav className="p-2 flex justify-around cursor-pointer">
        <div
          className={classNames(
            algorithmRunning
              ? "font-semibold text-sm p-2 cursor-not-allowed"
              : "font-semibold text-sm p-2"
          )}
          onClick={algorithmRunning ? () => undefined : shuffleLines}
        >
          Randomize Lines
        </div>
        <button onClick={startBubbleSort} disabled={algorithmRunning}>
          {algorithmRunning ? "Sorting..." : "Bubble Sort"}
        </button>
      </nav>
      <div className="flex justify-center items-center">
        <div className="w-1/2 flex justify-center">
          {numberOfSortingLines.map((num, idx) => (
            <SortingLine
              height={(num + 1) * 3}
              totalLines={numberOfSortingLines.length}
              key={Math.random()}
              // color={}
            />
          ))}
        </div>
      </div>
    </>
  );
}
