import { hashSet } from './implementations/hash-set';

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
