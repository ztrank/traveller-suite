import { Component, Input, HostBinding } from '@angular/core';

import { Character } from '../../../../models/character';
import { CardComponent, CardTemplate } from '../../../semantic/views/card.component';

declare var module:any;

@Component({
	moduleId:module.id,
	selector:'[trv-character-nameplate]',
	template:
	`
	<div class="content" *ngIf="character">
		<div class="header">{{character.name}}</div>
		<div class="description">
			{{character.age}}&nbsp;-&nbsp;{{character.gender}}&nbsp;-&nbsp;{{character.race.name}}
		</div>
	</div>
	`
})
export class NameplaceComponent extends CardComponent {
	@Input('character') _character:Character;

	constructor() {
		super();
	}

	get character():Character {
		return this._character;
	}
}