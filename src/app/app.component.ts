import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { BeersSupplierService } from './beer-supplier/beers-supplier.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy{

	private beersSupplierAddress: string = 'https://api.punkapi.com/v2/beers';
	private beersSubscription: Subscription;

	public beersList: object[];	
	public pending = true;

	constructor(private beersSupplier: BeersSupplierService) {
		this.beersSupplier.getBeers(this.beersSupplierAddress);
	}

	ngOnInit() {
		this.beersSubscription = this.beersSupplier
			.subscribeToBeerSuplier()
			.subscribe((beers)=>{

				if(beers.length > 0) {
					this.beersList = beers;
					this.pending = false;
				} 
				
			});
	}

	ngOnDestroy() {
		if(this.beersSubscription) {
			this.beersSubscription.unsubscribe();
		}
	}
}
