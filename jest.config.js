const { jestConfig } = require('@salesforce/sfdx-lwc-jest/config');
module.exports = {
    ...jestConfig,
    moduleNameMapper: {
        '^lightning/navigation$':
            '<rootDir>/fs-core/test/jest-mocks/lightning/navigation',
    },
    // add any custom configurations here
};