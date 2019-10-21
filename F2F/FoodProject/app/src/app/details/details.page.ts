import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  constructor() { }

public myImage: string;


loadImage() {
   this.myImage = "https://photos.bigoven.com/recipe/hero/dinner-tonight-thyme-rubbed-pork-ch-2.jpg?h=500&w=500";
   console.log(this.myImage);
}
  ngOnInit() {

  	this.loadImage();
  }

}
