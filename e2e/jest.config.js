/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  rootDir: '..',
  forceExit: true,
  testMatch: ["**/?(*.)(e2e).ts?(x)"],
  testTimeout: 120000,
  maxWorkers: 1,
  globalSetup: 'detox/runners/jest/globalSetup',
  globalTeardown: 'detox/runners/jest/globalTeardown',
  setupFilesAfterEnv: ['<rootDir>/e2e/setup.ts'],
  reporters: ['detox/runners/jest/reporter'],
  testEnvironment: 'detox/runners/jest/testEnvironment',
  verbose: true,
};