"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var webservice_component_1 = require("./webservice.component");
var Login = (function () {
    function Login(mywebservice) {
        this.mywebservice = mywebservice;
    }
    Login.prototype.acceso = function () {
        this.mywebservice.login(this.FormUsuario, this.FormPassword);
    };
    Login = __decorate([
        core_1.Component({
            selector: 'my-login',
            template: "\n    <div class=\"container\">\n    <div class=\"row\">\n    <div class=\"col-sm-6 col-sm-offset-3\">\n        <div class=\"panel-title text-center\">\n        <h1 class=\"title\">Actividades Log-in</h1>\n        </div>\n        <form>\n    \t<div class=\"form-group col-sm-6 col-sm-offset-3\">\n    \t    <label for=\"usuario\">Usuario:</label>\n    \t    <input [(ngModel)]=\"FormUsuario\" class=\"form-control\" name=\"usuario\" placeholder=\"Ingresar Usuario\" required>\n    \t</div>\n    \t<div class=\"form-group col-sm-6 col-sm-offset-3\">\n    \t    <label for=\"password\">Password:</label>\n    \t    <input [(ngModel)]=\"FormPassword\" type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Ingresar Password\" required>\n    \t    <br>\n            <button type=\"button\" class=\"btn btn-lg btn-primary btn-block\" (click)=\"acceso()\">Enviar</button>\n        </div>\n        </form>\n        <div class=\"form-group col-sm-6 col-sm-offset-3\">\n            {{mywebservice.mensaje}}\n        </div>\n    </div>\n    </div>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [webservice_component_1.WebService])
    ], Login);
    return Login;
}());
exports.Login = Login;
//# sourceMappingURL=login.component.js.map