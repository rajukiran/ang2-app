import { Component, OnInit } from '@angular/core';
import { SuccessReportService } from '../success-report.service';
import { DataService, CustomInterceptor } from '../app.api';
import { ToasterService } from 'angular2-toaster/angular2-toaster';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { AuthenticationService } from '../core/services/authentication.service';
import { Configuration } from '../app.configuration';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-successreport',
  templateUrl: './successreport.component.html',
  styleUrls: ['./successreport.component.css'],
  providers: [SuccessReportService, DataService, CustomInterceptor, ToasterService, SlimLoadingBarService, AuthenticationService, Configuration]
})
export class SuccessreportComponent implements OnInit {

  public title: string;

  public message: string;
  public values: any[];

  public usernameForBody: string;
  public passwordForBody: string;
  public body: string;
//   public clientId: string;

  public grantType: string;
  // const grantType = 'grant_type=' + this._configuration.authConfig.GRANT_TYPE;
  // // const password = 'password=' + this.configuration.authConfig.PASSWORD;
  // const usernameForBody = 'username=' + username;
  // const passwordForBody = 'password=' + password;
  // const scope = 'scope=' + this._configuration.authConfig.SCOPE;
  //
  // const body = clientId.concat('&', grantType, '&', usernameForBody, '&', passwordForBody);
  //
  // const url = this._configuration.ServerWithApiUrl+_configuration.loginUrl;

  constructor(
    private successReportService: SuccessReportService,
    private _configuration: Configuration,
    private _dataService: DataService,
    private _toasterService: ToasterService,
    private _slimLoadingBarService: SlimLoadingBarService,
    private _authenticationService: AuthenticationService) {
      this.message = 'Hello from Success Report Component';

    //   this.clientId = 'client_id=' + this._configuration.authConfig.CLIENT_ID;
      this.grantType = 'grant_type=' + this._configuration.authConfig.GRANT_TYPE;
      this.usernameForBody = 'username=' + 'bill';
      this.passwordForBody = 'password=' + 'abc123';
      this.body = '&' + this.grantType + '&' + this.usernameForBody + '&' + this.passwordForBody;
    }

  ngOnInit() {
    this.title = 'Working';
    // this.username = 'bill';
    // this.password = 'abc123';
    this._slimLoadingBarService.start();

        this._dataService
            .getAll<any[]>()
            .subscribe((data: any[]) => this.values = data,
            error => () => {
                // this._toasterService.pop('error', 'Damn', 'Something went wrong...');
                console.log('Something went wrong...');
            },
            () => {
                // this._toasterService.pop('success', 'Complete', 'Getting all values complete');
                console.log('Getting all values complete');
                console.log(this.values);
                this._slimLoadingBarService.complete();
            });
            // this.test('null','bill','abc123');
      // this._authenticationService.loginUser(this.username, this.password);
  }

//   test() {
//       console.log(this._configuration.loginUrl);
//       console.log(this.body)
//     this._dataService
//         .post<any[]>(this._configuration.loginUrl, this.body)
//         .subscribe((data: any[]) => this.values = data,
//         error => () => {
//             // this._toasterService.pop('error', 'Damn', 'Something went wrong...');
//             console.log('Something went wrong...');
//         },
//         () => {
//             // this._toasterService.pop('success', 'Complete', 'Getting all values complete');
//             console.log('Getting all values complete');
//             console.log(this.values);
//             // this._slimLoadingBarService.complete();
//         });
//   }
}
