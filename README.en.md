# LeetCode Learning Journey

[![CI](https://github.com/minamizawa-git/leetcode-typescript/actions/workflows/main.yml/badge.svg)](https://github.com/minamizawa-git/leetcode-typescript/actions/workflows/main.yml)

**English** | [日本語](./README.md)

## Project Overview

A project to record LeetCode problems solved in TypeScript.

## Development Commands

### Basic Commands

```bash
# Install dependencies
npm install

# Run all tests
npm test

# Run tests in watch mode (for development)
npm test:watch

# Build TypeScript
npm run build

# Format code with Prettier
npm run format

# Check code with ESLint
npm run lint
```

### Testing Individual Problems

```bash
# Run tests for a specific problem
npm test -- --testPathPattern="0001-two-sum"

# Run tests for a specific file
npm test src/problems/0001-two-sum/solution.test.ts
```

## Adding New Problems

When implementing a new LeetCode problem:

1. Create directory: `src/problems/[number(4-digit format)]-[name]/`
2. Write comprehensive tests covering all constraint boundaries
3. Implement multiple solution approaches in `solution.ts`
4. Refactor and add alternative approaches
5. Export optimal solution as default, alternatives as named exports
6. Include complexity analysis in JSDoc comments
7. Add bilingual comments for key logic
8. Ensure all CI checks pass before committing
