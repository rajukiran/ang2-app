import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
  // server = environment.production ? 'http://foodapi4demo.azurewebsites.net/' : 'http://localhost:5000/';
    public Server = 'http://localhost:8000/';
    public ApiUrl = 'SpringSecurityOAuth2Example/';
    public ServerWithApiUrl = this.Server + this.ApiUrl;
    public authConfig = {
            CLIENT_ID: 'my-trusted-client',
            GRANT_TYPE: 'password',
            PASSWORD: 'secret',
            SCOPE: 'WebAPI'
        };
    public loginUrl = this.ServerWithApiUrl + 'oauth/token';
}
