const db = require("./db");

module.exports = {
  async moz_origins(filename, prefixes = ["http://", "https://"]) {
    const QUERY =
      "SELECT prefix, host, frecency FROM moz_origins ORDER BY frecency DESC";
    const $places = await db.open(filename);

    let rows = await $places.prepare(QUERY).all();
    rows = rows.map((origin) =>
      Object.assign(origin, {
        uri: new URL(`${origin.prefix}${origin.host}`).href,
      })
    );

    if (Array.isArray(prefixes) && prefixes.length > 0) {
      return rows.filter((origin) => prefixes.includes(origin.prefix));
    }
    return rows;
  },
};
