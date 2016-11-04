import {Component} from "@angular/core";
import {WebService} from "./webservice.component";
import {FormsModule} from "@angular/forms";



@Component({
    selector:'my-login',
    template: `
    <div class="container">
    <div class="row">
    <div class="col-sm-6 col-sm-offset-3">
        <div class="panel-title text-center">
        <h1 class="title">Actividades Log-in</h1>
        </div>
        <form>
    	<div class="form-group col-sm-6 col-sm-offset-3">
    	    <label for="usuario">Usuario:</label>
    	    <input [(ngModel)]="FormUsuario" class="form-control" name="usuario" placeholder="Ingresar Usuario" required>
    	</div>
    	<div class="form-group col-sm-6 col-sm-offset-3">
    	    <label for="password">Password:</label>
    	    <input [(ngModel)]="FormPassword" type="password" class="form-control" name="password" placeholder="Ingresar Password" required>
    	    <br>
            <button type="button" class="btn btn-lg btn-primary btn-block" (click)="acceso()">Enviar</button>
        </div>
        </form>
        <div class="form-group col-sm-6 col-sm-offset-3">
            {{mywebservice.mensaje}}
        </div>
    </div>
    </div>
    </div>
    `
})
export class Login {

	FormUsuario:string;
	FormPassword:string;

	constructor(private mywebservice:WebService){

	}

	acceso(){
		this.mywebservice.login(this.FormUsuario,this.FormPassword);
	}

}