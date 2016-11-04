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
var router_1 = require("@angular/router");
var Activitie = (function () {
    function Activitie(mywebservice, router) {
        this.mywebservice = mywebservice;
        this.id_user = router.snapshot.params['id'];
        this.token = router.snapshot.params['token'];
        console.log("los datos son " + this.id_user + " " + this.token);
        mywebservice.listActivities(this.id_user, this.token);
        console.log(mywebservice.actividades);
    }
    Activitie.prototype.addActividad = function () {
        this.mywebservice.AddActivities(this.id_user, this.myTitulo, this.myDescripcion, this.token);
        this.myTitulo = "";
        this.myDescripcion = "";
    };
    Activitie.prototype.delActividad = function (id_trans) {
        this.mywebservice.delActividad(this.id_user, id_trans, this.token);
    };
    Activitie = __decorate([
        core_1.Component({
            selector: 'my-activite',
            template: "\n    <div class=\"container\">\n    <div class=\"row\">\n    <div class=\"col-xs-6 col-md-6\">\n    \t<h1 class=\"title\">Lista de Actividades</h1>\n        <form>\n        <div class=\"form-group\">\n            \n                <label>Actividad</label>\n                <input [(ngModel)]=\"myTitulo\" class=\"form-inline\" type=\"text\" placeholder=\"Ingresar Titulo\" name=\"titulo\">\n                <input [(ngModel)]=\"myDescripcion\" type=\"test\" class=\"form-inline\" placeholder=\"Ingresar Descripcion\" name=\"descripcion\">\n                <button type=\"button\" class=\"btn form-inline btn-default\" (click)=\"addActividad()\">\n                    <span class=\"glyphicon glyphicon-plus\"></span>\n                </button>\n            \n        </div>\n        </form>\n        <div class=\"form-group\">\n            <button type=\"button\" class=\"btn btn-default btn-sm\" (click)=\"mywebservice.goHome()\">\n                                  <span class=\"glyphicon glyphicon-remove\"></span> Regresar\n                            </button>\n        </div>\n         <div class=\"table-responsive\">\n              <table class=\"table table-bordered panel-heading\">\n                   <thead>\n                      <tr class=\"panel\" style=\"background-color:darkblue;color:white\">\n                        <th>Titulo</th>\n                        <th>Descripci\u00F3n</th>\n                        <th>Opci\u00F3n</th>\n                      </tr>\n                   </thead>\n                   <tbody>\n                      <tr *ngFor=\"let actividad of mywebservice.actividades\"> \n                        <td>{{actividad.titulo}}</td>\n                        <td>{{actividad.descripcion}}</td>\n                        <td>\n                            <button type=\"button\" class=\"btn btn-default btn-sm\" (click)=\"delActividad(actividad.id_tran)\">\n                                  <span class=\"glyphicon glyphicon-remove\"></span> Quitar\n                            </button>\n                        </td>\n                      </tr>\n                   </tbody>\n              </table>\n        </div> \n    </div>\n    </div>\n    </div>\n    \n    "
        }), 
        __metadata('design:paramtypes', [webservice_component_1.WebService, router_1.ActivatedRoute])
    ], Activitie);
    return Activitie;
}());
exports.Activitie = Activitie;
//# sourceMappingURL=activities.component.js.map