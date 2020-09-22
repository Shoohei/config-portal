import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class ConfigServerService {

  constructor(private http: HttpClient) {}

  getInterfaces() {
    return this.http.get('/assets/interfaces.json');
  }

  getInterface(interfaceKey: string) {
    return this.http.get('/assets/' + interfaceKey + '.json');
  }
}