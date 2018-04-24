"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
//import { RouterExtensions } from 'nativescript-angular';
//import { TextField } from 'ui/text-field';
//import { EventData } from 'data/observable';
//import { ActivatedRoute } from '@angular/router';
var ConnectComponent = /** @class */ (function () {
    function ConnectComponent(_routEx) {
        this._routEx = _routEx;
        this.arrayUsers = [
            {
                name: "Ricky Bobby"
            },
            {
                name: "Ricky Bobby"
            },
            {
                name: "Ricky Bobby"
            },
            {
                name: "Ricky Bobby"
            },
            {
                name: "Ricky Bobby"
            },
            {
                name: "Ricky Bobby"
            },
        ];
    }
    ConnectComponent.prototype.ngOnInit = function () { };
    /**
     * getBack
     */
    ConnectComponent.prototype.getBack = function () {
        this._routEx.back();
    };
    ConnectComponent = __decorate([
        core_1.Component({
            selector: 'connect',
            templateUrl: './pages/connect/connect.component.html',
            styleUrls: ['./pages/connect/connect.component.css']
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], ConnectComponent);
    return ConnectComponent;
}());
exports.ConnectComponent = ConnectComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb25uZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzREFBK0Q7QUFDL0QsMERBQTBEO0FBQzFELDRDQUE0QztBQUM1Qyw4Q0FBOEM7QUFDOUMsbURBQW1EO0FBUW5EO0lBRUMsMEJBQW9CLE9BQXdCO1FBQXhCLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBSTVDLGVBQVUsR0FBRTtZQUNYO2dCQUNDLElBQUksRUFBQyxhQUFhO2FBQ2xCO1lBQ0Q7Z0JBQ0MsSUFBSSxFQUFDLGFBQWE7YUFDbEI7WUFDRDtnQkFDQyxJQUFJLEVBQUMsYUFBYTthQUNsQjtZQUNEO2dCQUNDLElBQUksRUFBQyxhQUFhO2FBQ2xCO1lBQ0Q7Z0JBQ0MsSUFBSSxFQUFDLGFBQWE7YUFDbEI7WUFDRDtnQkFDQyxJQUFJLEVBQUMsYUFBYTthQUNsQjtTQUNELENBQUM7SUF2QjhDLENBQUM7SUFFakQsbUNBQVEsR0FBUixjQUFhLENBQUM7SUF1QmQ7O09BRUc7SUFDSSxrQ0FBTyxHQUFkO1FBQ0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBaENXLGdCQUFnQjtRQU41QixnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLHdDQUF3QztZQUNyRCxTQUFTLEVBQUUsQ0FBQyx1Q0FBdUMsQ0FBQztTQUNwRCxDQUFDO3lDQUkyQix5QkFBZ0I7T0FGaEMsZ0JBQWdCLENBaUM1QjtJQUFELHVCQUFDO0NBQUEsQUFqQ0QsSUFpQ0M7QUFqQ1ksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuLy9pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXInO1xuLy9pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tICd1aS90ZXh0LWZpZWxkJztcbi8vaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcbi8vaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdjb25uZWN0Jyxcblx0dGVtcGxhdGVVcmw6ICcuL3BhZ2VzL2Nvbm5lY3QvY29ubmVjdC5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL3BhZ2VzL2Nvbm5lY3QvY29ubmVjdC5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBDb25uZWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0RXg6Um91dGVyRXh0ZW5zaW9ucykgeyB9XG5cblx0bmdPbkluaXQoKSB7IH1cblxuXHRhcnJheVVzZXJzID1bXG5cdFx0e1xuXHRcdFx0bmFtZTpcIlJpY2t5IEJvYmJ5XCJcblx0XHR9LFxuXHRcdHtcblx0XHRcdG5hbWU6XCJSaWNreSBCb2JieVwiXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRuYW1lOlwiUmlja3kgQm9iYnlcIlxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bmFtZTpcIlJpY2t5IEJvYmJ5XCJcblx0XHR9LFxuXHRcdHtcblx0XHRcdG5hbWU6XCJSaWNreSBCb2JieVwiXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRuYW1lOlwiUmlja3kgQm9iYnlcIlxuXHRcdH0sXG5cdF07XG5cblx0LyoqXG5cdCAqIGdldEJhY2tcblx0ICovXG5cdHB1YmxpYyBnZXRCYWNrKCkge1xuXHRcdHRoaXMuX3JvdXRFeC5iYWNrKCk7XG5cdH1cbn0iXX0=