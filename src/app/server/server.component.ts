// must import component from angular core to let angular know this is a component.
import { Component } from "@angular/core";

/* We assign a component decorator to make this file a component. We then pass into
our component decorator a list of arguments:
1) selector -> this is the name of the tag we will use to inject into app HTML
2) templateUrl -> this is a relative path to the html of THIS specific component
*/
@Component({
  selector: "app-server",
  templateUrl: "../server/server.component.html"
})
export class ServerComponent {}

// Once we export the component we must add it to the declorations array in the app modules file.
