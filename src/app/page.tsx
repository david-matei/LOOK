"use client";
import SortingLine from "@/components/SortingLine";
import { useEffect, useState } from "react";

export default function Home() {
  const [numberOfSortingLines, setNumberOfSortingLines] = useState<number[]>(
    Array.from({ length: 240 }, (_, index) => index + 1)
  );

  const shuffleLines = () => {
    const array = Array.from({ length: 240 }, (_, index) => index + 1);
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    setNumberOfSortingLines(array);
  };

  const bubbleSort = async () => {
    let linesCopy = [...numberOfSortingLines];
    let temp;
    for (let i = 0; i < linesCopy.length; i++) {
      for (let j = 0; j < linesCopy.length - i - 1; j++) {
        if (linesCopy[j] > linesCopy[j + 1]) {
          temp = linesCopy[j];
          linesCopy[j] = linesCopy[j + 1];
          linesCopy[j + 1] = temp;
          setNumberOfSortingLines([...linesCopy]);
          await new Promise((resolve) => setTimeout(resolve, 1));
        }
      }
    }
  };

  return (
    <>
      <nav className="p-2 flex justify-around cursor-pointer">
        <div className="font-semibold text-sm p-2" onClick={shuffleLines}>
          Randomize Lines
        </div>
        <button onClick={() => bubbleSort()}>Bubble Sort</button>
      </nav>
      <div className="flex justify-center items-center">
        <div className="w-1/2 flex justify-center">
          {numberOfSortingLines.map((num, idx) => (
            <SortingLine
              height={(num + 1) * 3}
              totalLines={numberOfSortingLines.length}
              key={Math.random()}
            />
          ))}
        </div>
      </div>
    </>
  );
}
