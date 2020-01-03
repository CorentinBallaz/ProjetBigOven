import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestService } from '../rest.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.page.html',
  styleUrls: ['./favoris.page.scss'],
})

export class FavorisPage implements OnInit {
  api : RestService;
  publisher : string;
  recipeNames : any;
  myImage: string;
  isIndeterminate:boolean;
  masterCheck:boolean;

  constructor(public restapi: RestService, public loadingController: LoadingController, private route: ActivatedRoute) {

    this.api = restapi;

  }

async getFavoriRecipes() {
  const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();

    await this.api.getFavoriRecipes().subscribe(res => {
    console.log(res);
    this.recipeNames = [];
    for (var j = 0; j < res.length; j++) {
      this.api.getRecipe(res[j].id).subscribe(res1 => {
        var currentRecipeName = res1[0].recipe.title;
        var currentImage = "http://www.gfnds.com/2017/en/upload/20170321/20170321203032.jpg";
        var currentId = res1[0]._id;
        var currentJsonRecipeName = {name:currentRecipeName, image:currentImage, id:currentId};
        this.recipeNames.push(currentJsonRecipeName);
      });
    }
    loading.dismiss();
    },err => {
      console.log(err);
      loading.dismiss();
    });
}

  ngOnInit() {
    this.recipeNames = [];
    this.getFavoriRecipes();
  }

  /*ionViewWillEnter() {
    this.recipeNames = [];
    this.getFavoriRecipes();
  }*/

}

