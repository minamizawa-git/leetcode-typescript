import jsdoc from 'eslint-plugin-jsdoc';
import tsdoc from 'eslint-plugin-tsdoc';
import tseslint from 'typescript-eslint';
import localPlugin from './eslint-rules/index.js';

// ESLint フラット設定（ESM）。実行ディレクトリに依存せず tsconfig を解決するため設定ファイル位置を基点にする。
const tsconfigRootDir = import.meta.dirname;

export default tseslint.config(
  {
    // 共通の除外パス
    ignores: ['node_modules/**', 'dist/**', 'coverage/**'],
  },
  ...tseslint.configs.recommendedTypeChecked, // TypeScript 推奨セット (型情報あり)
  {
    // アプリ共通のルール
    files: ['src/**/*.ts'],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.app.json'],
        tsconfigRootDir,
      },
    },
    plugins: {
      jsdoc,
      tsdoc,
    },
    rules: {
      // 非 null アサーション演算子 ! の使用禁止
      '@typescript-eslint/no-non-null-assertion': 'error',
      // ドキュメント
      'tsdoc/syntax': 'error',
    },
  },
  {
    // ツール用のルール（Node ターゲット）
    files: ['vitest.config.ts'],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json'],
        tsconfigRootDir,
      },
    },
  },
  {
    // アルゴリズム実装ファイルのルール
    files: ['**/implementations/*.ts'],
    plugins: {
      local: localPlugin,
    },
    rules: {
      // ドキュメント
      'local/implementations-jsdoc-rules': 'error',
      'jsdoc/require-description': 'error',
      'jsdoc/tag-lines': ['error', 'any', { startLines: 1 }],
      'jsdoc/require-throws': 'error',
    },
  },
  {
    // エントリファイルのルール
    files: ['**/solution.ts'],
    rules: {
      // 再エクスポート禁止
      'no-restricted-syntax': [
        'error',
        {
          selector:
            "ExportNamedDeclaration > VariableDeclaration > VariableDeclarator[init.type='Identifier']",
          message: 'Direct re-export of functions is not allowed.',
        },
      ],
      // ドキュメント
      'jsdoc/require-jsdoc': ['error'],
      'jsdoc/require-description': 'error',
      'jsdoc/require-param': 'error',
      'jsdoc/require-returns': 'error',
      'jsdoc/require-returns-description': 'error',
      'jsdoc/require-example': 'error',
      'jsdoc/tag-lines': ['error', 'any', { startLines: 1 }],
      'jsdoc/require-throws': 'error',
    },
  },
  {
    // テストファイルのルール
    files: ['**/*.test.ts'],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.vitest.json'],
        tsconfigRootDir,
      },
    },
    rules: {
      // ドキュメント
      'jsdoc/tag-lines': ['error', 'any', { startLines: 1 }],
    },
  },
);
