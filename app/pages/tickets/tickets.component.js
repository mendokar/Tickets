"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
//import { RouterExtensions } from 'nativescript-angular';
//import { TextField } from 'ui/text-field';
//import { EventData } from 'data/observable';
//import { ActivatedRoute } from '@angular/router';
var TicketsComponent = /** @class */ (function () {
    function TicketsComponent(_routEx) {
        this._routEx = _routEx;
    }
    TicketsComponent.prototype.ngOnInit = function () { };
    /**
     * viewConnect
     */
    TicketsComponent.prototype.viewConnect = function () {
        this._routEx.navigate(["app-connect"], {
            transition: {
                name: "slide",
                duration: 400,
                curve: "ease"
            }
        });
    };
    /**
     * viewShare
     */
    TicketsComponent.prototype.viewShare = function () {
        this._routEx.navigate(["app-share"], {
            transition: {
                name: "slide",
                duration: 400,
                curve: "ease"
            }
        });
    };
    TicketsComponent = __decorate([
        core_1.Component({
            selector: 'tickets',
            templateUrl: './pages/tickets/tickets.component.html',
            styleUrls: ['./pages/tickets/tickets.component.css']
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], TicketsComponent);
    return TicketsComponent;
}());
exports.TicketsComponent = TicketsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlja2V0cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0aWNrZXRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzREFBK0Q7QUFDL0QsMERBQTBEO0FBQzFELDRDQUE0QztBQUM1Qyw4Q0FBOEM7QUFDOUMsbURBQW1EO0FBVW5EO0lBR0MsMEJBQW9CLE9BQXdCO1FBQXhCLFlBQU8sR0FBUCxPQUFPLENBQWlCO0lBQUksQ0FBQztJQUVqRCxtQ0FBUSxHQUFSLGNBQWEsQ0FBQztJQUVkOztPQUVHO0lBQ0ksc0NBQVcsR0FBbEI7UUFDQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxFQUFDO1lBQ3JDLFVBQVUsRUFBQztnQkFDVixJQUFJLEVBQUMsT0FBTztnQkFDWixRQUFRLEVBQUMsR0FBRztnQkFDWixLQUFLLEVBQUMsTUFBTTthQUNaO1NBQ0QsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0ksb0NBQVMsR0FBaEI7UUFDQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxFQUFDO1lBQ25DLFVBQVUsRUFBQztnQkFDVixJQUFJLEVBQUMsT0FBTztnQkFDWixRQUFRLEVBQUMsR0FBRztnQkFDWixLQUFLLEVBQUMsTUFBTTthQUNaO1NBQ0QsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQS9CVyxnQkFBZ0I7UUFONUIsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFdBQVcsRUFBRSx3Q0FBd0M7WUFDckQsU0FBUyxFQUFFLENBQUMsdUNBQXVDLENBQUM7U0FDcEQsQ0FBQzt5Q0FLMkIseUJBQWdCO09BSGhDLGdCQUFnQixDQXVDNUI7SUFBRCx1QkFBQztDQUFBLEFBdkNELElBdUNDO0FBdkNZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbi8vaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyJztcbi8vaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSAndWkvdGV4dC1maWVsZCc7XG4vL2ltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG4vL2ltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3RpY2tldHMnLFxuXHR0ZW1wbGF0ZVVybDogJy4vcGFnZXMvdGlja2V0cy90aWNrZXRzLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vcGFnZXMvdGlja2V0cy90aWNrZXRzLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIFRpY2tldHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdF9wYXRoSW1nOiBhbnk7XG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRFeDpSb3V0ZXJFeHRlbnNpb25zKSB7IH1cblxuXHRuZ09uSW5pdCgpIHsgfVxuXG5cdC8qKlxuXHQgKiB2aWV3Q29ubmVjdFxuXHQgKi9cblx0cHVibGljIHZpZXdDb25uZWN0KCkge1xuXHRcdHRoaXMuX3JvdXRFeC5uYXZpZ2F0ZShbXCJhcHAtY29ubmVjdFwiXSx7XG5cdFx0XHR0cmFuc2l0aW9uOntcblx0XHRcdFx0bmFtZTpcInNsaWRlXCIsXG5cdFx0XHRcdGR1cmF0aW9uOjQwMCxcblx0XHRcdFx0Y3VydmU6XCJlYXNlXCJcblx0XHRcdH1cblx0XHR9KVxuXHR9XG5cblx0LyoqXG5cdCAqIHZpZXdTaGFyZVxuXHQgKi9cblx0cHVibGljIHZpZXdTaGFyZSgpIHtcblx0XHR0aGlzLl9yb3V0RXgubmF2aWdhdGUoW1wiYXBwLXNoYXJlXCJdLHtcblx0XHRcdHRyYW5zaXRpb246e1xuXHRcdFx0XHRuYW1lOlwic2xpZGVcIixcblx0XHRcdFx0ZHVyYXRpb246NDAwLFxuXHRcdFx0XHRjdXJ2ZTpcImVhc2VcIlxuXHRcdFx0fVxuXHRcdH0pXG5cdH1cblxuXG5cblx0XG5cblx0XG5cbn0iXX0=