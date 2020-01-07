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
    	//var currentImage = res[j].recipe.image_url;
      var currentImage = "https://www.cocacola.fr/content/dam/GO/CokeZone/Common/global/logo/logodesktop/coca-cola-logo-260x260.png";
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
async getRecipes(evt){
      // console.log(evt.srcElement.value);
    if (evt.srcElement.value == ""){
        this.getAllRecipes();
    }
    else {
        await this.api.getResearchRecipes(evt.srcElement.value).subscribe(res => {

            console.log(res[0]);
            this.recipeNames = [];
            for (var j = 0; j < res.length; j++) {
                var currentRecipeName = res[j].recipe.title;
                //var currentImage = res[j].recipe.image_url;
                var currentImage = "http://www.gfnds.com/2017/en/upload/20170321/20170321203032.jpg";
                var currentId = res[j]._id;
                console.log(currentId);
                var currentJsonRecipeName = {name:currentRecipeName, image:currentImage, id:currentId};
                this.recipeNames.push(currentJsonRecipeName);
            }
            console.log(this.recipeNames);
            // loading.dismiss();
        },err => {
            console.log(err);
            // loading.dismiss();
        });

    }


    // console.log(evt.srcElement.value);
}
ngOnChange(){
    this.getAllRecipes();
}
  ngOnInit() {
    this.getAllRecipes();
  }

}
