/**
 * Recursively counts the number of elements in an array.
 *
 * @template T
 * @param {T[]} array - The array of elements to count.
 * @returns {number} - The total number of elements in the array.
 *
 * @timecomplexity - The time complexity of this recursive count function is O(n).
 */
function recursiveCount<T>(array: T[]): number {
  if (array.length === 1) return 1;

  return 1 + recursiveCount(array.slice(1));
}

console.log(recursiveCount([1, 2, 3, 4, 5, 6]));
