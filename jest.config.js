/** @type {import('jest').Config} */
module.exports = {
  // Configuration for using TypeScript
  preset: 'ts-jest',
  testEnvironment: 'node',

  // Location of test files
  roots: ['<rootDir>/src'],

  // Test file pattern (files ending with .test.ts)
  testMatch: ['**/*.test.ts'],
};
