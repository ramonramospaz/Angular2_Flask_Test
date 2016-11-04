import {Injectable} from "@angular/core";
import {Http,Headers} from "@angular/http";
import {Router,ActivatedRoute} from "@angular/router";
import 'rxjs/add/operator/map';

@Injectable()
export class WebService {
	
	respuesta:any;
	actividades=[];
	baseurl:string;
	ruta:string;
	mensaje:string;

	constructor(private http:Http, private router:Router)  { 
		this.baseurl='https://ramonramospaz.pythonanywhere.com/';

	}

	login(usuario:string,clave:string){
		console.log("Se esta accesando con el usuario "+usuario+" y la clave "+clave);
		const acceso = {
			"usuario": usuario,
			"clave": clave
		};
		const headers = new Headers();
		headers.append("Content-Type","application/json");
		console.log(JSON.stringify(headers.toJSON()));
		console.log(JSON.stringify(acceso));
		this.http.post(this.baseurl+'autenticar',
						JSON.stringify(acceso), {headers: headers})
						.map(res => res.json())
						.subscribe(
							respuesta => {
								this.respuesta=respuesta;
								console.log(this.respuesta['token']+' '+this.respuesta['id']);
								this.ruta='Main/'+this.respuesta['id']+'/'+this.respuesta['token'];
								this.router.navigateByUrl(this.ruta);

							},
							err => {
								console.error("Error occurred in login:",err);
								this.mensaje="Clave invalida";
							}

						);


	}

	listActivities(id:string,token:string){
		console.log("Trayendo lista de actividades del usuario id="+id);
		const lista = {

				"id":id,
				"token":token
			};
		const headers = new Headers();
		headers.append("Content-Type","application/json");
		console.log(JSON.stringify(headers.toJSON()));
		console.log(JSON.stringify(lista));
		this.http.post(this.baseurl+'listar',
						JSON.stringify(lista), {headers: headers})
						.map(res => res.json())
						.subscribe(
							respuesta => {
								this.actividades=respuesta;
							},
							err => {
								console.error("Error occurred:",err);
								this.router.navigateByUrl('/');
							}
						);	
		
	}

	AddActivities(id_user:string,titulo:string,descripcion:string,token:string){
		console.log("Agregando actividad");
		const actividad = {
				"id":id_user,
				"titulo":titulo,
				"descripcion":descripcion,
				"token":token
		}
		const headers = new Headers();
		headers.append("Content-Type","application/json");
		console.log(JSON.stringify(headers.toJSON()));
		console.log(JSON.stringify(actividad));
		this.http.post(this.baseurl+'agregar',
						JSON.stringify(actividad), {headers: headers})
						.map(res => res.json())
						.subscribe(
							respuesta => {
								this.respuesta=respuesta;
								this.listActivities(id_user,token);
							},
							err => console.error("Error occurred:",err)
						);


	}

	delActividad(id_user:string,id_tran:string,token:string){
		console.log("Eliminando la Actividad");
			const acceso = {
				"id_tran": id_tran,
				"token": token
			};
			const headers = new Headers();
			headers.append("Content-Type","application/json");
			console.log(JSON.stringify(headers.toJSON()));
			console.log(JSON.stringify(acceso));
			this.http.post(this.baseurl+'eliminar',
						JSON.stringify(acceso), {headers: headers})
						.map(res => res.json())
						.subscribe(
							respuesta => {
								this.respuesta=respuesta;
								this.listActivities(id_user,token);
							},
							err => console.error("Error occurred in del:",err)
						);



	}

	goHome(){
		this.mensaje='';
		this.router.navigateByUrl('/');
	}
}

