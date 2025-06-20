/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js",
    "next/image": "<rootDir>/__mocks__/next/image.js",
  },
  setupFilesAfterEnv: [
    "<rootDir>/node_modules/@testing-library/jest-dom/dist/index.js",
  ],
  transformIgnorePatterns: ["/node_modules/"],
};
