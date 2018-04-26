import { Component, OnInit } from '@angular/core';
//import { RouterExtensions } from 'nativescript-angular';
//import { TextField } from 'ui/text-field';
//import { EventData } from 'data/observable';
//import { ActivatedRoute } from '@angular/router';

import * as imagepicker from "nativescript-imagepicker";

@Component({
	selector: 'profile',
	templateUrl: './pages/profile/profile.component.html',
	styleUrls: ['./pages/profile/profile.component.css']
})

export class ProfileComponent implements OnInit {

	_pathImg: any;
	constructor() { }

	ngOnInit() { }

	imageAssets = [];
	imageSrc = "http://via.placeholder.com/200x200";
	isSingleMode: boolean = true;
	thumbSize: number = 80;
	previewSize: number = 300;

	/**
	 * onSelectSingleTap
	 * Function for take photo
	 */
	public onSelectSingleTap() {
		this.isSingleMode = true;

		let context = imagepicker.create({
			mode: "single"
		});
		this.startSelection(context);
	}

	private startSelection(context) {
		let that = this;

		context
			.authorize()
			.then(() => {
				that.imageAssets = [];
				that.imageSrc = null;
				return context.present();
			})
			.then((selection) => {
				console.log("Selection done: " + JSON.stringify(selection));
				that.imageSrc = that.isSingleMode && selection.length > 0 ? selection[0] : null;
				console.log("Esta es la ruta imagen" + selection[0]._android);
				//let id = getString("idLogin");
				this._pathImg = selection[0]._android;
				this.imageSrc = selection[0]._android;
				//this._dataVets._image = this._pathImg;
				//console.log("Path para guardar las imagenes" + id + "/veterinaria/veterinaria1")
				//this.subirImagen(selection[0]._android,id+"/veterinaria/logo");
				// set the images to be loaded from the assets with optimal sizes (optimize memory usage)
				selection.forEach(function (element) {
					element.options.width = that.isSingleMode ? that.previewSize : that.thumbSize;
					element.options.height = that.isSingleMode ? that.previewSize : that.thumbSize;
				});

				that.imageAssets = selection;
			}).catch(function (e) {
				console.log(e);
			});
	}
}