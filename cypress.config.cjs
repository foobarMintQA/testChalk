const { defineConfig } = require("cypress");
// import { defineConfig } from "cypress";
// const { chalk } = require("chalk");
import chalk from "chalk";
// import * as chalk from "chalk";


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        log({message, attributes}) {
          const fn = attributes.reduce((chalk, attr) => chalk[attr], chalk)
          console.log(fn(message))
          return null;
        },
      });

      return config;
    },
  },
});
