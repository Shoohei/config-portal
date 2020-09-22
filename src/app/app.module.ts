import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { ConfigServerService } from "./config-server.service";
import { InterfacesListComponent } from "./interfaces-list/interfaces-list.component";
import { InterfaceComponent } from './interface/interface.component';
import { ConfigFieldComponent } from './config-field/config-field.component';
import { NgJsonEditorModule } from 'ang-jsoneditor';


@NgModule({
  imports: [BrowserModule, HttpClientModule, FormsModule, NgJsonEditorModule,
  RouterModule.forRoot([
      { path: "", component: InterfacesListComponent },
      { path: "interface/:interface", component: InterfaceComponent }
    ])],
  declarations: [AppComponent, InterfacesListComponent, InterfaceComponent, ConfigFileComponent, ConfigFieldComponent],
  bootstrap: [AppComponent],
  providers: [ConfigServerService]
})
export class AppModule {}
