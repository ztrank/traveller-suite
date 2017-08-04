import { NgModule } from '@angular/core';

import { CharacterModule } from './character/character.module';

@NgModule({
  imports: [
    CharacterModule
  ],
  exports:[
  	CharacterModule
  ]
})
export class FeaturesModule { }
