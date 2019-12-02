import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestService } from '../rest.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {
  api : RestService;
  publisher : string;
  recipeNames : any;
  myImage: string;
  isIndeterminate:boolean;
  masterCheck:boolean;

  constructor(public restapi: RestService, public loadingController: LoadingController, private route: ActivatedRoute) {

    this.api = restapi;

  }

async getAllRecipes() {
	const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();

    await this.api.getRecipes().subscribe(res => {
    console.log(res[0]);
    this.recipeNames = [];
    for (var j = 0; j < res.length; j++) {
    	var currentRecipeName = res[j].recipe.title;
    	var currentImage = res[j].recipe.image_url;
    	var currentId = res[j]._id;
    	console.log(currentId);
    	var currentJsonRecipeName = {name:currentRecipeName, image:currentImage, id:currentId};
    	this.recipeNames.push(currentJsonRecipeName);
    }
    console.log(this.recipeNames);
    loading.dismiss();
    },err => {
    	console.log(err);
    	loading.dismiss();
    });
}

  ngOnInit() {

    this.getAllRecipes();
  }

}
