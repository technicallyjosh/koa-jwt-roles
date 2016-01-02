# koa-jwt-roles
Koa role middleware for use with koa-jwt.

`npm i -S koa-jwt-roles`

This module checks against the context user decoded by koa-jwt.

## Example usage:
```js
... app, koa-jwt, koa-router
var roles  = require('koa-jwt-roles');

// single check
router.get('/', roles('admin'), function* () {
    // if the jwt has admin in roles, this will hit
});

// multiple check
router.get('/', roles(['admin', 'moderator']), function* () {
    // if the jwt has admin or moderator, this will hit
});
```
