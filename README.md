# koa-jwt-roles
Koa role middleware for use with koa-jwt.

[![npm version](https://badge.fury.io/js/koa-jwt-roles.svg)](https://badge.fury.io/js/koa-jwt-roles)

**Written for Koa 2 with Node 7.6+**

*For the Koa 1 version, use the latest 0.x version.*

`npm i -S koa-jwt-roles`

This module checks against the context user decoded by koa-jwt.

## Simple usage:
```js
//... app, koa-jwt, koa-router
const roles = require('koa-jwt-roles');

// single check
router.get('/', roles('admin'), async function (ctx) {
    // if the jwt has admin in roles, this will hit
});

// multiple check
router.get('/', roles(['admin', 'moderator']), async function (ctx) {
    // if the jwt has admin or moderator, this will hit
});
```

## Router usage:

If you have a lot of routes, the previous example can become very tedious. The next example makes life a bit easier if an entire route prefix uses the same roles.

```js
// this could be an admin router where you only want admin to access.
... app, koa-jwt, koa-router
const roles = require('koa-jwt-roles');

router.use(roles('admin'));

router.get('/user/:id', async function (ctx) {
    // admin can access this
});
```
