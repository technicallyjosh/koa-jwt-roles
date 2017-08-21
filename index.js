'use strict';

module.exports = function koaJwtRoles(roles) {
    return async function(ctx, next) {
        if (typeof roles === 'string') {
            roles = [roles];
        }

        if (!ctx.state || !ctx.state.user) {
            await next();

            return;
        }

        const userRoles = ctx.state.user.roles || [];
        const foundRoles = roles.filter(r => userRoles.some(ur => ur === r));

        if (!foundRoles.length) {
            ctx.throw(403);
        }

        await next();
    };
};
