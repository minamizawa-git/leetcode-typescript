import { twoSum } from './solution';

describe('Two Sum のテスト', () => {
  /**
   * Two Sum 問題の制約条件
   *
   * @remarks
   * 制約条件:
   * - 配列長: 2 ≤ nums.length ≤ 10^4
   * - 配列要素: -10^9 ≤ nums[i] ≤ 10^9
   * - 目標値: -10^9 ≤ target ≤ 10^9
   * - 有効な解は必ず1つのみ存在する
   */
  const CONSTRAINTS = {
    /** 配列の最大長 (10^4) */
    MAX_ARRAY_LENGTH: 10 ** 4,
    /** 配列の最小長 (2) */
    MIN_ARRAY_LENGTH: 2,
    /** 配列要素と目標値の最大値 (10^9) */
    MAX_VALUE: 10 ** 9,
    /** 配列要素と目標値の最小値 (-10^9) */
    MIN_VALUE: -(10 ** 9),
  } as const;

  /**
   * 基本機能のテスト
   *
   * Two Sum問題の基本的な動作を確認します。
   */
  describe('基本機能', () => {
    it('合計が目標値となる2つの数値を見つけられる', () => {
      // 最初の2要素で解が見つかるケース: 2 + 7 = 9
      expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    });

    it('目標の要素が隣接していない場合も動作する', () => {
      // 隣接しない要素の組み合わせ: 2 + 4 = 6
      expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
    });

    it('重複する値を正しく処理できる', () => {
      // 同じ値を2回使用するケース: 3 + 3 = 6
      expect(twoSum([3, 3], 6)).toEqual([0, 1]);
    });
  });

  /**
   * 特殊値のテスト
   *
   * ゼロ、負数、正負混在などの特殊なケースを検証します。
   */
  describe('特殊値', () => {
    it('ゼロを含む配列を正しく処理できる', () => {
      // ゼロが目標値のケース: 負数と正数の和がゼロ
      expect(twoSum([-3, 0, 3, 1], 0)).toEqual([0, 2]); // -3 + 3 = 0

      // ゼロが解の一部となるケース: ゼロ + 正数 = 正数
      expect(twoSum([0, 4, 3, 2], 4)).toEqual([0, 1]); // 0 + 4 = 4
    });

    it('負数のみの配列で動作する', () => {
      // すべて負数の配列: -3 + (-5) = -8
      expect(twoSum([-1, -2, -3, -4, -5], -8)).toEqual([2, 4]);
    });

    it('正数と負数が混在する配列を処理できる', () => {
      // 正負混在のケース: -10 + 15 = 5
      expect(twoSum([-10, -1, 2, 7, 15], 5)).toEqual([0, 4]);
    });
  });

  /**
   * 境界サイズの入力テスト
   *
   * 最小・最大配列長での正しさを検証します。
   */
  describe('境界サイズの入力', () => {
    it('最小配列長の境界条件を満たす', () => {
      // 配列長2（最小値）でのテスト: [1, 2]
      const nums = Array.from(
        { length: CONSTRAINTS.MIN_ARRAY_LENGTH },
        (_, i) => i + 1,
      );
      expect(twoSum(nums, 3)).toEqual([0, 1]);
    });

    it('最大配列長でも正しい解を返す', () => {
      // 配列長10^4（最大値）でのテスト
      // 解が配列中間付近に存在するケース
      const nums = Array.from(
        { length: CONSTRAINTS.MAX_ARRAY_LENGTH },
        (_, i) => i,
      );
      nums[5000] = 100000;
      nums[7500] = 200000;
      expect(twoSum(nums, 300000)).toEqual([5000, 7500]);
    });

    it('解が配列末尾にあるケースでも正しく見つかる', () => {
      // 配列長10^4で、解が最後の2要素にあるケース
      const nums = Array.from(
        { length: CONSTRAINTS.MAX_ARRAY_LENGTH },
        (_, i) => i,
      );
      nums[9998] = 100000;
      nums[9999] = 200000;
      expect(twoSum(nums, 300000)).toEqual([9998, 9999]);
    });
  });

  /**
   * 境界値のテスト（10^9制約）
   *
   * 配列要素と目標値が10^9制約の境界にある場合の動作を検証します。
   */
  describe('境界値（10^9制約）', () => {
    const { MAX_VALUE, MIN_VALUE } = CONSTRAINTS;

    /**
     * 配列要素が境界値にあるケース
     */
    describe('配列要素が境界値', () => {
      it('配列に最大正数値が含まれる場合に動作する', () => {
        // MAX_VALUE（10^9）を配列に含めてテスト
        // 10^9 + 0 = 10^9
        expect(twoSum([MAX_VALUE, 0, 1], MAX_VALUE)).toEqual([0, 1]);
      });

      it('配列に最小負数値が含まれる場合に動作する', () => {
        // MIN_VALUE（-10^9）を配列に含めてテスト
        // -10^9 + 0 = -10^9
        expect(twoSum([MIN_VALUE, 0, -1], MIN_VALUE)).toEqual([0, 1]);
      });

      it('極端な正数と負数が混在する配列を処理できる', () => {
        // MAX_VALUEとMIN_VALUEが同じ配列に存在
        // 10^9 + (-10^9) = 0
        expect(twoSum([MAX_VALUE, MIN_VALUE, 0], 0)).toEqual([0, 1]);
      });
    });

    /**
     * 配列要素が境界値に近いケース
     */
    describe('配列要素が境界値に近い', () => {
      it('MAX_VALUEの直前の値を処理できる', () => {
        // (10^9 - 1) + 1 = 10^9
        expect(twoSum([MAX_VALUE - 1, 1, 0], MAX_VALUE)).toEqual([0, 1]);
      });

      it('MIN_VALUEの直後の値を処理できる', () => {
        // (-10^9 + 1) + (-1) = -10^9
        expect(twoSum([MIN_VALUE + 1, -1, 0], MIN_VALUE)).toEqual([0, 1]);
      });
    });

    /**
     * 目標値が境界値にあるケース
     */
    describe('目標値が境界値', () => {
      it('目標値が最大正数値の場合に動作する', () => {
        // target = MAX_VALUE（10^9）
        // 2つの値の和が10^9になる組み合わせを見つける
        /**
         * target を構成する最初の値
         *
         * @remarks
         * Math.floor を使って target/2 を整数へ丸めることで target が奇数でも安全に補数計算を行える。
         */
        const firstValue = Math.floor(MAX_VALUE / 2);
        /**
         * target を構成する2番目の値
         *
         * @remarks
         * firstValue を target の半分付近に設定し、complement = target - firstValue とすることで
         * firstValue + complement === target を常に満たすペアを構築できる。
         * これにより ±10^9 という境界値や target の偶奇に左右されず、安全にテストデータを作れる。
         */
        const complement = MAX_VALUE - firstValue;
        expect(twoSum([firstValue, complement, 1], MAX_VALUE)).toEqual([0, 1]);
      });

      it('目標値が最小負数値の場合に動作する', () => {
        // target = MIN_VALUE（-10^9）
        // 2つの値の和が-10^9になる組み合わせを見つける
        /**
         * target を構成する最初の値
         *
         * @remarks
         * Math.ceil を使って target/2 を整数へ丸めることで target が奇数かつ負数でも安全に補数計算を行える。
         * 切り上げを選ぶことで firstValue が MIN_VALUE 未満へ逸脱することなく、境界値テストを安定して構築できる。
         */
        const firstValue = Math.ceil(MIN_VALUE / 2);
        /**
         * target を構成する2番目の値
         *
         * @remarks
         * firstValue を target の半分付近に設定し、complement = target - firstValue とすることで
         * firstValue + complement === target を常に満たすペアを構築できる。
         * これにより ±10^9 という境界値や target の偶奇に左右されず、安全にテストデータを作れる。
         */
        const complement = MIN_VALUE - firstValue;
        expect(twoSum([firstValue, complement, -1], MIN_VALUE)).toEqual([0, 1]);
      });
    });

    /**
     * 目標値が境界値に近いケース
     */
    describe('目標値が境界値に近い', () => {
      it('目標値がMAX_VALUEに近い場合に動作する', () => {
        // target = 10^9 - 1
        const target = MAX_VALUE - 1;
        /**
         * target を構成する最初の値
         *
         * @remarks
         * Math.floor を使って target/2 を整数へ丸めることで target が奇数でも安全に補数計算を行える。
         */
        const firstValue = Math.floor(target / 2);
        /**
         * target を構成する2番目の値
         *
         * @remarks
         * firstValue を target の半分付近に設定し、complement = target - firstValue とすることで
         * firstValue + complement === target を常に満たすペアを構築できる。
         * これにより ±10^9 という境界値や target の偶奇に左右されず、安全にテストデータを作れる。
         */
        const complement = target - firstValue;
        expect(twoSum([firstValue, complement, 0], target)).toEqual([0, 1]);
      });

      it('目標値がMIN_VALUEに近い場合に動作する', () => {
        // target = -10^9 + 1
        const target = MIN_VALUE + 1;
        /**
         * target を構成する最初の値
         *
         * @remarks
         * Math.ceil を使って target/2 を整数へ丸めることで target が奇数かつ負数でも安全に補数計算を行える。
         * 切り上げを選ぶことで firstValue が MIN_VALUE 未満へ逸脱することなく、境界値テストを安定して構築できる。
         */
        const firstValue = Math.ceil(target / 2);
        /**
         * target を構成する2番目の値
         *
         * @remarks
         * firstValue を target の半分付近に設定し、complement = target - firstValue とすることで
         * firstValue + complement === target を常に満たすペアを構築できる。
         * これにより ±10^9 という境界値や target の偶奇に左右されず、安全にテストデータを作れる。
         */
        const complement = target - firstValue;
        expect(twoSum([firstValue, complement, 0], target)).toEqual([0, 1]);
      });
    });
  });
});
