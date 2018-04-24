"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
//import { RouterExtensions } from 'nativescript-angular';
//import { TextField } from 'ui/text-field';
//import { EventData } from 'data/observable';
//import { ActivatedRoute } from '@angular/router';
var ShareComponent = /** @class */ (function () {
    function ShareComponent(_routEx) {
        this._routEx = _routEx;
    }
    ShareComponent.prototype.ngOnInit = function () { };
    /**
     * getBack
     */
    ShareComponent.prototype.getBack = function () {
        this._routEx.back();
    };
    ShareComponent = __decorate([
        core_1.Component({
            selector: 'share',
            templateUrl: './pages/share/share.component.html',
            styleUrls: ['./pages/share/share.component.css']
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], ShareComponent);
    return ShareComponent;
}());
exports.ShareComponent = ShareComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2hhcmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHNEQUErRDtBQUMvRCwwREFBMEQ7QUFDMUQsNENBQTRDO0FBQzVDLDhDQUE4QztBQUM5QyxtREFBbUQ7QUFRbkQ7SUFFQyx3QkFBb0IsT0FBd0I7UUFBeEIsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7SUFBSSxDQUFDO0lBRWpELGlDQUFRLEdBQVIsY0FBYSxDQUFDO0lBRWQ7O09BRUc7SUFDSSxnQ0FBTyxHQUFkO1FBQ0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBWFcsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE9BQU87WUFDakIsV0FBVyxFQUFFLG9DQUFvQztZQUNqRCxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQztTQUNoRCxDQUFDO3lDQUkyQix5QkFBZ0I7T0FGaEMsY0FBYyxDQVkxQjtJQUFELHFCQUFDO0NBQUEsQUFaRCxJQVlDO0FBWlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG4vL2ltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhcic7XG4vL2ltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gJ3VpL3RleHQtZmllbGQnO1xuLy9pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xuLy9pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3NoYXJlJyxcblx0dGVtcGxhdGVVcmw6ICcuL3BhZ2VzL3NoYXJlL3NoYXJlLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vcGFnZXMvc2hhcmUvc2hhcmUuY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgU2hhcmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRFeDpSb3V0ZXJFeHRlbnNpb25zKSB7IH1cblxuXHRuZ09uSW5pdCgpIHsgfVxuXG5cdC8qKlxuXHQgKiBnZXRCYWNrXG5cdCAqL1xuXHRwdWJsaWMgZ2V0QmFjaygpIHtcblx0XHR0aGlzLl9yb3V0RXguYmFjaygpO1xuXHR9XG59Il19