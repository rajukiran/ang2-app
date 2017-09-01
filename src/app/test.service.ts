import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class TestService {

  private baseUrl: string = 'http://localhost:8080/SpringSecurityOAuth2Example';

  constructor(private http : Http) {
    console.log("working")
  }

  private getHeaders(){
    // I included these headers because otherwise FireFox
    // will request text/html
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

  testMethod()  {
    return "In testMethod";
  }

}
