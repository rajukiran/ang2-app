import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class SuccessReportService {

  // title: string;

  private baseUrl: string = 'http://localhost:8080/SpringSecurityOAuth2Example';

  constructor(private http : Http) {
    // console.log("working")
  }

  private getHeaders(){
    // I included these headers because otherwise FireFox
    // will request text/html
    let headers = new Headers();
    let auth_data = 'username=my-trusted-client&password=secret';
    headers.append('Accept', 'application/json');
    headers.append('Authorization', auth_data);
    return headers;
  }

  testService() {
    // console.log("In Test method")
    let people$ = this.http.get(`${this.baseUrl}/test/`,{headers: this.getHeaders()})
      .toPromise()
      .then(this.mapResult);
      // .catch(this.handleError);
      // return people$;
  }

  testRequest() {
    let data = 'grant_type=password&username=bill&password=abc123';
    let postResponse = this.http
      .post(`${this.baseUrl}/oauth/token`, data, {headers: this.getHeaders()})
      .toPromise()
      .then(this.mapResult);
    return postResponse;
  }

  mapResult(response:Response) {
    let body = response.text();
    console.log(body)
    // this.title = body.toString;
    return body;
  }

  handleError(error: any){
    // log error
    // could be something more sofisticated
    let errorMsg = error.message || `Yikes! There was a problem with our hyperdrive device and we couldn't retrieve your data!`
    console.error(errorMsg);
    // instead of Observable we return a rejected Promise
    return Promise.reject(errorMsg);
  }

}
