/**
 * Sorts an array of numbers using the Selection Sort algorithm.
 *
 * @param {number[]} array The array of numbers to be sorted.
 * @returns {number[]} A new array containing the sorted numbers.
 *
 * @timecomplexity The time complexity of the selection sort algorithm is O(n^2).
 */
function selectionSort(array: number[]): number[] {
  const copy = [...array];

  for (let i = 0; i < copy.length - 1; i++) {
    let min = i;

    for (let j = i + 1; j < copy.length; j++) {
      if (copy[j] < copy[min]) {
        min = j;
      }
    }

    if (min !== i) {
      [copy[i], copy[min]] = [copy[min], copy[i]];
    }
  }

  return copy;
}

const selectionSortTestArray = [1, 3, 0, 1, 9, 4, 8, 7, 5, 2];

console.log(selectionSort(selectionSortTestArray)); // [0, 1, 1, 2, 3, 4, 5, 7, 8, 9]
