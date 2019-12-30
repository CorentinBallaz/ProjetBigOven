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
  idFavori: any;

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
        console.log(this.id);
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


  addToCart() {
    this.ingredients.forEach((item) => {
      if (item.isChecked == true) {

        this.api.addIngredient(item.name)
          .subscribe(res => {
            console.log(res);
          });
      }
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

  addToFavourites() {
    let isIn = false;
    this.api.getFavoriRecipes().subscribe(resFavori => {
        console.log(resFavori);
        this.idFavori = [];
        for (var k = 0; k < resFavori.length; k++) {
          this.api.getRecipe(resFavori[k].id).subscribe(resFavori2 => {
            var currentId2 = resFavori2[0]._id;
            this.idFavori.push(currentId2);
          });
          };
        });
    console.log(this.idFavori);
    this.api.addFavoriRecipe(this.id)
          .subscribe(res => {
            //console.log(res);
          }); 
  }

  ngOnInit() {
    this.recipe={};
    this.route.paramMap.subscribe((params : ParamMap)=> {
      this.id=params.get('id');
    });
    this.getRecipe(this.id);
  }

}
 
