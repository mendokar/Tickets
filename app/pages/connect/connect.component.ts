import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
//import { RouterExtensions } from 'nativescript-angular';
//import { TextField } from 'ui/text-field';
//import { EventData } from 'data/observable';
//import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'connect',
	templateUrl: './pages/connect/connect.component.html',
	styleUrls: ['./pages/connect/connect.component.css']
})

export class ConnectComponent implements OnInit {

	constructor(private _routEx:RouterExtensions) { }

	ngOnInit() { }

	arrayUsers =[
		{
			name:"Ricky Bobby"
		},
		{
			name:"Ricky Bobby"
		},
		{
			name:"Ricky Bobby"
		},
		{
			name:"Ricky Bobby"
		},
		{
			name:"Ricky Bobby"
		},
		{
			name:"Ricky Bobby"
		},
	];

	/**
	 * getBack
	 */
	public getBack() {
		this._routEx.back();
	}
}