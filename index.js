'use strict';

module.exports = roles => {
    if (typeof roles === 'string') {
        roles = [roles];
    }

    return function* (next) {
        if (!this.state || !this.state.user) {
            return yield next;
        }

        const userRoles = this.state.user.roles || [];
        const foundRoles = roles.filter(r => userRoles.some(ur => ur === r));

        if (!foundRoles.length) {
            this.throw(403);
        }

        yield next;
    };
};
