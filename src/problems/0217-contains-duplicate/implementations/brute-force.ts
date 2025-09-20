/**
 * Contains Duplicate - Brute Force Implementation
 *
 * A straightforward approach that compares every pair of elements.
 * Simple to understand but inefficient for large arrays.
 *
 * @remarks
 * Algorithm:
 * 1. Iterate through each element with outer loop
 * 2. For each element, check all subsequent elements
 * 3. Return true immediately if duplicate found
 * 4. Return false if no duplicates after checking all pairs
 *
 * Time Complexity: O(n²)
 * - Outer loop: runs n-1 times
 * - Inner loop: runs (n-1) + (n-2) + ... + 1 times
 * - Total iterations: n(n-1)/2 → O(n²)
 * - Each iteration does constant work: one equality comparison
 *
 * Space Complexity: O(1)
 * - No additional data structures used
 * - Only constant variables: i, j, current, compare
 * - Memory usage remains constant regardless of input size
 *
 * @internal
 */
export function bruteForce(nums: number[]): boolean {
  // 二重ループで全ての組み合わせを確認 / Check all combinations using nested loops
  for (let i = 0; i < nums.length - 1; i++) {
    const current = nums[i];
    if (current === undefined) continue;

    for (let j = i + 1; j < nums.length; j++) {
      const compare = nums[j];
      if (compare === undefined) continue;

      // 重複を発見したらすぐに true を返す / Return true immediately when duplicate found
      if (current === compare) {
        return true;
      }
    }
  }

  // 重複が見つからなかった場合 / No duplicates found
  return false;
}
