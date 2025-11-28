import { containsDuplicate } from './solution.js';

describe('Contains Duplicate のテスト', () => {
  /**
   * Contains Duplicate 問題の制約条件
   *
   * @remarks
   * 制約条件:
   * - 配列長: 1 ≤ nums.length ≤ 10^5
   * - 配列要素: -10^9 ≤ nums[i] ≤ 10^9
   * - 各値の出現回数: 最大n回まで出現可能
   * - 配列の順序: 重要ではない
   */
  const CONSTRAINTS = {
    /** 配列の最小長 (1) */
    MIN_ARRAY_LENGTH: 1,
    /** 配列の最大長 (10^5) */
    MAX_ARRAY_LENGTH: 10 ** 5,
    /** 配列要素の最小値 (-10^9) */
    MIN_VALUE: -(10 ** 9),
    /** 配列要素の最大値 (10^9) */
    MAX_VALUE: 10 ** 9,
  } as const;

  /**
   * 基本機能のテスト
   *
   * Contains Duplicate問題の基本的な動作を確認します。
   */
  describe('基本機能', () => {
    it('重複がある配列でtrueを返す', () => {
      // 例1: 1が2回出現するため重複あり
      expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
    });

    it('全ての要素が異なる配列でfalseを返す', () => {
      // 例2: 全て異なる値のため重複なし
      expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
    });

    it('複数の重複がある配列でtrueを返す', () => {
      // 例3: 1, 3, 4, 2 が複数回出現
      expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
    });
  });

  /**
   * 配列サイズのエッジケースのテスト
   *
   * 最小・最大配列サイズでの正しさを検証します。
   */
  describe('配列サイズのエッジケース', () => {
    it('単一要素の配列では重複が不可能', () => {
      // 要素が1つのみのため、定義上重複は存在しない
      const anyValue = 42;
      expect(containsDuplicate([anyValue])).toBe(false);
    });

    it('2要素の配列で重複の可能性を検出できる', () => {
      // 2要素で異なる値 → 重複なし
      expect(containsDuplicate([1, 2])).toBe(false);
      // 2要素で同じ値 → 重複あり
      expect(containsDuplicate([1, 1])).toBe(true);
    });

    it('3要素の配列で様々な重複パターンを検出できる', () => {
      // 最初の2要素が重複
      expect(containsDuplicate([1, 1, 2])).toBe(true);
      // 最初と最後が重複
      expect(containsDuplicate([1, 2, 1])).toBe(true);
      // 全て異なる
      expect(containsDuplicate([1, 2, 3])).toBe(false);
    });
  });

  /**
   * 特殊値のテスト
   *
   * ゼロ、負数などの特殊なケースを検証します。
   */
  describe('特殊値', () => {
    it('ゼロを含む配列を正しく処理できる', () => {
      // ゼロが2回出現する場合 → 重複あり
      expect(containsDuplicate([0, 0])).toBe(true);
      // ゼロと他の値 → 重複なし
      expect(containsDuplicate([0, 1])).toBe(false);
    });

    it('負数を含む配列を正しく処理できる', () => {
      // 負数が2回出現する場合 → 重複あり
      expect(containsDuplicate([-1, 0, -1])).toBe(true);
      // 負数、ゼロ、正数が全て異なる → 重複なし
      expect(containsDuplicate([-1, 0, 1])).toBe(false);
    });
  });

  /**
   * JavaScript固有のエッジケースのテスト
   *
   * JavaScript特有の動作（±0、NaNなど）を検証します。
   */
  describe('特殊値（JavaScript固有のエッジケース）', () => {
    it('正のゼロと負のゼロは重複として扱われる', () => {
      // JavaScript では 0 と -0 は Set で同一視される
      expect(containsDuplicate([0, -0])).toBe(true);
    });

    it('複数の負のゼロは重複として扱われる', () => {
      // 負のゼロ同士も重複
      expect(containsDuplicate([-0, -0])).toBe(true);
    });

    // NaNテストは制約外の挙動を文書化するためのもの
    // 実装では対応不要
    describe.skip('NaN の挙動（LeetCode制約外）', () => {
      it('NaNの扱いは実装アプローチによって異なる', () => {
        const nums = [NaN, NaN];

        // Set/HashSetベースの実装: NaNは重複として検出される
        const setBasedResult = new Set(nums).size < nums.length;
        expect(setBasedResult).toBe(true);

        // 等価比較ベースの実装（総当たり法など）: NaNは重複として検出されない
        // なぜなら NaN === NaN は false を返すため
        const equalityBasedResult = nums[0] === nums[1];
        expect(equalityBasedResult).toBe(false);

        // 注: 本リポジトリのcontainsDuplicate関数（solution.ts）は
        // 常にHashSet実装を使用するため、実際の挙動は true を返す。
        // このテストは、異なる実装アプローチ間の挙動の違いを
        // 教育目的で文書化したものである。
      });
    });
  });

  /**
   * 値の境界制約のテスト
   *
   * 配列要素が10^9制約の境界にある場合の動作を検証します。
   */
  describe('値の境界制約', () => {
    it('最小値が重複する場合に検出できる', () => {
      // MIN_VALUE (-10^9) が2回出現
      expect(
        containsDuplicate([CONSTRAINTS.MIN_VALUE, 0, CONSTRAINTS.MIN_VALUE]),
      ).toBe(true);
    });

    it('最大値が重複する場合に検出できる', () => {
      // MAX_VALUE (10^9) が2回出現
      expect(
        containsDuplicate([CONSTRAINTS.MAX_VALUE, 0, CONSTRAINTS.MAX_VALUE]),
      ).toBe(true);
    });

    it('境界値が混在するが重複なしの場合にfalseを返す', () => {
      // 負の最大値、ゼロ、正の最大値が全て異なる
      expect(
        containsDuplicate([CONSTRAINTS.MIN_VALUE, 0, CONSTRAINTS.MAX_VALUE]),
      ).toBe(false);
    });

    it('全ての境界値が異なる場合にfalseを返す', () => {
      // MIN_VALUE, MIN_VALUE+1, 0, MAX_VALUE-1, MAX_VALUE が全て異なる
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

  /**
   * パフォーマンスとスケールのテスト
   *
   * 最大配列長（10^5）での正しさとパフォーマンスを検証します。
   */
  describe('パフォーマンスとスケール', () => {
    it.each([
      ['最大値', CONSTRAINTS.MAX_VALUE],
      ['ゼロ', 0],
      ['最小値', CONSTRAINTS.MIN_VALUE],
    ])('全て同じ要素の場合（%s）', (_, value) => {
      // 配列長10^5で全て同じ値 → 重複多数
      const nums = new Array<number>(CONSTRAINTS.MAX_ARRAY_LENGTH).fill(value);
      expect(containsDuplicate(nums)).toBe(true);
    });

    it('全て異なる要素の場合（全アルゴリズムの最悪ケース）', () => {
      // 配列長10^5で全て異なる値 → 重複なし
      const nums = Array.from(
        { length: CONSTRAINTS.MAX_ARRAY_LENGTH },
        (_, i) => i,
      );
      expect(containsDuplicate(nums)).toBe(false);
    });

    it('逆順ソート済みで全て異なる要素の場合', () => {
      // 配列長10^5で降順に並んだ異なる値 → 重複なし
      const nums = Array.from(
        { length: CONSTRAINTS.MAX_ARRAY_LENGTH },
        (_, i) => CONSTRAINTS.MAX_ARRAY_LENGTH - 1 - i,
      );
      expect(containsDuplicate(nums)).toBe(false);
    });

    it('大きな配列の先頭に重複がある場合', () => {
      // 配列長10^5で最初の2要素が重複 → 早期に検出可能
      const nums = Array.from(
        { length: CONSTRAINTS.MAX_ARRAY_LENGTH },
        (_, i) => i,
      );
      const firstElement = nums[0];
      if (firstElement !== undefined) {
        nums[1] = firstElement; // 最初に重複を配置
      }
      expect(containsDuplicate(nums)).toBe(true);
    });

    it('大きな配列の末尾に重複がある場合', () => {
      // 配列長10^5で最後に重複 → 全走査が必要
      const nums = Array.from(
        { length: CONSTRAINTS.MAX_ARRAY_LENGTH },
        (_, i) => i,
      );
      const firstElement = nums[0];
      if (firstElement !== undefined) {
        nums[CONSTRAINTS.MAX_ARRAY_LENGTH - 1] = firstElement; // 最後に重複を配置
      }
      expect(containsDuplicate(nums)).toBe(true);
    });
  });
});
