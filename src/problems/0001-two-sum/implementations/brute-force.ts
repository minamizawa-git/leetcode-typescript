/**
 * Two Sum - 総当たり法による実装
 *
 * 全ての組み合わせをチェックする非効率的なアプローチ。
 *
 * @remarks
 * アルゴリズム:
 * 1. 外側のループで各要素を走査
 * 2. 各要素に対して、後続の全ての要素をチェック
 * 3. 合計が目標値と一致したらインデックスを返す
 *
 * 時間計算量: O(n²)
 * - 外側のループ: i = 0 から n-2 まで → (n-1)回実行
 * - 内側のループ: j = i+1 から n-1 まで
 *   - i=0のとき: (n-1)回
 *   - i=1のとき: (n-2)回
 *   - ...
 *   - i=n-2のとき: 1回
 * - 合計:
 *   (n-1) + (n-2) + ... + 1 = n(n-1)/2
 *   = (n² - n)/2
 *   → O(n²)
 *
 * 空間計算量: O(1)
 * - ループ変数 i: 1個
 * - ループ変数 j: 1個
 * - 一時変数: 入力サイズnに依存しない → 定数個(c)
 * - 合計: 1 + 1 + c → O(1)
 *
 * @throws 合計が目標値と一致するペアが見つからない場合はエラー
 *
 * @internal
 */
export function bruteForce(nums: number[], target: number): number[] {
  // 外側のループ: 最初の数値を選択（i は 0 から n-2 まで）
  // nums.length - 1 までなのは、最後の要素は内側ループでペアにする要素がないため
  for (let i = 0; i < nums.length - 1; i++) {
    /** 最初のペア候補 */
    const num1 = nums[i];
    if (num1 === undefined) continue;

    // 内側のループ: 2番目の数値を選択（j は i+1 から n-1 まで）
    // i + 1 から始めるのは、既にチェックした組み合わせを避けるため（例: i=0, j=1 でチェック済みなら、i=1, j=0 は不要）
    for (let j = i + 1; j < nums.length; j++) {
      /** 2番目のペア候補 */
      const num2 = nums[j];
      if (num2 === undefined) continue;

      if (num1 + num2 === target) {
        return [i, j];
      }
    }
  }

  throw new Error(`No two sum solution found for target: ${target}`);
}
