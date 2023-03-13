/** @type {import('jest').Config} */
const config = {
    testEnvironment: "jsdom",
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/$1',
    },
};

module.exports = config;
