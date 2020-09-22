import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
// import { JsonEditorModule } from 'ng2-json-editor';
// import { NgJsonEditorModule } from 'ang-jsoneditor';

import { AppComponent } from "./app.component";
import { ConfigServerService } from "./config-server.service";
import { InterfacesListComponent } from "./interfaces-list/interfaces-list.component";
import { InterfaceComponent } from "./interface/interface.component";
import { ConfigFileComponent } from "./config-file/config-file.component";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    // JsonEditorModule,
    // NgJsonEditorModule,
    RouterModule.forRoot([
      { path: "", component: InterfacesListComponent },
      { path: "interface/:interface", component: InterfaceComponent }
    ])
  ],
  declarations: [
    AppComponent,
    InterfacesListComponent,
    InterfaceComponent,
    ConfigFileComponent
  ],
  bootstrap: [AppComponent],
  providers: [ConfigServerService]
})
export class AppModule {}
