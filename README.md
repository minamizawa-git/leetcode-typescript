# LeetCode学習記録 / LeetCode Learning Journey

[![CI](https://github.com/minamizawa-git/leetcode-typescript/actions/workflows/main.yml/badge.svg)](https://github.com/minamizawa-git/leetcode-typescript/actions/workflows/main.yml)

[English](./README.en.md) | **日本語**

## プロジェクト概要

TypeScriptで解いたLeetCodeの問題を記録するプロジェクト。

## プロジェクト構成

```
src/problems/[0001-two-sum]/
├─ implementations/   # アルゴリズム別の実装
├─ solution.ts        # 最適解のエクスポート
└─ solution.test.ts   # テスト
```

## 開発コマンド

```bash
# テストをwatch mode（開発用）で実行
npm run test:watch

# 全てのチェック（フォーマット・リント・型チェック・テスト）を実行
npm run check

# コード整形
npm run format
```

詳細なコマンドと使用例は[CLAUDE.md](./CLAUDE.md#essential-commands)を参照

## 新規問題の追加

LeetCodeの新しい問題を実装する際の手順：

1. [新しいIssueを作成](https://github.com/minamizawa-git/leetcode-typescript/issues/new?template=new-problem.yml)
2. テスト作成（詳細は[CLAUDE.md](./CLAUDE.md#testing-guidelines)を参照）
3. 実装とリファクタリング（詳細は[CLAUDE.md](./CLAUDE.md#implementation-guidelines)を参照）
