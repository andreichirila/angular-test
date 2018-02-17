import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class BeersSupplierService {

	allBeers: object[] = new Array<object>();
    allBeers$: BehaviorSubject<object[]>;

    allIngredients: string[] = new Array<string>();
    allIngredients$: BehaviorSubject<string[]>;

  	constructor(private http: Http) { 
  	}

  	getBeers(beersSupplier: string) {
  		
  		if(!this.allBeers$) {
  			this.allBeers$ = <BehaviorSubject<object[]>> new BehaviorSubject(new Array<object>());
  			this.allIngredients$ = <BehaviorSubject<string[]>> new BehaviorSubject(new Array<string>());

  			this.http.get(beersSupplier)
	  			.map( response => response.json())
	  			.catch((): any => {
	  				console.log("error from http call ");
	  			})
	            .subscribe(
	        		(beers) => {
	                	if(beers.length > 0) {
	                		this.allBeers = beers;
	                		this.allBeers$.next(this.allBeers);

	                		this.filterIngredients();
	                		this.allIngredients$.next(this.allIngredients);
	                	}


	              	},
	              	(error) => console.log("Error subscribing to DataService: " + error)
	            );
  		}
  		
  	}

  	private filterIngredients() {

  		this.allBeers.forEach((beer): any => {

			beer['ingredients'].malt.filter((maltIngredient)=>{
				this.formIngredientName(maltIngredient.name);
			});

  			beer['ingredients'].hops.filter((hopsIngredient)=>{
  				this.formIngredientName(hopsIngredient.name);
  			});

  			this.formIngredientName(beer['ingredients'].yeast);
  			
  		});
  	}

  	private formIngredientName(ingredientName: string) {
  		if(this.allIngredients.length > 0) {
  			if (this.allIngredients.indexOf(ingredientName) === -1) {
  				this.allIngredients.push(ingredientName);
  			}
  		} else {
  			this.allIngredients.push(ingredientName);
  		}
  	}

  	subscribeToBeerSuplier(): Observable<object[]> {
		return this.allBeers$.asObservable();
	}

	subscribeToBeerIngredient(): Observable<string[]> {
		return this.allIngredients$.asObservable();
	}
}
