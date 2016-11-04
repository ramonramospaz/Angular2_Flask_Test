import {Component} from "@angular/core";
import {WebService} from "./webservice.component";
import {FormsModule} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";



@Component({
    selector:'my-activite',
    template: `
    <div class="container">
    <div class="row">
    <div class="col-xs-6 col-md-6">
    	<h1 class="title">Lista de Actividades</h1>
        <form>
        <div class="form-group">
            
                <label>Actividad</label>
                <input [(ngModel)]="myTitulo" class="form-inline" type="text" placeholder="Ingresar Titulo" name="titulo">
                <input [(ngModel)]="myDescripcion" type="test" class="form-inline" placeholder="Ingresar Descripcion" name="descripcion">
                <button type="button" class="btn form-inline btn-default" (click)="addActividad()">
                    <span class="glyphicon glyphicon-plus"></span>
                </button>
            
        </div>
        </form>
        <div class="form-group">
            <button type="button" class="btn btn-default btn-sm" (click)="mywebservice.goHome()">
                                  <span class="glyphicon glyphicon-remove"></span> Regresar
                            </button>
        </div>
         <div class="table-responsive">
              <table class="table table-bordered panel-heading">
                   <thead>
                      <tr class="panel" style="background-color:darkblue;color:white">
                        <th>Titulo</th>
                        <th>Descripción</th>
                        <th>Opción</th>
                      </tr>
                   </thead>
                   <tbody>
                      <tr *ngFor="let actividad of mywebservice.actividades"> 
                        <td>{{actividad.titulo}}</td>
                        <td>{{actividad.descripcion}}</td>
                        <td>
                            <button type="button" class="btn btn-default btn-sm" (click)="delActividad(actividad.id_tran)">
                                  <span class="glyphicon glyphicon-remove"></span> Quitar
                            </button>
                        </td>
                      </tr>
                   </tbody>
              </table>
        </div> 
    </div>
    </div>
    </div>
    
    `
})
export class Activitie {

	myTitulo:string;
    myDescripcion:string;
    id_user:string;
    token:string;

	constructor(private mywebservice:WebService,router:ActivatedRoute){
		this.id_user=router.snapshot.params['id'];
        this.token=router.snapshot.params['token'];
        console.log("los datos son "+ this.id_user + " " +this.token);        
        mywebservice.listActivities(this.id_user,this.token);

        console.log(mywebservice.actividades);
	}

    addActividad(){
        this.mywebservice.AddActivities(this.id_user,this.myTitulo,this.myDescripcion,this.token);
        this.myTitulo="";
        this.myDescripcion="";
    }

    delActividad(id_trans:string){
        this.mywebservice.delActividad(this.id_user,id_trans,this.token);
    }

	

}