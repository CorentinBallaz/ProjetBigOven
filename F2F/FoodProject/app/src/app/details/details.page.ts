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
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });

  }

  ngOnInit() {
    this.recipe={};
    this.id="5dadab6aa9ba868a58f72346";
    this.getRecipe(this.id);
  }

}
