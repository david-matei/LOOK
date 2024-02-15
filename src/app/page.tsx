"use client";
import SortingLine from "@/components/SortingLine";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { bubbleSort } from "../algorithms/bubblesort";
import { shuffleLines } from "@/functions/shuffleLines";
import { quicksort } from "@/algorithms/quicksort";
import { arraysAreEqual } from "@/functions/arraysAreEqual";

export default function Home() {
  const [numberOfSortingLines, setNumberOfSortingLines] = useState<number[]>(
    Array.from({ length: 400 }, (_, index) => index + 1)
  );
  const [bubbleSortRunning, setBubbleSortRunning] = useState(false);
  const [quickSortRunning, setQuickSortRunning] = useState(false);
  const [sorted, setSorted] = useState(true);

  useEffect(() => {
    const newArr = [...numberOfSortingLines].sort((a, b) => a - b);
    setSorted(arraysAreEqual(numberOfSortingLines, newArr));
  }, [numberOfSortingLines]);

  const startBubbleSort = () => {
    bubbleSort(
      [...numberOfSortingLines],
      setNumberOfSortingLines,
      setBubbleSortRunning
    );
  };
  const startQuickSort = async () => {
    try {
      setQuickSortRunning(true);
      await quicksort(numberOfSortingLines, setNumberOfSortingLines);
    } catch (error) {
      console.error("Error during sorting:", error);
    } finally {
      setQuickSortRunning(false);
    }
  };
  return (
    <>
      <nav className="p-2 flex justify-around cursor-pointer">
        <div
          className={classNames(
            bubbleSortRunning
              ? "font-semibold text-sm p-2 cursor-not-allowed"
              : "font-semibold text-sm p-2"
          )}
          onClick={() =>
            bubbleSortRunning
              ? () => undefined
              : shuffleLines(numberOfSortingLines, setNumberOfSortingLines)
          }
        >
          Randomize Lines
        </div>
        <button
          className="text-sm font-semibold"
          onClick={sorted ? undefined : startBubbleSort}
          disabled={bubbleSortRunning}
        >
          {bubbleSortRunning ? "Sorting..." : "Bubble Sort"}
        </button>
        <button
          className="text-sm font-semibold"
          onClick={sorted ? undefined : startQuickSort}
          disabled={quickSortRunning}
        >
          {quickSortRunning ? "Sorting..." : "Quick Sort"}
        </button>
      </nav>
      <div className="flex justify-center items-center">
        <div className="w-full flex justify-center items-baseline">
          {numberOfSortingLines.map((num) => (
            <SortingLine
              height={num * 1.8}
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
