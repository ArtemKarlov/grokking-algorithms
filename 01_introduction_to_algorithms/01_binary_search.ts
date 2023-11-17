/**
 * Performs a binary search on a sorted array to find the index of a specified element.
 *
 * @param {number[]} array The sorted array in which the search is performed..
 * @param {number} searchElement The value to locate in the array.
 * @returns {number} The index of the searchElement in the array, or -1 if not found.
 *
 * @timecomplexity The time complexity of binary search is O(log n).
 */
function binarySearch<T extends number>(array: T[], searchElement: T): number {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const guess = array[mid];

    if (guess === searchElement) return mid;

    if (guess < searchElement) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

console.log(binarySearch([2, 3, 4, 5, 6, 7, 8, 10, 11, 12], 3)); // 1
console.log(binarySearch([2, 3, 4, 5, 6, 7, 8, 10, 11, 12], 11)); // 8
console.log(binarySearch([2, 3, 4, 5, 6, 7, 8, 10, 11, 12], 13)); // -1
console.log(binarySearch([2, 3, 4, 5, 6, 7, 8, 10, 11, 12], 1)); // -1
