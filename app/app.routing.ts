import { TicketsComponent } from "./pages/tickets/tickets.component";
import { ShareComponent } from "./pages/share/share.component";
import { ConnectComponent } from "./pages/connect/connect.component";

export const Routes =[
    {path:"",component:TicketsComponent},
    {path:"app-share",component:ShareComponent},
    {path:"app-connect",component:ConnectComponent}
]

export const NavegateRoutes =[
    TicketsComponent,
    ShareComponent,
    ConnectComponent
]