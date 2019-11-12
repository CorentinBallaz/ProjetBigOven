import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestService } from '../rest.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})

export class DetailsPage implements OnInit {
  recipe : any;
  api : RestService;
  id : string;
  myImage: string;
  ingredients: any;

  isIndeterminate:boolean;
  masterCheck:boolean;

  constructor(public restapi: RestService, public loadingController: LoadingController, private route: ActivatedRoute) {

    this.api = restapi;

  }

async getRecipe(id:any) {


    const loading = await this.loadingController.create({
      message: 'Loading'
    });

    await loading.present();

    await this.api.getRecipe(this.id)
      .subscribe(res => {
        console.log(res);
        this.recipe = res[0].recipe;
        this.myImage=this.recipe.image_url;
        this.ingredients=[];
        for (var i = 0; i < this.recipe.ingredients.length; i++) {
          var currentIngredient = this.recipe.ingredients[i];
          var currentJson = {name:currentIngredient,isChecked:false};
          this.ingredients.push(currentJson);
        }
        console.log(this.ingredients);
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });

  }

  checkMaster() {
    setTimeout(()=>{
      this.ingredients.forEach(obj => {
        obj.isChecked = this.masterCheck;
      });
    });
  }
 
  checkEvent() {
    const totalItems = this.ingredients.length;
    let checked = 0;
    this.ingredients.map(obj => {
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
    this.id="5dadab6aa9ba868a58f72346";
    this.getRecipe(this.id);
  }

}
 
