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
