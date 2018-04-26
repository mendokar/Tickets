"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var AppComponent = /** @class */ (function () {
    // Your TypeScript logic goes here
    function AppComponent(_routEx) {
        this._routEx = _routEx;
    }
    AppComponent.prototype.ngOnInit = function () {
        this._routEx.navigate(['app-contact']);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "<page-router-outlet></page-router-outlet>"
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsc0RBQStEO0FBTS9EO0lBSUUsa0NBQWtDO0lBRWxDLHNCQUFvQixPQUF3QjtRQUF4QixZQUFPLEdBQVAsT0FBTyxDQUFpQjtJQUU1QyxDQUFDO0lBUEQsK0JBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQTtJQUN2QyxDQUFDO0lBSFUsWUFBWTtRQUp4QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLDJDQUEyQztTQUN0RCxDQUFDO3lDQU80Qix5QkFBZ0I7T0FOakMsWUFBWSxDQVN4QjtJQUFELG1CQUFDO0NBQUEsQUFURCxJQVNDO0FBVFksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gIHRlbXBsYXRlOiBgPHBhZ2Utcm91dGVyLW91dGxldD48L3BhZ2Utcm91dGVyLW91dGxldD5gXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICB0aGlzLl9yb3V0RXgubmF2aWdhdGUoWydhcHAtY29udGFjdCddKVxuICB9XG4gIC8vIFlvdXIgVHlwZVNjcmlwdCBsb2dpYyBnb2VzIGhlcmVcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0RXg6Um91dGVyRXh0ZW5zaW9ucyl7XG5cbiAgfVxufVxuIl19