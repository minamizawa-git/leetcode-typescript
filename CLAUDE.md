# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a TypeScript-based LeetCode solutions repository with strict type safety and comprehensive testing.

## Essential Commands

### Development Commands

```bash
# Run all tests
npm test

# Run tests in watch mode (for development)
npm test:watch

# Run tests for a specific problem
npm test -- --testPathPattern="0001-two-sum"
npm test src/problems/0001-two-sum/solution.test.ts

# Build TypeScript
npm run build

# Format code (required before commits)
npm run format

# Lint code (must pass in CI)
npm run lint

# Type check (must pass in CI)
npm run typecheck

# Check formatting without modifying files
npm run format:check

# Run all checks (format, lint, typecheck, test)
npm run check
```

### CI Requirements

Before committing, ensure all these pass:

1. `npm run format:check` - Format check
2. `npm run lint` - ESLint check
3. `npm run typecheck` - Type check
4. `npm test` - All tests

Or run all checks at once:

```bash
npm run check
```

## Project Structure

### Problem Organization

Each LeetCode problem follows this structure:

```
src/problems/[problem-number(4-digit format)]-[problem-name]/
├── implementations/   # Different algorithm implementations
│   ├── brute-force.ts # Brute force approach
│   ├── hash-map.ts    # Optimized approach
│   └── ...            # Other implementations
├── solution.ts        # Imports and exports the optimal solution
└── solution.test.ts   # Comprehensive test cases including edge cases
```

The `implementations/` folder contains separate files for each algorithmic approach, while `solution.ts` acts as the main entry point that exports the optimal solution as default.

## TypeScript Configuration

This project uses exceptionally strict TypeScript settings:

- `strict: true` with all strict flags enabled
- `noUncheckedIndexedAccess: true` - Requires undefined checks for array/object access
- `exactOptionalPropertyTypes: true` - Prevents assigning undefined to optional properties
- `noImplicitOverride: true` - Requires explicit override keyword

## Testing Guidelines

### Do Not Modify Tests

Tests are specifications, not suggestions. Never modify existing tests to match your implementation. If tests are failing, fix the implementation , not the tests.

### When Test Modifications Are Allowed

Test code may only be modified when:

1. Explicitly asked to add new test cases
2. Explicitly asked to fix broken test infrastructure
3. Fixing syntax errors
4. Apply formatting
5. Test specifications are contradictory (do not make independent judgments but ask for confirmation)

### Apply Test Design Principles

1. Define CONSTRAINTS as constants (UPPER_SNAKE_CASE) at test file top
2. Calculate derived values as variables (lowerCamelCase) within tests
3. Consider worst-case scenarios (Identify O(n²) or exponential cases that stress the algorithm)
4. Test with actual constraint boundaries, not just "large" values
5. Handle numerical precision for floating-point problems
6. Optimize test combinations (avoid redundant tests)
7. Never optimize for specific test inputs - optimize for algorithmic efficiency

## Implementation Guidelines

### Apply Implementation Design Principles

1. Create separate implementation files in `implementations/` folder for each approach
2. Each implementation file should contain detailed TSDoc with complexity analysis in Japanese
3. Use Japanese comments for key logic and explanations
4. Main `solution.ts` imports from implementations and exports:
   - Default export: optimal solution
   - Named exports: alternative approaches (if needed for comparison)

### Keep Solutions Independent from Test Data

- Never write implementations that special-case specific test values
- Avoid hardcoding expected inputs from test cases
- Your solution must work for any valid input within the constraints, not just the test data

### Add TSDoc to Internal Implementations and Public API Following Examples

Each solution file must include detailed TSDoc comments in Japanese following these specifications:

#### Internal Algorithm Implementations (bruteForce, hashMap, etc.)

Focus: **How it works and why** - for learning and maintenance

- Title format: `[Problem Name] - [Approach Name in Japanese]による実装`
- Brief overview explaining the approach and its trade-offs (1-2 lines in Japanese)
- Use `@remarks` section for detailed algorithm and complexity analysis:
  - Algorithm steps (numbered, in Japanese)
  - Time Complexity: O notation with detailed calculation breakdown in Japanese
    - Explain loop iterations and operations
    - Show mathematical derivation (e.g., n(n-1)/2 → O(n²), n × O(1) = O(n))
  - Space Complexity: O notation with memory usage explanation in Japanese
    - Describe data structures used
    - Explain worst-case memory growth
- Add `@throws` tag only if the function actually throws exceptions (in Japanese)
- Mark with `@internal` tag

Example Structure:

```typescript
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
```

#### Public API Export (twoSum, containsDuplicate, etc.)

Focus: **What it does and how to use it** - for API consumers

- Concise one-line function description in Japanese
- `@param` tags with description in Japanese (no type annotations)
- `@returns` tag describing the return value format in Japanese
- `@throws` tag only if the function actually throws exceptions (in Japanese)
- `@example` section with at least 3 usage examples showing different cases (comments in Japanese)
- `@see` tag with LeetCode problem URL (TSDoc link format using pipe separator)
- Mark with `@public` tag

Example Structure:

````typescript
/**
 * 配列内で合計が目標値となる2つの数値を見つける関数
 *
 * @param nums - 整数の配列
 * @param target - 目標となる合計値
 * @returns 合計が目標値となる2つの数値のインデックス [i, j]（i < j）
 * @throws 合計が目標値と一致するペアが見つからない場合はエラー
 *
 * @example
 * ```typescript
 * twoSum([2, 7, 11, 15], 9);  // nums[0] + nums[1] = 9 のため [0, 1] を返す
 * twoSum([3, 2, 4], 6);       // nums[1] + nums[2] = 6 のため [1, 2] を返す
 * twoSum([3, 3], 6);          // nums[0] + nums[1] = 6 のため [0, 1] を返す
 * ```
 *
 * @see {@link https://leetcode.com/problems/two-sum/ | LeetCode Problem}
 *
 * @public
 */
````

## Code Quality Standards

- Prettier formatting with single quotes and trailing commas
- ESLint with TypeScript recommended rules plus JSDoc/TSDoc enforcement
  - No non-null assertions allowed (`!` operator)
  - Direct re-export of functions in solution.ts is prohibited to ensure proper documentation
- All code must pass strict type checking

## Adding New Problems

When implementing a new LeetCode problem:

1. Create directory: `src/problems/[number(4-digit format)]-[name]/`
2. Write comprehensive tests in `solution.test.ts` covering all constraint boundaries
   - Use Japanese for test descriptions (describe, it blocks)
   - Add Japanese comments explaining test cases and constraints
3. Create `implementations/` subfolder for different approaches:
   - Start with `brute-force.ts` for the simplest solution
   - Add optimized approaches (e.g., `hash-map.ts`, `two-pointers.ts`)
4. Each implementation file must include full TSDoc documentation in Japanese
   - Follow the Internal Implementation TSDoc format
   - Add Japanese inline comments for key logic
5. Create `solution.ts` that imports and exports the optimal approach as default
   - Follow the Public API TSDoc format in Japanese
6. Ensure all CI checks pass before committing:
   - Format: `npm run format`
   - Run all checks: `npm run check`
