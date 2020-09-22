import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core";
import { ConfigServerService } from '../config-server.service';

@Component({
  selector: 'app-config-file',
  templateUrl: './config-file.component.html',
  styleUrls: ['./config-file.component.css']
})
export class ConfigFileComponent implements OnInit {
  @Input() interfaceKey;
  @Input() configFile;
  @Input() interfaceInfo;

  constructor() { }

  ngOnInit() {
  }

}