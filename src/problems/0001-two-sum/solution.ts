import { hashMap } from './implementations/hash-map';

/**
 * Finds two numbers in an array that sum to a target value
 *
 * @param nums - Array of integers
 * @param target - Target sum to find
 * @returns Indices of the two numbers that add up to target [i, j] where i < j
 * @throws Error if no valid pair exists (though one valid answer is guaranteed by constraints)
 *
 * @example
 * ```typescript
 * twoSum([2, 7, 11, 15], 9);  // returns [0, 1] because nums[0] + nums[1] = 9
 * twoSum([3, 2, 4], 6);       // returns [1, 2] because nums[1] + nums[2] = 6
 * twoSum([3, 3], 6);          // returns [0, 1] because nums[0] + nums[1] = 6
 * ```
 *
 * @see {@link https://leetcode.com/problems/two-sum/ | LeetCode Problem}
 *
 * @public
 */
export const twoSum = hashMap;
