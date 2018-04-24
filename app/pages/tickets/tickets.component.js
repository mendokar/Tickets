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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlja2V0cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0aWNrZXRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzREFBK0Q7QUFDL0QsMERBQTBEO0FBQzFELDRDQUE0QztBQUM1Qyw4Q0FBOEM7QUFDOUMsbURBQW1EO0FBUW5EO0lBRUMsMEJBQW9CLE9BQXdCO1FBQXhCLFlBQU8sR0FBUCxPQUFPLENBQWlCO0lBQUksQ0FBQztJQUVqRCxtQ0FBUSxHQUFSLGNBQWEsQ0FBQztJQUVkOztPQUVHO0lBQ0ksc0NBQVcsR0FBbEI7UUFDQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxFQUFDO1lBQ3JDLFVBQVUsRUFBQztnQkFDVixJQUFJLEVBQUMsT0FBTztnQkFDWixRQUFRLEVBQUMsR0FBRztnQkFDWixLQUFLLEVBQUMsTUFBTTthQUNaO1NBQ0QsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0ksb0NBQVMsR0FBaEI7UUFDQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxFQUFDO1lBQ25DLFVBQVUsRUFBQztnQkFDVixJQUFJLEVBQUMsT0FBTztnQkFDWixRQUFRLEVBQUMsR0FBRztnQkFDWixLQUFLLEVBQUMsTUFBTTthQUNaO1NBQ0QsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQTlCVyxnQkFBZ0I7UUFONUIsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFdBQVcsRUFBRSx3Q0FBd0M7WUFDckQsU0FBUyxFQUFFLENBQUMsdUNBQXVDLENBQUM7U0FDcEQsQ0FBQzt5Q0FJMkIseUJBQWdCO09BRmhDLGdCQUFnQixDQStCNUI7SUFBRCx1QkFBQztDQUFBLEFBL0JELElBK0JDO0FBL0JZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbi8vaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyJztcbi8vaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSAndWkvdGV4dC1maWVsZCc7XG4vL2ltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG4vL2ltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAndGlja2V0cycsXG5cdHRlbXBsYXRlVXJsOiAnLi9wYWdlcy90aWNrZXRzL3RpY2tldHMuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9wYWdlcy90aWNrZXRzL3RpY2tldHMuY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgVGlja2V0c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfcm91dEV4OlJvdXRlckV4dGVuc2lvbnMpIHsgfVxuXG5cdG5nT25Jbml0KCkgeyB9XG5cblx0LyoqXG5cdCAqIHZpZXdDb25uZWN0XG5cdCAqL1xuXHRwdWJsaWMgdmlld0Nvbm5lY3QoKSB7XG5cdFx0dGhpcy5fcm91dEV4Lm5hdmlnYXRlKFtcImFwcC1jb25uZWN0XCJdLHtcblx0XHRcdHRyYW5zaXRpb246e1xuXHRcdFx0XHRuYW1lOlwic2xpZGVcIixcblx0XHRcdFx0ZHVyYXRpb246NDAwLFxuXHRcdFx0XHRjdXJ2ZTpcImVhc2VcIlxuXHRcdFx0fVxuXHRcdH0pXG5cdH1cblxuXHQvKipcblx0ICogdmlld1NoYXJlXG5cdCAqL1xuXHRwdWJsaWMgdmlld1NoYXJlKCkge1xuXHRcdHRoaXMuX3JvdXRFeC5uYXZpZ2F0ZShbXCJhcHAtc2hhcmVcIl0se1xuXHRcdFx0dHJhbnNpdGlvbjp7XG5cdFx0XHRcdG5hbWU6XCJzbGlkZVwiLFxuXHRcdFx0XHRkdXJhdGlvbjo0MDAsXG5cdFx0XHRcdGN1cnZlOlwiZWFzZVwiXG5cdFx0XHR9XG5cdFx0fSlcblx0fVxufSJdfQ==