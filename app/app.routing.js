"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tickets_component_1 = require("./pages/tickets/tickets.component");
var share_component_1 = require("./pages/share/share.component");
var connect_component_1 = require("./pages/connect/connect.component");
var profile_component_1 = require("./pages/profile/profile.component");
var contact_component_1 = require("./pages/contact/contact.component");
exports.Routes = [
    { path: "", component: tickets_component_1.TicketsComponent },
    { path: "app-share", component: share_component_1.ShareComponent },
    { path: "app-connect", component: connect_component_1.ConnectComponent },
    { path: "app-profile", component: profile_component_1.ProfileComponent },
    { path: "app-contact", component: contact_component_1.ContactComponent }
];
exports.NavegateRoutes = [
    tickets_component_1.TicketsComponent,
    share_component_1.ShareComponent,
    connect_component_1.ConnectComponent,
    profile_component_1.ProfileComponent,
    contact_component_1.ContactComponent
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVFQUFxRTtBQUNyRSxpRUFBK0Q7QUFDL0QsdUVBQXFFO0FBQ3JFLHVFQUFxRTtBQUNyRSx1RUFBcUU7QUFFeEQsUUFBQSxNQUFNLEdBQUU7SUFDakIsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLFNBQVMsRUFBQyxvQ0FBZ0IsRUFBQztJQUNwQyxFQUFDLElBQUksRUFBQyxXQUFXLEVBQUMsU0FBUyxFQUFDLGdDQUFjLEVBQUM7SUFDM0MsRUFBQyxJQUFJLEVBQUMsYUFBYSxFQUFDLFNBQVMsRUFBQyxvQ0FBZ0IsRUFBQztJQUMvQyxFQUFDLElBQUksRUFBQyxhQUFhLEVBQUMsU0FBUyxFQUFDLG9DQUFnQixFQUFDO0lBQy9DLEVBQUMsSUFBSSxFQUFDLGFBQWEsRUFBQyxTQUFTLEVBQUMsb0NBQWdCLEVBQUM7Q0FDbEQsQ0FBQTtBQUVZLFFBQUEsY0FBYyxHQUFFO0lBQ3pCLG9DQUFnQjtJQUNoQixnQ0FBYztJQUNkLG9DQUFnQjtJQUNoQixvQ0FBZ0I7SUFDaEIsb0NBQWdCO0NBQ25CLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaWNrZXRzQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvdGlja2V0cy90aWNrZXRzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTaGFyZUNvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL3NoYXJlL3NoYXJlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDb25uZWN0Q29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvY29ubmVjdC9jb25uZWN0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBQcm9maWxlQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDb250YWN0Q29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJvdXRlcyA9W1xyXG4gICAge3BhdGg6XCJcIixjb21wb25lbnQ6VGlja2V0c0NvbXBvbmVudH0sXHJcbiAgICB7cGF0aDpcImFwcC1zaGFyZVwiLGNvbXBvbmVudDpTaGFyZUNvbXBvbmVudH0sXHJcbiAgICB7cGF0aDpcImFwcC1jb25uZWN0XCIsY29tcG9uZW50OkNvbm5lY3RDb21wb25lbnR9LFxyXG4gICAge3BhdGg6XCJhcHAtcHJvZmlsZVwiLGNvbXBvbmVudDpQcm9maWxlQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOlwiYXBwLWNvbnRhY3RcIixjb21wb25lbnQ6Q29udGFjdENvbXBvbmVudH1cclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IE5hdmVnYXRlUm91dGVzID1bXHJcbiAgICBUaWNrZXRzQ29tcG9uZW50LFxyXG4gICAgU2hhcmVDb21wb25lbnQsXHJcbiAgICBDb25uZWN0Q29tcG9uZW50LFxyXG4gICAgUHJvZmlsZUNvbXBvbmVudCxcclxuICAgIENvbnRhY3RDb21wb25lbnRcclxuXSJdfQ==