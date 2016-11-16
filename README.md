# Repro for this issue

"supertest throwing 404 error when stress testing express router"

- https://github.com/expressjs/express/issues/3099
- https://github.com/visionmedia/supertest/issues/377

# Installation

- `git clone https://github.com/jon301/express-router-test.git`
- `cd express-router-test`
- `npm install` or `yarn`
- `./node_modules/.bin/gulp test`

This will do many requests against the same route and will crash after a while.
