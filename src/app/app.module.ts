import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InterfacesComponent } from './interfaces/interfaces.component';
import { ConfigServerService } from './config-server.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, InterfacesComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ConfigServerService]
})
export class AppModule { }
