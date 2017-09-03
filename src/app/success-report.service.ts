import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class SuccessReportService {

  // title: string;

  private baseUrl: string = 'http://localhost:8080/SpringSecurityOAuth2Example';

  private userUrl = 'http://localhost:8080/SpringSecurityOAuth2Example/user/?access_token=477fe8ed-115b-478a-9cc7-197400e68d69';

  constructor(private http : Http) {
    // console.log("working")
  }

  private getHeaders(){
    // I included these headers because otherwise FireFox
    // will request text/html
    let headers = new Headers();
    let auth_data = 'username=my-trusted-client&password=secret';
    headers.append('cache-control', 'no-cache');
    headers.append('postman-token', '963ce2db-a3cb-15c2-7729-5a7fc88cac2c');
    headers.append('async','true');
    headers.append('crossDomain', 'true');
    return headers;
  }

  testService() {
    // console.log("In Test method")
    // let people$ = this.http.get(`${this.baseUrl}/test/`,{headers: this.getHeaders()})
    //   .toPromise()
    //   .then(this.mapResult);
      // .catch(this.handleError);
      // return people$;
      // var settings = {
      //   "async": true,
      //   "crossDomain": true,
      //   "url": "http://localhost:8080/SpringSecurityOAuth2Example/user/?access_token=abfff84f-aac2-4f1a-a576-68ddbd40323f",
      //   "method": "GET",
      //   "headers": {
      //     "cache-control": "no-cache",
      //     "postman-token": "3cbdccd7-fe25-783b-0a55-e2965b78c731"
      //   }
      // }

      console.log("In testService method")

      let getResponse = this.http.get(this.userUrl, {headers: this.getHeaders()})
        .map(this.mapResult);
      console.log(getResponse)
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
    console.log("In mapResult method")
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
