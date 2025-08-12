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
