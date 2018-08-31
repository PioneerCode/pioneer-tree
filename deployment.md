Document used to outline the steps needed before deploying a new release.

* Inusre you are logged into npm from the command line. Check email address against account.
* Update Changelog
* Bump version in `./projects/pctree/package.json`
* Bump version in `./package.json`
* Run one of the following....
  * Test production build `npm run build:lib`
  * Tag as RC build and publish `npm run:build:lib:tag`
  * Publish final release `npm run:build:lib`

