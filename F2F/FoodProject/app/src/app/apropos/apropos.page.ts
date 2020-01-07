import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-apropos',
  templateUrl: './apropos.page.html',
  styleUrls: ['./apropos.page.scss'],
})
export class AproposPage implements OnInit {

  constructor(private _location: Location) {}

goBackToPreviousPage() {
  this._location.back();
}

  ngOnInit() {}

}
