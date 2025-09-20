/**
 * Two Sum - Brute Force Implementation
 *
 * A straightforward approach that checks all possible pairs.
 * Easy to understand but inefficient for large datasets.
 *
 * @remarks
 * Algorithm:
 * 1. Iterate through each element with outer loop
 * 2. For each element, check all subsequent elements
 * 3. Return indices when sum equals target
 *
 * Time Complexity: O(n²)
 * - Outer loop: runs n-1 times
 * - Inner loop: runs (n-1) + (n-2) + ... + 1 times
 * - Total iterations: n(n-1)/2 → O(n²)
 * - Each iteration does constant work: one addition and comparison
 *
 * Space Complexity: O(1)
 * - No additional data structures used
 * - Only constant variables i, j, num1, num2
 * - Memory usage remains constant regardless of input size
 *
 * @internal
 */
export function bruteForce(nums: number[], target: number): number[] {
  // 二重ループで全ての組み合わせを確認 / Check all combinations using nested loops
  for (let i = 0; i < nums.length - 1; i++) {
    const num1 = nums[i];
    if (num1 === undefined) continue;

    for (let j = i + 1; j < nums.length; j++) {
      const num2 = nums[j];
      if (num2 === undefined) continue;

      if (num1 + num2 === target) {
        return [i, j];
      }
    }
  }

  throw new Error(`No two sum solution found for target: ${target}`);
}
