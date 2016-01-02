'use strict';

module.exports = function (roles) {
    if (typeof roles === 'string') {
        roles = [roles];
    }

    return function* (next) {
        if (!this.state || !this.state.user) {
            return yield next;
        }

        var userRoles = this.state.user.roles || [];
        var foundRoles = roles.filter(r => userRoles.some(ur => ur === r));

        if (!foundRoles.length) {
            this.throw(403);
        }

        yield next;
    };
};
