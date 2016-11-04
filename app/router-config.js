"use strict";
var login_component_1 = require("./login.component");
var activities_component_1 = require("./activities.component");
var fallbackRoute = {
    path: '**',
    component: login_component_1.Login
};
exports.routeConfig = [
    {
        path: '',
        component: login_component_1.Login
    },
    {
        path: 'Main/:id/:token',
        component: activities_component_1.Activitie
    },
    fallbackRoute
];
//# sourceMappingURL=router-config.js.map