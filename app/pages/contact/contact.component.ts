import { Component, OnInit } from '@angular/core';
//import { RouterExtensions } from 'nativescript-angular';
//import { TextField } from 'ui/text-field';
//import { EventData } from 'data/observable';
//import { ActivatedRoute } from '@angular/router';

import * as TNSPhone from 'nativescript-phone';
import * as Email from 'nativescript-email';

@Component({
	selector: 'contact',
	templateUrl: './pages/contact/contact.component.html',
	styleUrls: ['./pages/contact/contact.component.css']
})

export class ContactComponent implements OnInit {

	constructor() { }

	ngOnInit() { }

	/**
	 * enviarMensajeEmail
	 */
	public sendEmail(email) {

		let composeOptions: Email.ComposeOptions;
		composeOptions = {
			to: [email],
			subject: "Contact",
			body: ""
		}

		Email.available().then(avaliable => {
			console.log("response available ${avaliable}");
			if (avaliable) {
				Email.compose(composeOptions).then(result => {
					console.log(result);
					if (result) {
						console.log("message send")
					} else {
						console.log("message not send")
					}
				}).catch(error => console.error(error))
			}
		})
	}

	/**
	 * callPhone
	 */
	public callPhone(phone) {
		TNSPhone.dial(phone, true);
	}
}