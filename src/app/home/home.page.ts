import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PopupComponent } from '../popup/popup.component'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slider = [
    'assets/images/download copy.jpg',
    'assets/images/download-2 copy.jpg',
    'assets/images/download-1 copy.jpg',
    'assets/images/download copy.png',
    'assets/images/download-1.jpg',
    'assets/images/download-3 copy.jpg',
    'assets/images/download-2.jpg',
    'assets/images/download-4.jpg',
    'assets/images/download-3.jpg',
    'assets/images/download-5 copy.jpg',
    'assets/images/download-6 copy.jpg',
    'assets/images/download-8 copy.jpg',
    'assets/images/download-4 copy.jpg',
    'assets/images/download-7 copy.jpg',
    'assets/images/download-6.jpg',
    'assets/images/download-8.jpg',
    'assets/images/download-7.jpg',
    'assets/images/download-9 copy.jpg',
    'assets/images/download-9.jpg',
    'assets/images/download-5.jpg',
    'assets/images/download-11 copy.jpg',
    'assets/images/download-10 copy.jpg',
    'assets/images/download-10.jpg',
    'assets/images/download-11.jpg',
    'assets/images/download-12 copy.jpg',
    'assets/images/download.jpg',
    'assets/images/download.png',
    'assets/images/download-12.jpg'
  ]

  slideOpts = {
		initialSlide: 10,
		speed: 400
  }
  constructor(private modal:ModalController) {}
  
  openslider = () => {
    this.modal.create({
      component: PopupComponent,
      componentProps: {
        scope: this
      }
    }).then((res) => {
      res.present()
    })  
  }
  
}
