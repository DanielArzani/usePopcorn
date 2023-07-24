/**
 * Calculate the average of an array of numbers.
 * @param arr - The array of numbers.
 * @returns The average value of the numbers in the array.
 */
export const average = (arr: (number | undefined)[]): number => {
  // Filter out any undefined elements from the array and assert it as an array of numbers
  const filteredArr = arr.filter(
    (value): value is number => typeof value === 'number'
  );
  // Calculate the average of the filtered array
  return filteredArr.reduce((acc, cur) => acc + cur, 0) / filteredArr.length;
};
