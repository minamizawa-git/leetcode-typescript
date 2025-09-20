/**
 * Two Sum - Hash Map Implementation (Optimal)
 *
 * An efficient single-pass solution using hash map for complement lookup.
 * Trades space for time complexity improvement.
 *
 * @remarks
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
