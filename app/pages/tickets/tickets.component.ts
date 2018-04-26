import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
//import { RouterExtensions } from 'nativescript-angular';
//import { TextField } from 'ui/text-field';
//import { EventData } from 'data/observable';
//import { ActivatedRoute } from '@angular/router';



@Component({
	selector: 'tickets',
	templateUrl: './pages/tickets/tickets.component.html',
	styleUrls: ['./pages/tickets/tickets.component.css']
})

export class TicketsComponent implements OnInit {

	_pathImg: any;
	constructor(private _routEx:RouterExtensions) { }

	ngOnInit() { }

	/**
	 * viewConnect
	 */
	public viewConnect() {
		this._routEx.navigate(["app-connect"],{
			transition:{
				name:"slide",
				duration:400,
				curve:"ease"
			}
		})
	}

	/**
	 * viewShare
	 */
	public viewShare() {
		this._routEx.navigate(["app-share"],{
			transition:{
				name:"slide",
				duration:400,
				curve:"ease"
			}
		})
	}



	

	

}