/**
 * Finds the index of the minimum element in an array of numbers.
 *
 * @param {number[]} array - The array of numbers in which to find the minimum element.
 * @returns {number} - The index of the minimum element in the array.
 */
function findIndexOfMin(array: number[]): number {
  let min = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[min]) {
      min = i;
    }
  }
  return min;
}

/**
 * Sorts an array of numbers using the Selection Sort algorithm.
 * Example from the book
 *
 * @param {number[]} array - The array of numbers to be sorted.
 * @returns {number[]} - A new array containing the sorted numbers.
 *
 * @timecomplexity The time complexity of the selection sort algorithm is O(n^2).
 */
function selectionSortBook(array: number[]): number[] {
  const copy = [...array];
  const newArray: number[] = [];

  for (let i = 0; i < array.length; i++) {
    const indexOfMin = findIndexOfMin(copy);
    newArray.push(copy.splice(indexOfMin, 1)[0]);
  }

  return newArray;
}

const selectionSortTestArrayBook = [1, 3, 0, 1, 9, 4, 8, 7, 5, 2];

console.log(selectionSortBook(selectionSortTestArrayBook)); // [0, 1, 1, 2, 3, 4, 5, 7, 8, 9]
