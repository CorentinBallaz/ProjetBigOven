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
    	console.log(currentRecipeName);
    	var currentJsonRecipeName = {name:currentRecipeName,isChecked:false};
    	this.recipeNames.push(currentJsonRecipeName);
    }
    console.log(this.recipeNames);
    loading.dismiss();
    },err => {
    	console.log(err);
    	loading.dismiss();
    });
}

  checkMaster() {
    setTimeout(()=>{
      this.recipeNames.forEach(obj => {
        obj.isChecked = this.masterCheck;
      });
    });
  }
 
  checkEvent() {
    const totalItems = this.recipeNames.length;
    let checked = 0;
    this.recipeNames.map(obj => {
      if (obj.isChecked) checked++;
    });
    if (checked > 0 && checked < totalItems) {
      //If even one item is checked but not all
      this.isIndeterminate = true;
      this.masterCheck = false;
    } else if (checked == totalItems) {
      //If all are checked
      this.masterCheck = true;
      this.isIndeterminate = false;
    } else {
      //If none is checked
      this.isIndeterminate = false;
      this.masterCheck = false;
    }
  }

  ngOnInit() {
    this.recipe={};
    this.getAllRecipes();
  }

}
