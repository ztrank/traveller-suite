import { NgModule } from '@angular/core';

import { CardComponent } from './card.component';
import { CardsComponent } from './cards.component';

@NgModule({
  declarations: [
    CardComponent,
    CardsComponent
  ],
  exports: [
    CardComponent,
    CardsComponent
  ]
})
export class ViewsModule { }
