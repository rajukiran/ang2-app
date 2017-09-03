// import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Configuration } from './app.configuration';
import { CurrentUserService } from './core/services/current-user.service';

@Injectable()
export class DataService {

    private actionUrl: string;

    private baseUrl: string;

    private token: string;

    constructor(private http: HttpClient, private _configuration: Configuration, private _currentUserService: CurrentUserService) {
        this.actionUrl = _configuration.Server;
        // this.baseUrl = _configuration.ServerWithAppiUrl;
        this.token = _currentUserService.token;
    }

    public getAll<T>(): Observable<T> {
        return this.http.get<T>(this.actionUrl);
    }

    public getSingle<T>(id: number): Observable<T> {
        return this.http.get<T>(this.actionUrl + id);
    }

    public add<T>(itemName: string): Observable<T> {
        const toAdd = JSON.stringify({ ItemName: itemName });

        return this.http.post<T>(this.actionUrl, toAdd);
    }

    public update<T>(id: number, itemToUpdate: any): Observable<T> {
        return this.http
            .put<T>(this.actionUrl + id, JSON.stringify(itemToUpdate));
    }

    public delete<T>(id: number): Observable<T> {
        return this.http.delete<T>(this.actionUrl + id);
    }

    public post<T>(url: string, body: string): Observable<T> {
        // const expandedHeaders = this.prepareHeader(headers);
        return this.http.post<T>(url, body);
    }

    private prepareHeader(headers: HttpHeaders | null): object {
        headers = headers || new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json');
        headers = headers.set('Accept', 'application/json');
        // headers = headers.set('Authorization', 'Basic' + 'bXktdHJ1c3RlZC1jbGllbnQ6c2VjcmV0');
          return {
              headers: headers
          };
    }
}


@Injectable()
export class CustomInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // get the token from a service
        // const token: string = this.token;
        //
        // // add it if we have one
        // if (token) {
        //     req = req.clone({ headers: req.headers.set('Authorization', 'Basic ' + token) });
        // }

        if (!req.headers.has('Content-Type')) {
            req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
        }
        // req = req.clone('Authorization', 'Basic' + 'bXktdHJ1c3RlZC1jbGllbnQ6c2VjcmV0');
        req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
        console.log(JSON.stringify(req.headers));
        return next.handle(req);
    }
}
