import { Component, Input } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular'

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent {
  
  @Input() scope

  constructor() {}

}
