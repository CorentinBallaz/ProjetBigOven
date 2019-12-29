import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestService } from '../rest.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

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
    ingredientNames : any;

  isIndeterminate:boolean;
  masterCheck:boolean;

  constructor(public restapi: RestService, public loadingController: LoadingController, private route: ActivatedRoute, private alertCtrl: AlertController, public navCtrl: NavController) {

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
        //this.myImage=this.recipe.image_url;
        this.myImage = "http://www.gfnds.com/2017/en/upload/20170321/20170321203032.jpg";
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

  async getCart() {
    const loading = await this.loadingController.create({
        message: 'Loading'
      });
      await loading.present();

      this.ingredientNames = [];

      await this.api.getCart().subscribe(res => {

      for (var j = 0; j < res.length; j++) {
        var currentIngredientName = res[j].ingredient;
        this.ingredientNames.push(currentIngredientName);
      }
      loading.dismiss();
      },err => {
        console.log(err);
        loading.dismiss();
      });
      console.log(this.ingredientNames);
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

  addToCart() {

      this.ingredients.forEach((item) => {

     // console.log(this.ingredientNames.length);
      var isInCart = this.ingredientNames.includes(item.name);
      console.log(isInCart);
      if ((item.isChecked == true) && (isInCart == false)) {
        this.ingredientNames.push(item.name);
        this.api.addIngredient(item.name)
          .subscribe(res => {
            console.log(res);
          });
      }
    });
  }

  addToFavourites() {
    this.api.addFavoriRecipe(this.id)
          .subscribe(res => {
            console.log(res);
          });
  }

  showAlert() {
      let alert = this.alertCtrl.create({       
        message: "Ingrédient(s) ajouté(s) !",
        buttons: [
        {
          text: 'Rester sur cette page',
          role: 'cancel'
        },
        {
          text: 'Retourner à l\' acceuil',
          handler: () => {
                this.navCtrl.navigateRoot('home');
              }
        }]             
      }).then(alert=>alert.present());
      //setTimeout(()=>{
      //    alert.dismiss().then(alert=>alert.dismiss());
      //}, 50);
    }

  ngOnInit() {
    this.recipe={};
    this.route.paramMap.subscribe((params : ParamMap)=> {
      this.id=params.get('id');
    });
    this.getRecipe(this.id);
    this.getCart();
  }

}
 
