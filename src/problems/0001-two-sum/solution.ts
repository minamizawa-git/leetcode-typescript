/**
 * Two Sum - Brute Force Solution
 *
 * Time Complexity: O(n²) - nested loops through array
 * Space Complexity: O(1) - only uses constant extra space
 *
 * @param nums - Array of integers
 * @param target - Target sum
 * @returns Indices of two numbers that add up to target
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
 * Two Sum - Hash Map Solution (Optimal)
 *
 * Time Complexity: O(n) - single pass through array
 * Space Complexity: O(n) - hash map stores up to n elements
 *
 * @param nums - Array of integers
 * @param target - Target sum
 * @returns Indices of two numbers that add up to target
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

// デフォルトエクスポートは最適解 / Default export is the optimal solution
export const twoSum = hashMap;
