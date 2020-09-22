import { Component, OnInit } from '@angular/core';
import { ConfigServerService } from '../config-server.service';

@Component({
  selector: 'app-interfaces-list',
  templateUrl: './interfaces-list.component.html',
  styleUrls: ['./interfaces-list.component.css']
})
export class InterfacesListComponent implements OnInit {
  interfacesList;
  
  constructor(private configServerService: ConfigServerService) { }

  ngOnInit() {
    this.interfacesList = this.configServerService.getInterfaces();
  }

}