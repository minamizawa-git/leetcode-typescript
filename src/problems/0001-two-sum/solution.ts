/**
 * Two Sum - Brute Force Implementation
 *
 * A straightforward approach that checks all possible pairs.
 * Easy to understand but inefficient for large datasets.
 *
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

/**
 * Two Sum - Hash Map Implementation (Optimal)
 *
 * An efficient single-pass solution using hash map for complement lookup.
 * Trades space for time complexity improvement.
 *
 * Algorithm:
 * 1. For each element, calculate complement (target - current)
 * 2. Check if complement exists in hash map
 * 3. If not found, store current element and continue
 *
 * Time Complexity: O(n)
 * - Single loop: runs n times
 * - Map.get() operation: O(1) average case - hash table property
 * - Map.set() operation: O(1) average case - hash table property
 * - Total: n × O(1) = O(n)
 *
 * Space Complexity: O(n)
 * - Map stores visited elements with their indices
 * - Worst case (no early return): stores n-1 elements
 * - Memory usage grows linearly with input size
 * - Additional variables (num, complement, complementIndex): O(1)
 *
 * @internal
 */
export function hashMap(nums: number[], target: number): number[] {
  // ハッシュマップで値とインデックスを記録 / Record values and indices using a hash map
  const seen = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num === undefined) continue;

    const complement = target - num;
    const complementIndex = seen.get(complement);

    if (complementIndex !== undefined) {
      return [complementIndex, i];
    }

    seen.set(num, i);
  }

  throw new Error(`No two sum solution found for target: ${target}`);
}

/**
 * Finds two numbers in an array that sum to a target value
 *
 * @param {number[]} nums - Array of integers
 * @param {number} target - Target sum to find
 * @returns {number[]} Indices of the two numbers that add up to target [i, j] where i < j
 * @throws {Error} If no valid pair exists (though one valid answer is guaranteed by constraints)
 *
 * @example
 * ```typescript
 * twoSum([2, 7, 11, 15], 9);  // returns [0, 1] because nums[0] + nums[1] = 9
 * twoSum([3, 2, 4], 6);       // returns [1, 2] because nums[1] + nums[2] = 6
 * twoSum([3, 3], 6);          // returns [0, 1] because nums[0] + nums[1] = 6
 * ```
 *
 * @see {@link https://leetcode.com/problems/two-sum/} - LeetCode Problem
 */
export const twoSum = hashMap;
