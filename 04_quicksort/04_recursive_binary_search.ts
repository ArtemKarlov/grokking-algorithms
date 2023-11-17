/**
 * Recursively performs binary search on a sorted array to find the index of a given element.
 *
 * @template T
 * @param {T[]} array - The sorted array to search.
 * @param {T} searchElement - The element to search for.
 * @param {number} [left=0] - The left boundary of the current search interval.
 * @param {number} [right=array.length - 1] - The right boundary of the current search interval.
 * @returns {number} - The index of the element in the array, or -1 if not found.
 *
 * @timecomplexity
 * The time complexity of this recursive binary search function is O(log n).
 */
function recursiveBinarySearch<T extends number>(
  array: T[],
  searchElement: T,
  left: number = 0,
  right: number = array.length - 1
): number {
  if (left > right) return -1;

  const mid = Math.floor((left + right) / 2);

  if (searchElement === array[mid]) return mid;

  if (searchElement < array[mid]) {
    return recursiveBinarySearch(array, searchElement, left, mid - 1);
  } else {
    return recursiveBinarySearch(array, searchElement, mid + 1, right);
  }
}

console.log(recursiveBinarySearch([2, 3, 4, 5, 6, 7, 8, 10, 11, 12], 3)); // 1
console.log(recursiveBinarySearch([2, 3, 4, 5, 6, 7, 8, 10, 11, 12], 11)); // 8
console.log(recursiveBinarySearch([2, 3, 4, 5, 6, 7, 8, 10, 11, 12], 1)); // -1
console.log(recursiveBinarySearch([2, 3, 4, 5, 6, 7, 8, 10, 11, 12], 13)); // -1
