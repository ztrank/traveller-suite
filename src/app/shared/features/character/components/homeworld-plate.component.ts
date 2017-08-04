import { Component, Input, HostBinding } from '@angular/core';

import { Character } from '../../../../models/character';
import { CardComponent, CardTemplate } from '../../../semantic/views/card.component';

declare var module:any;

@Component({
	moduleId:module.id,
	selector:'[trv-character-homeworld-plate]',
	template:
	`
	<div class="content" *ngIf="character">
		<div class="header">{{character.homeworld.name}}</div>
		<div class="description">
			Tech&nbsp;{{character.homeworld.tech}}&nbsp;-&nbsp;Law&nbsp;{{character.homeworld.law}}&nbsp;-&nbsp;Population&nbsp;~&nbsp;{{character.homeworld.population}}
		</div>
	</div>
	`
})
export class HomeworldPlateComponent extends CardComponent {
	@Input('character') _character:Character;

	constructor() {
		super();
	}

	get character():Character {
		return this._character;
	}
}