/**
 * This function uses recursion to sum up the elements of the array.
 *
 * @param {number[]} array - The array of numbers to sum.
 * @returns {number} - The sum of all elements in the array.
 *
 * @timecomplexity - The time complexity of this recursive sum function is O(n).
 */
function recursiveSum(array: number[]): number {
  if (array.length === 1) return array[0];

  return array[0] + recursiveSum(array.slice(1));
}

console.log(recursiveSum([1, 2, 3, 4, 5])); //15
