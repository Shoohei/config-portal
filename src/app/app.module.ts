import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { ConfigServerService } from "./config-server.service";
import { InterfacesListComponent } from "./interfaces-list/interfaces-list.component";

@NgModule({
  imports: [BrowserModule, HttpClientModule, FormsModule,
  RouterModule.forRoot([
      { path: "", component: InterfacesListComponent }
    ])],
  declarations: [AppComponent, InterfacesListComponent],
  bootstrap: [AppComponent],
  providers: [ConfigServerService]
})
export class AppModule {}
