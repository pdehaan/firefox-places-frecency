# firefox-places-frecency

Scan your Firefox profile's places.sqlite file and sort your moz_origins by frecency.

## USAGE

```sh
npx pdehaan/firefox-places-frecency -p "/Users/<your username>/Library/Application Support/Firefox/Profiles/<some profile dir>/places.sqlite"
```

**NOTE:** This runs super speedy locally, but extremely slow via `npx` since it seems to need to compile some dependency on each invocation (at least on macOS). :shrug:
