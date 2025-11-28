import { hashMap } from './implementations/hash-map.js';

/**
 * 配列内で合計が目標値となる2つの数値を見つける関数
 *
 * @param nums - 整数の配列
 * @param target - 目標となる合計値
 * @returns 合計が目標値となる2つの数値のインデックス [i, j]（i \< j）
 * @throws 合計が目標値と一致するペアが見つからない場合はエラー
 *
 * @example
 * ```typescript
 * twoSum([2, 7, 11, 15], 9);  // nums[0] + nums[1] = 9 のため [0, 1] を返す
 * twoSum([3, 2, 4], 6);       // nums[1] + nums[2] = 6 のため [1, 2] を返す
 * twoSum([3, 3], 6);          // nums[0] + nums[1] = 6 のため [0, 1] を返す
 * ```
 *
 * @see {@link https://leetcode.com/problems/two-sum/ | LeetCode Problem}
 *
 * @public
 */
export function twoSum(nums: number[], target: number): number[] {
  return hashMap(nums, target);
}
