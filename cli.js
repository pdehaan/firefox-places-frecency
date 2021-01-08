#!/usr/bin/env node

const meow = require("meow");

const lib = require("./lib");
const pkg = require("./package.json");

const cli = meow(
  `
  Usage
    $ npx pdehaan/${pkg.name} <options>

  Options
    --profile, -p  Fully qualified path to profile directory and places.sqlite file.

  Examples
    $ npx pdehaan/${pkg.name} -p "/Users/pdehaan/Library/Application Support/Firefox/Profiles/<some profile dir>/places.sqlite"
`,
  {
    flags: {
      profile: {
        type: "string",
        alias: "p",
        isRequired: true,
      },
    },
  }
);

main(cli.flags);

async function main(flags = {}) {
  if (!flags?.profile) {
    console.error("path to profile sqlite DB not specified.");
    process.exitCode = 1;
    return;
  }
  const origins = await lib.moz_origins(flags.profile);

  for (const origin of origins) {
    console.log(`${origin.uri} (frecency: ${origin.frecency})`);
  }
}
