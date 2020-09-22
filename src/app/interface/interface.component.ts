import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ConfigServerService } from "../config-server.service";

@Component({
  selector: "app-interface",
  templateUrl: "./interface.component.html",
  styleUrls: ["./interface.component.css"]
})
export class InterfaceComponent implements OnInit {
  interfaceKey;
  interfaceInfo;
  constructor(
    private route: ActivatedRoute,
    private configServerService: ConfigServerService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.interfaceKey = params.get("interface");
      this.interfaceInfo = this.configServerService.getInterface(this.interfaceKey);
    });
  }
}
