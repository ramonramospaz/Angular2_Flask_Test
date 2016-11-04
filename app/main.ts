import {Component,NgModule} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {BrowserModule} from "@angular/platform-browser";
import {WebService} from "./webservice.component";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {routeConfig} from "./router-config";
import {Login} from "./login.component";
import {Activitie} from "./activities.component";

@Component({
    selector:'my-app',
    template: `
    	<div>
    	<router-outlet></router-outlet>
    	</div>
    `
})
export class App {

}


@NgModule({
    declarations: [App,Login,Activitie],
    imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(routeConfig)],
    bootstrap: [App],
    providers: [WebService]
})
export class AppModule {

}


platformBrowserDynamic().bootstrapModule(AppModule);
