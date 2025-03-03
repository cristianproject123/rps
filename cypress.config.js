import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },

    specPattern: "cypress/e2e/**/*.spec.js", // Specify the pattern for the test files
    fixturesFolder: "cypress/fixtures",
    supportFile: "cypress/support/e2e.js",
    baseUrl: "http://127.0.0.1:8080",  //development url, (Note: executes ‘npx http-server’ in project terminal)
  },
});
