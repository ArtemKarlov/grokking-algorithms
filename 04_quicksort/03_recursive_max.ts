/**
 * Recursively finds the maximum value in an array of numbers.
 *
 * @param {number[]} array - The array of numbers to find the maximum value.
 * @returns {number | null} - The maximum value in the array, or null if the array is empty.
 *
 * @timecomplexity - The time complexity of this recursive max function is O(n).
 */
function recursiveMax(array: number[]): number | null {
  if (array.length === 0) return null;
  if (array.length === 1) return array[0];

  return Math.max(...[array[0], recursiveMax(array.slice(1)) ?? array[0]]);
}

console.log(recursiveMax([])); //null
console.log(recursiveMax([5])); //5
console.log(recursiveMax([5, 10, 6, 3, 1, 4])); //10
console.log(recursiveMax([5, 10, 6, 3, 10, 4])); //10
