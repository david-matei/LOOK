export const bubbleSort = async (
  array: number[],
  setArray: React.Dispatch<React.SetStateAction<number[]>>,
  setAlgorithmRunning: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    setAlgorithmRunning(true);
    let linesCopy = [...array];
    let temp: number;
    let completed: boolean;

    for (let i = 0; i < linesCopy.length; i++) {
      completed = true;
      for (let j = 0; j < linesCopy.length - i - 1; j++) {
        if (linesCopy[j] > linesCopy[j + 1]) {
          temp = linesCopy[j];
          linesCopy[j] = linesCopy[j + 1];
          linesCopy[j + 1] = temp;
          setArray([...linesCopy]);
          completed = false;
          await new Promise((resolve) => setTimeout(resolve, 1));
        }
      }

      if (completed) break;
    }
  } catch (error) {
    console.log(error);
  } finally {
    setAlgorithmRunning(false);
  }
};
