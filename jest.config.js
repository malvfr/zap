module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverage: true,
  collectCoverageFrom: ["./src/**/*.ts"],
  moduleFileExtensions: ["ts", "js", "json"],
  coveragePathIgnorePatterns: [
    "logger.ts"
],
};