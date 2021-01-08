const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");

module.exports = {
  async open(filename) {
    return sqlite.open({
      filename,
      driver: sqlite3.Database,
    });
  },
};
