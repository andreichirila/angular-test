import { Component, 
	OnInit, 
	AfterViewInit, 
	Input, 
	ViewChild, 
	HostBinding } from '@angular/core';

import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'list-of-beers',
  templateUrl: './list-of-beers.component.html',
  styleUrls: ['./list-of-beers.component.css']
})
export class ListOfBeersComponent implements OnInit, AfterViewInit {

	@Input()
	public beersList: object[];
	
	@ViewChild(MatSort) sort: MatSort;

	@HostBinding('class.filtered') filtered = false;

	public columnsToDisplay: Array<string> = ['name', 'first_brewed', 'abv'];
	public dataSource: MatTableDataSource<object>;
	public isDataAvailable: boolean = false;

	private selectedBeer: string;

	constructor() {
	}

	ngOnInit() {

		if(this.beersList) {
			this.dataSource = new MatTableDataSource(this.beersList);
			this.isDataAvailable = true;
		}
	}

	applyFilter(value: string) {
		// we remove the whitespaces. Letters will be in lower case
		value = value.trim().toLowerCase();
		this.dataSource.filter = value;
	}

	onSelectedIngredient(ingredient: string) {

		// on Selected Ingrediwnt is not working properly
		// it shows only one element in the DOM with bold letters
		this.beersList.forEach( beer => {

			if(beer['ingredients'].malt.length > 0) {

				beer['ingredients'].malt.filter((thisIngredient) => {
					if (thisIngredient.name === ingredient) {
						this.selectedBeer = beer['name'];
						return this.selectedBeer;
					};
				});
			}

			if(beer['ingredients'].hops.length > 0) {

				beer['ingredients'].hops.filter((thisIngredient) => {
					if (thisIngredient.name === ingredient) {
						this.selectedBeer = beer['name'];
						return this.selectedBeer;
					};
				});
			}

			if (beer['ingredients'].yeast.indexOf(ingredient) > -1) {
				this.selectedBeer = beer['name'];
				return this.selectedBeer;
			}
		});
	}

	ngAfterViewInit(): void {
		this.dataSource.sort = this.sort;
	}
}
