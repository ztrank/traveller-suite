import { Component, Input, HostBinding, OnInit } from '@angular/core';

declare var module:any;

@Component({
	moduleId:module.id,
	selector:'[cards]',
	template:
	`
	<ng-content></ng-content>
	`
})
export class CardsComponent implements OnInit {
	@Input('columns') _columns:number;
	@Input('stackable') _stackable:boolean;
	@Input('doubling') _doubling:boolean;

	@HostBinding('class') _classes:string;

	constructor() {}

	ngOnInit():void {
		this._classes = this.classes;
	}

	get columns():number {
		return this._columns ? this._columns : undefined;
	}

	get stackable():boolean {
		return this._stackable ? true : false;
	}

	get doubling():boolean {
		return this._doubling ? true : false;
	}

	get classes():string {
		let classes = ['ui', 'cards'];
		if(this.stackable) classes.push('stackable');
		if(this.doubling) classes.push('doubling');
		if(this.columns) classes.push('' + this.columns);
		return classes.join(' ');
	}
}

