import { Component, OnInit } from '@angular/core';
import {RestService} from '../rest.service';
import {LoadingController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-research',
  templateUrl: './research.page.html',
  styleUrls: ['./research.page.scss'],
})
export class ResearchPage implements OnInit {
  api: RestService;
  constructor(public restapi: RestService, public loadingController: LoadingController, private route: ActivatedRoute) {

    this.api = restapi;

  }




  ngOnInit() {
  }

}
