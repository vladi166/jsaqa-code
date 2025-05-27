module.exports = {
  testEnvironment: "node", 
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/coverage/**",
    "!**/jest.config.js" // <-- исключаем сам файл конфигурации
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
