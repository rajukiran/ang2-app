import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Rx';
import { Token } from '../../models/token';
import { Configuration } from '../../app.configuration';


@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient,
    private router: Router,
    private configuration: Configuration) {
      // this.loginUser('bill','abc123');
  }

  loginUser(username: string, password: string): Observable<Token> {
        // this.username = 'bill';
        // this.password = 'abc123';
        const clientId = 'client_id=' + this.configuration.authConfig.CLIENT_ID;
        const grantType = 'grant_type=' + this.configuration.authConfig.GRANT_TYPE;
        // const password = 'password=' + this.configuration.authConfig.PASSWORD;
        const usernameForBody = 'username=' + username;
        const passwordForBody = 'password=' + password;
        const scope = 'scope=' + this.configuration.authConfig.SCOPE;

        const body = clientId.concat('&', grantType, '&', usernameForBody, '&', passwordForBody);

        const options = {
            headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        };

        console.log('All are set ready to execute post call');

        return Observable.create((observer: Observer<Token>) => {
          // console.log('working')
            this.http.post<Token>(this.configuration.ServerWithApiUrl + 'oauth/token', body, options)
                .subscribe((tokenData: Token) => {
                    // this.currentUserService.token = tokenData.access_token;
                    // this.currentUserService.username = username;
                    // observer.next(tokenData);
                    console.log("Inside of create")
                    console.log(tokenData.access_token)
                }, (error) => observer.error(error),
                () => observer.complete());
        });
    }

}
