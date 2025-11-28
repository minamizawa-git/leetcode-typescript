# LeetCode Learning Journey

[![CI](https://github.com/minamizawa-git/leetcode-typescript/actions/workflows/main.yml/badge.svg)](https://github.com/minamizawa-git/leetcode-typescript/actions/workflows/main.yml)

**English** | [日本語](./README.md)

## Project Overview

A project to record LeetCode problems solved in TypeScript.

## Project Structure

```
src/problems/[0001-two-sum]/
├─ implementations/   # Alternative algorithm implementations
├─ solution.ts        # Exports the chosen solution
└─ solution.test.ts   # Tests
```

## Development Commands

```bash
# Run tests in watch mode (for development)
npm run test:watch

# Run all checks (format, lint, typecheck, test)
npm run check

# Format code
npm run format
```

See [CLAUDE.md](./CLAUDE.md#essential-commands) for detailed commands and usage examples

## Adding New Problems

When implementing a new LeetCode problem:

1. [Create a new Issue](https://github.com/minamizawa-git/leetcode-typescript/issues/new?template=new-problem.yml)
2. Write tests (see [CLAUDE.md](./CLAUDE.md#testing-guidelines))
3. Implement and refactor (see [CLAUDE.md](./CLAUDE.md#implementation-guidelines))
