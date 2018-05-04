import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
  selector: "my-app",
  template: `<page-router-outlet></page-router-outlet>`
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
   //this._routEx.navigate(['app-contact'])
  }
  // Your TypeScript logic goes here

  constructor(private _routEx:RouterExtensions){

  }
}
