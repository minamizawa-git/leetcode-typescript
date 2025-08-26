import { containsDuplicate } from './solution';

describe('Contains Duplicate', () => {
  // LeetCode Constraints
  // 1 <= nums.length <= 10^5
  // -10^9 <= nums[i] <= 10^9
  // Each unique value can appear 1 to n times
  // Input array order is not significant
  const CONSTRAINTS = {
    MIN_ARRAY_LENGTH: 1,
    MAX_ARRAY_LENGTH: 10 ** 5,
    MIN_VALUE: -(10 ** 9),
    MAX_VALUE: 10 ** 9,
  } as const;

  describe('Basic Functionality', () => {
    test('Example 1: [1,2,3,1] → true (duplicate 1)', () => {
      expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
    });

    test('Example 2: [1,2,3,4] → false (all unique)', () => {
      expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
    });

    test('Example 3: [1,1,1,3,3,4,3,2,4,2] → true (multiple duplicates)', () => {
      expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
    });
  });

  describe('Array Size Edge Cases', () => {
    test('Single element - no duplicates possible by definition', () => {
      const anyValue = 42;
      expect(containsDuplicate([anyValue])).toBe(false);
    });

    test('Two elements - minimum for duplicate possibility', () => {
      expect(containsDuplicate([1, 2])).toBe(false);
      expect(containsDuplicate([1, 1])).toBe(true);
    });

    test('Three elements - duplicate detection patterns', () => {
      expect(containsDuplicate([1, 1, 2])).toBe(true);
      expect(containsDuplicate([1, 2, 1])).toBe(true);
      expect(containsDuplicate([1, 2, 3])).toBe(false);
    });
  });

  describe('Special Values', () => {
    test('Zero value handling', () => {
      expect(containsDuplicate([0, 0])).toBe(true);
      expect(containsDuplicate([0, 1])).toBe(false);
    });

    test('Negative numbers handling', () => {
      expect(containsDuplicate([-1, 0, -1])).toBe(true);
      expect(containsDuplicate([-1, 0, 1])).toBe(false);
    });
  });

  describe('Special Values (JavaScript-specific edge cases)', () => {
    test('Positive and negative zero are treated as duplicates', () => {
      expect(containsDuplicate([0, -0])).toBe(true);
    });

    test('Multiple negative zeros', () => {
      expect(containsDuplicate([-0, -0])).toBe(true);
    });

    // NaNテストは制約外の挙動を文書化するためのもの / NaN tests document behavior outside of constraints
    // 実装では対応不要 / Implementation doesn't need to handle this
    describe.skip('NaN Behavior (not in LeetCode constraints)', () => {
      test('NaN handling varies by implementation approach', () => {
        const nums = [NaN, NaN];

        // Set/HashSetベースの実装: NaNは重複として検出される / Set/HashSet-based implementation: NaN is detected as duplicate
        const setBasedResult = new Set(nums).size < nums.length;
        expect(setBasedResult).toBe(true);

        // 等価比較ベースの実装: NaNは重複として検出されない / Equality-based implementation: NaN is not detected as duplicate
        const equalityBasedResult = nums[0] === nums[1];
        expect(equalityBasedResult).toBe(false);

        // 実際のcontainsDuplicate実装の期待値は実装依存 / Expected result for actual containsDuplicate implementation is implementation-dependent
        // HashSet実装: true / HashSet implementation: true
        // 等価比較実装: false / Equality comparison implementation: false
      });
    });
  });

  describe('Value Boundary Constraints', () => {
    test('Minimum value with duplicates', () => {
      expect(
        containsDuplicate([CONSTRAINTS.MIN_VALUE, 0, CONSTRAINTS.MIN_VALUE]),
      ).toBe(true);
    });

    test('Maximum value with duplicates', () => {
      expect(
        containsDuplicate([CONSTRAINTS.MAX_VALUE, 0, CONSTRAINTS.MAX_VALUE]),
      ).toBe(true);
    });

    test('Mixed boundary values: negative, zero, positive without duplicates', () => {
      expect(
        containsDuplicate([CONSTRAINTS.MIN_VALUE, 0, CONSTRAINTS.MAX_VALUE]),
      ).toBe(false);
    });

    test('All boundary values unique', () => {
      expect(
        containsDuplicate([
          CONSTRAINTS.MIN_VALUE,
          CONSTRAINTS.MIN_VALUE + 1,
          0,
          CONSTRAINTS.MAX_VALUE - 1,
          CONSTRAINTS.MAX_VALUE,
        ]),
      ).toBe(false);
    });
  });

  describe('Performance and Scale', () => {
    test.each([
      ['maximum value', CONSTRAINTS.MAX_VALUE],
      ['zero', 0],
      ['minimum value', CONSTRAINTS.MIN_VALUE],
    ])('All same elements (%s)', (_, value) => {
      const nums = new Array<number>(CONSTRAINTS.MAX_ARRAY_LENGTH).fill(value);
      expect(containsDuplicate(nums)).toBe(true);
    });

    test('All unique elements - worst case for any algorithm', () => {
      const nums = Array.from(
        { length: CONSTRAINTS.MAX_ARRAY_LENGTH },
        (_, i) => i,
      );
      expect(containsDuplicate(nums)).toBe(false);
    });

    test('Reverse sorted unique elements', () => {
      const nums = Array.from(
        { length: CONSTRAINTS.MAX_ARRAY_LENGTH },
        (_, i) => CONSTRAINTS.MAX_ARRAY_LENGTH - 1 - i,
      );
      expect(containsDuplicate(nums)).toBe(false);
    });

    test('Early duplicate in large array', () => {
      const nums = Array.from(
        { length: CONSTRAINTS.MAX_ARRAY_LENGTH },
        (_, i) => i,
      );
      const firstElement = nums[0];
      if (firstElement !== undefined) {
        nums[1] = firstElement; // 最初に重複を配置 / Place duplicate at the beginning
      }
      expect(containsDuplicate(nums)).toBe(true);
    });

    test('Late duplicate in large array', () => {
      const nums = Array.from(
        { length: CONSTRAINTS.MAX_ARRAY_LENGTH },
        (_, i) => i,
      );
      const firstElement = nums[0];
      if (firstElement !== undefined) {
        nums[CONSTRAINTS.MAX_ARRAY_LENGTH - 1] = firstElement; // 最後に重複を配置 / Place duplicate at the end
      }
      expect(containsDuplicate(nums)).toBe(true);
    });
  });
});
