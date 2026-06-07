/**
 * Find if there is a pair of numbers that sum to a given target value.
 *
 * 
 * SOLUTION
 * 
 * 1. There are nested loops in the function so, the time complexity is O(n^2).
 * The function doesn't create new variables so, the space complexity is O(1).
 *
 * 2. Time Complexity:  O(n^2)
 *    Space Complexity: O(1)
 * 
 * 3. To optimize time complexity we could iterate over the array and for an each
 * array item remember the complement to the target sum in the set. And every step
 * we will check if is a current element a remembered complement for a checked one?
 * Add to set and check including operations have the time complexity O(1) so the 
 * overall time complexity of the function will bo O(n). But the space complexity
 * will increase to O(n) due using an auxiliary set. 
 * 
 * 4. Optimal Time Complexity: O(n)
 *
 * @param {Array<number>} numbers - Array of numbers to search through
 * @param {number} target - Target sum to find
 * @returns {boolean} True if pair exists, false otherwise
 */
export function hasPairWithSum(numbers, target) {
  const complementSet = new Set();
  for (const number of numbers) {
    complementSet.add(number)
    if (complementSet.has(target - number)) {
      return true;
    }
  }
  return false;
}
