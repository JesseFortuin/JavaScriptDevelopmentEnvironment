/* eslint-disable no-console */
import { generate, extend } from "json-schema-faker";
import { schema } from "./MockDataSchema";
import fs from "fs";
import chalk from "chalk";

//add additional fake libraries here
extend("faker", () => require("faker"));
const json = JSON.stringify(generate(schema));

fs.writeFile("./src/api/db.json", json, function (err) {
  if (err) {
    return console.log(chalk.red(err));
  }else {
    console.log(chalk.green("Mock data generated"));
  }
});
