# LeetCode学習記録 / LeetCode Learning Journey

[![CI](https://github.com/minamizawa-git/leetcode-typescript/actions/workflows/main.yml/badge.svg)](https://github.com/minamizawa-git/leetcode-typescript/actions/workflows/main.yml)

[English](./README.en.md) | **日本語**

## プロジェクト概要

TypeScriptで解いたLeetCodeの問題を記録するプロジェクト。

## 開発コマンド

```bash
# テストをwatch mode（開発用）で実行
npm test:watch

# 全てのチェック（フォーマット・リント・型チェック・テスト）を実行
npm run check

# コード整形
npm run format
```

詳細なコマンドと使用例は[CLAUDE.md](./CLAUDE.md#essential-commands)を参照

## 新規問題の追加

LeetCodeの新しい問題を実装する際の手順：

1. [新しいIssueを作成](https://github.com/minamizawa-git/leetcode-typescript/issues/new?template=new-problem.yml)
2. テスト作成（TDD）
3. 実装とリファクタリング

実装規約とベストプラクティスは[CLAUDE.md](./CLAUDE.md#project-structure)を参照
