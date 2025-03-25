export default {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    testMatch: ['**/+(*.)+(spec).+(ts)?(x)'],
    transform: {
      '^.+\\.(ts|js|html)$': [
        'ts-jest',
        {
          tsconfig: 'tsconfig.spec.json',
          stringifyContentPathRegex: '\\.html$',
        },
      ],
    },
    transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
    moduleNameMapper: {
      '\\.(css|scss|sass|less)$': 'identity-obj-proxy',
    },
  };
  