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
2. Each implementation file should contain detailed TSDoc with complexity analysis
3. Use bilingual inline comments (Japanese/English) for key logic
4. Main `solution.ts` imports from implementations and exports:
   - Default export: optimal solution
   - Named exports: alternative approaches (if needed for comparison)

### Keep Solutions Independent from Test Data

- Never write implementations that special-case specific test values
- Avoid hardcoding expected inputs from test cases
- Your solution must work for any valid input within the constraints, not just the test data

### Add TSDoc to Internal Implementations and Public API Following Examples

Each solution file must include detailed TSDoc comments following these specifications:

#### Internal Algorithm Implementations (bruteForce, hashMap, etc.)

Focus: **How it works and why** - for learning and maintenance

- Title format: `[Problem Name] - [Approach Name] Implementation`
- Brief overview explaining the approach and its trade-offs (1-2 lines)
- Use `@remarks` section for detailed algorithm and complexity analysis:
  - Algorithm steps (numbered)
  - Time Complexity: O notation with detailed calculation breakdown
    - Explain loop iterations and operations
    - Show mathematical derivation (e.g., n(n-1)/2 → O(n²), n × O(1) = O(n))
  - Space Complexity: O notation with memory usage explanation
    - Describe data structures used
    - Explain worst-case memory growth
- Mark with `@internal` tag

Example Structure:

```typescript
/**
 * Two Sum - Brute Force Implementation
 *
 * A straightforward approach that checks all possible pairs.
 * Easy to understand but inefficient for large datasets.
 *
 * @remarks
 * Algorithm:
 * 1. Iterate through each element with outer loop
 * 2. For each element, check all subsequent elements
 * 3. Return indices when sum equals target
 *
 * Time Complexity: O(n²)
 * - Outer loop: runs n-1 times
 * - Inner loop: runs (n-1) + (n-2) + ... + 1 times
 * - Total iterations: n(n-1)/2 → O(n²)
 *
 * Space Complexity: O(1)
 * - No additional data structures used
 * - Only constant variables: i, j
 *
 * @internal
 */
```

#### Public API Export (twoSum, containsDuplicate, etc.)

Focus: **What it does and how to use it** - for API consumers

- Concise one-line function description
- `@param` tags with description (no type annotations)
- `@returns` tag describing the return value format
- `@throws` tag explaining error conditions
- `@example` section with at least 3 usage examples showing different cases
- `@see` tag with LeetCode problem URL (TSDoc link format using pipe separator)
- Mark with `@public` tag

Example Structure:

````typescript
/**
 * Finds two numbers in an array that sum to a target value
 *
 * @param nums - Array of integers
 * @param target - Target sum to find
 * @returns Indices of the two numbers that add up to target [i, j] where i < j
 * @throws Error if no valid pair exists (though one valid answer is guaranteed by constraints)
 *
 * @example
 * ```typescript
 * twoSum([2, 7, 11, 15], 9);  // returns [0, 1] because nums[0] + nums[1] = 9
 * twoSum([3, 2, 4], 6);       // returns [1, 2] because nums[1] + nums[2] = 6
 * twoSum([3, 3], 6);          // returns [0, 1] because nums[0] + nums[1] = 6
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
3. Create `implementations/` subfolder for different approaches:
   - Start with `brute-force.ts` for the simplest solution
   - Add optimized approaches (e.g., `hash-map.ts`, `two-pointers.ts`)
4. Each implementation file must include full TSDoc documentation
5. Create `solution.ts` that imports and exports the optimal approach as default
6. Add bilingual comments (Japanese/English) for key logic
7. Ensure all CI checks pass before committing:
   - Format: `npm run format`
   - Run all checks: `npm run check`
