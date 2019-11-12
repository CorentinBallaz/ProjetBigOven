import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestService } from '../rest.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

	api : RestService;

	constructor(public restapi: RestService, public loadingController: LoadingController, private route: ActivatedRoute) {

	    this.api = restapi;

	  }

	async getRecipes(){

		 const loading = await this.loadingController.create({
	      message: 'Loading'
	    });

	    await loading.present();

	    await this.api.getAllRecipes().subscribe(res => {
	        console.log(res);
	        }, err => {
	        console.log(err);
	        loading.dismiss();
	      });
	}

	ngOnInit() {

	    this.getRecipes();


	  }
}