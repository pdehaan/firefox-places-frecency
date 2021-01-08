const sqlite = require("better-sqlite3");

module.exports = {
  async open(filename) {
    return sqlite(filename, {});
  },
};
