import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestService } from '../rest.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
	recipe : any;
  api : RestService;
  id : string;
  myImage: string;
  ingredients: any;

  	constructor(public restapi: RestService, public loadingController: LoadingController, private route: ActivatedRoute) {

    this.api = restapi;

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
  ngOnInit() {
  	
  	this.getCart();
  }

}
