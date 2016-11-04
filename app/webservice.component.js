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
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
require('rxjs/add/operator/map');
var WebService = (function () {
    function WebService(http, router) {
        this.http = http;
        this.router = router;
        this.actividades = [];
        this.baseurl = 'https://ramonramospaz.pythonanywhere.com/';
    }
    WebService.prototype.login = function (usuario, clave) {
        var _this = this;
        console.log("Se esta accesando con el usuario " + usuario + " y la clave " + clave);
        var acceso = {
            "usuario": usuario,
            "clave": clave
        };
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        console.log(JSON.stringify(headers.toJSON()));
        console.log(JSON.stringify(acceso));
        this.http.post(this.baseurl + 'autenticar', JSON.stringify(acceso), { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (respuesta) {
            _this.respuesta = respuesta;
            console.log(_this.respuesta['token'] + ' ' + _this.respuesta['id']);
            _this.ruta = 'Main/' + _this.respuesta['id'] + '/' + _this.respuesta['token'];
            _this.router.navigateByUrl(_this.ruta);
        }, function (err) {
            console.error("Error occurred in login:", err);
            _this.mensaje = "Clave invalida";
        });
    };
    WebService.prototype.listActivities = function (id, token) {
        var _this = this;
        console.log("Trayendo lista de actividades del usuario id=" + id);
        var lista = {
            "id": id,
            "token": token
        };
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        console.log(JSON.stringify(headers.toJSON()));
        console.log(JSON.stringify(lista));
        this.http.post(this.baseurl + 'listar', JSON.stringify(lista), { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (respuesta) {
            _this.actividades = respuesta;
        }, function (err) {
            console.error("Error occurred:", err);
            _this.router.navigateByUrl('/');
        });
    };
    WebService.prototype.AddActivities = function (id_user, titulo, descripcion, token) {
        var _this = this;
        console.log("Agregando actividad");
        var actividad = {
            "id": id_user,
            "titulo": titulo,
            "descripcion": descripcion,
            "token": token
        };
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        console.log(JSON.stringify(headers.toJSON()));
        console.log(JSON.stringify(actividad));
        this.http.post(this.baseurl + 'agregar', JSON.stringify(actividad), { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (respuesta) {
            _this.respuesta = respuesta;
            _this.listActivities(id_user, token);
        }, function (err) { return console.error("Error occurred:", err); });
    };
    WebService.prototype.delActividad = function (id_user, id_tran, token) {
        var _this = this;
        console.log("Eliminando la Actividad");
        var acceso = {
            "id_tran": id_tran,
            "token": token
        };
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        console.log(JSON.stringify(headers.toJSON()));
        console.log(JSON.stringify(acceso));
        this.http.post(this.baseurl + 'eliminar', JSON.stringify(acceso), { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (respuesta) {
            _this.respuesta = respuesta;
            _this.listActivities(id_user, token);
        }, function (err) { return console.error("Error occurred in del:", err); });
    };
    WebService.prototype.goHome = function () {
        this.mensaje = '';
        this.router.navigateByUrl('/');
    };
    WebService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], WebService);
    return WebService;
}());
exports.WebService = WebService;
//# sourceMappingURL=webservice.component.js.map