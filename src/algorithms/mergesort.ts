export const mergeSort = async (lineArr: number[], setArray: React.Dispatch<React.SetStateAction<number[]>>): Promise<number[]> => {
    if (lineArr.length <= 1) return lineArr;

    const middle = Math.floor(lineArr.length / 2)
    const leftArr = lineArr.slice(0, middle)
    const rightArr = lineArr.slice(middle)
    const merged = await merge(await mergeSort(leftArr, setArray), await mergeSort(rightArr, setArray), setArray);
    return merged
}

const merge = async (leftArr: number[], rightArr: number[], setArray: React.Dispatch<React.SetStateAction<number[]>>) => {
    const combinedArr = [...leftArr, ...rightArr];
    const sortedArr: number[] = [];

    while (leftArr.length && rightArr.length) {
        const leftValue = leftArr[0];
        const rightValue = rightArr[0];

        if (leftValue <= rightValue) {
            sortedArr.push(leftValue);
            leftArr.shift();
        } else {
            sortedArr.push(rightValue);
            rightArr.shift();
        }

        setArray([...sortedArr, ...leftArr, ...rightArr]);

        await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    while (leftArr.length) {
        sortedArr.push(leftArr.shift()!);
        setArray([...sortedArr, ...leftArr]);

        await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    while (rightArr.length) {
        sortedArr.push(rightArr.shift()!);
        setArray([...sortedArr, ...rightArr]);

        await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    return sortedArr;
};
