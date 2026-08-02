// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: 1,
  /* Opt out of parallel tests on CI. */
  workers: 2,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",
   // screenshot: "on-first-failure",
   // video: {mode: "on-first-retry", size: {width: 1900, height: 1080}},

    launchOptions: {
      slowMo: 0, // slow down by given milliseconds
    },

  },

  /* Configure projects for major browsers */
  projects: [
    
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        viewport: {width: 1900, height: 1080} 
      },
    },

    /*
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        viewport: {width: 1900, height: 1080} 
      },
    },

    {
      name: 'firefox',
      use: { 
        ...devices['Desktop Firefox'],
        viewport: {width: 1850, height: 1000} 
       },
    },

    {
      name: 'webkit',
      use: { 
        ...devices['Desktop Safari'],
        viewport: {width: 1850, height: 1000}  
      },
    },

     {
      name: 'Google Chrome',
      use: { 
        ...devices['Desktop Chrome'],
        channel: 'chrome',
        viewport: {width: 1900, height: 1080} 
      },
    },

    {
      name: 'Microsoft Edge',
      use: { 
        ...devices['Desktop Edge'],
        channel: 'msedge',
        viewport: {width: 1900, height: 1080} 
      },
    },

     {
      name: 'Mobile Chrome',
      use: { 
        ...devices['Galaxy Note 3'],
      },
    },

    {
      name: 'Mobile Safari',
      use: { 
        ...devices['iPhone 13'],
      },
    },
*/
 

  ],
});

