import { twoSum } from './solution';

describe('Two Sum', () => {
  // LeetCode Constraints
  // 2 <= nums.length <= 10^4
  // -10^9 <= nums[i] <= 10^9
  // -10^9 <= target <= 10^9
  // Only one valid answer exists.
  const CONSTRAINTS = {
    MAX_ARRAY_LENGTH: 10 ** 4,
    MIN_ARRAY_LENGTH: 2,
    MAX_VALUE: 10 ** 9,
    MIN_VALUE: -(10 ** 9),
  } as const;
  describe('Basic functionality', () => {
    it('should find two numbers that sum to target', () => {
      expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    });

    it('should work when target elements are not adjacent', () => {
      expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
    });

    it('should work with duplicate values', () => {
      expect(twoSum([3, 3], 6)).toEqual([0, 1]);
    });
  });

  describe('Special values', () => {
    it('should handle zero values correctly', () => {
      // Zero as target: non-zero values summing to zero
      expect(twoSum([-3, 0, 3, 1], 0)).toEqual([0, 2]); // -3 + 3 = 0

      // Zero in array used for solution (non-zero target)
      expect(twoSum([0, 4, 3, 2], 4)).toEqual([0, 1]); // 0 + 4 = 4
    });

    it('should work with negative numbers', () => {
      expect(twoSum([-1, -2, -3, -4, -5], -8)).toEqual([2, 4]);
    });

    it('should handle mixed positive and negative numbers', () => {
      expect(twoSum([-10, -1, 2, 7, 15], 5)).toEqual([0, 4]);
    });
  });

  describe('Performance and scale', () => {
    it('should work with minimum array length', () => {
      const nums = Array.from(
        { length: CONSTRAINTS.MIN_ARRAY_LENGTH },
        (_, i) => i + 1,
      );
      expect(twoSum(nums, 3)).toEqual([0, 1]);
    });

    it('should work efficiently with maximum array length', () => {
      const nums = Array.from(
        { length: CONSTRAINTS.MAX_ARRAY_LENGTH },
        (_, i) => i,
      );
      nums[5000] = 100000;
      nums[7500] = 200000;
      expect(twoSum(nums, 300000)).toEqual([5000, 7500]);
    });

    it('should handle worst-case scenario (solution at end)', () => {
      const nums = Array.from(
        { length: CONSTRAINTS.MAX_ARRAY_LENGTH },
        (_, i) => i,
      );
      nums[9998] = 100000;
      nums[9999] = 200000;
      expect(twoSum(nums, 300000)).toEqual([9998, 9999]);
    });
  });

  describe('Boundary values (10^9 constraints)', () => {
    const { MAX_VALUE, MIN_VALUE } = CONSTRAINTS;

    describe('Array values at boundaries', () => {
      it('should work with maximum positive values in array', () => {
        // Test with actual MAX_VALUE in the array
        expect(twoSum([MAX_VALUE, 0, 1], MAX_VALUE)).toEqual([0, 1]);
      });

      it('should work with minimum negative values in array', () => {
        // Test with actual MIN_VALUE in the array
        expect(twoSum([MIN_VALUE, 0, -1], MIN_VALUE)).toEqual([0, 1]);
      });

      it('should handle mix of extreme positive and negative values', () => {
        // MAX_VALUE and MIN_VALUE in same array
        expect(twoSum([MAX_VALUE, MIN_VALUE, 0], 0)).toEqual([0, 1]);
      });
    });

    describe('Array values near boundaries', () => {
      it('should handle values just below MAX_VALUE', () => {
        expect(twoSum([MAX_VALUE - 1, 1, 0], MAX_VALUE)).toEqual([0, 1]);
      });

      it('should handle values just above MIN_VALUE', () => {
        expect(twoSum([MIN_VALUE + 1, -1, 0], MIN_VALUE)).toEqual([0, 1]);
      });
    });

    describe('Target at boundaries', () => {
      it('should work with maximum positive target', () => {
        // Target is MAX_VALUE
        const firstValue = Math.floor(MAX_VALUE / 2);
        const complement = MAX_VALUE - firstValue;
        expect(twoSum([firstValue, complement, 1], MAX_VALUE)).toEqual([0, 1]);
      });

      it('should work with minimum negative target', () => {
        // Target is MIN_VALUE
        const firstValue = Math.ceil(MIN_VALUE / 2);
        const complement = MIN_VALUE - firstValue;
        expect(twoSum([firstValue, complement, -1], MIN_VALUE)).toEqual([0, 1]);
      });
    });

    describe('Target near boundaries', () => {
      it('should work with target near MAX_VALUE', () => {
        const target = MAX_VALUE - 1;
        const firstValue = Math.floor(target / 2);
        const complement = target - firstValue;
        expect(twoSum([firstValue, complement, 0], target)).toEqual([
          0, 1,
        ]);
      });

      it('should work with target near MIN_VALUE', () => {
        const target = MIN_VALUE + 1;
        const firstValue = Math.ceil(target / 2);
        const complement = target - firstValue;
        expect(twoSum([firstValue, complement, 0], target)).toEqual([
          0, 1,
        ]);
      });
    });
  });
});
