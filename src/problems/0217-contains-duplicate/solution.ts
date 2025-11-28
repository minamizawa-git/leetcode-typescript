import { hashSet } from './implementations/hash-set.js';

/**
 * 配列内に重複する値が存在するか判定する関数
 *
 * @param nums - 重複をチェックする整数の配列
 * @returns 少なくとも1つの値が2回以上出現する場合はtrue、全ての値が異なる場合はfalse
 *
 * @example
 * ```typescript
 * containsDuplicate([1, 2, 3, 1]);           // 1が2回出現するためtrueを返す
 * containsDuplicate([1, 2, 3, 4]);           // 全て異なる値のためfalseを返す
 * containsDuplicate([1, 1, 1, 3, 3, 4, 3]);  // 複数の重複が存在するためtrueを返す
 * ```
 *
 * @see {@link https://leetcode.com/problems/contains-duplicate/ | LeetCode Problem}
 *
 * @public
 */
export function containsDuplicate(nums: number[]): boolean {
  return hashSet(nums);
}
