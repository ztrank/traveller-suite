import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NameplaceComponent } from './components/nameplate.component';
import { HomeworldPlateComponent } from './components/homeworld-plate.component';

@NgModule({
	imports:[CommonModule],
  	declarations: [
    	NameplaceComponent,
    	HomeworldPlateComponent
  	],
  	exports:[
  		NameplaceComponent,
  		HomeworldPlateComponent
  	]
})
export class CharacterModule { }
