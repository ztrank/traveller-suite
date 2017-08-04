import { Component, OnInit } from '@angular/core';
import { Character, Race } from './models/character';
import { World, UWP, PhysicalStatistics, ExtendedStatistics } from './models/world';

let homeworld:World = new World(
	new UWP(
		'Roup',
		'0407',
		new PhysicalStatistics('C77A9A9-6'),
		'S',
		['Hi, In, Wa'],
		new ExtendedStatistics('A323'),
		'Im'
	)
);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  character:Character;

  constructor() {}

  ngOnInit():void {
  	this.character = new Character('Sarah', 22, new Race('Human'), 'Female', homeworld);
  }
}

