"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
//import { RouterExtensions } from 'nativescript-angular';
//import { TextField } from 'ui/text-field';
//import { EventData } from 'data/observable';
//import { ActivatedRoute } from '@angular/router';
var imagepicker = require("nativescript-imagepicker");
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
        this.imageAssets = [];
        this.imageSrc = "http://via.placeholder.com/200x200";
        this.isSingleMode = true;
        this.thumbSize = 80;
        this.previewSize = 300;
    }
    ProfileComponent.prototype.ngOnInit = function () { };
    /**
     * onSelectSingleTap
     * Function for take photo
     */
    ProfileComponent.prototype.onSelectSingleTap = function () {
        this.isSingleMode = true;
        var context = imagepicker.create({
            mode: "single"
        });
        this.startSelection(context);
    };
    ProfileComponent.prototype.startSelection = function (context) {
        var _this = this;
        var that = this;
        context
            .authorize()
            .then(function () {
            that.imageAssets = [];
            that.imageSrc = null;
            return context.present();
        })
            .then(function (selection) {
            console.log("Selection done: " + JSON.stringify(selection));
            that.imageSrc = that.isSingleMode && selection.length > 0 ? selection[0] : null;
            console.log("Esta es la ruta imagen" + selection[0]._android);
            //let id = getString("idLogin");
            _this._pathImg = selection[0]._android;
            _this.imageSrc = selection[0]._android;
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
    };
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'profile',
            templateUrl: './pages/profile/profile.component.html',
            styleUrls: ['./pages/profile/profile.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9maWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwREFBMEQ7QUFDMUQsNENBQTRDO0FBQzVDLDhDQUE4QztBQUM5QyxtREFBbUQ7QUFFbkQsc0RBQXdEO0FBUXhEO0lBR0M7UUFJQSxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixhQUFRLEdBQUcsb0NBQW9DLENBQUM7UUFDaEQsaUJBQVksR0FBWSxJQUFJLENBQUM7UUFDN0IsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixnQkFBVyxHQUFXLEdBQUcsQ0FBQztJQVJWLENBQUM7SUFFakIsbUNBQVEsR0FBUixjQUFhLENBQUM7SUFRZDs7O09BR0c7SUFDSSw0Q0FBaUIsR0FBeEI7UUFDQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUV6QixJQUFJLE9BQU8sR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDO1lBQ2hDLElBQUksRUFBRSxRQUFRO1NBQ2QsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRU8seUNBQWMsR0FBdEIsVUFBdUIsT0FBTztRQUE5QixpQkE4QkM7UUE3QkEsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWhCLE9BQU87YUFDTCxTQUFTLEVBQUU7YUFDWCxJQUFJLENBQUM7WUFDTCxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztZQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzFCLENBQUMsQ0FBQzthQUNELElBQUksQ0FBQyxVQUFDLFNBQVM7WUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUM1RCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLElBQUksU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2hGLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzlELGdDQUFnQztZQUNoQyxLQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDdEMsS0FBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQ3RDLHdDQUF3QztZQUN4QyxrRkFBa0Y7WUFDbEYsaUVBQWlFO1lBQ2pFLHlGQUF5RjtZQUN6RixTQUFTLENBQUMsT0FBTyxDQUFDLFVBQVUsT0FBTztnQkFDbEMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFDOUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNoRixDQUFDLENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7WUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUF4RFcsZ0JBQWdCO1FBTjVCLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUsd0NBQXdDO1lBQ3JELFNBQVMsRUFBRSxDQUFDLHVDQUF1QyxDQUFDO1NBQ3BELENBQUM7O09BRVcsZ0JBQWdCLENBeUQ1QjtJQUFELHVCQUFDO0NBQUEsQUF6REQsSUF5REM7QUF6RFksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyJztcbi8vaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSAndWkvdGV4dC1maWVsZCc7XG4vL2ltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG4vL2ltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0ICogYXMgaW1hZ2VwaWNrZXIgZnJvbSBcIm5hdGl2ZXNjcmlwdC1pbWFnZXBpY2tlclwiO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdwcm9maWxlJyxcblx0dGVtcGxhdGVVcmw6ICcuL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBQcm9maWxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRfcGF0aEltZzogYW55O1xuXHRjb25zdHJ1Y3RvcigpIHsgfVxuXG5cdG5nT25Jbml0KCkgeyB9XG5cblx0aW1hZ2VBc3NldHMgPSBbXTtcblx0aW1hZ2VTcmMgPSBcImh0dHA6Ly92aWEucGxhY2Vob2xkZXIuY29tLzIwMHgyMDBcIjtcblx0aXNTaW5nbGVNb2RlOiBib29sZWFuID0gdHJ1ZTtcblx0dGh1bWJTaXplOiBudW1iZXIgPSA4MDtcblx0cHJldmlld1NpemU6IG51bWJlciA9IDMwMDtcblxuXHQvKipcblx0ICogb25TZWxlY3RTaW5nbGVUYXBcblx0ICogRnVuY3Rpb24gZm9yIHRha2UgcGhvdG9cblx0ICovXG5cdHB1YmxpYyBvblNlbGVjdFNpbmdsZVRhcCgpIHtcblx0XHR0aGlzLmlzU2luZ2xlTW9kZSA9IHRydWU7XG5cblx0XHRsZXQgY29udGV4dCA9IGltYWdlcGlja2VyLmNyZWF0ZSh7XG5cdFx0XHRtb2RlOiBcInNpbmdsZVwiXG5cdFx0fSk7XG5cdFx0dGhpcy5zdGFydFNlbGVjdGlvbihjb250ZXh0KTtcblx0fVxuXG5cdHByaXZhdGUgc3RhcnRTZWxlY3Rpb24oY29udGV4dCkge1xuXHRcdGxldCB0aGF0ID0gdGhpcztcblxuXHRcdGNvbnRleHRcblx0XHRcdC5hdXRob3JpemUoKVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHR0aGF0LmltYWdlQXNzZXRzID0gW107XG5cdFx0XHRcdHRoYXQuaW1hZ2VTcmMgPSBudWxsO1xuXHRcdFx0XHRyZXR1cm4gY29udGV4dC5wcmVzZW50KCk7XG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oKHNlbGVjdGlvbikgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcIlNlbGVjdGlvbiBkb25lOiBcIiArIEpTT04uc3RyaW5naWZ5KHNlbGVjdGlvbikpO1xuXHRcdFx0XHR0aGF0LmltYWdlU3JjID0gdGhhdC5pc1NpbmdsZU1vZGUgJiYgc2VsZWN0aW9uLmxlbmd0aCA+IDAgPyBzZWxlY3Rpb25bMF0gOiBudWxsO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcIkVzdGEgZXMgbGEgcnV0YSBpbWFnZW5cIiArIHNlbGVjdGlvblswXS5fYW5kcm9pZCk7XG5cdFx0XHRcdC8vbGV0IGlkID0gZ2V0U3RyaW5nKFwiaWRMb2dpblwiKTtcblx0XHRcdFx0dGhpcy5fcGF0aEltZyA9IHNlbGVjdGlvblswXS5fYW5kcm9pZDtcblx0XHRcdFx0dGhpcy5pbWFnZVNyYyA9IHNlbGVjdGlvblswXS5fYW5kcm9pZDtcblx0XHRcdFx0Ly90aGlzLl9kYXRhVmV0cy5faW1hZ2UgPSB0aGlzLl9wYXRoSW1nO1xuXHRcdFx0XHQvL2NvbnNvbGUubG9nKFwiUGF0aCBwYXJhIGd1YXJkYXIgbGFzIGltYWdlbmVzXCIgKyBpZCArIFwiL3ZldGVyaW5hcmlhL3ZldGVyaW5hcmlhMVwiKVxuXHRcdFx0XHQvL3RoaXMuc3ViaXJJbWFnZW4oc2VsZWN0aW9uWzBdLl9hbmRyb2lkLGlkK1wiL3ZldGVyaW5hcmlhL2xvZ29cIik7XG5cdFx0XHRcdC8vIHNldCB0aGUgaW1hZ2VzIHRvIGJlIGxvYWRlZCBmcm9tIHRoZSBhc3NldHMgd2l0aCBvcHRpbWFsIHNpemVzIChvcHRpbWl6ZSBtZW1vcnkgdXNhZ2UpXG5cdFx0XHRcdHNlbGVjdGlvbi5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG5cdFx0XHRcdFx0ZWxlbWVudC5vcHRpb25zLndpZHRoID0gdGhhdC5pc1NpbmdsZU1vZGUgPyB0aGF0LnByZXZpZXdTaXplIDogdGhhdC50aHVtYlNpemU7XG5cdFx0XHRcdFx0ZWxlbWVudC5vcHRpb25zLmhlaWdodCA9IHRoYXQuaXNTaW5nbGVNb2RlID8gdGhhdC5wcmV2aWV3U2l6ZSA6IHRoYXQudGh1bWJTaXplO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHR0aGF0LmltYWdlQXNzZXRzID0gc2VsZWN0aW9uO1xuXHRcdFx0fSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coZSk7XG5cdFx0XHR9KTtcblx0fVxufSJdfQ==