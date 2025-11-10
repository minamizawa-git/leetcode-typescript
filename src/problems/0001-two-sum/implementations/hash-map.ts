/**
 * Two Sum - ハッシュマップによる実装
 *
 * ハッシュマップを使用して補数を検索する効率的なアプローチ。
 *
 * @remarks
 * アルゴリズム:
 * 1. ハッシュマップで既に走査した数値とそのインデックスを記録
 * 2. 各要素について、目標値からその要素を引いた補数を計算
 * 3. 補数がハッシュマップに存在すれば、そのインデックスと現在のインデックスを返す
 * 4. 存在しなければ、現在の数値とインデックスをハッシュマップに追加
 *
 * 時間計算量: O(n)
 * - ループ: 最大n回実行
 * - Map.get(): O(1) - ハッシュマップの検索
 * - Map.set(): O(1) - ハッシュマップの挿入
 * - 合計: n × (O(1) + O(1)) = O(n)
 *
 * 空間計算量: O(n)
 * - seen Map: 最大n個の要素を格納
 *   - 最良ケース: 最初の2要素が解の場合 → O(1)
 *   - 最悪ケース: 解が存在しない、または最後の要素でペアが見つかる場合 → O(n)
 * - ループ変数 i: 1個
 * - 一時変数: 入力サイズnに依存しない → 定数個(c)
 * - 合計: n + 1 + c → O(n)
 *
 * @throws 合計が目標値と一致するペアが見つからない場合はエラー
 *
 * @internal
 */
export function hashMap(nums: number[], target: number): number[] {
  /** 既に走査した数値とそのインデックスを記録するハッシュマップ */
  // 例: nums = [2, 7, 11] の場合、{2 => 0, 7 => 1, 11 => 2} のように格納される
  const seen = new Map<number, number>();

  // 配列を走査: i は 0 から n-1 まで
  // 各要素について、その補数（complement = target - num）がハッシュマップに存在するかチェック
  for (let i = 0; i < nums.length; i++) {
    /** 現在の要素（ペアの2番目の候補） */
    const num = nums[i];
    if (num === undefined) continue;

    /** 目標値との差分（ペアの1番目として必要な数値） */
    // 例: target = 9, num = 7 の場合、complement = 2
    const complement = target - num;

    /** ハッシュマップに記録された補数のインデックス */
    const complementIndex = seen.get(complement);

    // 補数が既に走査済み（ハッシュマップに存在）なら、ペアが見つかった
    // complementIndex < i が保証されるため、[complementIndex, i] の順で返す
    if (complementIndex !== undefined) {
      return [complementIndex, i];
    }

    // 補数が見つからない場合、現在の数値をハッシュマップに追加（後続の要素の補数検索で使用可能になる）
    seen.set(num, i);
  }

  throw new Error(`No two sum solution found for target: ${target}`);
}
