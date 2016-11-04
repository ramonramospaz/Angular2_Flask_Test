import {Login} from "./login.component";
import {Activitie} from "./activities.component";
import {Route} from "@angular/router";



const fallbackRoute: Route = {
	path: '**',
	component:Login
}

export const routeConfig = [
	{
		path: '',
		component:Login

	},
	{
		path: 'Main/:id/:token',
		component:Activitie
	},
	fallbackRoute

];