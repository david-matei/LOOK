// at the same time that I did this project I also learned the algorithms 😂

export const quicksort = async (
  array: number[],
  setArray: React.Dispatch<React.SetStateAction<number[]>>
): Promise<void> => {
  const stack = [{ left: 0, right: array.length - 1 }];

  while (stack.length > 0) {
    const { left, right } = stack.pop()!;

    if (left < right) {
      const pivotIndex = await partition(array, left, right, setArray);
      stack.push({ left, right: pivotIndex - 1 });
      stack.push({ left: pivotIndex + 1, right });
    }
  }
};

const partition = async (
  array: number[],
  low: number,
  high: number,
  setArray: React.Dispatch<React.SetStateAction<number[]>>
): Promise<number> => {
  const pivot = array[high];
  let i = low - 1;

  for (let j = low; j <= high - 1; j++) {
    if (array[j] < pivot) {
      i++;
      [array[i], array[j]] = [array[j], array[i]];
      setArray([...array]);
      await new Promise((resolve) => setTimeout(resolve, 1));
    }
  }

  [array[i + 1], array[high]] = [array[high], array[i + 1]];
  setArray([...array]);
  await new Promise((resolve) => setTimeout(resolve, 1));

  return i + 1;
};
