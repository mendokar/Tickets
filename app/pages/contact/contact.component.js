"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
//import { RouterExtensions } from 'nativescript-angular';
//import { TextField } from 'ui/text-field';
//import { EventData } from 'data/observable';
//import { ActivatedRoute } from '@angular/router';
var TNSPhone = require("nativescript-phone");
var Email = require("nativescript-email");
var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () { };
    /**
     * enviarMensajeEmail
     */
    ContactComponent.prototype.sendEmail = function (email) {
        var composeOptions;
        composeOptions = {
            to: [email],
            subject: "Contact",
            body: ""
        };
        Email.available().then(function (avaliable) {
            console.log("response available ${avaliable}");
            if (avaliable) {
                Email.compose(composeOptions).then(function (result) {
                    console.log(result);
                    if (result) {
                        console.log("message send");
                    }
                    else {
                        console.log("message not send");
                    }
                }).catch(function (error) { return console.error(error); });
            }
        });
    };
    /**
     * callPhone
     */
    ContactComponent.prototype.callPhone = function (phone) {
        TNSPhone.dial(phone, true);
    };
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'contact',
            templateUrl: './pages/contact/contact.component.html',
            styleUrls: ['./pages/contact/contact.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250YWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwREFBMEQ7QUFDMUQsNENBQTRDO0FBQzVDLDhDQUE4QztBQUM5QyxtREFBbUQ7QUFFbkQsNkNBQStDO0FBQy9DLDBDQUE0QztBQVE1QztJQUVDO0lBQWdCLENBQUM7SUFFakIsbUNBQVEsR0FBUixjQUFhLENBQUM7SUFFZDs7T0FFRztJQUNJLG9DQUFTLEdBQWhCLFVBQWlCLEtBQUs7UUFFckIsSUFBSSxjQUFvQyxDQUFDO1FBQ3pDLGNBQWMsR0FBRztZQUNoQixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDWCxPQUFPLEVBQUUsU0FBUztZQUNsQixJQUFJLEVBQUUsRUFBRTtTQUNSLENBQUE7UUFFRCxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsU0FBUztZQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7WUFDL0MsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDZixLQUFLLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU07b0JBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3BCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7d0JBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQTtvQkFDNUIsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUE7b0JBQ2hDLENBQUM7Z0JBQ0YsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFBO1lBQ3hDLENBQUM7UUFDRixDQUFDLENBQUMsQ0FBQTtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNJLG9DQUFTLEdBQWhCLFVBQWlCLEtBQUs7UUFDckIsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQXRDVyxnQkFBZ0I7UUFONUIsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFdBQVcsRUFBRSx3Q0FBd0M7WUFDckQsU0FBUyxFQUFFLENBQUMsdUNBQXVDLENBQUM7U0FDcEQsQ0FBQzs7T0FFVyxnQkFBZ0IsQ0F1QzVCO0lBQUQsdUJBQUM7Q0FBQSxBQXZDRCxJQXVDQztBQXZDWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy9pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXInO1xuLy9pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tICd1aS90ZXh0LWZpZWxkJztcbi8vaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcbi8vaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgKiBhcyBUTlNQaG9uZSBmcm9tICduYXRpdmVzY3JpcHQtcGhvbmUnO1xuaW1wb3J0ICogYXMgRW1haWwgZnJvbSAnbmF0aXZlc2NyaXB0LWVtYWlsJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnY29udGFjdCcsXG5cdHRlbXBsYXRlVXJsOiAnLi9wYWdlcy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9wYWdlcy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgQ29udGFjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0Y29uc3RydWN0b3IoKSB7IH1cblxuXHRuZ09uSW5pdCgpIHsgfVxuXG5cdC8qKlxuXHQgKiBlbnZpYXJNZW5zYWplRW1haWxcblx0ICovXG5cdHB1YmxpYyBzZW5kRW1haWwoZW1haWwpIHtcblxuXHRcdGxldCBjb21wb3NlT3B0aW9uczogRW1haWwuQ29tcG9zZU9wdGlvbnM7XG5cdFx0Y29tcG9zZU9wdGlvbnMgPSB7XG5cdFx0XHR0bzogW2VtYWlsXSxcblx0XHRcdHN1YmplY3Q6IFwiQ29udGFjdFwiLFxuXHRcdFx0Ym9keTogXCJcIlxuXHRcdH1cblxuXHRcdEVtYWlsLmF2YWlsYWJsZSgpLnRoZW4oYXZhbGlhYmxlID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKFwicmVzcG9uc2UgYXZhaWxhYmxlICR7YXZhbGlhYmxlfVwiKTtcblx0XHRcdGlmIChhdmFsaWFibGUpIHtcblx0XHRcdFx0RW1haWwuY29tcG9zZShjb21wb3NlT3B0aW9ucykudGhlbihyZXN1bHQgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlc3VsdCk7XG5cdFx0XHRcdFx0aWYgKHJlc3VsdCkge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJtZXNzYWdlIHNlbmRcIilcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJtZXNzYWdlIG5vdCBzZW5kXCIpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KS5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSlcblx0XHRcdH1cblx0XHR9KVxuXHR9XG5cblx0LyoqXG5cdCAqIGNhbGxQaG9uZVxuXHQgKi9cblx0cHVibGljIGNhbGxQaG9uZShwaG9uZSkge1xuXHRcdFROU1Bob25lLmRpYWwocGhvbmUsIHRydWUpO1xuXHR9XG59Il19