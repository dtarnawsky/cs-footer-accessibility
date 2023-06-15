import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  constructor() { }

  ionViewDidEnter() {
    // Here is an example to manually override the role
    //document.getElementsByTagName('ion-footer')[0].setAttribute('role', 'none');    
  }
}
