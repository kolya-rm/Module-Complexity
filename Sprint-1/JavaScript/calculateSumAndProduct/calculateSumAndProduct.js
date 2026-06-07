/**
 * Calculate the sum and product of integers in a list
 *
 * Note: the "sum" is every number added together
 * and the "product" is every number multiplied together
 * so for example: [2, 3, 5] would return
 * {
 *   "sum": 10, // 2 + 3 + 5
 *   "product": 30 // 2 * 3 * 5
 * }
 *
 * 
 * SOLUTION
 * 
 * 1. The sections of code that contribute to the time complexity are 2 for loops
 * iterating through the input number arrays. To the space complexity contribute 2
 * variables that accumulate sum and product values.
 * 
 * 2. Time Complexity:  O(n)
 *    Space Complexity: O(1)
 * 
 * 3. We can't reduce the space complexity because it is minimal now O(1). We can
 * calculate both sum and product in the 1 loop and reduce executing time twice, but
 * time complexity will still remain O(n).
 * 
 * 4.Optimal Time Complexity: O(n)
 *
 * @param {Array<number>} numbers - Numbers to process
 * @returns {Object} Object containing running total and product
 */
export function calculateSumAndProduct(numbers) {
  let sum = 0;
  let product = 1;
  for (const num of numbers) {
    sum += num;
    product *= num;
  }

  return {
    sum: sum,
    product: product,
  };
}
