module.exports = {
    setupTestFrameworkScriptFile: "./tests/setupTests.js",
    verbose: true,
    collectCoverageFrom: [
        "src/**/*.{js,jsx}"
    ],
    coverageDirectory: './coverage',
    moduleNameMapper: {
        ".*scss$": "<rootDir>/tests/mocks/stub.js"
    },
};