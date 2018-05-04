import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AppComponent } from "./app.component";
import { NavegateRoutes, Routes } from "./app.routing";

import { registerElement } from 'nativescript-angular/element-registry';
import { CardView } from 'nativescript-cardview';
registerElement('CardView', () => CardView);
registerElement("Gradient", () => require("nativescript-gradient").Gradient);

@NgModule({
  declarations: [AppComponent, ...NavegateRoutes],
  bootstrap: [AppComponent],
  imports: [NativeScriptModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(Routes),
    NativeScriptFormsModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule { }
