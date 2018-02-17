import { Component, 
	OnInit, 
	Input, 
	Output, 
	EventEmitter } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { BeersSupplierService } from '../beer-supplier/beers-supplier.service';

@Component({
	selector: 'ingredients-filter',
	templateUrl: './ingredients-filter.component.html',
	styleUrls: ['./ingredients-filter.component.css']
})
export class IngredientsFilterComponent implements OnInit {

	@Output()
	selectedIngredient: EventEmitter<string> = new EventEmitter();

	public ingredientsList = new Array();
	private ingredientsSubscription: Subscription;

  	constructor(private beersSupplier: BeersSupplierService) { }

  	ngOnInit() {

  		this.ingredientsSubscription = this.beersSupplier
  			.subscribeToBeerIngredient()
  			.subscribe((ingredients) => {
				if(ingredients.length > 0) {
					this.ingredientsList = ingredients;
				} 
				
			});
  	}

  	public onSelectedIngredient(event: Event) {
  		this.selectedIngredient.next(event['value']);
  	}

  	ngOnDestroy() {
		if(this.ingredientsSubscription) {
			this.ingredientsSubscription.unsubscribe();
		}
	}
}
