/**
 * Quick sort.
 *
 * @param {number[]} array - The array to sort.
 * @returns {number[]} - Sorted array
 *
 * @timecomplexity - The time complexity is O(n log n).
 */
function quickSort(array: number[]): number[] {
  if (array.length < 2) return array;

  const pivot = array[0];
  const left = array.slice(1).filter((element) => element <= pivot);
  const right = array.slice(1).filter((element) => element > pivot);

  return quickSort(left).concat(pivot, quickSort(right));
}

console.log(quickSort([10, 5, 2, 3, 2, 1, 5, 7, 9, 0])); // [0, 1, 2, 2,  3, 5, 5, 7, 9, 10]
