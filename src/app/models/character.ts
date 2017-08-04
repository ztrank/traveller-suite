import { World } from './world';

export class Character {

	private _name:string;
	private _age:number;
	private _race:Race;
	private _gender:string;
	private _homeworld:World;
	
	constructor(name:string, age:number, race:Race, gender:string, homeworld:World) {
		this._name = name;
		this._age = age;
		this._race = race;
		this._gender = gender;
		this._homeworld = homeworld;
	}

	get name():string {
		return this._name;
	}

	get age():number {
		return this._age;
	}

	get race():Race {
		return this._race;
	}

	get gender():string {
		return this._gender;
	}

	get homeworld():World {
		return this._homeworld;
	}

}

export class Race {
	private _name:string;

	constructor(name:string) {
		this._name = name; 
	}

	get name():string {
		return this._name;
	}
}

