/**
 * Finds common items between two arrays.
 *
 * 
 * SOLUTION
 * 
 * 1. The section of code that contribute to the time complexity is part where
 * we are checking for every element of the first array including in the second array.
 * It is handling by comparing each the first array element with each the second array
 * element. And so the time complexity is O(n^2).
 *    To the space complexity contribute creating of set of the common item, which
 * size in the worst case could be equal to size of the first or of the second array:.
 * So, the space complexity is O(n).
 *  
 * 2. Time Complexity:  O(n^2)
 *    Space Complexity: O(n)
 * 
 * 3. To optimize time complexity we could convert one of the arrays in a set. Checking
 * set includes an particular element time complexity wil be O(1), so checking for all
 * list elements will be O(n). Converting array to set operation also will have the time
 * complexity O(n). So the final time complexity after refactoring will be O(n).
 * 
 * 4. Optimal Time Complexity: O(n)
 *
 * @param {Array} firstArray - First array to compare
 * @param {Array} secondArray - Second array to compare
 * @returns {Array} Array containing unique common items
 */
export const findCommonItems = (firstArray, secondArray) => {
  const firstArrayElementsSet = new Set(firstArray);
  const resultSet = new Set();
  
  for (const element of secondArray) {
    if (firstArrayElementsSet.has(element)) {
      resultSet.add(element);
    }
  }

  return [...resultSet];
};
