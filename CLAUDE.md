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
npx tsc --noEmit
```

### CI Requirements

Before committing, ensure all these pass:

1. `npx prettier --check "src/**/*.ts"` - Format check
2. `npm run lint` - ESLint check
3. `npx tsc --noEmit` - Type check
4. `npm test` - All tests

## Project Structure

### Problem Organization

Each LeetCode problem follows this structure:

```
src/problems/[problem-number(4-digit format)]-[problem-name]/
├── solution.ts      # Multiple solution approaches with complexity analysis
└── solution.test.ts # Comprehensive test cases including edge cases
```

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

1. Multiple approaches (e.g., brute force, optimal)
2. Detailed complexity analysis in JSDoc comments
3. Bilingual inline comments (Japanese/English)
4. Default export of the optimal solution
5. Named exports for alternative approaches

### Keep Solutions Independent from Test Data

- Never write implementations that special-case specific test values
- Avoid hardcoding expected inputs from test cases
- Your solution must work for any valid input within the constraints, not just the test data

## Code Quality Standards

- Prettier formatting with single quotes and trailing commas
- ESLint with TypeScript recommended rules
- No non-null assertions allowed (`!` operator)
- All code must pass strict type checking
- Bilingual comments for clarity

## Adding New Problems

When implementing a new LeetCode problem:

1. Create directory: `src/problems/[number(4-digit format)]-[name]/`
2. Implement multiple solution approaches in `solution.ts`
3. Export optimal solution as default, alternatives as named exports
4. Write comprehensive tests covering all constraint boundaries
5. Include complexity analysis in JSDoc comments
6. Add bilingual comments for key logic
7. Ensure all CI checks pass before committing
