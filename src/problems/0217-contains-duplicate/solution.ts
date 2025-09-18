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

/**
 * Contains Duplicate - Hash Set Implementation (Optimal)
 *
 * An efficient single-pass solution using Set for duplicate detection.
 * Trades space for time complexity improvement.
 *
 * @remarks
 * Algorithm:
 * 1. Create an empty Set to track seen values
 * 2. For each element, check if it exists in the Set
 * 3. If exists, duplicate found - return true
 * 4. Otherwise, add element to Set and continue
 *
 * Time Complexity: O(n)
 * - Single loop: runs n times
 * - Set.has() operation: O(1) average case - hash table property
 * - Set.add() operation: O(1) average case - hash table property
 * - Total: n × O(1) = O(n)
 *
 * Space Complexity: O(n)
 * - Set stores unique elements encountered
 * - Worst case (all unique): stores n elements
 * - Memory usage grows linearly with input size
 * - Additional variable (num): O(1)
 *
 * @internal
 */
export function hashSet(nums: number[]): boolean {
  // ハッシュセットで見た値を記録 / Record seen values using a hash set
  const seen = new Set<number>();

  for (const num of nums) {
    // 既に見た値なら重複 / If value already seen, it's a duplicate
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }

  // 全て異なる値 / All values are distinct
  return false;
}

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

/**
 * Determines if an array contains any duplicate values
 *
 * @param nums - Array of integers to check for duplicates
 * @returns true if any value appears at least twice, false if all values are distinct
 *
 * @example
 * ```typescript
 * containsDuplicate([1, 2, 3, 1]);           // returns true (1 appears twice)
 * containsDuplicate([1, 2, 3, 4]);           // returns false (all unique)
 * containsDuplicate([1, 1, 1, 3, 3, 4, 3]);  // returns true (multiple duplicates)
 * ```
 *
 * @see {@link https://leetcode.com/problems/contains-duplicate/ | LeetCode Problem}
 *
 * @public
 */
export const containsDuplicate = hashSet;
