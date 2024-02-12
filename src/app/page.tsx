"use client";
import ArraySizeSlider from "@/components/ArraySizeSlider";
import SortingLine from "@/components/SortingLine";
import { useEffect, useState } from "react";

export default function Home() {
  const [numberOfSortingLines, setNumberOfSortingLines] = useState<number>(50);
  const [sortingLines, setSortingLines] = useState<JSX.Element[]>([]);

  useEffect(() => {
    setSortingLines(
      Array.from({ length: numberOfSortingLines }, (_, index) => (
        <SortingLine
          key={index}
          totalLines={numberOfSortingLines}
          height={index * 3}
        />
      ))
    );
  }, [numberOfSortingLines]);

  return (
    <>
      <nav className="p-2">
        <ArraySizeSlider
          arraySize={numberOfSortingLines}
          onChange={(e) => setNumberOfSortingLines(e.target.value)}
        />
      </nav>
      <div className="flex justify-center items-center">
        <div className="w-1/2 flex justify-center">{sortingLines}</div>
      </div>
    </>
  );
}
