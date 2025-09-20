/**
 * Contains Duplicate - Sorted Implementation
 *
 * Sorts the array first, then checks adjacent elements for duplicates.
 * Time-space trade-off favoring space over the hash set approach.
 *
 * @remarks
 * Algorithm:
 * 1. Sort the array in ascending order
 * 2. Iterate through sorted array
 * 3. Compare each element with its next neighbor
 * 4. Return true if adjacent elements are equal
 *
 * Time Complexity: O(n log n)
 * - Sorting: O(n log n) - uses TimSort in V8 engine
 * - Single pass through sorted array: O(n)
 * - Total: O(n log n) + O(n) = O(n log n)
 * - Dominated by sorting complexity
 *
 * Space Complexity: O(1)
 * - In-place sorting (mutates input array)
 * - No additional data structures
 * - Only constant variables: i, current, next
 * - Note: Sorting algorithm may use O(log n) stack space internally
 *
 * @internal
 */
export function sorted(nums: number[]): boolean {
  // 配列をソートして隣接要素を比較 / Sort array and compare adjacent elements
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 1; i++) {
    const current = nums[i];
    const next = nums[i + 1];

    // undefined チェック / Check for undefined
    if (current === undefined || next === undefined) continue;

    // 隣接要素が同じなら重複 / If adjacent elements are equal, duplicate exists
    if (current === next) {
      return true;
    }
  }

  // 全て異なる値 / All values are distinct
  return false;
}
