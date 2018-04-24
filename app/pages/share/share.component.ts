import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
//import { RouterExtensions } from 'nativescript-angular';
//import { TextField } from 'ui/text-field';
//import { EventData } from 'data/observable';
//import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'share',
	templateUrl: './pages/share/share.component.html',
	styleUrls: ['./pages/share/share.component.css']
})

export class ShareComponent implements OnInit {

	constructor(private _routEx:RouterExtensions) { }

	ngOnInit() { }

	/**
	 * getBack
	 */
	public getBack() {
		this._routEx.back();
	}
}