#! /usr/bin/env node
const yargs = require("yargs");
const { program } = require("commander");
program.version("0.0.1");

const utils = require("./utils.js");

program.command("read").description("read list of cats").action(utils.readAll);

program
  .command("add")
  .argument("<name>", "cat name")
  .argument("<color>", "color")
  .option("-w, --weight <weight>", "cat's weight")
  .option("-a, --age <age>", "cat's age")
  .action((name, color, weight, age) => {
    console.log(`cat named ${name} added`);
    utils.add(name, color, weight, age);
  });
program
  .command("update")
  .description("update a cat")
  .argument("<name>", "cat name")
  .option("-c, --color <color>", "change its color")
  .option("-w, --weight <weight>", "change its weight")
  .option("-a, --age <age>", "changed age")
  .action((name, color, weight, age) => {
    utils.updateOne(name, color, weight, age);
  });
program
  .command("delete")
  .description("delete a cat")
  .argument("<name>", "cat name")
  .action((name) => {
    utils.delete(name);
  });

program.parse(process.argv);
const options = program.opts();
