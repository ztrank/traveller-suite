export class World {
	private _uwp:UWP;

	constructor(uwp:UWP) {
		this._uwp = uwp;
	}

	get uwp():UWP {
		return this._uwp;
	}

	get name():string {
		return this.uwp.name;
	}
	get tech():string {
		return this.uwp.tech;
	}
	get law():string {
		return this.uwp.law;
	}
	get pop():string {
		return this.uwp.pop;
	}

	get population():number {
		return this.uwp.population;
	}
}

export class UWP {
	private _name:string;
	private _hex:string;
	private _stats:PhysicalStatistics;
	private _baseCode:string;
	private _trade:string[];
	private _extended:ExtendedStatistics;
	private _allegiance:string;

	constructor(
		name:string, 
		hex:string, 
		stats:PhysicalStatistics, 
		baseCode:string, 
		trade:string[],
		extended:ExtendedStatistics,
		allegiance:string
	) {
		this._name = name;
		this._hex = hex;
		this._stats = stats;
		this._baseCode = baseCode;
		this._trade = trade;
		this._extended = extended;
		this._allegiance = allegiance;
	}

	get name():string {
		return this._name;
	}
	get hex():string {
		return this._hex;
	}
	get stats():PhysicalStatistics {
		return this._stats;
	}
	get baseCode():string {
		return this._baseCode;
	}
	get trade():string[] {
		return this._trade;
	}
	get extended():ExtendedStatistics {
		return this._extended;
	}
	get allegiance():string {
		return this._allegiance;
	}

	get starport():string {
		return this.stats.starport;
	}

	get size():string {
		return this.stats.size;
	}

	get atmo():string {
		return this.stats.atmo;
	}

	get hydro():string {
		return this.stats.hydro;
	}

	get pop():string {
		return this.stats.pop;
	}

	get gov():string {
		return this.stats.gov;
	}

	get law():string {
		return this.stats.law;
	}

	get tech():string {
		return this.stats.tech;
	}

	get population():number {
		let mult = getNumberFromHex(this.extended.pop);
		let power = getNumberFromHex(this.stats.pop);
		console.log('Multiplier', mult);
		console.log('power', power);
		console.log('Value', Math.pow(10, power));
		return mult * Math.pow(10, power);
	}
}

export class PhysicalStatistics {
	private _code:string;

	constructor(code:string) {
		this._code = code;
	}

	get starport():string {
		return this._code.slice(0,1);
	}

	get size():string {
		return this._code.slice(1,2);
	}

	get atmo():string {
		return this._code.slice(2,3);
	}

	get hydro():string {
		return this._code.slice(3,4);
	}

	get pop():string {
		return this._code.slice(4,5);
	}

	get gov():string {
		return this._code.slice(5,6);
	}

	get law():string {
		return this._code.slice(6,7);
	}

	get tech():string {
		return this._code.slice(8,9);
	}
}

export class ExtendedStatistics {

	private _code:string;

	constructor(code:string) {
		this._code = code;
	}

	get zone():string {
		return this._code.slice(0,1);
	}
	get pop():string {
		return this._code.slice(1,2);
	}
	get belts():string {
		return this._code.slice(2,3);
	}
	get gas():string {
		return this._code.slice(3,4);
	}
}

function getNumberFromHex(hex:string) {
	if(hex.slice(0,2) !== '0x') hex = '0x' + hex;
	return parseInt(hex);
}

function getHexFromNumber(num:number) {
	let hex = num.toString(16);
	if(hex.slice(0,2) === '0x') hex = hex.slice(2);
	return hex;
}

