export const bubbleSort = (array: []) => {
  let temp;
  let sorted: boolean;
  for (let i = 0; i < array.length; i++) {
    sorted = true;
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        sorted = false;
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
    if (sorted === true) break;
  }
};
