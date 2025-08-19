# LeetCode学習記録 / LeetCode Learning Journey

[![CI](https://github.com/minamizawa-git/leetcode-typescript/actions/workflows/main.yml/badge.svg)](https://github.com/minamizawa-git/leetcode-typescript/actions/workflows/main.yml)

[English](./README.en.md) | **日本語**

## プロジェクト概要

TypeScriptで解いたLeetCodeの問題を記録するプロジェクト。

## 開発コマンド

### 基本コマンド

```bash
# 依存関係をインストール
npm install

# 全てのテストを実行
npm test

# テストをwatch mode（開発用）で実行
npm test:watch

# TypeScriptをビルド
npm run build

# Prettierでコードをフォーマット
npm run format

# ESLintでコードをチェック
npm run lint
```

### 個別問題のテスト

```bash
# 特定の問題のテストを実行
npm test -- --testPathPattern="0001-two-sum"

# 特定のファイルのテストを実行
npm test src/problems/0001-two-sum/solution.test.ts
```

## 新規問題の追加

LeetCodeの新しい問題を実装する際の手順：

1. ディレクトリを作成：`src/problems/[問題番号(4桁形式)]-[問題名]/`
2. 制約の境界値を全て含む包括的なテストを作成
3. `solution.ts`に複数の解法によるアプローチを実装
4. リファクタリングと代替アプローチの追加
5. 最適解をデフォルトエクスポート、代替案を名前付きエクスポートとして出力
6. JSDocを内部実装と公開APIに追加
7. 重要なロジックには日英両言語でコメントを追加
8. コミット前に全てのCIチェックが通ることを確認
