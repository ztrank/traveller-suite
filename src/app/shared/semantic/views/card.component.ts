import { Component, Input, HostBinding, OnInit } from '@angular/core';

export const CardTemplate = 
`
<ng-content select=".image"></ng-content>
<div class="content">
	<ng-content select="first-content"></ng-content>
	<ng-content select=".header"></ng-content>
	<ng-content select=".meta"></ng-content>
	<ng-content select=".description"></ng-content>
</div>
<ng-content select=".extra.content"></ng-content>
`;


declare var module:any;
@Component({
	moduleId:module.id,
	selector:'[card]',
	template:CardTemplate
})
export class CardComponent implements OnInit {

	@Input('fluid') _fluid:boolean;
	@Input('centered') _centered:boolean;
	@Input('raised') _raised:boolean;
	@Input('link') _link:boolean;
	@Input('href') _href:string;
	@Input('color') _color:string;

	@HostBinding('class') _classes:string;
	@HostBinding('attr.href') hyperLink:string;

	constructor() {}

	ngOnInit():void {
		this._classes = this.classes;
		this.hyperLink = this.href;
	}

	get fluid():boolean  {
		return this._fluid ? true : false;
	}
	get centered():boolean  {
		return this._centered ? true : false;
	}
	get raised():boolean  {
		return this._raised ? true : false;
	}
	get link():boolean  {
		return this._link ? true : false;
	}
	get href():string  {
		return this._href ? this._href : undefined;
	}
	get color():string  {
		return this._color ? this._color : undefined;
	}

	get classes():string {
		let classes = ['ui', 'card'];
		if(this.fluid) classes.push('fluid');
		if(this.centered) classes.push('centered');
		if(this.raised) classes.push('raised');
		if(this.link) classes.push('link');
		if(this.color) classes.push(this.color);

		return classes.join(' ');
	}
}
