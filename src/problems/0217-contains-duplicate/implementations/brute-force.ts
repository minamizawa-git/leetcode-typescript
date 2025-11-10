/**
 * Contains Duplicate - 総当たり法による実装
 *
 * 全ての組み合わせをチェックする非効率的なアプローチ。
 *
 * @remarks
 * アルゴリズム:
 * 1. 外側のループで各要素を走査
 * 2. 各要素に対して、後続の全ての要素をチェック
 * 3. 重複が見つかったら即座にtrueを返す
 * 4. 全ての組み合わせをチェックして重複がなければfalseを返す
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
 * - 各比較: O(1) - 等価性チェックのみ
 *
 * 空間計算量: O(1)
 * - ループ変数 i: 1個
 * - ループ変数 j: 1個
 * - 一時変数 current, compare: 2個
 * - 合計: 入力サイズnに依存しない → O(1)
 *
 * @internal
 */
export function bruteForce(nums: number[]): boolean {
  // 外側のループ: 最初の要素を選択（i は 0 から n-2 まで）
  // nums.length - 1 までなのは、最後の要素は内側ループで比較する要素がないため
  for (let i = 0; i < nums.length - 1; i++) {
    /** 現在の要素（比較元） */
    const current = nums[i];
    if (current === undefined) continue;

    // 内側のループ: 2番目の要素を選択（j は i+1 から n-1 まで）
    // i + 1 から始めるのは、既にチェックした組み合わせを避けるため（例: i=0, j=1 でチェック済みなら、i=1, j=0 は不要）
    for (let j = i + 1; j < nums.length; j++) {
      /** 比較対象の要素 */
      const compare = nums[j];
      if (compare === undefined) continue;

      // 重複を発見したら即座に true を返す
      if (current === compare) {
        return true;
      }
    }
  }

  // 全ての組み合わせをチェックして重複が見つからなかった場合
  return false;
}
