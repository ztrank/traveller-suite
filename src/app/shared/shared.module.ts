import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SemanticUiModule } from './semantic/semantic-ui.module';
import { FeaturesModule } from './features/features.module';

@NgModule({
  imports:[
  	CommonModule,
  	SemanticUiModule,
  	FeaturesModule
  ],
  exports: [
  	CommonModule,
  	SemanticUiModule,
  	FeaturesModule
  ]
})
export class SharedModule { }
