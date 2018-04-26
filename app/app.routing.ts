import { TicketsComponent } from "./pages/tickets/tickets.component";
import { ShareComponent } from "./pages/share/share.component";
import { ConnectComponent } from "./pages/connect/connect.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { ContactComponent } from "./pages/contact/contact.component";

export const Routes =[
    {path:"",component:TicketsComponent},
    {path:"app-share",component:ShareComponent},
    {path:"app-connect",component:ConnectComponent},
    {path:"app-profile",component:ProfileComponent},
    {path:"app-contact",component:ContactComponent}
]

export const NavegateRoutes =[
    TicketsComponent,
    ShareComponent,
    ConnectComponent,
    ProfileComponent,
    ContactComponent
]