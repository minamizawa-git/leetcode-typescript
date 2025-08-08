# LeetCode Learning Journey

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
