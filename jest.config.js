module.exports = {
  preset: 'ts-jest',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  testEnvironment: "jsdom",
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest',
  },
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
};